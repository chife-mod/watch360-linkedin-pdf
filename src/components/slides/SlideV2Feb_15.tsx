import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Product Lines — top 10 */
export function SlideV2Feb_15() {
    return (
        <SimpleBarSlide
            title='PRODUCT LINES'
            subtitle='FEB 2026 NOVELTIES'
            noUppercaseLabels
            rows={[
                { label: 'Audemars Piguet Royal Oak',    count: 11 },
                { label: 'D1 Milano Ultra Thin',         count: 9 },
                { label: 'Nivada F77 MKII',              count: 9 },
                { label: 'Delbana Rotonda',              count: 8 },
                { label: 'Casio EDIFICE',                count: 8 },
                { label: 'Raymond Weil Millesime',       count: 7 },
                { label: 'Hublot Big Bang',              count: 7 },
                { label: 'Hamilton Jazzmaster',          count: 7 },
                { label: 'D1 Milano Polycarbon',         count: 5 },
                { label: 'D1 Milano Polychrono',         count: 5 },
            ]}
        />
    )
}
