import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_GLASHUTTE from '/assets/logos/glashutte_original.svg'
import LOGO_GP        from '/assets/logos/girard_perregaux.svg'
import LOGO_JLC       from '/assets/logos/jaeger_lecoultre.svg'
import LOGO_RADO      from '/assets/logos/rado.svg'

import IMG_GLASHUTTE  from '/assets/watches/ref_glashutte_sixties_1_39_34_08_22_04.png'
import IMG_GP         from '/assets/watches/ref_gp_laureato_fifty_81008.png'
import IMG_JLC        from '/assets/watches/ref_jlc_reverso_hybris_q39424e5.png'
import IMG_RADO_09    from '/assets/watches/ref_rado_diastar_r12169409.png'
import IMG_RADO_09B   from '/assets/watches/ref_rado_diastar_r12169209.png'

const MODELS = [
    { logo: LOGO_GLASHUTTE, name: 'Glashütte Original Sixties Chronograph', ref: '1-39-34-08-22-04', img: IMG_GLASHUTTE },
    { logo: LOGO_GP,        name: 'Girard-Perregaux Laureato Fifty',         ref: '81008-11-3530-1CM', img: IMG_GP      },
    { logo: LOGO_JLC,       name: 'Jaeger-LeCoultre Reverso Hybris Artistica', ref: 'Q39424E5',        img: IMG_JLC     },
    { logo: LOGO_RADO,      name: 'Rado DiaStar Original Skeleton',          ref: 'R12169409',         img: IMG_RADO_09 },
    { logo: LOGO_RADO,      name: 'Rado DiaStar Original Skeleton',          ref: 'R12169209',         img: IMG_RADO_09B },
]

const SQ = 136
const RADIUS = 6

export function SlideV2May_10b() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>MAY 2026 NOVELTIES [6–10]</p>

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
                Watch Media mentions May 2026 – Jun 2026.
            </p>
        </div>
    )
}
