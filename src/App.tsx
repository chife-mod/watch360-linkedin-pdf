import { useState, useRef, useEffect } from 'react'
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
import { SlideV2Feb_14 } from './components/slides/SlideV2Feb_14'
import { SlideV2Feb_15 } from './components/slides/SlideV2Feb_15'
import { SlideV2Feb_15b } from './components/slides/SlideV2Feb_15b'

// March 2026 slides
import { SlideV2Mar_01 } from './components/slides/SlideV2Mar_01'
import { SlideV2Mar_04 } from './components/slides/SlideV2Mar_04'
import { SlideV2Mar_05 } from './components/slides/SlideV2Mar_05'
import { SlideV2Mar_06 } from './components/slides/SlideV2Mar_06'
import { SlideV2Mar_07 } from './components/slides/SlideV2Mar_07'
import { SlideV2Mar_08 } from './components/slides/SlideV2Mar_08'
import { SlideV2Mar_09 } from './components/slides/SlideV2Mar_09'
import { SlideV2Mar_10 } from './components/slides/SlideV2Mar_10'
import { SlideV2Mar_10b } from './components/slides/SlideV2Mar_10b'
import { SlideV2Mar_11 } from './components/slides/SlideV2Mar_11'
import { SlideV2Mar_12 } from './components/slides/SlideV2Mar_12'
import { SlideV2Mar_14 } from './components/slides/SlideV2Mar_14'
import { SlideV2Mar_15 } from './components/slides/SlideV2Mar_15'
import { SlideV2Mar_15b } from './components/slides/SlideV2Mar_15b'

// April 2026 slides
import { SlideV2Apr_01 } from './components/slides/SlideV2Apr_01'
import { SlideV2Apr_02 } from './components/slides/SlideV2Apr_02'
import { SlideV2Apr_03 } from './components/slides/SlideV2Apr_03'
import { SlideV2Apr_04 } from './components/slides/SlideV2Apr_04'
import { SlideV2Apr_05 } from './components/slides/SlideV2Apr_05'
import { SlideV2Apr_06 } from './components/slides/SlideV2Apr_06'
import { SlideV2Apr_07 } from './components/slides/SlideV2Apr_07'
import { SlideV2Apr_08 } from './components/slides/SlideV2Apr_08'
import { SlideV2Apr_09 } from './components/slides/SlideV2Apr_09'
import { SlideV2Apr_10 } from './components/slides/SlideV2Apr_10'
import { SlideV2Apr_10b } from './components/slides/SlideV2Apr_10b'
import { SlideV2Apr_11 } from './components/slides/SlideV2Apr_11'
import { SlideV2Apr_12 } from './components/slides/SlideV2Apr_12'
import { SlideV2Apr_14 } from './components/slides/SlideV2Apr_14'
import { SlideV2Apr_15 } from './components/slides/SlideV2Apr_15'
import { SlideV2Apr_15b } from './components/slides/SlideV2Apr_15b'

const SLIDE_W = 1080
const SLIDE_H = 1350
const HUD_H = 56

// ─────────────────────────────────────────────────────────────────────────────
// RULE: the most recent month is ALWAYS the first entry in REPORTS. It is
// shown in the dropdown with a "· CURRENT" suffix and is the default selected
// value (see `useState('mar-2026')` below). When adding a new month, insert
// the new { id, label, slides } block at the TOP of this array and update the
// default reportId to match. See WORKFLOW.md ("Вкладка CURRENT всегда первая").
// ─────────────────────────────────────────────────────────────────────────────
const REPORTS = [
    {
        id: 'apr-2026',
        label: 'APR 2026',
        slides: [
            <SlideV2Apr_01 />,  // 01 Cover
            <SlideV2Apr_04 />,  // 02 Top 7 Brands
            <SlideV2Apr_02 />,  // 03 WWG donut (782 vs 518)
            <SlideV2Apr_03 />,  // 04 WWG Top 7 Brands
            <SlideV2Apr_15 />,  // 05 Collections [1–5]
            <SlideV2Apr_15b />, // 06 Collections [6–10]
            <SlideV2Apr_10 />,  // 07 REFs in Media [1–5]
            <SlideV2Apr_10b />, // 08 REFs in Media [6–10]
            <SlideV2Apr_09 />,  // 09 Price Ranges
            <SlideV2Apr_08 />,  // 10 Special Editions
            <SlideV2Apr_07 />,  // 11 Dial Colors
            <SlideV2Apr_05 />,  // 12 Case Material
            <SlideV2Apr_06 />,  // 13 Strap Material
            <SlideV2Apr_11 />,  // 14 Case Diameter
            <SlideV2Apr_12 />,  // 15 Case Height
            <SlideV2Apr_14 />,  // 16 Functions
        ],
    },
    {
        id: 'mar-2026',
        label: 'MAR 2026',
        slides: [
            <SlideV2Mar_01 />,  // 01 Cover
            <SlideV2Mar_04 />,  // 02 Top 7 Brands
            <SlideV2Mar_15 />,  // 03 Collections [1–5]
            <SlideV2Mar_15b />, // 04 Collections [6–10]
            <SlideV2Mar_10 />,  // 05 REFs in Media [1–5]
            <SlideV2Mar_10b />, // 06 REFs in Media [6–10]
            <SlideV2Mar_09 />,  // 07 Price Ranges
            <SlideV2Mar_08 />,  // 08 Special Editions
            <SlideV2Mar_07 />,  // 09 Dial Colors
            <SlideV2Mar_05 />,  // 10 Case Material
            <SlideV2Mar_06 />,  // 11 Strap Material
            <SlideV2Mar_11 />,  // 12 Case Diameter
            <SlideV2Mar_12 />,  // 13 Case Height
            <SlideV2Mar_14 />,  // 14 Functions
        ],
    },
    {
        id: 'feb-2026',
        label: 'FEB 2026',
        slides: [
            <SlideV2Feb_01 />,  // 01 Cover
            <SlideV2Feb_04 />,  // 02 Top 7 Brands
            <SlideV2Feb_15 />,  // 03 Collections [1–5]
            <SlideV2Feb_15b />, // 04 Collections [6–10]
            <SlideV2Feb_10 />,  // 05 REFs in Media [1–5]
            <SlideV2Feb_10b />, // 06 REFs in Media [6–10]
            <SlideV2Feb_09 />,  // 07 Price Ranges
            <SlideV2Feb_08 />,  // 08 Special Editions
            <SlideV2Feb_07 />,  // 09 Dial Colors
            <SlideV2Feb_05 />,  // 10 Case Material
            <SlideV2Feb_06 />,  // 11 Strap Material
            <SlideV2Feb_11 />,  // 12 Case Diameter
            <SlideV2Feb_12 />,  // 13 Case Height
            <SlideV2Feb_14 />,  // 14 Functions
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
    const [scale, setScale] = useState(computeAutoScale)
    const [isExporting, setIsExporting] = useState(false)
    const [reportId, setReportId] = useState('apr-2026')

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

    // Vertical wheel → horizontal scroll (restores natural trackpad/mouse wheel behavior)
    useEffect(() => {
        const deck = deckRef.current
        if (!deck) return
        const onWheel = (e: WheelEvent) => {
            // Only hijack pure vertical wheel (not pinch-to-zoom, not horizontal swipe)
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
            e.preventDefault()
            deck.scrollLeft += e.deltaY
        }
        deck.addEventListener('wheel', onWheel, { passive: false })
        return () => deck.removeEventListener('wheel', onWheel)
    }, [])

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

                // html2canvas 1.x ignores CSS object-fit → images with
                // object-fit: contain/cover get stretched. Measure each such
                // <img> at render size, then in onclone swap it for a <div>
                // with a background-image (background-size honors contain/cover).
                const imgBoxes = new Map<string, { w: number; h: number; fit: string; pos: string; src: string }>()
                el.querySelectorAll('img').forEach((img, idx) => {
                    const s = getComputedStyle(img)
                    const fit = s.objectFit
                    if (fit === 'contain' || fit === 'cover') {
                        const r = img.getBoundingClientRect()
                        const key = `pdfimg-${i}-${idx}`
                        img.setAttribute('data-pdf-img-id', key)
                        imgBoxes.set(key, {
                            w: r.width, h: r.height,
                            fit, pos: s.objectPosition || 'center',
                            src: img.src,
                        })
                    }
                })

                const canvas = await html2canvas(el, {
                    width: SLIDE_W, height: SLIDE_H,
                    scale: 2, useCORS: true,
                    backgroundColor: '#F0EFEE', logging: false,
                    onclone: (_doc, root) => {
                        root.querySelectorAll<HTMLImageElement>('img[data-pdf-img-id]').forEach(img => {
                            const key = img.getAttribute('data-pdf-img-id')!
                            const m = imgBoxes.get(key)
                            if (!m) return
                            const div = _doc.createElement('div')
                            div.style.cssText = [
                                `width:${m.w}px`, `height:${m.h}px`,
                                `background-image:url("${m.src}")`,
                                `background-size:${m.fit}`,
                                `background-position:${m.pos}`,
                                `background-repeat:no-repeat`,
                                `flex-shrink:0`,
                            ].join(';')
                            img.parentNode?.replaceChild(div, img)
                        })
                    },
                })

                // Clean up markers on the live DOM
                el.querySelectorAll('img[data-pdf-img-id]').forEach(img => {
                    img.removeAttribute('data-pdf-img-id')
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
                    {REPORTS.map((r, i) => (
                        <option key={r.id} value={r.id}>
                            {i === 0 ? `${r.label} · CURRENT` : r.label}
                        </option>
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

                {/* Make Video → opens Remotion Studio */}
                <button className="anim-btn" onClick={() => window.open('http://localhost:7100/MarFullVideoV2', '_blank')}>
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
