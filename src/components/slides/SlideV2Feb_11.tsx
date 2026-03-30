import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Diameter — first 10 rows in sheet order (47mm→38mm) */
export function SlideV2Feb_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '47 mm', count: 7  },
                { label: '46 mm', count: 6  },
                { label: '45 mm', count: 6  },
                { label: '44 mm', count: 5  },
                { label: '43 mm', count: 14 },
                { label: '42 mm', count: 22 },
                { label: '41 mm', count: 14 },
                { label: '40 mm', count: 40 },
                { label: '39 mm', count: 30 },
                { label: '38 mm', count: 26 },
            ]}
        />
    )
}
