import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Strap Material — from screenshot: top 10 */
export function SlideV2Feb_06() {
    return (
        <SimpleBarSlide
            title='STRAP MATERIAL'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel',         count: 83 },
                { label: 'Rubber',                  count: 28 },
                { label: 'Leather',                 count: 24 },
                { label: 'Alligator',               count: 14 },
                { label: 'Calfskin',                count: 14 },
                { label: 'Polycarbonate',           count: 10 },
                { label: 'Textile',                 count: 6 },
                { label: 'Titanium',                count: 6 },
                { label: 'Bio-Sourced',             count: 2 },
                { label: 'Nubuck',                  count: 3 },
            ]}
        />
    )
}
