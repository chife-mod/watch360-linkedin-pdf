import './v2.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

// Reusable simple bar slide — no logos, 10 rows, 56px height / 21px gap
interface SimpleRow { label: string; count: number; color?: string }

interface Props {
    title: string
    subtitle?: string
    rows: SimpleRow[]
    subtitleTop?: number
    noUppercaseLabels?: boolean
}

export function SimpleBarSlide({ title, subtitle, rows, subtitleTop, noUppercaseLabels }: Props) {
    const max = Math.max(...rows.map(r => r.count))
    const defaultSubTop = 213 + 100 * 0.93 + 11  // ≈ 317

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

            <p className="v2-title" style={{ whiteSpace: 'pre-line' }}>{title}</p>

            {subtitle && (
                <p className="v2-subtitle" style={{ top: subtitleTop ?? defaultSubTop }}>
                    {subtitle}
                </p>
            )}

            {/* Simple bar rows */}
            <div className="v2-bars--simple">
                {rows.map((r) => (
                    <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 24, width: 880 }}>
                        {r.color && (
                            <div style={{
                                width: 56,
                                height: 56,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <div style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '50%',
                                    backgroundColor: r.color,
                                }} />
                            </div>
                        )}
                        <div className="v2-bar-row--simple" style={r.color ? { width: 800 } : undefined}>
                            <div className="v2-bar-label-row--simple">
                                <p className="v2-bar-label--simple">{noUppercaseLabels ? r.label : r.label.toUpperCase()}</p>
                                <p className="v2-bar-count--simple">{r.count}</p>
                            </div>
                            <div className="v2-bar-track--simple">
                                <div
                                    className="v2-bar-fill"
                                    style={{ height: '100%', width: `${(r.count / max) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
