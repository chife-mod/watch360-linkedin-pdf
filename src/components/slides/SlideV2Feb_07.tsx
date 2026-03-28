import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Dial Color — from screenshot: top 10 */
export function SlideV2Feb_07() {
    return (
        <SimpleBarSlide
            title='DIAL COLORS'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Black',      count: 51 },
                { label: 'Blue',       count: 35 },
                { label: 'White',      count: 20 },
                { label: 'Grey',       count: 19 },
                { label: 'Green',      count: 17 },
                { label: 'Silver',     count: 12 },
                { label: 'Skeleton',   count: 11 },
                { label: 'Brown',      count: 8 },
                { label: 'Red',        count: 8 },
                { label: 'Beige',      count: 7 },
            ]}
        />
    )
}
