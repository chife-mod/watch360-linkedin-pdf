import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Diameter — top 10 */
export function SlideV2Feb_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '40 mm', count: 40 },
                { label: '39 mm', count: 30 },
                { label: '38 mm', count: 26 },
                { label: '42 mm', count: 22 },
                { label: '41 mm', count: 14 },
                { label: '43 mm', count: 14 },
                { label: '36 mm', count: 8 },
                { label: '47 mm', count: 7 },
                { label: '45 mm', count: 6 },
                { label: '24 mm', count: 6 },
            ]}
        />
    )
}
