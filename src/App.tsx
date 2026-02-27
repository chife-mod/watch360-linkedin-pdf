import { useState, useRef, useEffect, useCallback } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './styles/global.css'
import { Slide2 } from './components/slides/Slide2'
import { Slide3 } from './components/slides/Slide3'
import { Slide4 } from './components/slides/Slide4'
import { Slide5 } from './components/slides/Slide5'
import LOGO_BVLGARI from '/assets/brand-logos/bvlgari.svg'
import LOGO_CITIZEN from '/assets/brand-logos/citizen.svg'
import LOGO_ZENITH from '/assets/brand-logos/zenith.svg'
import LOGO_ALPINA from '/assets/brand-logos/alpina.svg'
import LOGO_PEQUIGNET from '/assets/brand-logos/pequignet.svg'

const SLIDE_W = 1080
const SLIDE_H = 1350
const GAP = 32      // px between slides
const HUD_H = 72      // fixed bottom bar height
const SLIDES_COUNT = 5

const SLIDE4_BRANDS = [
    { name: 'Bvlgari', count: 7, logo: LOGO_BVLGARI },
    { name: 'Citizen', count: 7, logo: LOGO_CITIZEN },
    { name: 'Zenith', count: 6, logo: LOGO_ZENITH },
    { name: 'Alpina', count: 5, logo: LOGO_ALPINA },
    { name: 'Pequignet', count: 5, logo: LOGO_PEQUIGNET },
]

const computeAutoScale = () =>
    Math.min(
        window.innerWidth / SLIDE_W,
        (window.innerHeight - HUD_H - 80) / SLIDE_H,
    ) * 0.97

function App() {
    const [scale, setScale] = useState(computeAutoScale)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isExporting, setIsExporting] = useState(false)

    // Keep a ref in sync for use inside event handlers (avoids stale closure)
    const activeRef = useRef(0)
    const userAdjRef = useRef(false)

    // Debounce token for wheel events
    const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    /* ── Auto-fit scale on resize ── */
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

    /* stride = visual width of one slide slot + gap */
    const slideStride = SLIDE_W * scale + GAP

    const deckRef = useRef<HTMLDivElement>(null)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])

    /* ── Navigate to a specific slide ── */
    const scrollTo = useCallback((idx: number) => {
        const deck = deckRef.current
        if (!deck) return
        const clamped = Math.max(0, Math.min(SLIDES_COUNT - 1, idx))
        deck.scrollTo({ left: clamped * slideStride, behavior: 'smooth' })
        setActiveIndex(clamped)
        activeRef.current = clamped
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideStride])

    /* ── Sync active index while the user scrolls natively ── */
    const onScroll = () => {
        const deck = deckRef.current
        if (!deck) return
        const idx = Math.round(deck.scrollLeft / slideStride)
        if (idx !== activeRef.current) {
            setActiveIndex(idx)
            activeRef.current = idx
        }
    }

    /* ── Mouse wheel → snap one slide at a time (debounced) ──
       Best practice: translate vertical delta into next/prev snap.
       Debounce prevents double-firing on fast wheel notches.        */
    useEffect(() => {
        const deck = deckRef.current
        if (!deck) return

        const onWheel = (e: WheelEvent) => {
            // Let natural horizontal trackpad swipes pass through
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

            e.preventDefault()

            // Ignore if already debouncing
            if (wheelTimer.current) return

            const dir = e.deltaY > 0 ? 1 : -1
            const next = Math.max(0, Math.min(SLIDES_COUNT - 1, activeRef.current + dir))
            scrollTo(next)

            // Block further wheel events for the duration of the scroll animation
            wheelTimer.current = setTimeout(() => { wheelTimer.current = null }, 550)
        }

        deck.addEventListener('wheel', onWheel, { passive: false })
        return () => deck.removeEventListener('wheel', onWheel)
    }, [scrollTo])

    /* ── Keyboard ← → navigation ── */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') scrollTo(activeRef.current + 1)
            if (e.key === 'ArrowLeft') scrollTo(activeRef.current - 1)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [scrollTo])

    /* ── PDF export ── */
    const handleSavePdf = async () => {
        const slideEl = slideRefs.current[activeIndex]
        if (!slideEl) return
        try {
            setIsExporting(true)
            // Remove scale so html2canvas sees native 1080×1350
            const prev = slideEl.style.transform
            slideEl.style.transform = 'none'
            await new Promise(r => setTimeout(r, 200))

            const canvas = await html2canvas(slideEl, {
                width: SLIDE_W, height: SLIDE_H,
                scale: 2, useCORS: true,
                backgroundColor: '#F0EFEE', logging: false,
            })
            slideEl.style.transform = prev

            const imgData = canvas.toDataURL('image/jpeg', 0.95)
            const pdf = new jsPDF({
                orientation: 'portrait', unit: 'px',
                format: [SLIDE_W, SLIDE_H], hotfixes: ['px_scaling'],
            })
            pdf.addImage(imgData, 'JPEG', 0, 0, SLIDE_W, SLIDE_H)
            pdf.save(`watch360-slide-${activeIndex + 2}.pdf`)
        } catch (err) {
            console.error(err)
        } finally {
            setIsExporting(false)
        }
    }

    const slides = [
        <Slide2 />,
        <Slide3 />,
        <Slide3
            subtitle="Rank 6–10 by Novelties"
            brands={SLIDE4_BRANDS}
            hint=""
            highlightFirst={false}
            globalMax={23}
        />,
        <Slide4 caption="" />,
        <Slide5 />,
    ]

    return (
        <>
            {/* ── Horizontal filmstrip: CSS scroll-snap handles snapping,
                no JS drag fighting it. Mouse wheel & keyboard snap 1 slide. ── */}
            <div
                ref={deckRef}
                className="slide-deck"
                onScroll={onScroll}
            /* No pointer drag — it fights scroll-snap and causes jitter.
               Trackpad two-finger swipe + wheel + buttons cover all cases. */
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`slide-outer${i === activeIndex ? ' slide-outer--active' : ''}`}
                        style={{ width: SLIDE_W * scale, height: SLIDE_H * scale }}
                        onClick={() => scrollTo(i)}
                    >
                        <div
                            ref={el => { slideRefs.current[i] = el }}
                            style={{
                                width: SLIDE_W, height: SLIDE_H,
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

            {/* ── Pagination ── */}
            <div className="pagination">
                <button
                    className="pagination-arrow"
                    onClick={() => scrollTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    aria-label="Previous slide"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {Array.from({ length: SLIDES_COUNT }).map((_, i) => (
                    <button
                        key={i}
                        className={`pagination-num${i === activeIndex ? ' pagination-num--active' : ''}`}
                        onClick={() => scrollTo(i)}
                        aria-label={`Slide ${i + 2}`}
                    >
                        {String(i + 1).padStart(2, '0')}
                    </button>
                ))}

                <button
                    className="pagination-arrow"
                    onClick={() => scrollTo(activeIndex + 1)}
                    disabled={activeIndex === SLIDES_COUNT - 1}
                    aria-label="Next slide"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* ── Bottom HUD ── */}
            <div className="scale-hud">
                <button className="scale-btn" onClick={dec} aria-label="Уменьшить">−</button>

                <div className="scale-track">
                    <input
                        type="range"
                        min={MIN} max={MAX} step={STEP} value={scale}
                        onChange={e => {
                            userAdjRef.current = true
                            setScale(clamp(parseFloat(e.target.value)))
                        }}
                        className="scale-slider"
                        aria-label="Масштаб"
                    />
                </div>

                <button className="scale-btn" onClick={inc} aria-label="Увеличить">+</button>
                <span className="scale-label">{Math.round(scale * 100)}%</span>

                <div className="hud-divider" />

                <button
                    className="save-pdf-btn"
                    onClick={handleSavePdf}
                    disabled={isExporting}
                >
                    {isExporting ? 'Saving...' : 'Save PDF'}
                </button>
            </div>
        </>
    )
}

export default App
