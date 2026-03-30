import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Dial Color — luxury watch industry palette */
export function SlideV2Feb_07() {
    return (
        <SimpleBarSlide
            title='DIAL COLOR'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Black',    count: 50, color: '#1C1C1C' },  // rich charcoal-black
                { label: 'Blue',     count: 35, color: '#1B3A5C' },  // deep ocean navy
                { label: 'White',    count: 20, color: '#F0EDE8' },  // warm ivory
                { label: 'Grey',     count: 19, color: '#7A7C7E' },  // brushed steel
                { label: 'Green',    count: 17, color: '#2C4A3A' },  // British racing / forest
                { label: 'Silver',   count: 12, color: '#B0AEA9' },  // platinum/rhodium
                { label: 'Skeleton', count: 11, color: '#9E8B6F' },  // aged brass/movement
                { label: 'Brown',    count: 8,  color: '#5A3325' },  // dark cognac
                { label: 'Red',      count: 8,  color: '#8C1F1F' },  // deep carmine/burgundy
                { label: 'Beige',    count: 7,  color: '#D2C4A8' },  // champagne/sand
            ]}
        />
    )
}
