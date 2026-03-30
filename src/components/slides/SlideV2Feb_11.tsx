import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Diameter — alphabetically sorted, top 10 */
export function SlideV2Feb_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '18 mm', count: 2 },
                { label: '19 mm', count: 2 },
                { label: '20 mm', count: 2 },
                { label: '21 mm', count: 1 },
                { label: '23 mm', count: 4 },
                { label: '24 mm', count: 6 },
                { label: '25 mm', count: 1 },
                { label: '30 mm', count: 2 },
                { label: '32 mm', count: 5 },
                { label: '33 mm', count: 2 },
            ]}
        />
    )
}
