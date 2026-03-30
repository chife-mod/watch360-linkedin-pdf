import { SimpleBarSlide } from './SimpleBarSlide'

/* Feb 2026 Movement — all 5 rows */
export function SlideV2Feb_13() {
    return (
        <SimpleBarSlide
            title='MOVEMENT'
            subtitle='FEB 2026 NOVELTIES'
            rows={[
                { label: 'Automatic',    count: 141 },
                { label: 'Quartz',       count: 51 },
                { label: 'Manual',       count: 13 },
                { label: 'Solar Quartz', count: 8 },
                { label: 'Smart',        count: 1 },
            ]}
        />
    )
}
