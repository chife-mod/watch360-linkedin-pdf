import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Special Editions — all 4 from Google Sheet */
export function SlideV2May_08() {
    return (
        <SimpleBarSlide
            title='SPECIAL EDITIONS'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: 'Limited Edition',     count: 85 },
                { label: 'Partnership Edition', count: 18 },
                { label: 'Anniversary Edition', count: 9  },
                { label: 'Boutique Exclusive',  count: 3  },
            ]}
        />
    )
}
