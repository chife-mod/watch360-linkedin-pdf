import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Strap Material — top 10 from Google Sheet */
export function SlideV2May_06() {
    return (
        <SimpleBarSlide
            title='STRAP MATERIAL'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: 'Stainless Steel', count: 91 },
                { label: 'Alligator',       count: 65 },
                { label: 'Rubber',          count: 39 },
                { label: 'Leather',         count: 23 },
                { label: 'Titanium',        count: 17 },
                { label: 'N/A',             count: 9  },
                { label: 'Rose Gold',       count: 7  },
                { label: 'Fabric',          count: 6  },
                { label: 'White Gold',      count: 6  },
                { label: 'Silicone',        count: 4  },
            ]}
        />
    )
}
