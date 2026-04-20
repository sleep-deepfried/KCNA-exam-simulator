import { priceForCountry, DEFAULT_PRICE } from '../../lib/prices'

export default function handler(req, res) {
  const country = req.headers['x-vercel-ip-country'] || ''
  const price = priceForCountry(country) || DEFAULT_PRICE
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600')
  res.status(200).json({ country, price })
}
