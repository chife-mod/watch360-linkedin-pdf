import './v2.css'
import './SlideV2_04.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_UG       from '/assets/logos/universal_geneve.svg'
import LOGO_BREITLING from '/assets/logos/breitling.svg'
import LOGO_JLC      from '/assets/logos/jaeger_lecoultre.svg'
import LOGO_HAMILTON from '/assets/logos/hamilton.svg'
import LOGO_BALL     from '/assets/logos/ball_watch.svg'
import LOGO_LONGINES from '/assets/logos/longines.svg'
import LOGO_BREMONT  from '/assets/logos/bremont.svg'

const BRANDS: { name: string; count: number; logo: string }[] = [
    { name: 'Universal Geneve',  count: 34, logo: LOGO_UG       },
    { name: 'Breitling',         count: 23, logo: LOGO_BREITLING },
    { name: 'Jaeger-LeCoultre',  count: 15, logo: LOGO_JLC      },
    { name: 'Hamilton',          count: 12, logo: LOGO_HAMILTON  },
    { name: 'BALL Watch',        count: 11, logo: LOGO_BALL      },
    { name: 'Longines',          count: 11, logo: LOGO_LONGINES  },
    { name: 'Bremont',           count: 11, logo: LOGO_BREMONT   },
]

const MAX = 34

export function SlideV2May_04() {
    return (
        <div className="v2-slide">
            <div className="v2-top" />
            <div className="v2-bottom" />

            <div className="v2-header">
                <div className="v2-header__logo">
                    <img src={LOGO_SYMBOL} alt="Watch360" className="v2-header__logo-symbol" />
                    <img src={LOGO_WORDMARK} alt="WATCH360" className="v2-header__logo-wordmark" />
                </div>
                <p className="v2-header__url">www.watch360.ai</p>
            </div>

            <p className="v2-title">BRANDS</p>
            <p className="v2-subtitle" style={{ top: 317 }}>MAY 2026 NOVELTIES</p>

            <div className="v2-bars">
                {BRANDS.map((b) => (
                    <div key={b.name} className="v2-bar-row">
                        <div className="v2-logo-box">
                            <img src={b.logo} alt={b.name} />
                        </div>
                        <div className="v2-bar-content">
                            <div className="v2-bar-label-row">
                                <p className="v2-bar-label">{b.name.toUpperCase()}</p>
                                <p className="v2-bar-count">{b.count}</p>
                            </div>
                            <div className="v2-bar-track">
                                <div className="v2-bar-fill" style={{ width: `${(b.count / MAX) * 100}%` }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="v2-footnote">
                Novelties excluding $0 – $500 and N/A price ranges.
            </p>
        </div>
    )
}
