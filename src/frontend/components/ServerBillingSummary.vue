<template>
  <div v-if="hasInfo" class="billing-summary-box" :class="'expire-level-' + summary.level">
    <div class="billing-summary-top">
      <div class="billing-summary-cost">
        <span v-if="provider" class="billing-provider-tag">{{ provider }}</span>
        <span v-if="showPrice && priceText" class="billing-price-text">
          {{ priceText }}<span v-if="monthlyCostText" class="billing-monthly-text"> ({{ monthlyCostText }})</span>
        </span>
      </div>
      <span
        v-if="showExpire && expireText"
        class="expire-status-pill"
        :class="'is-' + summary.level"
        :style="{ color: summary.color, borderColor: summary.color }"
      >{{ expireText }}</span>
    </div>

    <div v-if="showExpire && (purchaseDate || expireDate)" class="billing-summary-dates">
      <span v-if="purchaseDate">{{ trans.purchasedOn || '购于' }} {{ purchaseDate }}</span>
      <span v-if="purchaseDate && expireDate" class="billing-date-sep">·</span>
      <span v-if="expireDate">{{ trans.expiresOn || '到期' }} {{ expireDate }}</span>
    </div>

    <div v-if="showExpire && summary.hasProgress" class="billing-progress-wrap">
      <div class="billing-progress-bar">
        <div
          class="billing-progress-fill"
          :style="{ width: summary.usedPercent + '%', background: summary.color }"
        ></div>
      </div>
      <div class="billing-progress-meta">
        <span>{{ trans.cycleUsed || '已用' }} {{ summary.usedPercent }}%</span>
        <span>{{ trans.cycleRemaining || '剩余' }} {{ summary.remainingPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hasInfo: { type: Boolean, default: false },
  provider: { type: String, default: '' },
  priceText: { type: String, default: '' },
  monthlyCostText: { type: String, default: '' },
  purchaseDate: { type: String, default: '' },
  expireDate: { type: String, default: '' },
  expireText: { type: String, default: '' },
  summary: { type: Object, required: true },
  showPrice: { type: Boolean, default: true },
  showExpire: { type: Boolean, default: true },
  trans: { type: Object, required: true }
})
</script>
