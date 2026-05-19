import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Strap Material — top 10 from Google Sheet */
export function SlideV2Apr_06() {
    return (
        <SimpleBarSlide
            title='STRAP MATERIAL'
            subtitle='APR 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 274 },
                { label: 'Alligator',       count: 147 },
                { label: 'Rubber',          count: 96 },
                { label: 'Leather',         count: 64 },
                { label: 'Calfskin',        count: 47 },
                { label: 'Titanium',        count: 40 },
                { label: 'Rose Gold',       count: 21 },
                { label: 'Gold',            count: 19 },
                { label: 'Ceramic',         count: 13 },
                { label: 'White Gold',      count: 10 },
            ]}
        />
    )
}
