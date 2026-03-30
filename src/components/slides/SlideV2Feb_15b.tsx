import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_HAMILTON from '/assets/logos/hamilton.svg'
import LOGO_AP       from '/assets/logos/audemars_piguet.svg'
import LOGO_JUNGHANS from '/assets/logos/junghans.svg'
import LOGO_LONGINES from '/assets/logos/longines.svg'
import LOGO_CARTIER  from '/assets/logos/cartier.svg'

// Watch photos
import PHOTO_HAMILTON_JAZZ  from '/assets/watches/col_hamilton_jazzmaster.png'
import PHOTO_AP_RO_OFFSHORE from '/assets/watches/col_ap_royal_oak_offshore.png'
import PHOTO_JUNGHANS_SPORT from '/assets/watches/col_junghans_sport.png'
import PHOTO_LONGINES_DOLCE from '/assets/watches/col_longines_dolcevita.png'
import PHOTO_CARTIER        from '/assets/watches/col_cartier_baignoire.png'

interface Line { label: string; count: number; logo: string | null; photo: string | null }

/* Feb 2026 Collections [6–10] — per sheet order, excl $0–$500 and N/A */
const LINES: Line[] = [
    { label: 'Hamilton Jazzmaster',                count: 7, logo: LOGO_HAMILTON, photo: PHOTO_HAMILTON_JAZZ  },
    { label: 'Audemars Piguet Royal Oak Offshore', count: 5, logo: LOGO_AP,       photo: PHOTO_AP_RO_OFFSHORE },
    { label: 'Junghans Sport',                     count: 4, logo: LOGO_JUNGHANS, photo: PHOTO_JUNGHANS_SPORT },
    { label: 'Longines DolceVita',                 count: 4, logo: LOGO_LONGINES, photo: PHOTO_LONGINES_DOLCE },
    { label: 'Cartier Baignoire',                  count: 4, logo: LOGO_CARTIER,  photo: PHOTO_CARTIER        },
]

const MAX = 9  // same scale as slide 1-5
const SQ  = 136
const R   = 6

export function SlideV2Feb_15b() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>FEB 2026 NOVELTIES [6–10]</p>

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
                                {b.logo ? (
                                    <img src={b.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 18, color: '#3A3935', textAlign: 'center', lineHeight: 1.2 }}>
                                        {b.label.split(' ')[0]}
                                    </span>
                                )}
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
                        <div className="v2-bar-row--simple" style={{ 
                            flex: 1, 
                            height: '100%', 
                            justifyContent: 'flex-end', 
                            paddingBottom: 40, 
                            boxSizing: 'border-box' 
                        }}>
                            <div className="v2-bar-label-row--simple" style={{ height: 'auto', alignItems: 'flex-end' }}>
                                <p className="v2-bar-label--simple" style={{ 
                                    whiteSpace: 'normal', 
                                    maxWidth: 600, 
                                    lineHeight: 1.1 
                                }}>{b.label}</p>
                                <p className="v2-bar-count--simple">{b.count}</p>
                            </div>
                            <div className="v2-bar-track--simple">
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
