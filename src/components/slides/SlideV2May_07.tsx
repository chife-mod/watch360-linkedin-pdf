import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Dial Color — top 10 from Google Sheet */
export function SlideV2May_07() {
    return (
        <SimpleBarSlide
            title='DIAL COLOR'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: 'Blue',        count: 75 },
                { label: 'White',       count: 41 },
                { label: 'Black',       count: 34 },
                { label: 'Silver',      count: 23 },
                { label: 'Green',       count: 22 },
                { label: 'Brown',       count: 13 },
                { label: 'Multi-Color', count: 13 },
                { label: 'Skeleton',    count: 10 },
                { label: 'Grey',        count: 8  },
                { label: 'Beige',       count: 7  },
            ]}
        />
    )
}
