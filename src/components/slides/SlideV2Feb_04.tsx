import './v2.css'
import './SlideV2_04.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Real brand logos downloaded from MinIO (objects-logos/ct_brand_*)
import LOGO_AP       from '/assets/logos/audemars_piguet.svg'
import LOGO_SEIKO    from '/assets/logos/seiko.svg'
import LOGO_HAMILTON from '/assets/logos/hamilton.svg'
import LOGO_NIVADA   from '/assets/logos/nivada_grenchen.svg'
import LOGO_RW       from '/assets/logos/raymond_weil.svg'
import LOGO_CASIO    from '/assets/logos/casio.svg'


const BRANDS: { name: string; count: number; logo: string | null }[] = [
    { name: 'Audemars Piguet', count: 21, logo: LOGO_AP      },
    { name: 'Seiko',           count: 10, logo: LOGO_SEIKO   },
    { name: 'Hamilton',        count: 9,  logo: LOGO_HAMILTON },
    { name: 'Nivada Grenchen', count: 9,  logo: LOGO_NIVADA  },
    { name: 'Raymond Weil',    count: 9,  logo: LOGO_RW      },
    { name: 'Casio',           count: 8,  logo: LOGO_CASIO   },
    { name: 'Delbana',         count: 8,  logo: null         },
]

const MAX = 21

export function SlideV2Feb_04() {
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

            <p className="v2-title">NOVELTIES</p>
            <p className="v2-subtitle" style={{ top: 317 }}>FEB 2026 [TOP 7 BRANDS]</p>

            <div className="v2-bars">
                {BRANDS.map((b) => (
                    <div key={b.name} className="v2-bar-row">
                        <div className="v2-logo-box">
                            {b.logo
                                ? <img src={b.logo} alt={b.name} />
                                : <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 700, color: '#3A3935', textAlign: 'center', lineHeight: 1.2, padding: '0 4px' }}>{b.name}</span>}
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
                Novelties excluding $0 – $500 price range.
            </p>
        </div>
    )
}
