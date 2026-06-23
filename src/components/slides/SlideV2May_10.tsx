import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_PANERAI  from '/assets/logos/panerai.svg'
import LOGO_TAG      from '/assets/logos/tag_heuer.svg'

import IMG_PAM01495      from '/assets/watches/ref_panerai_pam01495.png'
import IMG_TAG_WBP1184   from '/assets/watches/ref_tag_heuer_wbp1184.png'
import IMG_TAG_WBP1118   from '/assets/watches/ref_tag_heuer_wbp1118.png'
import IMG_TAG_WBP1190   from '/assets/watches/ref_tag_heuer_wbp1190.png'
import IMG_TAG_WBP1117   from '/assets/watches/ref_tag_heuer_wbp1117.png'

const MODELS = [
    { logo: LOGO_PANERAI, name: 'Panerai Submersible GMT',                      ref: 'PAM01495',       img: IMG_PAM01495    },
    { logo: LOGO_TAG,     name: 'TAG Heuer Aquaracer Professional 200 Solar',   ref: 'WBP1184.BF0008', img: IMG_TAG_WBP1184 },
    { logo: LOGO_TAG,     name: 'TAG Heuer Aquaracer Professional 200 Solar',   ref: 'WBP1118.BA0047', img: IMG_TAG_WBP1118 },
    { logo: LOGO_TAG,     name: 'TAG Heuer Aquaracer Professional 200 Solar',   ref: 'WBP1190.BZ0003', img: IMG_TAG_WBP1190 },
    { logo: LOGO_TAG,     name: 'TAG Heuer Aquaracer Professional 200 Solar',   ref: 'WBP1117.BA0047', img: IMG_TAG_WBP1117 },
]

const SQ = 136
const RADIUS = 6

export function SlideV2May_10() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>MAY 2026 NOVELTIES [1–5]</p>

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
