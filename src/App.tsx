import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './styles/global.css'

// January 2026 slides
import { SlideV2_01 } from './components/slides/SlideV2_01'
import { SlideV2_02 } from './components/slides/SlideV2_02'
import { SlideV2_03 } from './components/slides/SlideV2_03'
import { SlideV2_04 } from './components/slides/SlideV2_04'
import { SlideV2_05 } from './components/slides/SlideV2_05'
import { SlideV2_06 } from './components/slides/SlideV2_06'
import { SlideV2_07 } from './components/slides/SlideV2_07'
import { SlideV2_08 } from './components/slides/SlideV2_08'
import { SlideV2_09 } from './components/slides/SlideV2_09'

// February 2026 slides
import { SlideV2Feb_01 } from './components/slides/SlideV2Feb_01'
import { SlideV2Feb_04 } from './components/slides/SlideV2Feb_04'
import { SlideV2Feb_05 } from './components/slides/SlideV2Feb_05'
import { SlideV2Feb_06 } from './components/slides/SlideV2Feb_06'
import { SlideV2Feb_07 } from './components/slides/SlideV2Feb_07'
import { SlideV2Feb_08 } from './components/slides/SlideV2Feb_08'
import { SlideV2Feb_09 } from './components/slides/SlideV2Feb_09'
import { SlideV2Feb_10 } from './components/slides/SlideV2Feb_10'
import { SlideV2Feb_10b } from './components/slides/SlideV2Feb_10b'
import { SlideV2Feb_11 } from './components/slides/SlideV2Feb_11'
import { SlideV2Feb_12 } from './components/slides/SlideV2Feb_12'
import { SlideV2Feb_13 } from './components/slides/SlideV2Feb_13'
import { SlideV2Feb_14 } from './components/slides/SlideV2Feb_14'
import { SlideV2Feb_15 } from './components/slides/SlideV2Feb_15'

const SLIDE_W = 1080
const SLIDE_H = 1350
const HUD_H = 56

const REPORTS = [
    {
        id: 'feb-2026',
        label: 'FEB 2026',
        slides: [
            <SlideV2Feb_01 />,  // 01 Cover
            <SlideV2Feb_04 />,  // 02 Top 7 Brands
            <SlideV2Feb_05 />,  // 03 Case Material
            <SlideV2Feb_06 />,  // 04 Strap Material
            <SlideV2Feb_07 />,  // 05 Dial Colors
            <SlideV2Feb_08 />,  // 06 Special Editions
            <SlideV2Feb_09 />,  // 07 Price Ranges
            <SlideV2Feb_10 />,  // 08 Discussed Novelties [1–5]
            <SlideV2Feb_10b />, // 09 Discussed Novelties [6–10]
            <SlideV2Feb_11 />,  // 09 Case Diameter
            <SlideV2Feb_12 />,  // 10 Case Height
            <SlideV2Feb_13 />,  // 11 Movement
            <SlideV2Feb_14 />,  // 12 Watch Functions
            <SlideV2Feb_15 />,  // 13 Product Lines
        ],
    },
    {
        id: 'jan-2026',
        label: 'JAN 2026',
        slides: [
            <SlideV2_01 />,
            <SlideV2_04 />,
            <SlideV2_02 />,
            <SlideV2_03 />,
            <SlideV2_05 />,
            <SlideV2_06 />,
            <SlideV2_07 />,
            <SlideV2_08 />,
            <SlideV2_09 />,
        ],
    },
]

const computeAutoScale = () =>
    Math.min(
        window.innerWidth / SLIDE_W,
        (window.innerHeight - HUD_H - 60) / SLIDE_H,
    ) * 0.97

function App() {
    const navigate = useNavigate()
    const [scale, setScale] = useState(computeAutoScale)
    const [isExporting, setIsExporting] = useState(false)
    const [reportId, setReportId] = useState('feb-2026')

    const userAdjRef = useRef(false)
    const deckRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])

    const currentReport = REPORTS.find(r => r.id === reportId) ?? REPORTS[0]
    const slides = currentReport.slides

    // Reset scroll position when report changes
    useEffect(() => {
        const deck = deckRef.current
        if (deck) deck.scrollLeft = 0
    }, [reportId])

    // Auto-scale on resize
    useEffect(() => {
        const onResize = () => { if (!userAdjRef.current) setScale(computeAutoScale()) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const MIN = 0.25
    const MAX = 1.5
    const STEP = 0.05
    const clamp = (v: number) => Math.round(Math.min(MAX, Math.max(MIN, v)) * 100) / 100
    const dec = () => { userAdjRef.current = true; setScale(s => clamp(s - STEP)) }
    const inc = () => { userAdjRef.current = true; setScale(s => clamp(s + STEP)) }

    const handleSavePdf = async () => {
        try {
            setIsExporting(true)
            const pdf = new jsPDF({
                orientation: 'portrait', unit: 'px',
                format: [SLIDE_W, SLIDE_H], hotfixes: ['px_scaling'],
            })
            for (let i = 0; i < slides.length; i++) {
                const el = slideRefs.current[i]
                if (!el) continue
                const prev = el.style.transform
                el.style.transform = 'none'
                await new Promise(r => setTimeout(r, 200))
                const canvas = await html2canvas(el, {
                    width: SLIDE_W, height: SLIDE_H,
                    scale: 2, useCORS: true,
                    backgroundColor: '#F0EFEE', logging: false,
                })
                el.style.transform = prev
                const imgData = canvas.toDataURL('image/jpeg', 0.95)
                if (i > 0) pdf.addPage([SLIDE_W, SLIDE_H], 'portrait')
                pdf.addImage(imgData, 'JPEG', 0, 0, SLIDE_W, SLIDE_H)
            }
            const label = currentReport.label.replace(' ', '-').toLowerCase()
            pdf.save(`watch360-${label}.pdf`)
        } catch (err) {
            console.error(err)
        } finally {
            setIsExporting(false)
        }
    }

    return (
        <>
            {/* Slide deck — free horizontal scroll, no snap delay */}
            <div ref={deckRef} className="slide-deck">
                {slides.map((slide, i) => (
                    <div
                        key={`${reportId}-${i}`}
                        className="slide-outer"
                        style={{ width: SLIDE_W * scale, height: SLIDE_H * scale }}
                    >
                        <div
                            ref={el => { slideRefs.current[i] = el }}
                            style={{
                                width: SLIDE_W,
                                height: SLIDE_H,
                                transform: `scale(${scale})`,
                                transformOrigin: 'top left',
                                flexShrink: 0,
                            }}
                        >
                            {slide}
                        </div>
                    </div>
                ))}
            </div>

            {/* HUD */}
            <div className="scale-hud">
                {/* Report selector */}
                <select
                    className="report-select"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    aria-label="Select report"
                >
                    {REPORTS.map(r => (
                        <option key={r.id} value={r.id}>{r.label}</option>
                    ))}
                </select>

                <div className="hud-divider" />

                {/* Scale controls */}
                <button className="scale-btn" onClick={dec} aria-label="Zoom out">−</button>
                <div className="scale-track">
                    <input
                        type="range"
                        min={MIN} max={MAX} step={STEP} value={scale}
                        onChange={e => {
                            userAdjRef.current = true
                            setScale(clamp(parseFloat(e.target.value)))
                        }}
                        className="scale-slider"
                        aria-label="Scale"
                    />
                </div>
                <button className="scale-btn" onClick={inc} aria-label="Zoom in">+</button>
                <span className="scale-label">{Math.round(scale * 100)}%</span>

                <div className="hud-divider" />

                {/* Save PDF */}
                <button className="save-pdf-btn" onClick={handleSavePdf} disabled={isExporting}>
                    {isExporting ? 'Saving…' : 'Save PDF'}
                </button>

                {/* Make Video */}
                <button className="anim-btn" onClick={() => navigate('/animation')}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginRight: 6 }}>
                        <path d="M2 1L11 6L2 11V1Z" fill="currentColor" />
                    </svg>
                    Make Video
                </button>
            </div>
        </>
    )
}

export default App
