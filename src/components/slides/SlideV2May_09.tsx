import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Price Ranges — ascending price order, excl $0–$500 and N/A */
export function SlideV2May_09() {
    return (
        <SimpleBarSlide
            title='PRICE RANGES'
            subtitle='MAY 2026 NOVELTIES'
            noUppercaseLabels
            footnote='Novelties excluding $0 – $500 and N/A price ranges.'
            rows={[
                { label: '$500–$1,000',         count: 7  },
                { label: '$1,000–$2,500',        count: 46 },
                { label: '$2,500–$5,000',        count: 41 },
                { label: '$5,000–$10,000',       count: 48 },
                { label: '$10,000–$25,000',      count: 33 },
                { label: '$25,000–$50,000',      count: 27 },
                { label: '$50,000–$100,000',     count: 29 },
                { label: '$100,000–$250,000',    count: 9  },
                { label: '$250,000–$500,000',    count: 3  },
                { label: '$500,000–$1,000,000',  count: 3  },
            ]}
        />
    )
}
