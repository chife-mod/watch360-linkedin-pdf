import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Watch Functions — top 10 — title: FUNCTIONS (1 line, consistent) */
export function SlideV2Feb_14() {
    return (
        <SimpleBarSlide
            title='FUNCTIONS'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Date',               count: 93 },
                { label: 'Sweeping Seconds',    count: 76 },
                { label: 'Hacking Seconds',     count: 50 },
                { label: 'Chronograph',         count: 37 },
                { label: 'Tourbillon',          count: 11 },
                { label: 'Dual Time',           count: 7 },
                { label: 'Tachymeter',          count: 7 },
                { label: 'Moon Phase',          count: 7 },
                { label: 'Calendar',            count: 6 },
                { label: 'Jumping Hours',       count: 6 },
            ]}
        />
    )
}
