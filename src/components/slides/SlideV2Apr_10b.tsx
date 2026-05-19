import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos
import LOGO_PATEK   from '/assets/logos/patek_philippe.svg'
import LOGO_PANERAI from '/assets/logos/panerai.svg'

// Watch photos — ALL downloaded from MinIO ✅
import IMG_PP_CAL_5227G    from '/assets/watches/ref_patek_philippe_calatrava_5227g_015.png'
import IMG_PP_CEL_6105G    from '/assets/watches/ref_patek_philippe_celestial_sunrise_sunset_6105g_001.png'
import IMG_PP_5396R        from '/assets/watches/ref_patek_philippe_5396r_016.png'
import IMG_PAN_PAM01732    from '/assets/watches/ref_panerai_luminor_destro_pam_1732_pam01732.png'
import IMG_PAN_PAM01631    from '/assets/watches/ref_panerai_luminor_31_giorni_pam01631.png'

/* Apr 2026 — Refs in Media [6–10] from Google Sheet */
const MODELS = [
    { logo: LOGO_PATEK,   name: 'Patek Philippe Calatrava',                      ref: '5227G-015', img: IMG_PP_CAL_5227G },
    { logo: LOGO_PATEK,   name: 'Patek Philippe Celestial Sunrise & Sunset',     ref: '6105G-001', img: IMG_PP_CEL_6105G },
    { logo: LOGO_PATEK,   name: 'Patek Philippe 5396R-016',                      ref: '5396R-016', img: IMG_PP_5396R     },
    { logo: LOGO_PANERAI, name: 'Panerai Luminor Destro PAM 1732',               ref: 'PAM01732',  img: IMG_PAN_PAM01732 },
    { logo: LOGO_PANERAI, name: 'Panerai Luminor 31 Giorni',                     ref: 'PAM01631',  img: IMG_PAN_PAM01631 },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Apr_10b() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>APR 2026 NOVELTIES [6–10]</p>

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
                Watch Media mentions Apr 2026 – May 2026.
            </p>
        </div>
    )
}
