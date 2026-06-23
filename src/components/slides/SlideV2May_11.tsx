import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Case Diameter — top 10 from Google Sheet */
export function SlideV2May_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: '40 mm', count: 60 },
                { label: '39 mm', count: 39 },
                { label: '42 mm', count: 34 },
                { label: '41 mm', count: 18 },
                { label: '43 mm', count: 16 },
                { label: '36 mm', count: 13 },
                { label: '37 mm', count: 13 },
                { label: '34 mm', count: 11 },
                { label: '38 mm', count: 11 },
                { label: '44 mm', count: 9  },
            ]}
        />
    )
}
