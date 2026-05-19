import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos
import LOGO_PATEK   from '/assets/logos/patek_philippe.svg'
import LOGO_PANERAI from '/assets/logos/panerai.svg'

// Watch photos — ALL downloaded from MinIO ✅
import IMG_PP_NAUT_5810_1G from '/assets/watches/ref_patek_philippe_nautilus_5810_1g_001.png'
import IMG_PP_NAUT_5610_1P from '/assets/watches/ref_patek_philippe_nautilus_5610_1p_001.png'
import IMG_PAN_PAM01731    from '/assets/watches/ref_panerai_luminor_pam_1731_pam01731.png'
import IMG_PP_NAUT_5810G   from '/assets/watches/ref_patek_philippe_nautilus_5810g_001.png'
import IMG_PP_CUBITUS_5840P from '/assets/watches/ref_patek_philippe_cubitus_5840p_001.png'

/* Apr 2026 — Refs in Media [1–5] from Google Sheet */
const MODELS = [
    { logo: LOGO_PATEK,   name: 'Patek Philippe Nautilus',           ref: '5810/1G-001', img: IMG_PP_NAUT_5810_1G  },
    { logo: LOGO_PATEK,   name: 'Patek Philippe Nautilus',           ref: '5610/1P-001', img: IMG_PP_NAUT_5610_1P  },
    { logo: LOGO_PANERAI, name: 'Panerai Luminor PAM 1731',          ref: 'PAM01731',    img: IMG_PAN_PAM01731     },
    { logo: LOGO_PATEK,   name: 'Patek Philippe Nautilus',           ref: '5810G-001',   img: IMG_PP_NAUT_5810G    },
    { logo: LOGO_PATEK,   name: 'Patek Philippe Cubitus',            ref: '5840P-001',   img: IMG_PP_CUBITUS_5840P },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Apr_10() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>APR 2026 NOVELTIES [1–5]</p>

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
