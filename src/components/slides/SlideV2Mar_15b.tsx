import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos — ALL from MinIO ✅
import LOGO_BREGUET   from '/assets/logos/breguet.svg'
import LOGO_TISSOT    from '/assets/logos/tissot.svg'
import LOGO_BREITLING from '/assets/logos/breitling.svg'
import LOGO_CITIZEN   from '/assets/logos/citizen.svg'
import LOGO_MIDO      from '/assets/logos/mido.svg'

// Collection watch photos (available from MinIO)
import IMG_BREITLING  from '/assets/watches/col_breitling_navitimer.png'

interface Line { label: string; count: number; logo: string; photo: string | null }

/* Mar 2026 Collections [6–10] — from Google Sheet */
const LINES: Line[] = [
    { label: 'Breguet Tradition',     count: 6, logo: LOGO_BREGUET,   photo: null         },
    { label: 'Tissot Gentleman',      count: 4, logo: LOGO_TISSOT,    photo: null         },
    { label: 'Breitling Navitimer',   count: 4, logo: LOGO_BREITLING, photo: IMG_BREITLING },
    { label: 'Citizen Series 8',      count: 4, logo: LOGO_CITIZEN,   photo: null         },
    { label: 'Mido Commander',        count: 4, logo: LOGO_MIDO,      photo: null         },
]

const MAX = 19  // same scale as slide 1-5
const SQ  = 136
const R   = 6

export function SlideV2Mar_15b() {
    return (
        <div className="v2-slide">
            <div className="v2-top" />
            <div className="v2-bottom" />

            <div className="v2-header">
                <div className="v2-header__logo">
                    <img src={LOGO_SYMBOL}   alt="Watch360" className="v2-header__logo-symbol" />
                    <img src={LOGO_WORDMARK} alt="WATCH360" className="v2-header__logo-wordmark" />
                </div>
                <p className="v2-header__url">www.watch360.ai</p>
            </div>

            <p className="v2-title">COLLECTIONS</p>
            <p className="v2-subtitle" style={{ top: 317 }}>MAR 2026 NOVELTIES [6–10]</p>

            <div style={{
                position: 'absolute',
                top: 445,
                left: 100,
                width: 880,
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}>
                {LINES.map((b) => (
                    <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 32, height: SQ }}>

                        {/* Logo square + Watch photo square */}
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                            {/* Logo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF', borderRadius: R,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: 16, boxSizing: 'border-box',
                            }}>
                                <img src={b.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            {/* Watch photo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF', borderRadius: R,
                                padding: 12, boxSizing: 'border-box',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                {b.photo ? (
                                    <img src={b.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#F0EFEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="12" stroke="#9A9793" strokeWidth="2" fill="none"/>
                                            <line x1="16" y1="8" x2="16" y2="16" stroke="#9A9793" strokeWidth="2" strokeLinecap="round"/>
                                            <line x1="16" y1="16" x2="21" y2="19" stroke="#9A9793" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bar */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 32 }}>
                                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 32, fontWeight: 400, lineHeight: 1, textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>{b.label}</p>
                                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 32, fontWeight: 400, lineHeight: 1, color: '#D49E64', margin: 0, flexShrink: 0 }}>{b.count}</p>
                            </div>
                            <div style={{ height: 12, background: 'rgba(30,29,25,0.75)', borderRadius: 500 }}>
                                <div className="v2-bar-fill" style={{ height: '100%', width: `${(b.count / MAX) * 100}%` }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <p className="v2-footnote">Novelties excluding $0 – $500 and N/A price ranges.</p>
        </div>
    )
}
