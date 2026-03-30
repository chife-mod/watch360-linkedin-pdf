import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Case Height — first 10 rows in sheet order */
export function SlideV2Feb_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '9 mm',  count: 17 },
                { label: '8 mm',  count: 8  },
                { label: '7 mm',  count: 10 },
                { label: '6 mm',  count: 11 },
                { label: '5 mm',  count: 5  },
                { label: '4 mm',  count: 1  },
                { label: '18 mm', count: 1  },
                { label: '16 mm', count: 1  },
                { label: '15 mm', count: 5  },
                { label: '14 mm', count: 11 },
            ]}
        />
    )
}
