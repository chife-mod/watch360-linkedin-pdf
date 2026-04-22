import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Dial Color — top 10 from Google Sheet */
export function SlideV2Mar_07() {
    return (
        <SimpleBarSlide
            title='DIAL COLOR'
            subtitle='MAR 2026 NOVELTIES'
            rows={[
                { label: 'Blue',     count: 42, color: '#1B3A5C' },
                { label: 'Black',    count: 40, color: '#1C1C1C' },
                { label: 'Green',    count: 28, color: '#2C4A3A' },
                { label: 'Grey',     count: 19, color: '#7A7C7E' },
                { label: 'White',    count: 17, color: '#F0EDE8' },
                { label: 'Silver',   count: 15, color: '#B0AEA9' },
                { label: 'Pink',     count: 9,  color: '#D4A5A5' },
                { label: 'Skeleton', count: 8,  color: '#9E8B6F' },
                { label: 'Beige',    count: 8,  color: '#D2C4A8' },
                { label: 'Brown',    count: 7,  color: '#5A3325' },
            ]}
        />
    )
}
