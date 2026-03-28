import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

import LOGO_AP      from '/assets/logos/audemars_piguet.svg'
import LOGO_D1      from '/assets/logos/d1_milano.png'
import LOGO_NIVADA  from '/assets/logos/nivada_grenchen.svg'
import LOGO_CASIO   from '/assets/logos/casio.svg'

import WATCH_PHOTO from '/assets/watches/ap_a010.png'

const LINES_1_5: { label: string; count: number; logo: string | null }[] = [
    { label: 'Audemars Piguet Royal Oak', count: 11, logo: LOGO_AP      },
    { label: 'D1 Milano Ultra Thin',      count: 9,  logo: LOGO_D1      },
    { label: 'Nivada F77 MKII',           count: 9,  logo: LOGO_NIVADA  },
    { label: 'Delbana Rotonda',           count: 8,  logo: null         },
    { label: 'Casio EDIFICE',             count: 8,  logo: LOGO_CASIO   },
]

const MAX = 11
const SQ = 136
const RADIUS = 6

export function SlideV2Feb_15() {
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

            <p className="v2-title">COLLECTION</p>
            <p className="v2-subtitle" style={{ top: 317 }}>FEB 2026 NOVELTIES [1–5]</p>

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
                {LINES_1_5.map((b) => (
                    <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 32, height: SQ }}>

                        {/* Two squares: logo + watch photo */}
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                            {/* Logo square */}
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
                                {b.logo ? (
                                    <img src={b.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 20, color: '#3A3935', textAlign: 'center', lineHeight: 1.2 }}>
                                        {b.label.split(' ')[0]}
                                    </span>
                                )}
                            </div>
                            {/* Watch photo square */}
                            <div style={{
                                width: SQ, height: SQ, flexShrink: 0,
                                background: '#FFFFFF',
                                borderRadius: RADIUS,
                                padding: 12,
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img src={WATCH_PHOTO} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                            </div>
                        </div>

                        {/* Bar chart */}
                        <div className="v2-bar-row--simple" style={{ flex: 1 }}>
                            <div className="v2-bar-label-row--simple">
                                <p className="v2-bar-label--simple">{b.label}</p>
                                <p className="v2-bar-count--simple">{b.count}</p>
                            </div>
                            <div className="v2-bar-track--simple">
                                <div className="v2-bar-fill" style={{ height: '100%', width: `${(b.count / MAX) * 100}%` }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
