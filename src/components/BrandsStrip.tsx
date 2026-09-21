import baxi from '../assets/brands/baxi.svg'
import worcester from '../assets/brands/worcester.png'
import ideal from '../assets/brands/ideal.svg'
import vaillant from '../assets/brands/vaillant.png'
import vokera from '../assets/brands/vokera.png'
import potterton from '../assets/brands/potterton.svg'
import viessmann from '../assets/brands/viessmann.png'
import './BrandsStrip.css'

const BRANDS = [
  { name: 'Baxi', src: baxi },
  { name: 'Worcester Bosch', src: worcester },
  { name: 'Ideal', src: ideal },
  { name: 'Vaillant', src: vaillant },
  { name: 'Vokèra', src: vokera },
  { name: 'Potterton', src: potterton },
  { name: 'Viessmann', src: viessmann },
]

// Rendered twice back to back so the track can loop seamlessly at -50%.
const TRACK = [...BRANDS, ...BRANDS]

export default function BrandsStrip() {
  return (
    <section className="brands-strip">
      <div className="brands-strip__viewport">
        <ul className="brands-strip__track">
          {TRACK.map((brand, i) => {
            const isDuplicate = i >= BRANDS.length
            return (
              <li key={`${brand.name}-${i}`} aria-hidden={isDuplicate || undefined}>
                <img
                  src={brand.src}
                  alt={isDuplicate ? '' : brand.name}
                  loading={isDuplicate ? 'lazy' : 'eager'}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
