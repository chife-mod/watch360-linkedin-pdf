import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_PANERAI from '/assets/logos/panerai.svg'
import LOGO_IWC     from '/assets/logos/iwc.svg'

import IMG_PAM01729 from '/assets/watches/pam01729.png'
import IMG_PAM01730 from '/assets/watches/pam01730.png'
import IMG_IW371631 from '/assets/watches/iw371631.png'
import IMG_IW328107 from '/assets/watches/iw328107.png'
import IMG_IW389411 from '/assets/watches/iw389411.png'

/* Feb 2026 — Refs in Media [1–5] */
const MODELS = [
    { logo: LOGO_PANERAI, name: 'Panerai Radiomir California Bronzo',              ref: 'PAM01729', img: IMG_PAM01729 },
    { logo: LOGO_PANERAI, name: 'Panerai Radiomir Platinumtech™',                  ref: 'PAM01730', img: IMG_PAM01730 },
    { logo: LOGO_IWC,     name: 'IWC Portugieser Chronograph Ceratanium®',         ref: 'IW371631', img: IMG_IW371631 },
    { logo: LOGO_IWC,     name: "IWC Pilot's Watch Automatic 41 George Russell",   ref: 'IW328107', img: IMG_IW328107 },
    { logo: LOGO_IWC,     name: "IWC Pilot's Watch Chronograph 41 George Russell", ref: 'IW389411', img: IMG_IW389411 },
]

const SQ = 136
const RADIUS = 6

export function SlideV2Feb_10() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>FEB 2026 WATCH MEDIA [1–5]</p>

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
            <p className="v2-footnote">Novelties excluding $0 – $500 price range.</p>
        </div>
    )
}
