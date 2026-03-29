import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Price Ranges — 11 rows (screenshot), noUppercase for $ labels */
export function SlideV2Feb_09() {
    return (
        <SimpleBarSlide
            title='PRICE RANGES'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            footnote='Novelties excluding $0 – $500 price range.'
            rows={[
                { label: '$0–$500',             count: 48 },
                { label: '$2,500–$5,000',        count: 35 },
                { label: '$1,000–$2,500',        count: 30 },
                { label: 'N/A',                  count: 23 },
                { label: '$500–$1,000',          count: 16 },
                { label: '$25,000–$50,000',      count: 15 },
                { label: '$5,000–$10,000',       count: 13 },
                { label: '$10,000–$25,000',      count: 13 },
                { label: '$100,000–$250,000',    count: 11 },
                { label: '$50,000–$100,000',     count: 8 },
            ]}
        />
    )
}
