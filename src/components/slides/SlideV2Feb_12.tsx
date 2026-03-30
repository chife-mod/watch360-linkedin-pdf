import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Height — alphabetically sorted, top 10 */
export function SlideV2Feb_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '10 mm', count: 26 },
                { label: '11 mm', count: 37 },
                { label: '12 mm', count: 35 },
                { label: '13 mm', count: 18 },
                { label: '14 mm', count: 11 },
                { label: '15 mm', count: 5 },
                { label: '16 mm', count: 1 },
                { label: '18 mm', count: 1 },
                { label: '4 mm',  count: 1 },
                { label: '5 mm',  count: 5 },
            ]}
        />
    )
}
