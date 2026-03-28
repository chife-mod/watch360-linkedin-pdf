import './v2.css'
import './SlideV2_02.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'

/* Feb 2026: 215 total, LVMH brands: Hublot 7 + Louis Vuitton 7 + Zenith 6 + TAG Heuer 2 + Bvlgari 2 + Dior 2 + Tiffany 1 = 27 */
const CX = 440
const CY = 440
const RO = 440
const RI = 280
const TOTAL = 215
const LVMH = 27
const GAP_DEG = 2.5

function pt(r: number, deg: number) {
    const rad = (deg * Math.PI) / 180
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

function annularArc(startDeg: number, endDeg: number, fill: string) {
    const span = endDeg - startDeg
    const large = span > 180 ? 1 : 0
    const o1 = pt(RO, startDeg)
    const o2 = pt(RO, endDeg)
    const i1 = pt(RI, endDeg)
    const i2 = pt(RI, startDeg)
    const d = [
        `M ${o1.x.toFixed(2)} ${o1.y.toFixed(2)}`,
        `A ${RO} ${RO} 0 ${large} 1 ${o2.x.toFixed(2)} ${o2.y.toFixed(2)}`,
        `L ${i1.x.toFixed(2)} ${i1.y.toFixed(2)}`,
        `A ${RI} ${RI} 0 ${large} 0 ${i2.x.toFixed(2)} ${i2.y.toFixed(2)}`,
        'Z',
    ].join(' ')
    return <path d={d} fill={fill} />
}

// Gold = non-LVMH (215 - 27 = 188), Purple = LVMH (27)
const GOLD_END = 180 + 180 * ((TOTAL - LVMH) / TOTAL) - GAP_DEG / 2
const PURP_START = GOLD_END + GAP_DEG

function DonutSVG() {
    return (
        <svg viewBox="0 0 880 440" width="880" height="440" style={{ display: 'block', overflow: 'visible' }}>
            {annularArc(180, GOLD_END, '#A98155')}
            {annularArc(PURP_START, 360, '#B16BE8')}
        </svg>
    )
}

export function SlideV2Feb_02() {
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

            <p className="v2-title s02-title">NOVELTIES</p>
            <p className="s02-subtitle">FEB 2026 VS LVMH 2026</p>

            <div className="s02-donut-wrap">
                <DonutSVG />
                <div className="s02-center-label">
                    <p className="s02-center-num">215</p>
                    <p className="s02-center-sub">Total Novelties</p>
                </div>
            </div>

            <div className="s02-legend">
                <div className="s02-legend-item">
                    <p className="s02-legend-num" style={{ color: '#A98155' }}>188</p>
                </div>
                <div className="s02-legend-item">
                    <p className="s02-legend-num" style={{ color: '#B16BE8' }}>27</p>
                    <p className="s02-legend-lbl">Presented at LVMH</p>
                </div>
            </div>
        </div>
    )
}
