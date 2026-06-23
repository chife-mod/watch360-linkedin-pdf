import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Case Material — top 10 from Google Sheet */
export function SlideV2May_05() {
    return (
        <SimpleBarSlide
            title='CASE MATERIAL'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 166 },
                { label: 'Titanium',        count: 34  },
                { label: 'Rose Gold',       count: 33  },
                { label: 'White Gold',      count: 15  },
                { label: 'Ceramic',         count: 10  },
                { label: 'Red Gold',        count: 8   },
                { label: 'Platinum',        count: 5   },
                { label: 'Carbon',          count: 2   },
                { label: 'Yellow Gold',     count: 2   },
                { label: 'Aluminum',        count: 2   },
            ]}
        />
    )
}
