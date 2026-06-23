import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Case Height — top 10 from Google Sheet */
export function SlideV2May_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: '12 mm', count: 44 },
                { label: '9 mm',  count: 33 },
                { label: '13 mm', count: 32 },
                { label: '10 mm', count: 30 },
                { label: 'N/A',   count: 29 },
                { label: '11 mm', count: 28 },
                { label: '8 mm',  count: 27 },
                { label: '14 mm', count: 16 },
                { label: '7 mm',  count: 15 },
                { label: '6 mm',  count: 14 },
            ]}
        />
    )
}
