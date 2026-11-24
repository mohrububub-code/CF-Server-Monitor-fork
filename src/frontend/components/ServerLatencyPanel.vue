<template>
  <div v-if="showThreeNetDetails && hasThreeNetDetails" :class="['three-net-panel', { 'three-net-panel-ring': variant === 'ring' }]">
    <div class="line-family-switch" role="group" :aria-label="zh ? '线路协议' : 'Line protocol'">
      <button v-for="(label, key) in modes" :key="key" type="button" :aria-pressed="mode === key" @click.stop="mode = key">{{ label }}</button>
    </div>
    <button class="legacy-lines-toggle" type="button" :aria-expanded="showLegacy" @click.stop="showLegacy = !showLegacy">
      {{ zh ? '旧版三网记录（未记录协议）' : 'Legacy history (protocol unrecorded)' }}
    </button>
    <section v-for="section in sections" :key="section.key" class="line-family-section" :aria-label="section.label">
      <h3 v-if="mode === 'dual' && section.key !== 'legacy'" class="line-family-label">{{ section.label }}</h3>
      <div class="three-net-columns">
      <div class="three-net-column" aria-label="Ping">
        <div class="three-net-row" v-for="row in section.rows" :key="'ping-' + row.key">
          <div class="three-net-head">
            <span class="three-net-name">{{ row.label }}</span>
            <strong class="three-net-value" :style="{ color: row.status && row.status !== 'ok' ? statusColor(row.status) : getPingColor(row.latestPing) }">{{ row.status && row.status !== 'ok' ? statusText(row.status) : formatPingValue(row.latestPing) }}</strong>
          </div>
          <div class="three-net-buckets">
            <span
              v-for="(point, index) in row.points"
              :key="index"
              class="three-net-bucket"
              :data-tooltip="point.pingTooltip"
            >
              <span class="three-net-bucket-fill" :style="{ height: point.pingHeight + '%', background: point.pingColor, opacity: point.pingOpacity }"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="three-net-column" aria-label="Loss">
        <div class="three-net-row" v-for="row in section.rows" :key="'loss-' + row.key">
          <div class="three-net-head three-net-head-loss">
            <strong class="three-net-value" :style="{ color: row.averageLoss == null && row.status ? statusColor(row.status) : getLossColor(row.averageLoss) }">{{ row.averageLoss == null && row.status ? '—' : formatLossValue(row.averageLoss) }}</strong>
          </div>
          <div class="three-net-buckets">
            <span
              v-for="(point, index) in row.points"
              :key="index"
              class="three-net-bucket"
              :data-tooltip="point.lossTooltip"
            >
              <span class="three-net-bucket-fill" :style="{ height: point.lossHeight + '%', background: point.lossColor, opacity: point.lossOpacity }"></span>
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  <div v-else-if="hasPingData" :class="variant === 'ring' ? 'server-card-ping-row' : 'ping-panel'">
    <template v-if="variant === 'ring'">
      <span class="server-card-ping-chip" v-for="p in pingList.filter(x => x.value !== 0).slice(0, 4)" :key="p.label">
        <span class="server-card-ping-label">{{ p.label }}</span>
        <span class="server-card-ping-val" :style="{ color: getPingColor(p.value) }">{{ isPingValid(p.value) ? p.value + 'ms' : timeoutText }}</span>
      </span>
    </template>
    <template v-else>
      <div class="ping-item" v-for="p in pingList.filter(x => x.value !== 0).slice(0, 4)" :key="p.label">
        <span class="ping-label">{{ p.label }}</span>
        <span class="ping-value" :style="{ color: getPingColor(p.value) }">{{ !isPingValid(p.value) ? timeoutText : p.value + 'ms' }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { currentLang, useTranslation } from '../utils/i18n'

const props = defineProps({
  variant: {
    type: String,
    default: 'bar',
    validator: value => ['bar', 'ring'].includes(value)
  },
  showThreeNetDetails: {
    type: Boolean,
    default: false
  },
  hasThreeNetDetails: {
    type: Boolean,
    default: false
  },
  threeNetDetails: {
    type: Array,
    default: () => []
  },
  server: {
    type: Object,
    required: true
  },
  online: {
    type: Boolean,
    required: true
  },
  hasPingData: {
    type: Boolean,
    default: false
  },
  pingList: {
    type: Array,
    default: () => []
  },
  timeoutText: {
    type: String,
    required: true
  },
  getPingColor: {
    type: Function,
    required: true
  },
  getLossColor: {
    type: Function,
    required: true
  },
  formatPingValue: {
    type: Function,
    required: true
  },
  formatLossValue: {
    type: Function,
    required: true
  },
  isPingValid: {
    type: Function,
    required: true
  }
})

const trans = useTranslation()
const zh = computed(() => currentLang.value.startsWith('zh'))
const mode = ref('v4')
const showLegacy = ref(false)
const modes = computed(() => ({ v4: 'IPv4', v6: 'IPv6', dual: zh.value ? '双栈对比' : 'Compare' }))
const statuses = {
  unsupported: ['不支持', 'Unsupported'],
  unreachable: ['不可达', 'Unreachable'],
  timeout: ['超时', 'Timed out'],
  no_target: ['目标不可用', 'No target'],
  dns_error: ['解析失败', 'DNS failed'],
  refused: ['连接拒绝', 'Refused'],
  error: ['探测失败', 'Probe failed'],
  missing: ['暂无样本', 'No sample'],
  offline: ['离线', 'Offline']
}
const statusText = status => statuses[status]?.[zh.value ? 0 : 1] ?? statuses.missing[zh.value ? 0 : 1]
const statusColor = status => ['missing', 'no_target', 'unsupported'].includes(status)
  ? 'var(--text-secondary)'
  : 'var(--accent-red)'

const sections = computed(() => {
  const history = new Map((props.server.line_history || []).map(point => [point.ts, point]))
  const timestamps = props.server.ping?.length
    ? props.server.ping.map(point => point.ts)
    : Array.from({ length: props.threeNetDetails[0]?.points.length ?? 20 }, () => null)
  const families = mode.value === 'dual' ? ['v4', 'v6'] : [mode.value]
  const result = families.map(family => ({
    key: family,
    label: modes.value[family],
    rows: [
      ['ct', trans.value.pingCt || 'CT'],
      ['cu', trans.value.pingCu || 'CU'],
      ['cm', trans.value.pingCm || 'CM']
    ].map(([key, label]) => {
      const latest = props.online ? props.server.line_probes?.[family]?.[key] : null
      return {
        key,
        label,
        status: latest?.status || (props.online ? 'missing' : 'offline'),
        latestPing: latest?.ping,
        averageLoss: latest?.loss,
        points: timestamps.map(ts => {
          const sample = history.get(ts)?.[family]?.[key]
          const time = ts ? new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' · ' : ''
          const fallback = statusText(sample?.status || 'missing')
          return {
            pingHeight: sample?.ping != null ? 84 : 25,
            lossHeight: sample?.loss != null ? 84 : 25,
            pingColor: sample?.ping != null ? props.getPingColor(sample.ping) : statusColor(sample?.status || 'missing'),
            lossColor: sample?.loss != null ? props.getLossColor(sample.loss) : statusColor(sample?.status || 'missing'),
            pingOpacity: sample ? 0.94 : 0.28,
            lossOpacity: sample ? 0.94 : 0.28,
            pingTooltip: time + (sample?.ping != null ? props.formatPingValue(sample.ping) : fallback),
            lossTooltip: time + (sample?.loss != null ? props.formatLossValue(sample.loss) : fallback)
          }
        })
      }
    })
  }))
  if (showLegacy.value) result.push({ key: 'legacy', label: zh.value ? '旧版三网记录' : 'Legacy history', rows: props.threeNetDetails })
  return result
})
</script>

<style scoped>
.line-family-switch {
  display: flex;
  gap: 4px;
}

.line-family-switch button, .legacy-lines-toggle {
  border: 1px solid transparent;
  border-radius: 5px;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  padding: 2px 6px;
}

.line-family-switch button[aria-pressed='true'] {
  border-color: var(--accent-blue);
  color: var(--accent-blue);
}

.line-family-section + .line-family-section {
  margin-top: 8px;
}

.line-family-label {
  margin: 0 0 4px;
  font: inherit;
  font-size: 11px;
  color: var(--text-secondary);
}
</style>
