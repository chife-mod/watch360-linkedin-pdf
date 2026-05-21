import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Special Editions — 4 rows from Google Sheet */
export function SlideV2Apr_08() {
    return (
        <SimpleBarSlide
            title='SPECIAL EDITIONS'
            subtitle='APR 2026 NOVELTIES'
            rows={[
                { label: 'Limited Edition',     count: 180 },
                { label: 'Anniversary Edition', count: 27 },
                { label: 'Partnership Edition', count: 17 },
                { label: 'Boutique Exclusive',  count: 4 },
            ]}
        />
    )
}
