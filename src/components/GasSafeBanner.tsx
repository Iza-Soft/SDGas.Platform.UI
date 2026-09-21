import gasSafeLogo from '../assets/gas-safe-logo.png'
import './GasSafeBanner.css'

const REGISTRATION_NUMBER = '665290'
const GAS_SAFE_CHECK_URL =
  'https://www.gassaferegister.co.uk/businesscompetencies?ep=1xPOGK1AdTeDy4hfLti5PwRqSSjk8Pkyx2F2Bf4JdAhaYOhPArIDDnTX2oVJdl%252fWxw17rxrSK9idNw89eapoSA%253d%253d&backurl=%252ffindbusinessresults%253fep%253d1xPOGK1AdTeDy4hfLti5PwRqSSjk8Pkyx2F2Bf4JdAj42uYhrk4DNuI%2525252fvvEJiGfJ&searchurl=%252Ffindbusinessresults%253Fep%253D1xPOGK1AdTeDy4hfLti5PwRqSSjk8Pkyx2F2Bf4JdAj42uYhrk4DNuI%2525252fvvEJiGfJ'

export default function GasSafeBanner() {
  return (
    <section className="gas-safe-banner">
      <div className="gas-safe-banner__text">
        <h2>We are Gas Safe registered</h2>
        <p>
          We take Gas Safe seriously. All of our engineers are on the Gas Safe register and carry their
          official identity card at all times — feel free to ask to see it. Gas Safe Register is the official
          gas safety organisation in Great Britain.
        </p>
        <p>
          If you'd like to find out more about the Gas Safe Register, you can call{' '}
          <a href="tel:08004085500">0800 408 5500</a> or{' '}
          <a href={GAS_SAFE_CHECK_URL} target="_blank" rel="noreferrer">
            check our registration on the Gas Safe Register website
          </a>
          .
        </p>
      </div>

      <div className="gas-safe-banner__badge">
        <img src={gasSafeLogo} alt="Gas Safe Register logo" />
        <span className="gas-safe-banner__reg-number">{REGISTRATION_NUMBER}</span>
      </div>
    </section>
  )
}
