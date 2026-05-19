import { CollectionsSlide } from './CollectionsSlide'
import type { CollectionLine } from './CollectionsSlide'

// Brand logos — ALL from MinIO ✅
import LOGO_JLC      from '/assets/logos/jaeger_lecoultre.svg'
import LOGO_PIAGET   from '/assets/logos/piaget.svg'
import LOGO_HUBLOT   from '/assets/logos/hublot.svg'
import LOGO_ROLEX    from '/assets/logos/rolex.svg'
import LOGO_PATEK    from '/assets/logos/patek_philippe.svg'

// Collection watch photos — ALL from MinIO ✅
import IMG_JLC_REV   from '/assets/watches/col_jaeger_lecoultre_reverso.png'
import IMG_PIAGET_P  from '/assets/watches/col_piaget_polo.png'
import IMG_HUBLOT_BB from '/assets/watches/col_hublot_big_bang.png'
import IMG_ROLEX_OP  from '/assets/watches/col_rolex_oyster_perpetual.png'
import IMG_PATEK_GC  from '/assets/watches/col_patek_philippe_grand_complications.png'

/* Apr 2026 Collections [6–10] — from Google Sheet */
const LINES: CollectionLine[] = [
    { label: 'Jaeger-LeCoultre Reverso',           count: 13, logo: LOGO_JLC,    photo: IMG_JLC_REV   },
    { label: 'Piaget Polo',                        count: 13, logo: LOGO_PIAGET, photo: IMG_PIAGET_P  },
    { label: 'Hublot Big Bang',                    count: 12, logo: LOGO_HUBLOT, photo: IMG_HUBLOT_BB },
    { label: 'Rolex Oyster Perpetual',             count: 11, logo: LOGO_ROLEX,  photo: IMG_ROLEX_OP  },
    { label: 'Patek Philippe Grand Complications', count: 10, logo: LOGO_PATEK,  photo: IMG_PATEK_GC  },
]

export function SlideV2Apr_15b() {
    return (
        <CollectionsSlide
            subtitle='APR 2026 NOVELTIES [6–10]'
            lines={LINES}
            max={41}
        />
    )
}
