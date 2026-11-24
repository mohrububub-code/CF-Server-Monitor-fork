export function isDisabledProbeMetric(value) {
  return value === false || value === 'false';
}

export const BILLING_CYCLES = Object.freeze([
  { value: 'month', months: 1, labelZh: '月付', labelEn: 'Monthly', shortLabelZh: '月', shortLabelEn: 'M', labelEs: 'Mensual', shortLabelEs: 'mes', labelZhTw: '月付', shortLabelZhTw: '月' },
  { value: 'quarter', months: 3, labelZh: '季付', labelEn: 'Quarterly', shortLabelZh: '季', shortLabelEn: 'Q', labelEs: 'Trimestral', shortLabelEs: 'trim', labelZhTw: '季付', shortLabelZhTw: '季' },
  { value: 'half_year', months: 6, labelZh: '半年付', labelEn: 'Half-yearly', shortLabelZh: '半年', shortLabelEn: 'HY', labelEs: 'Semestral', shortLabelEs: 'sem', labelZhTw: '半年付', shortLabelZhTw: '半年' },
  { value: 'year', months: 12, labelZh: '年付', labelEn: 'Yearly', shortLabelZh: '年', shortLabelEn: 'Y', labelEs: 'Anual', shortLabelEs: 'año', labelZhTw: '年付', shortLabelZhTw: '年' },
  { value: 'two_years', months: 24, labelZh: '两年付', labelEn: 'Two years', shortLabelZh: '2年', shortLabelEn: '2Y', labelEs: 'Dos años', shortLabelEs: '2 años', labelZhTw: '兩年付', shortLabelZhTw: '2年' },
  { value: 'three_years', months: 36, labelZh: '三年付', labelEn: 'Three years', shortLabelZh: '3年', shortLabelEn: '3Y', labelEs: 'Tres años', shortLabelEs: '3 años', labelZhTw: '三年付', shortLabelZhTw: '3年' },
  { value: 'four_years', months: 48, labelZh: '四年付', labelEn: 'Four years', shortLabelZh: '4年', shortLabelEn: '4Y', labelEs: 'Cuatro años', shortLabelEs: '4 años', labelZhTw: '四年付', shortLabelZhTw: '4年' },
  { value: 'five_years', months: 60, labelZh: '五年付', labelEn: 'Five years', shortLabelZh: '5年', shortLabelEn: '5Y', labelEs: 'Cinco años', shortLabelEs: '5 años', labelZhTw: '五年付', shortLabelZhTw: '5年' }
]);

export const CURRENCY_OPTIONS = Object.freeze([
  { symbol: '$', nameZh: '美元', nameEn: 'US Dollar', nameEs: 'Dólar estadounidense' },
  { symbol: '¥', nameZh: '人民币', nameEn: 'Chinese Yuan', nameEs: 'Yuan chino' },
  { symbol: '€', nameZh: '欧元', nameEn: 'Euro', nameEs: 'Euro' },
  { symbol: '£', nameZh: '英镑', nameEn: 'British Pound', nameEs: 'Libra esterlina' },
  { symbol: '¥JPY', nameZh: '日元', nameEn: 'Japanese Yen', nameEs: 'Yen japonés' },
  { symbol: 'HK$', nameZh: '港币', nameEn: 'Hong Kong Dollar', nameEs: 'Dólar de Hong Kong' },
  { symbol: 'A$', nameZh: '澳元', nameEn: 'Australian Dollar', nameEs: 'Dólar australiano' },
  { symbol: 'C$', nameZh: '加拿大元', nameEn: 'Canadian Dollar', nameEs: 'Dólar canadiense' },
  { symbol: 'S$', nameZh: '新加坡元', nameEn: 'Singapore Dollar', nameEs: 'Dólar de Singapur' },
  { symbol: 'NZ$', nameZh: '新西兰元', nameEn: 'New Zealand Dollar', nameEs: 'Dólar neozelandés' },
  { symbol: '₣', nameZh: '瑞士法郎', nameEn: 'Swiss Franc', nameEs: 'Franco suizo' },
  { symbol: '₩', nameZh: '韩元', nameEn: 'Korean Won', nameEs: 'Won surcoreano' },
  { symbol: '₹', nameZh: '印度卢比', nameEn: 'Indian Rupee', nameEs: 'Rupia india' },
  { symbol: '฿', nameZh: '泰铢', nameEn: 'Thai Baht', nameEs: 'Baht tailandés' },
  { symbol: '₫', nameZh: '越南盾', nameEn: 'Vietnamese Dong', nameEs: 'Dong vietnamita' },
  { symbol: '₱', nameZh: '菲律宾比索', nameEn: 'Philippine Peso', nameEs: 'Peso filipino' },
  { symbol: 'Rp', nameZh: '印尼盾', nameEn: 'Indonesian Rupiah', nameEs: 'Rupia indonesia' },
  { symbol: 'RM', nameZh: '马来西亚林吉特', nameEn: 'Malaysian Ringgit', nameEs: 'Ringgit malayo' },
  { symbol: '₺', nameZh: '土耳其里拉', nameEn: 'Turkish Lira', nameEs: 'Lira turca' },
  { symbol: '₪', nameZh: '以色列新谢克尔', nameEn: 'Israeli Shekel', nameEs: 'Séquel israelí' },
  { symbol: '৳', nameZh: '孟加拉塔卡', nameEn: 'Bangladeshi Taka', nameEs: 'Taka bangladesí' },
  { symbol: '₨', nameZh: '巴基斯坦卢比', nameEn: 'Pakistani Rupee', nameEs: 'Rupia pakistaní' },
  { symbol: 'LKR', nameZh: '斯里兰卡卢比', nameEn: 'Sri Lankan Rupee', nameEs: 'Rupia de Sri Lanka' },
  { symbol: '₮', nameZh: '蒙古图格里克', nameEn: 'Mongolian Tugrik', nameEs: 'Tugrik mongol' },
  { symbol: '₽', nameZh: '卢布', nameEn: 'Russian Ruble', nameEs: 'Rublo ruso' },
  { symbol: 'R$', nameZh: '巴西雷亚尔', nameEn: 'Brazilian Real', nameEs: 'Real brasileño' },
  { symbol: 'kr', nameZh: '克朗', nameEn: 'Krona (SEK/NOK/DKK)', nameEs: 'Corona (SEK/NOK/DKK)' },
  { symbol: 'zł', nameZh: '波兰兹罗提', nameEn: 'Polish Zloty', nameEs: 'Esloti polaco' },
  { symbol: '₴', nameZh: '乌克兰格里夫纳', nameEn: 'Ukrainian Hryvnia', nameEs: 'Grivna ucraniana' },
  { symbol: '₸', nameZh: '哈萨克坦戈', nameEn: 'Kazakhstani Tenge', nameEs: 'Tenge kazajo' },
  { symbol: 'R', nameZh: '南非兰特', nameEn: 'South African Rand', nameEs: 'Rand sudafricano' },
  { symbol: '₦', nameZh: '尼日利亚奈拉', nameEn: 'Nigerian Naira', nameEs: 'Naira nigeriano' },
  { symbol: 'EGP', nameZh: '埃及镑', nameEn: 'Egyptian Pound', nameEs: 'Libra egipcia' },
  { symbol: 'د.إ', nameZh: '阿联酋迪拉姆', nameEn: 'UAE Dirham', nameEs: 'Dírham de los EAU' },
  { symbol: '﷼', nameZh: '沙特里亚尔', nameEn: 'Saudi Riyal', nameEs: 'Riyal saudí' },
  { symbol: 'Q', nameZh: '危地马拉格查尔', nameEn: 'Guatemalan Quetzal', nameEs: 'Quetzal guatemalteco' }
]);

const CYCLE_ALIASES = new Map([
  ['月', 'month'],
  ['monthly', 'month'],
  ['month', 'month'],
  ['mo', 'month'],
  ['季', 'quarter'],
  ['季度', 'quarter'],
  ['quarter', 'quarter'],
  ['quarterly', 'quarter'],
  ['半年', 'half_year'],
  ['halfyear', 'half_year'],
  ['half_year', 'half_year'],
  ['half-yearly', 'half_year'],
  ['年', 'year'],
  ['一年', 'year'],
  ['year', 'year'],
  ['yearly', 'year'],
  ['annual', 'year'],
  ['两年', 'two_years'],
  ['二年', 'two_years'],
  ['two_years', 'two_years'],
  ['2 years', 'two_years'],
  ['三年', 'three_years'],
  ['three_years', 'three_years'],
  ['3 years', 'three_years'],
  ['四年', 'four_years'],
  ['four_years', 'four_years'],
  ['4 years', 'four_years'],
  ['五年', 'five_years'],
  ['five_years', 'five_years'],
  ['5 years', 'five_years']
]);

const NORMALIZED_CURRENCIES = new Set(CURRENCY_OPTIONS.map(item => item.symbol));

export function normalizePrice(value) {
  if (value === null || value === undefined) return '';

  const raw = String(value).trim();
  if (!raw) return '';

  const numberText = raw.match(/-?[\d.,]+/)?.[0];
  if (!numberText) return '';

  const normalized = numberText.replace(/,/g, '');
  const num = Number.parseFloat(normalized);
  if (!Number.isFinite(num)) return '';
  if (num === -1) return '-1';
  if (num < 0) return '';

  return num.toFixed(2);
}

export function isFreePrice(value) {
  const price = normalizePrice(value);
  return price === '-1' || price === '0.00';
}

export function normalizeCurrency(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';

  const normalized = raw === '￥' ? '¥' : raw;
  for (const item of CURRENCY_OPTIONS) {
    if (item.symbol.length > 1 && normalized.startsWith(item.symbol)) {
      return item.symbol;
    }
  }

  const symbol = normalized[0];
  return NORMALIZED_CURRENCIES.has(symbol) ? symbol : '';
}

export function detectCurrencySymbol(value) {
  const raw = String(value || '');
  if (!raw) return '';
  if (raw.includes('￥')) return '¥';

  for (const item of CURRENCY_OPTIONS) {
    if (item.symbol.length > 1 && raw.includes(item.symbol)) {
      return item.symbol;
    }
  }

  return CURRENCY_OPTIONS.find(item => item.symbol.length === 1 && raw.includes(item.symbol))?.symbol || '';
}

export function detectBillingCycle(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';

  if (/五年|5\s*(y|yr|yrs|year|years)/i.test(raw)) return 'five_years';
  if (/四年|4\s*(y|yr|yrs|year|years)/i.test(raw)) return 'four_years';
  if (/三年|3\s*(y|yr|yrs|year|years)/i.test(raw)) return 'three_years';
  if (/(两年|二年)|2\s*(y|yr|yrs|year|years)/i.test(raw)) return 'two_years';
  if (/半年|half[-_\s]?year/i.test(raw)) return 'half_year';
  if (/季|quarter|\/q\b/i.test(raw)) return 'quarter';
  if (/年|annual|year|yr\b|\/y\b/i.test(raw)) return 'year';
  if (/月|monthly|month|mo\b|\/m\b/i.test(raw)) return 'month';

  return '';
}

export function normalizeBillingCycle(value) {
  const raw = String(value || '').trim();
  if (!raw) return 'month';

  const direct = BILLING_CYCLES.find(item => item.value === raw);
  if (direct) return direct.value;

  return CYCLE_ALIASES.get(raw.toLowerCase()) || 'month';
}

export function getBillingCycleOption(value) {
  const normalized = normalizeBillingCycle(value);
  return BILLING_CYCLES.find(item => item.value === normalized) || BILLING_CYCLES[0];
}

export function isEnabledFlag(value) {
  return value === true || value === 1 || value === '1' || value === 'true';
}

function parseDateOnly(value) {
  const match = String(value || '').trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

function daysInUtcMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function toDateString(year, month, day) {
  return [
    String(year).padStart(4, '0'),
    String(month).padStart(2, '0'),
    String(day).padStart(2, '0')
  ].join('-');
}

function addBillingCycleToDate(dateString, billingCycle) {
  const parsed = parseDateOnly(dateString);
  if (!parsed) return String(dateString || '').trim();

  const monthsToAdd = getBillingCycleOption(billingCycle).months;
  const zeroBasedMonth = parsed.month - 1 + monthsToAdd;
  const year = parsed.year + Math.floor(zeroBasedMonth / 12);
  const month = ((zeroBasedMonth % 12) + 12) % 12 + 1;
  const day = Math.min(parsed.day, daysInUtcMonth(year, month));

  return toDateString(year, month, day);
}

function utcDateStringWithOffset(now = Date.now(), offsetDays = 0) {
  const date = new Date(now + (Number(offsetDays) || 0) * 86400000);
  return toDateString(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
}

export function renewExpireDateIfNeeded(expireDate, billingCycle, autoRenewal, now = Date.now(), renewBeforeDays = 0) {
  const original = String(expireDate || '').trim();
  if (!original || !parseDateOnly(original) || !isEnabledFlag(autoRenewal)) {
    return { expire_date: original, renewed: false };
  }

  let nextDate = original;
  const renewalDate = utcDateStringWithOffset(now, renewBeforeDays);
  let renewed = false;
  let guard = 0;

  while (nextDate <= renewalDate && guard < 1200) {
    nextDate = addBillingCycleToDate(nextDate, billingCycle);
    renewed = true;
    guard++;
  }

  return { expire_date: nextDate, renewed };
}

const OPTION_FIELD_LANGUAGE_SUFFIX = Object.freeze({ zh: 'Zh', 'zh-TW': 'ZhTw', en: 'En', es: 'Es' });

export function getLocalizedOptionField(option, field, lang) {
  return option?.[`${field}${OPTION_FIELD_LANGUAGE_SUFFIX[lang] || 'En'}`] ?? option?.[`${field}En`] ?? '';
}

const FREE_PRICE_LABELS = Object.freeze({ zh: '免费', 'zh-TW': '免費', en: 'Free', es: 'Gratis' });

export function formatBillingPrice(server, lang = 'zh') {
  const price = normalizePrice(server?.price);
  if (!price) return '';
  if (isFreePrice(price)) return FREE_PRICE_LABELS[lang] || FREE_PRICE_LABELS.en;

  const currency = normalizeCurrency(server?.currency || detectCurrencySymbol(server?.price));
  const cycle = getBillingCycleOption(detectBillingCycle(server?.price) || server?.billing_cycle);
  const cycleLabel = getLocalizedOptionField(cycle, 'shortLabel', lang);

  return `${currency}${price}/${cycleLabel}`;
}

export function normalizeProvider(value) {
  return String(value ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, 64);
}

export function normalizeDateOnly(value) {
  const raw = String(value ?? '').trim();
  if (!raw) return '';
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return '';
  const candidate = `${match[1]}-${match[2]}-${match[3]}`;
  return parseDateOnly(candidate) ? candidate : '';
}

export function calculateMonthlyCost(server) {
  const price = normalizePrice(server?.price);
  if (!price || isFreePrice(price)) return null;
  const amount = Number.parseFloat(price);
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const currency = normalizeCurrency(server?.currency || detectCurrencySymbol(server?.price)) || '¥';
  const cycle = getBillingCycleOption(detectBillingCycle(server?.price) || server?.billing_cycle);
  const months = Number(cycle?.months) || 1;
  const monthly = amount / months;

  return {
    currency,
    months,
    amount: monthly,
    formattedAmount: monthly.toFixed(2)
  };
}

export function formatMonthlyCost(server, lang = 'zh') {
  const result = calculateMonthlyCost(server);
  if (!result) return '';
  const monthSuffix = lang === 'en' ? '/mo' : '/月';
  return `${result.currency}${result.formattedAmount}${monthSuffix}`;
}

function toUtcDayIndex(dateString) {
  const parsed = parseDateOnly(dateString);
  if (!parsed) return null;
  return Math.floor(Date.UTC(parsed.year, parsed.month - 1, parsed.day) / 86400000);
}

function getLocalTodayDayIndex(now = Date.now()) {
  const d = new Date(Number(now) || Date.now());
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

export function getExpirationSummary(server, now = Date.now()) {
  const purchaseDate = normalizeDateOnly(server?.purchase_date);
  const expireDate = normalizeDateOnly(server?.expire_date);
  const todayIndex = getLocalTodayDayIndex(now);
  const expireIndex = toUtcDayIndex(expireDate);
  const purchaseIndex = toUtcDayIndex(purchaseDate);

  if (expireIndex === null) {
    return {
      purchaseDate,
      expireDate,
      hasExpireDate: false,
      remainingDays: null,
      level: 'none',
      color: 'var(--text-secondary)',
      isExpired: false,
      hasProgress: false,
      totalDays: 0,
      usedDays: 0,
      remainingCycleDays: 0,
      usedPercent: 0,
      remainingPercent: 0
    };
  }

  const remainingDays = expireIndex - todayIndex;
  let level = 'safe';
  let color = '#00d4aa';
  if (remainingDays <= 0) {
    level = 'expired';
    color = '#f85149';
  } else if (remainingDays <= 7) {
    level = 'urgent';
    color = '#ff8c42';
  } else if (remainingDays <= 30) {
    level = 'warning';
    color = '#f0c040';
  }

  let hasProgress = false;
  let totalDays = 0;
  let usedDays = 0;
  let remainingCycleDays = 0;
  let usedPercent = 0;
  let remainingPercent = 0;

  if (purchaseIndex !== null && expireIndex > purchaseIndex) {
    totalDays = expireIndex - purchaseIndex;
    usedDays = Math.max(0, Math.min(totalDays, todayIndex - purchaseIndex));
    remainingCycleDays = Math.max(0, totalDays - usedDays);
    usedPercent = Math.round((usedDays / totalDays) * 1000) / 10;
    remainingPercent = Math.round((100 - usedPercent) * 10) / 10;
    hasProgress = true;
  }

  return {
    purchaseDate,
    expireDate,
    hasExpireDate: true,
    remainingDays,
    level,
    color,
    isExpired: remainingDays <= 0,
    hasProgress,
    totalDays,
    usedDays,
    remainingCycleDays,
    usedPercent,
    remainingPercent
  };
}

export function formatRemainingDaysLabel(summary, trans = {}, lang = 'zh') {
  if (!summary || !summary.hasExpireDate) return '';
  const days = summary.remainingDays;
  const isEn = String(lang || '').startsWith('en');
  if (days > 0) {
    const tpl = trans.remainingDaysText || (isEn ? '{days}d left' : '剩余 {days} 天');
    return tpl.replace('{days}', String(days));
  }
  if (days === 0) {
    return trans.dueToday || (isEn ? 'Expires today' : '今日到期');
  }
  const tpl = trans.expiredDaysText || (isEn ? 'Expired {days}d' : '已过期 {days} 天');
  return tpl.replace('{days}', String(Math.abs(days)));
}
