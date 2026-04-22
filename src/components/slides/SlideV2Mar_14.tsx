import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Watch Functions — top 10 from Google Sheet */
export function SlideV2Mar_14() {
    return (
        <SimpleBarSlide
            title='FUNCTION'
            subtitle='MAR 2026 NOVELTIES'
            rows={[
                { label: 'Date',                  count: 90 },
                { label: 'Sweeping Seconds',      count: 86 },
                { label: 'Hacking Seconds',       count: 64 },
                { label: 'Chronograph',           count: 23 },
                { label: 'Power Reserve Indicator', count: 10 },
                { label: 'Calendar',              count: 7 },
                { label: 'Tourbillon',            count: 6 },
                { label: 'Dual Time',             count: 6 },
                { label: 'Retrograde',            count: 6 },
                { label: 'Day/Night Indicator',   count: 5 },
            ]}
        />
    )
}
