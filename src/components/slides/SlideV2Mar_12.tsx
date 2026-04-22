import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Case Height — top 10 sorted by height DESC */
export function SlideV2Mar_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='MAR 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '17 mm', count: 1  },
                { label: '15 mm', count: 3  },
                { label: '14 mm', count: 8  },
                { label: '13 mm', count: 8  },
                { label: '12 mm', count: 67 },
                { label: '11 mm', count: 62 },
                { label: '10 mm', count: 16 },
                { label: '9 mm',  count: 8  },
                { label: '8 mm',  count: 15 },
                { label: '7 mm',  count: 11 },
            ]}
        />
    )
}
