import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Strap Material — top 10 from Google Sheet */
export function SlideV2Mar_06() {
    return (
        <SimpleBarSlide
            title='STRAP MATERIAL'
            subtitle='MAR 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 82 },
                { label: 'Rubber',          count: 40 },
                { label: 'Leather',         count: 35 },
                { label: 'Alligator',       count: 21 },
                { label: 'Polycarbonate',   count: 13 },
                { label: 'Velour',          count: 8 },
                { label: 'Calfskin',        count: 6 },
                { label: 'Silicone',        count: 5 },
                { label: 'Textile',         count: 4 },
                { label: 'White Gold',      count: 3 },
            ]}
        />
    )
}
