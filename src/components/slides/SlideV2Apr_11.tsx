import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Case Diameter — top 10 by count, sorted by size DESC */
export function SlideV2Apr_11() {
    return (
        <SimpleBarSlide
            title='CASE DIAMETER'
            subtitle='APR 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: '44 mm', count: 31  },
                { label: '43 mm', count: 25  },
                { label: '42 mm', count: 72  },
                { label: '41 mm', count: 80  },
                { label: '40 mm', count: 129 },
                { label: '39 mm', count: 84  },
                { label: '38 mm', count: 63  },
                { label: '36 mm', count: 68  },
                { label: '34 mm', count: 30  },
                { label: '30 mm', count: 27  },
            ]}
        />
    )
}
