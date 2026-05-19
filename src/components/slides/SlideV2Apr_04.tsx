import './v2.css'
import './SlideV2_04.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos — all downloaded from MinIO
import LOGO_ROLEX    from '/assets/logos/rolex.svg'
import LOGO_PATEK    from '/assets/logos/patek_philippe.svg'
import LOGO_TUDOR    from '/assets/logos/tudor.svg'
import LOGO_CHARRIOL from '/assets/logos/charriol.svg'
import LOGO_EDOX     from '/assets/logos/edox.svg'
import LOGO_JLC      from '/assets/logos/jaeger_lecoultre.svg'
import LOGO_CARTIER  from '/assets/logos/cartier.svg'

const BRANDS: { name: string; count: number; logo: string }[] = [
    { name: 'Rolex',            count: 58, logo: LOGO_ROLEX    },
    { name: 'Patek Philippe',   count: 54, logo: LOGO_PATEK    },
    { name: 'Tudor',            count: 32, logo: LOGO_TUDOR    },
    { name: 'Charriol',         count: 24, logo: LOGO_CHARRIOL },
    { name: 'Edox',             count: 22, logo: LOGO_EDOX     },
    { name: 'Jaeger-LeCoultre', count: 21, logo: LOGO_JLC      },
    { name: 'Cartier',          count: 20, logo: LOGO_CARTIER  },
]

const MAX = 58

export function SlideV2Apr_04() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>APR 2026 NOVELTIES</p>

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
