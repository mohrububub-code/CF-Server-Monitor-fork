import assert from 'node:assert/strict'
import test from 'node:test'
import {
  calculateMonthlyCost,
  formatMonthlyCost,
  formatRemainingDaysLabel,
  getExpirationSummary,
  normalizeDateOnly,
  normalizeProvider
} from '../src/frontend/utils/server.js'

test('calculateMonthlyCost & formatMonthlyCost 计算准确', () => {
  const jp = { price: '248.00', currency: '¥', billing_cycle: 'year' }
  const res = calculateMonthlyCost(jp)
  assert.equal(res.formattedAmount, '20.67')
  assert.equal(formatMonthlyCost(jp, 'zh'), '¥20.67/月')

  const sg = { price: '24.00', currency: '¥', billing_cycle: 'month' }
  assert.equal(formatMonthlyCost(sg, 'zh'), '¥24.00/月')

  const empty = { price: '', currency: '¥', billing_cycle: 'year' }
  assert.equal(calculateMonthlyCost(empty), null)
})

test('getExpirationSummary 四色状态与剩余天数、进度条准确', () => {
  const now = new Date(2026, 10, 24, 12, 0, 0).getTime() // 2026-11-24

  // >30 天 -> 绿色
  const s365 = getExpirationSummary({ purchase_date: '2026-11-24', expire_date: '2027-11-24' }, now)
  assert.equal(s365.remainingDays, 365)
  assert.equal(s365.level, 'safe')
  assert.equal(s365.color, '#00d4aa')
  assert.equal(s365.hasProgress, true)
  assert.equal(s365.usedPercent, 0)
  assert.equal(s365.remainingPercent, 100)
  assert.equal(formatRemainingDaysLabel(s365, {}, 'zh'), '剩余 365 天')

  // 8~30 天 -> 黄色
  const s27 = getExpirationSummary({ purchase_date: '2026-11-21', expire_date: '2026-12-21' }, now)
  assert.equal(s27.remainingDays, 27)
  assert.equal(s27.level, 'warning')
  assert.equal(s27.color, '#f0c040')
  assert.equal(s27.hasProgress, true)
  assert.equal(s27.usedPercent, 10)
  assert.equal(s27.remainingPercent, 90)

  // 1~7 天 -> 橙色
  const s5 = getExpirationSummary({ purchase_date: '2026-10-29', expire_date: '2026-11-29' }, now)
  assert.equal(s5.remainingDays, 5)
  assert.equal(s5.level, 'urgent')
  assert.equal(s5.color, '#ff8c42')

  // 到期当天 -> 红色
  const s0 = getExpirationSummary({ purchase_date: '2025-11-24', expire_date: '2026-11-24' }, now)
  assert.equal(s0.remainingDays, 0)
  assert.equal(s0.level, 'expired')
  assert.equal(s0.color, '#f85149')
  assert.equal(s0.usedPercent, 100)
  assert.equal(formatRemainingDaysLabel(s0, {}, 'zh'), '今日到期')

  // 已过期 -> 红色
  const sNeg = getExpirationSummary({ purchase_date: '2025-11-01', expire_date: '2026-11-21' }, now)
  assert.equal(sNeg.remainingDays, -3)
  assert.equal(sNeg.level, 'expired')
  assert.equal(sNeg.color, '#f85149')
  assert.equal(formatRemainingDaysLabel(sNeg, {}, 'zh'), '已过期 3 天')

  // 无购买日期时不伪造进度条
  const noPurchase = getExpirationSummary({ expire_date: '2026-12-18' }, now)
  assert.equal(noPurchase.remainingDays, 24)
  assert.equal(noPurchase.level, 'warning')
  assert.equal(noPurchase.hasProgress, false)
})

test('normalizeProvider 与 normalizeDateOnly 边界校验', () => {
  assert.equal(normalizeProvider('  DataWave \n '), 'DataWave')
  assert.equal(normalizeDateOnly('2026-11-24 17:31:51'), '2026-11-24')
  assert.equal(normalizeDateOnly('2026-02-30'), '')
  assert.equal(normalizeDateOnly(''), '')
})
