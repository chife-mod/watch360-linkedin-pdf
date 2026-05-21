import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Case Material — top 10 from Google Sheet */
export function SlideV2Apr_05() {
    return (
        <SimpleBarSlide
            title='CASE MATERIAL'
            subtitle='APR 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 411 },
                { label: 'Titanium',        count: 91 },
                { label: 'Rose Gold',       count: 89 },
                { label: 'White Gold',      count: 58 },
                { label: 'Yellow Gold',     count: 31 },
                { label: 'Platinum',        count: 29 },
                { label: 'Ceramic',         count: 25 },
                { label: 'Red Gold',        count: 11 },
                { label: 'Gold',            count: 10 },
                { label: 'Carbon',          count: 8 },
            ]}
        />
    )
}
