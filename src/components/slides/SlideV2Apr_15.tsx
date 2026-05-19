import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos — ALL from MinIO ✅
import LOGO_ROLEX    from '/assets/logos/rolex.svg'
import LOGO_PATEK    from '/assets/logos/patek_philippe.svg'
import LOGO_CHARRIOL from '/assets/logos/charriol.svg'
import LOGO_TUDOR    from '/assets/logos/tudor.svg'
import LOGO_EDOX     from '/assets/logos/edox.svg'

// Collection watch photos — ALL from MinIO ✅
import IMG_ROLEX_DJ    from '/assets/watches/col_rolex_datejust.png'
import IMG_PATEK_RH    from '/assets/watches/col_patek_philippe_rare_handcrafts.png'
import IMG_CHARRIOL_ST from '/assets/watches/col_charriol_st_tropez.png'
import IMG_TUDOR_R     from '/assets/watches/col_tudor_royal.png'
import IMG_EDOX_GO     from '/assets/watches/col_edox_grand_ocean.png'

interface Line { label: string; count: number; logo: string; photo: string | null }

/* Apr 2026 Collections [1–5] — from Google Sheet */
const LINES: Line[] = [
    { label: 'Rolex Datejust',                 count: 41, logo: LOGO_ROLEX,    photo: IMG_ROLEX_DJ    },
    { label: 'Patek Philippe Rare Handcrafts', count: 31, logo: LOGO_PATEK,    photo: IMG_PATEK_RH    },
    { label: 'Charriol ST-TROPEZ',             count: 24, logo: LOGO_CHARRIOL, photo: IMG_CHARRIOL_ST },
    { label: 'Tudor Royal',                    count: 23, logo: LOGO_TUDOR,    photo: IMG_TUDOR_R     },
    { label: 'Edox Grand Ocean',               count: 22, logo: LOGO_EDOX,     photo: IMG_EDOX_GO     },
]

const MAX = 41
const SQ  = 136
const R   = 6

export function SlideV2Apr_15() {
    return (
        <div className="v2-slide">
            <div className="v2-top" />
            <div className="v2-bottom" />

            <div className="v2-header">
                <div className="v2-header__logo">
                    <img src={LOGO_SYMBOL}   alt="Watch360" className="v2-header__logo-symbol" />
                    <img src={LOGO_WORDMARK} alt="WATCH360" className="v2-header__logo-wordmark" />
                </div>
                <p className="v2-header__url">www.watch360.ai</p>
            </div>

            <p className="v2-title">COLLECTIONS</p>
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
                {LINES.map((b) => (
                    <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 32, height: SQ }}>

                        {/* Logo square + Watch photo square */}
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                            {/* Logo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF', borderRadius: R,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                padding: 16, boxSizing: 'border-box',
                            }}>
                                <img src={b.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                            {/* Watch photo */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF', borderRadius: R,
                                padding: 12, boxSizing: 'border-box',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                {b.photo ? (
                                    <img src={b.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#9A9793', textAlign: 'center', lineHeight: 1.3, padding: '0 8px' }}>
                                        {b.label}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Bar */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 32 }}>
                                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 32, fontWeight: 400, lineHeight: 1, textTransform: 'uppercase', color: '#FFFFFF', margin: 0 }}>{b.label}</p>
                                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 32, fontWeight: 400, lineHeight: 1, color: '#D49E64', margin: 0, flexShrink: 0 }}>{b.count}</p>
                            </div>
                            <div style={{ height: 12, background: 'rgba(30,29,25,0.75)', borderRadius: 500 }}>
                                <div className="v2-bar-fill" style={{ height: '100%', width: `${(b.count / MAX) * 100}%` }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <p className="v2-footnote">Novelties excluding $0 – $500 and N/A price ranges.</p>
        </div>
    )
}
