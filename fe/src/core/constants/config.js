/**
 * Global application configuration constants.
 */
export const APP_CONFIG = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'GĐHĐ E-Commerce',
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 12,
    ADMIN_PAGE_SIZE: 20,
  },
  CUSTOMIZER: {
    MAX_TEXT_LENGTH: 50,
    ALLOWED_FONTS: ['Noto Serif', 'Roboto', 'Open Sans'],
  },
  CURRENCY: {
    LOCALE: 'vi-VN',
    CURRENCY_CODE: 'VND',
  },
}
