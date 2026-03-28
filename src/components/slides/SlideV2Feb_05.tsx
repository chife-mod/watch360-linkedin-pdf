import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Material — from screenshot: top 10 */
export function SlideV2Feb_05() {
    return (
        <SimpleBarSlide
            title='CASE MATERIAL'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 142 },
                { label: 'Titanium',         count: 17 },
                { label: 'Rose Gold',        count: 12 },
                { label: 'Polycarbonate',    count: 10 },
                { label: 'Ceramic',          count: 8 },
                { label: 'Gold',             count: 5 },
                { label: 'White Gold',       count: 3 },
                { label: 'Sapphire',         count: 3 },
                { label: 'Aluminum',         count: 3 },
                { label: 'Bronze',           count: 2 },
            ]}
        />
    )
}
