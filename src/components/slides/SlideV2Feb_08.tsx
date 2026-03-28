import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Special Editions — 4 rows (Jan had 3, Feb has 4 — use all) */
export function SlideV2Feb_08() {
    return (
        <SimpleBarSlide
            title='SPECIAL EDITIONS'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Limited Edition',     count: 53 },
                { label: 'Partnership Edition', count: 21 },
                { label: 'Anniversary Edition', count: 6 },
                { label: 'Boutique Exclusive',  count: 1 },
            ]}
        />
    )
}
