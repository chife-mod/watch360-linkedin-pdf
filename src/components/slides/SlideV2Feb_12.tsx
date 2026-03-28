import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Height — top 10 */
export function SlideV2Feb_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '11 mm', count: 37 },
                { label: '12 mm', count: 35 },
                { label: 'N/A',   count: 28 },
                { label: '10 mm', count: 26 },
                { label: '13 mm', count: 18 },
                { label: '9 mm',  count: 17 },
                { label: '14 mm', count: 11 },
                { label: '6 mm',  count: 11 },
                { label: '7 mm',  count: 10 },
                { label: '8 mm',  count: 8 },
            ]}
        />
    )
}
