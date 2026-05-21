import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Case Height — top 10 by count, sorted by height DESC */
export function SlideV2Apr_12() {
    return (
        <SimpleBarSlide
            title='CASE HEIGHT'
            subtitle='APR 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '15 mm', count: 24  },
                { label: '14 mm', count: 38  },
                { label: '13 mm', count: 41  },
                { label: '12 mm', count: 113 },
                { label: '11 mm', count: 106 },
                { label: '10 mm', count: 79  },
                { label: '9 mm',  count: 89  },
                { label: '8 mm',  count: 71  },
                { label: '7 mm',  count: 70  },
                { label: '6 mm',  count: 42  },
            ]}
        />
    )
}
