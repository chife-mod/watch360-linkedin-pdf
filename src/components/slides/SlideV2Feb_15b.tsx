import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Brand logos
import LOGO_AP      from '/assets/logos/audemars_piguet.svg'
import LOGO_RW      from '/assets/logos/raymond_weil.svg'
import LOGO_CASIO   from '/assets/logos/casio.svg'

// Watch photos from MinIO (ct_product_line_*)
import PHOTO_CARTIER  from '/assets/watches/col_cartier_baignoire.png'
import PHOTO_CASIO    from '/assets/watches/col_casio_edifice.png'

interface Line { label: string; count: number; logo: string | null; photo: string | null }

const LINES: Line[] = [
    { label: 'Raymond Weil MILLESIME',        count: 7, logo: LOGO_RW,    photo: null             },
    { label: 'Audemars Piguet Royal Oak Offshore', count: 5, logo: LOGO_AP, photo: null            },
    { label: 'Audemars Piguet Code 11.59',    count: 4, logo: LOGO_AP,    photo: null              },
    { label: 'Cartier Baignoire',             count: 4, logo: null,        photo: PHOTO_CARTIER    },
    { label: 'Casio EDIFICE',                 count: 4, logo: LOGO_CASIO,  photo: PHOTO_CASIO      },
]

const MAX = 11  // same scale as slide 1-5
const SQ  = 136
const R   = 6

export function SlideV2Feb_15b() {
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
            <p className="v2-subtitle" style={{ top: 317 }}>FEB 2026 NOVELTIES [6–10]</p>

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
                                {b.logo ? (
                                    <img src={b.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 18, color: '#3A3935', textAlign: 'center', lineHeight: 1.2 }}>
                                        {b.label.split(' ')[0]}
                                    </span>
                                )}
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
                                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#F0EFEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="12" stroke="#9A9793" strokeWidth="2" fill="none"/>
                                            <line x1="16" y1="8" x2="16" y2="16" stroke="#9A9793" strokeWidth="2" strokeLinecap="round"/>
                                            <line x1="16" y1="16" x2="21" y2="19" stroke="#9A9793" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bar */}
                        <div className="v2-bar-row--simple" style={{ 
                            flex: 1, 
                            height: '100%', 
                            justifyContent: 'flex-end', 
                            paddingBottom: 40, 
                            boxSizing: 'border-box' 
                        }}>
                            <div className="v2-bar-label-row--simple" style={{ height: 'auto', alignItems: 'flex-end' }}>
                                <p className="v2-bar-label--simple" style={{ 
                                    whiteSpace: 'normal', 
                                    maxWidth: 600, 
                                    lineHeight: 1.1 
                                }}>{b.label}</p>
                                <p className="v2-bar-count--simple">{b.count}</p>
                            </div>
                            <div className="v2-bar-track--simple">
                                <div className="v2-bar-fill" style={{ height: '100%', width: `${(b.count / MAX) * 100}%` }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <p className="v2-footnote">Novelties excluding $0 – $500 price range.</p>
        </div>
    )
}
