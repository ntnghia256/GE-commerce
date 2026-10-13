import { APP_CONFIG } from '../constants/config'

/**
 * Format a number as Vietnamese Dong (VND) currency string.
 * @param {number} amount - The amount to format
 * @returns {string} Formatted string, e.g. "1.250.000 ₫"
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat(APP_CONFIG.CURRENCY.LOCALE, {
    style: 'currency',
    currency: APP_CONFIG.CURRENCY.CURRENCY_CODE,
  }).format(amount)
}
