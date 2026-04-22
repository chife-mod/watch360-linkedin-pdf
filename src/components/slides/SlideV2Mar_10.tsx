import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos
import LOGO_MOSER    from '/assets/logos/h_moser_cie.svg'
import LOGO_BREGUET  from '/assets/logos/breguet.svg'
import LOGO_ARTYA    from '/assets/logos/artya.svg'
import LOGO_CITIZEN  from '/assets/logos/citizen.svg'

// Watch photos — ALL downloaded from MinIO ✅
import IMG_MOSER     from '/assets/watches/ref_moser_6700_1201.png'
import IMG_BREGUET37 from '/assets/watches/ref_breguet_7037.png'
import IMG_ARTYA     from '/assets/images/09.png'
import IMG_CITIZEN86 from '/assets/watches/ref_citizen_nb6086.png'
import IMG_BREGUET38 from '/assets/watches/ref_breguet_7038.png'

/* Mar 2026 — Refs in Media [1–5] from Google Sheet */
const MODELS = [
    { logo: LOGO_MOSER,   name: 'H. Moser & Cie Streamliner Alpine Drivers and Mechanics Pink Editions', ref: '6700-1201',                        img: IMG_MOSER     },
    { logo: LOGO_BREGUET, name: 'Breguet Tradition Seconde Rétrograde 7037',                              ref: '7037BB/YB/5V6',                    img: IMG_BREGUET37 },
    { logo: LOGO_ARTYA,   name: 'ArtyA Purity Moissanite Curvy Tourbillon',                               ref: 'purity-moissanite-curvy-tourbillon', img: IMG_ARTYA     },
    { logo: LOGO_CITIZEN, name: 'CITIZEN NB6086-54E',                                                     ref: 'NB6086-54E',                       img: IMG_CITIZEN86 },
    { logo: LOGO_BREGUET, name: 'Breguet Tradition Seconde Rétrograde 7038',                              ref: '7038BB/N9/7V6 D0',                 img: IMG_BREGUET38 },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Mar_10() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>MAR 2026 NOVELTIES [1–5]</p>

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
