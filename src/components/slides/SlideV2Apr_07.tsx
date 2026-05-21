import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Dial Color — top 10 from Google Sheet */
export function SlideV2Apr_07() {
    return (
        <SimpleBarSlide
            title='DIAL COLOR'
            subtitle='APR 2026 NOVELTIES'
            rows={[
                { label: 'Blue',        count: 170 },
                { label: 'Black',       count: 113 },
                { label: 'White',       count: 96 },
                { label: 'Skeleton',    count: 67 },
                { label: 'Green',       count: 64 },
                { label: 'Silver',      count: 60 },
                { label: 'Grey',        count: 55 },
                { label: 'Multi-Color', count: 43 },
                { label: 'Beige',       count: 28 },
                { label: 'Brown',       count: 22 },
            ]}
        />
    )
}
