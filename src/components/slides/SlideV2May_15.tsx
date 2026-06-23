import { CollectionsSlide } from './CollectionsSlide'
import type { CollectionLine } from './CollectionsSlide'

import LOGO_BREITLING from '/assets/logos/breitling.svg'
import LOGO_JLC       from '/assets/logos/jaeger_lecoultre.svg'
import LOGO_UG        from '/assets/logos/universal_geneve.svg'
import LOGO_LONGINES  from '/assets/logos/longines.svg'
import LOGO_BREMONT   from '/assets/logos/bremont.svg'

import IMG_BREITLING_CHRONOMAT    from '/assets/watches/col_breitling_chronomat.png'
import IMG_JLC_REVERSO            from '/assets/watches/col_jaeger_lecoultre_reverso.png'
import IMG_UG_POLEROUTER          from '/assets/watches/col_universal_geneve_polerouter.png'
import IMG_LONGINES_ELEGANCE      from '/assets/watches/col_longines_elegance.png'
import IMG_BREMONT_ALTITUDE       from '/assets/watches/col_bremont_altitude.png'

const LINES: CollectionLine[] = [
    { label: 'Breitling Chronomat',        count: 22, logo: LOGO_BREITLING, photo: IMG_BREITLING_CHRONOMAT },
    { label: 'Jaeger-LeCoultre Reverso',   count: 14, logo: LOGO_JLC,       photo: IMG_JLC_REVERSO         },
    { label: 'Universal Geneve Polerouter',count: 12, logo: LOGO_UG,        photo: IMG_UG_POLEROUTER       },
    { label: 'Longines Elegance',          count: 11, logo: LOGO_LONGINES,  photo: IMG_LONGINES_ELEGANCE   },
    { label: 'Bremont Altitude',           count: 11, logo: LOGO_BREMONT,   photo: IMG_BREMONT_ALTITUDE    },
]

export function SlideV2May_15() {
    return (
        <CollectionsSlide
            subtitle='MAY 2026 NOVELTIES [1–5]'
            lines={LINES}
            max={22}
        />
    )
}
