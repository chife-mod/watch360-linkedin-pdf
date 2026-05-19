import './v2.css'
import LOGO_SYMBOL   from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

export interface CollectionLine {
    label: string
    count: number
    logo: string | null
    photo: string | null
}

interface Props {
    title?: string
    subtitle: string
    lines: CollectionLine[]
    max: number
    footnote?: string
}

const SQ = 136
const R  = 6

/**
 * Shared "Collections" slide: logo + photo squares + label/count + bar track.
 * Handles multi-line labels (count aligns to last line of text).
 *
 * Used by Apr 2026 onward. Older months kept their inlined copies untouched.
 */
export function CollectionsSlide({ title = 'COLLECTIONS', subtitle, lines, max, footnote = 'Novelties excluding $0 – $500 and N/A price ranges.' }: Props) {
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

            <p className="v2-title">{title}</p>
            <p className="v2-subtitle" style={{ top: 317 }}>{subtitle}</p>

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
                {lines.map((b) => (
                    <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 32, height: SQ }}>

                        {/* Logo + photo squares */}
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
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

                        {/* Bar — bottom-anchored within card height; count aligns to last text line */}
                        <div className="v2-bar-row--simple" style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'flex-end',
                            paddingBottom: 40,
                            boxSizing: 'border-box',
                        }}>
                            <div className="v2-bar-label-row--simple" style={{ height: 'auto', alignItems: 'flex-end' }}>
                                <p className="v2-bar-label--simple" style={{
                                    whiteSpace: 'normal',
                                    maxWidth: 600,
                                    lineHeight: 1.1,
                                }}>{b.label}</p>
                                <p className="v2-bar-count--simple">{b.count}</p>
                            </div>
                            <div className="v2-bar-track--simple">
                                <div className="v2-bar-fill" style={{ height: '100%', width: `${(b.count / max) * 100}%` }} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <p className="v2-footnote">{footnote}</p>
        </div>
    )
}
