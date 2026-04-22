import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Case Diameter — top 10 sorted by size DESC (matching Feb pattern) */
export function SlideV2Mar_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='MAR 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '46 mm', count: 3  },
                { label: '44 mm', count: 18 },
                { label: '43 mm', count: 10 },
                { label: '42 mm', count: 24 },
                { label: '41 mm', count: 28 },
                { label: '40 mm', count: 34 },
                { label: '39 mm', count: 42 },
                { label: '38 mm', count: 24 },
                { label: '37 mm', count: 9  },
                { label: '36 mm', count: 9  },
            ]}
        />
    )
}
