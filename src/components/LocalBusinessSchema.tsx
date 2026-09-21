const BASE_URL = 'https://sd-gas.co.uk'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'SD Gas',
  image: `${BASE_URL}/og-image.png`,
  url: BASE_URL,
  telephone: '+447480969210',
  email: 'ssdgasservices@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bennochy Road',
    addressLocality: 'Kirkcaldy',
    postalCode: 'KY2 5',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 56.1188068,
    longitude: -3.1801092,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Fife',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.google.co.uk/maps/place/SD+Gas/@56.1188068,-3.1801092,17z/data=!3m1!4b1!4m6!3m5!1s0x4887b5959f440399:0x69a9d8c2e18ef8b!8m2!3d56.1188068!4d-3.1801092!16s%2Fg%2F11qh8nb44h?entry=ttu',
  ],
}

/** Sitewide LocalBusiness structured data — rendered once, not per page. */
export default function LocalBusinessSchema() {
  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
}
