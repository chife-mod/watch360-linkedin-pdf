import './v2.css'
import LOGO_SYMBOL    from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK  from '/assets/logos/watch360-wordmark.svg'

import LOGO_AP        from '/assets/logos/audemars_piguet.svg'
import LOGO_BREITLING from '/assets/logos/breitling.svg'

import IMG_AP_A010        from '/assets/watches/ap_a010.png'
import IMG_AP_A355        from '/assets/watches/ap_a355.png'
import IMG_BREITLING_EB01 from '/assets/watches/breitling_eb01.png'
import IMG_AP_A403        from '/assets/watches/ap_a403.png'

/* Feb 2026 — Refs in Media [6–10] (items 6-10 per sheet column order) */
const MODELS = [
    { logo: LOGO_AP,        name: 'Audemars Piguet Royal Oak Offshore',             ref: '15720ST.OO.A010CA.01', img: IMG_AP_A010        },
    { logo: LOGO_AP,        name: 'Audemars Piguet Royal Oak Offshore',             ref: '15720ST.OO.A355CA.01', img: IMG_AP_A355        },
    { logo: LOGO_BREITLING, name: 'Breitling Navitimer B01 Chrono 43 Aston Martin', ref: 'EB01381A1B1X1',        img: IMG_BREITLING_EB01 },
    { logo: LOGO_AP,        name: 'Audemars Piguet Royal Oak Offshore',             ref: '15720ST.OO.A403CA.01', img: IMG_AP_A403        },
    { logo: LOGO_AP,        name: 'Audemars Piguet Royal Oak',                      ref: '15553BA.OO.1356BA.04', img: IMG_AP_A010        },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Feb_10b() {
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

            <p className="v2-title">REFS IN MEDIA</p>
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
                {MODELS.map((m, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 41, height: SQ }}>

                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF',
                                borderRadius: RADIUS,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 16,
                                boxSizing: 'border-box',
                            }}>
                                <img src={m.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF',
                                borderRadius: RADIUS,
                                overflow: 'hidden',
                                padding: 12,
                                boxSizing: 'border-box',
                            }}>
                                <img src={m.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }} />
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <p style={{
                                fontFamily: "'Lato', sans-serif", fontSize: 32, fontWeight: 400,
                                color: '#FFFFFF', margin: 0, lineHeight: 1, textTransform: 'uppercase',
                            }}>{m.name}</p>
                            <p style={{
                                fontFamily: "'Lato', sans-serif", fontSize: 24, fontWeight: 400,
                                color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.2,
                            }}>{m.ref}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="v2-footnote">Watch Media mentions Feb 2026 – Mar 2026.</p>
        </div>
    )
}
