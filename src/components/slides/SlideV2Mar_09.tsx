import { SimpleBarSlide } from './SimpleBarSlide'

/* Mar 2026 Price Ranges — ascending price order, excl $0–$500 and N/A */
export function SlideV2Mar_09() {
    return (
        <SimpleBarSlide
            title='PRICE RANGES'
            subtitle='MAR 2026 NOVELTIES'
            noUppercaseLabels
            footnote='Novelties excluding $0 – $500 and N/A price ranges.'
            rows={[
                { label: '$500–$1,000',            count: 22 },
                { label: '$1,000–$2,500',           count: 56 },
                { label: '$2,500–$5,000',           count: 22 },
                { label: '$5,000–$10,000',          count: 13 },
                { label: '$10,000–$25,000',         count: 11 },
                { label: '$25,000–$50,000',         count: 9  },
                { label: '$50,000–$100,000',        count: 16 },
                { label: '$100,000–$250,000',       count: 10 },
                { label: '$500,000–$1,000,000',     count: 1  },
                { label: '$1,000,000 and up',       count: 1  },
            ]}
        />
    )
}
