import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

/* Feb 2026 — Discussed Novelties [6–10] */
const MODELS = [
    { brand: 'audemars_piguet', name: 'Audemars Piguet Royal Oak Offshore',                 ref: '15720ST.OO.A010CA.01', img: '/assets/watches/ap_a010.png' },
    { brand: 'audemars_piguet', name: 'Audemars Piguet Royal Oak Offshore',                 ref: '15720ST.OO.A355CA.01', img: '/assets/watches/ap_a355.png' },
    { brand: 'seiko',           name: 'Seiko 5 Sports SRPM09',                              ref: 'SRPM09',              img: '/assets/watches/srpm09.png'   },
    { brand: 'breitling',       name: 'Breitling Navitimer B01 Chrono 43 Aston Martin',     ref: 'EB01381A1B1X1',       img: '/assets/watches/breitling_eb01.png' },
    { brand: 'audemars_piguet', name: 'Audemars Piguet Royal Oak Offshore',                 ref: '15720ST.OO.A403CA.01', img: '/assets/watches/ap_a403.png' },
]

const LOGO_MAP: Record<string, string> = {
    audemars_piguet: '/assets/logos/audemars_piguet.svg',
    seiko:           '/assets/logos/seiko.svg',
    breitling:       '/assets/logos/breitling.svg',
}

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

            <p className="v2-title">DISCUSSED NOVELTIES [6–10]</p>

            {/* Rows container — exact Figma: top 445, left 100, width 880 */}
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
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 41,
                        height: 136,
                    }}>
                        {/* Left block: logo cell + watch cell — total 275px with 3px gap */}
                        <div style={{
                            display: 'flex',
                            gap: 3,
                            width: 275,
                            height: 136,
                            flexShrink: 0,
                        }}>
                            {/* Logo cell */}
                            <div style={{
                                flex: 1,
                                height: '100%',
                                background: '#F0EFEE',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 16,
                                boxSizing: 'border-box',
                            }}>
                                <img src={LOGO_MAP[m.brand]} alt={m.brand}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            {/* Watch photo cell */}
                            <div style={{
                                flex: 1,
                                height: '100%',
                                background: '#F0EFEE',
                                overflow: 'hidden',
                            }}>
                                <img src={m.img} alt={m.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Text block */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <p style={{
                                fontFamily: "'Lato', sans-serif",
                                fontSize: 32,
                                fontWeight: 400,
                                color: '#FFFFFF',
                                margin: 0,
                                lineHeight: 1,
                                textTransform: 'uppercase',
                            }}>{m.name}</p>
                            <p style={{
                                fontFamily: "'Lato', sans-serif",
                                fontSize: 24,
                                fontWeight: 400,
                                color: 'rgba(255,255,255,0.5)',
                                margin: 0,
                                lineHeight: 1.2,
                            }}>{m.ref}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
