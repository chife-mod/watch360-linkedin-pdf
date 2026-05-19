import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos (WWG 2026 Top 7) — all downloaded from MinIO
import LOGO_ROLEX    from '/assets/logos/rolex.svg'
import LOGO_CARTIER  from '/assets/logos/cartier.svg'
import LOGO_TUDOR    from '/assets/logos/tudor.svg'
import LOGO_CHARRIOL from '/assets/logos/charriol.svg'
import LOGO_PATEK    from '/assets/logos/patek_philippe.svg'
import LOGO_PIAGET   from '/assets/logos/piaget.svg'
import LOGO_JLC      from '/assets/logos/jaeger_lecoultre.svg'

interface BrandRow {
    name: string
    count: number
    logo: string
}

const BRANDS: BrandRow[] = [
    { name: 'Rolex',            count: 58, logo: LOGO_ROLEX    },
    { name: 'Cartier',          count: 32, logo: LOGO_CARTIER  },
    { name: 'Tudor',            count: 31, logo: LOGO_TUDOR    },
    { name: 'Charriol',         count: 24, logo: LOGO_CHARRIOL },
    { name: 'Patek Philippe',   count: 23, logo: LOGO_PATEK    },
    { name: 'Piaget',           count: 23, logo: LOGO_PIAGET   },
    { name: 'Jaeger-LeCoultre', count: 22, logo: LOGO_JLC      },
]

const MAX = 58

export function SlideV2Apr_03() {
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

            <p className="v2-title">WWG NOVELTIES</p>
            <p className="v2-subtitle" style={{ top: 213 + 100 * 0.93 + 11 }}>WWG 2026 [TOP 7 BRANDS]</p>

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
                                <div
                                    className="v2-bar-fill"
                                    style={{ width: `${(b.count / MAX) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
