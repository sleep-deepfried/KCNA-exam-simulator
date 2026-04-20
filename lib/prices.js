// Maps ISO-3166 alpha-2 country codes to the App Store localized price string.
// Source of truth: App Store Connect Current Price tier (USD 2.99 equivalent).
// Countries not listed fall back to DEFAULT_PRICE.

export const DEFAULT_PRICE = '$2.99'

const EUR = '€2.99'

export const PRICES = {
  US: '$2.99',
  GB: '£2.99',
  CA: 'CA$3.99',
  AU: 'A$4.99',
  NZ: 'NZ$4.99',
  JP: '¥500',
  KR: '₩4,400',
  CN: '¥22',
  HK: 'HK$22',
  TW: 'NT$90',
  SG: 'S$3.98',
  MY: 'RM14.90',
  TH: '฿99',
  ID: 'Rp49,000',
  VN: '₫99,000',
  PH: '₱199',
  IN: '₹299',
  PK: '₨900',
  BR: 'R$19.90',
  MX: 'MX$69',
  CL: 'CLP 2,990',
  CO: 'COP 14,900',
  PE: 'S/ 12.90',
  CH: 'CHF 3.00',
  SE: '39 kr',
  NO: '39 kr',
  DK: '29 kr',
  PL: '14.99 zł',
  CZ: '79 Kč',
  HU: '1,490 Ft',
  RO: '14.99 lei',
  TR: '₺149.99',
  RU: '₽249',
  ZA: 'R59.99',
  NG: '₦4,900',
  EG: 'E£149.99',
  IL: '₪9.90',
  AE: 'AED 12.99',
  SA: 'SAR 12.99',
  QA: 'QAR 9.99',
  KZ: '₸1,790',
  TZ: 'TZS 9,900',
  // Eurozone + EUR-priced markets
  AT: EUR, BE: EUR, BG: EUR, HR: EUR, CY: EUR, EE: EUR, FI: EUR,
  FR: EUR, DE: EUR, GR: EUR, IE: EUR, IT: EUR, LV: EUR, LT: EUR,
  LU: EUR, MT: EUR, NL: EUR, PT: EUR, SK: EUR, SI: EUR, ES: EUR,
  BA: EUR, XK: EUR, ME: EUR, RS: EUR,
}

export function priceForCountry(code) {
  if (!code) return DEFAULT_PRICE
  return PRICES[code.toUpperCase()] || DEFAULT_PRICE
}
