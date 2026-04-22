import './v2.css'
import './SlideV2_04.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos — all downloaded from MinIO
import LOGO_DELMA     from '/assets/logos/delma.svg'
import LOGO_DOXA      from '/assets/logos/doxa.svg'
import LOGO_LONGINES  from '/assets/logos/longines.svg'
import LOGO_OMEGA     from '/assets/logos/omega.svg'
import LOGO_BREITLING from '/assets/logos/breitling.svg'
import LOGO_NOMOS     from '/assets/logos/nomos_glashutte.svg'
import LOGO_BREGUET   from '/assets/logos/breguet.svg'

const BRANDS: { name: string; count: number; logo: string }[] = [
    { name: 'Delma',           count: 19, logo: LOGO_DELMA     },
    { name: 'DOXA',            count: 14, logo: LOGO_DOXA      },
    { name: 'Longines',        count: 13, logo: LOGO_LONGINES  },
    { name: 'Omega',           count: 10, logo: LOGO_OMEGA     },
    { name: 'Breitling',       count: 9,  logo: LOGO_BREITLING },
    { name: 'Nomos Glashütte', count: 8,  logo: LOGO_NOMOS     },
    { name: 'Breguet',         count: 7,  logo: LOGO_BREGUET   },
]

const MAX = 19

export function SlideV2Mar_04() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>MAR 2026 NOVELTIES</p>

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
