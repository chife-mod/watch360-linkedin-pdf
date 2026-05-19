import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Watch Functions — top 10 from Google Sheet */
export function SlideV2Apr_14() {
    return (
        <SimpleBarSlide
            title='FUNCTION'
            subtitle='APR 2026 NOVELTIES'
            rows={[
                { label: 'Sweeping Seconds',        count: 326 },
                { label: 'Date',                    count: 296 },
                { label: 'Hacking Seconds',         count: 184 },
                { label: 'Chronograph',             count: 96 },
                { label: 'Power Reserve Indicator', count: 52 },
                { label: 'Moon Phase',              count: 48 },
                { label: 'Tourbillon',              count: 42 },
                { label: 'Dual Time',               count: 37 },
                { label: 'Calendar',                count: 37 },
                { label: 'Day/Night Indicator',     count: 31 },
            ]}
        />
    )
}
