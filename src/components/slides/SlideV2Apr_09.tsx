import { SimpleBarSlide } from './SimpleBarSlide'

/* Apr 2026 Price Ranges — ascending price order, excl $0–$500, N/A and $1M+ */
export function SlideV2Apr_09() {
    return (
        <SimpleBarSlide
            title='PRICE RANGES'
            subtitle='APR 2026 NOVELTIES'
            noUppercaseLabels
            footnote='Novelties excluding $0 – $500 and N/A price ranges.'
            rows={[
                { label: '$500–$1,000',             count: 30 },
                { label: '$1,000–$2,500',           count: 78 },
                { label: '$2,500–$5,000',           count: 93 },
                { label: '$5,000–$10,000',          count: 70 },
                { label: '$10,000–$25,000',         count: 126 },
                { label: '$25,000–$50,000',         count: 88 },
                { label: '$50,000–$100,000',        count: 63 },
                { label: '$100,000–$250,000',       count: 69 },
                { label: '$250,000–$500,000',       count: 16 },
                { label: '$500,000–$1,000,000',     count: 8 },
            ]}
        />
    )
}
