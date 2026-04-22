import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Special Editions — 5 rows from Google Sheet */
export function SlideV2Mar_08() {
    return (
        <SimpleBarSlide
            title='SPECIAL EDITIONS'
            subtitle='MAR 2026 NOVELTIES'
            rows={[
                { label: 'Limited Edition',     count: 51 },
                { label: 'Partnership Edition', count: 16 },
                { label: 'Anniversary Edition', count: 3 },
                { label: 'Online Exclusive',    count: 2 },
                { label: 'Boutique Exclusive',  count: 1 },
            ]}
        />
    )
}
