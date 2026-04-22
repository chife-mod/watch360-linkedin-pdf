import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos
import LOGO_BREGUET   from '/assets/logos/breguet.svg'
import LOGO_BREITLING from '/assets/logos/breitling.svg'
import LOGO_CITIZEN   from '/assets/logos/citizen.svg'

// Watch photos — ALL downloaded from MinIO ✅
import IMG_BREGUET67  from '/assets/watches/ref_breguet_7067.png'
import IMG_BREITLING  from '/assets/watches/ref_breitling_b19.png'
import IMG_CITIZEN85  from '/assets/watches/ref_citizen_nb6085.png'
import IMG_CITIZEN84  from '/assets/watches/ref_citizen_nb6084.png'
import IMG_CITIZEN80  from '/assets/watches/ref_citizen_nb6080.png'

/* Mar 2026 — Refs in Media [6–10] from Google Sheet */
const MODELS = [
    { logo: LOGO_BREGUET,   name: 'Breguet Tradition GMT 7067',                                  ref: '7067PT/NM/5W6',  img: IMG_BREGUET67 },
    { logo: LOGO_BREITLING,  name: 'Breitling Navitimer B19 Chronograph 43 Perpetual Calendar',   ref: 'LB19211A1C1P1',  img: IMG_BREITLING },
    { logo: LOGO_CITIZEN,    name: 'CITIZEN NB6085-57W',                                          ref: 'NB6085-57W',     img: IMG_CITIZEN85 },
    { logo: LOGO_CITIZEN,    name: 'CITIZEN NB6084-50A',                                          ref: 'NB6084-50A',     img: IMG_CITIZEN84 },
    { logo: LOGO_CITIZEN,    name: 'CITIZEN NB6080-51W',                                          ref: 'NB6080-51W',     img: IMG_CITIZEN80 },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Mar_10b() {
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
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img src={m.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
            <p className="v2-footnote">
                Novelties excluding $0 – $500 and N/A price ranges.<br />
                Watch Media mentions Mar 2026 – Apr 2026.
            </p>
        </div>
    )
}
