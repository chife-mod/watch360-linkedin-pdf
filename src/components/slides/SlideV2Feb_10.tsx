import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

/* Feb 2026 — Refs in Media [1–5] */
const MODELS = [
    { brand: 'panerai', name: 'Panerai Radiomir California Bronzo',              ref: 'PAM01729', img: '/assets/watches/pam01729.png' },
    { brand: 'panerai', name: 'Panerai Radiomir Platinumtech™',                  ref: 'PAM01730', img: '/assets/watches/pam01730.png' },
    { brand: 'iwc',     name: 'IWC Portugieser Chronograph Ceratanium®',         ref: 'IW371631', img: '/assets/watches/iw371631.png' },
    { brand: 'iwc',     name: "IWC Pilot's Watch Automatic 41 George Russell",   ref: 'IW328107', img: '/assets/watches/iw328107.png' },
    { brand: 'iwc',     name: "IWC Pilot's Watch Chronograph 41 George Russell", ref: 'IW389411', img: '/assets/watches/iw389411.png' },
]

const LOGO_MAP: Record<string, string> = {
    panerai: '/assets/logos/panerai.svg',
    iwc:     '/assets/logos/iwc.svg',
}

const SQ = 136      // each square: 136×136px
const RADIUS = 6    // matches .v2-logo-box border-radius
const PAD = 12       // inner padding for both squares

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

            {/* Rows */}
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

                        {/* Two equal 136×136 squares */}
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                            {/* Square 1: brand logo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF',
                                borderRadius: RADIUS,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: PAD,
                                boxSizing: 'border-box',
                            }}>
                                <img src={LOGO_MAP[m.brand]} alt={m.brand}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            {/* Square 2: watch photo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF',
                                borderRadius: RADIUS,
                                overflow: 'hidden',
                                padding: PAD,
                                boxSizing: 'border-box',
                            }}>
                                <img src={m.img} alt={m.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }} />
                            </div>
                        </div>

                        {/* Text */}
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

            {/* Note — left-aligned at 100px, same as title */}
            <p style={{
                position: 'absolute',
                left: 100,
                bottom: 60,
                fontFamily: "'Lato', sans-serif",
                fontSize: 26,
                fontWeight: 400,
                color: '#7B7B7A',
                margin: 0,
                lineHeight: 1,
                zIndex: 2,
            }}>Top 5 shown. See Rank 6–10 →</p>
        </div>
    )
}
