import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Case Material — top 10 from Google Sheet */
export function SlideV2Mar_05() {
    return (
        <SimpleBarSlide
            title='CASE MATERIAL'
            subtitle='MAR 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 161 },
                { label: 'White Gold',      count: 13 },
                { label: 'Polycarbonate',   count: 13 },
                { label: 'Titanium',        count: 12 },
                { label: 'Platinum',        count: 5 },
                { label: 'Yellow Gold',     count: 5 },
                { label: 'Gold',            count: 4 },
                { label: 'Bio-Sourced',     count: 4 },
                { label: 'Ceramic',         count: 3 },
                { label: 'Rose Gold',       count: 2 },
            ]}
        />
    )
}
