import { CollectionsSlide } from './CollectionsSlide'
import type { CollectionLine } from './CollectionsSlide'

// Brand logos — ALL from MinIO ✅
import LOGO_ROLEX    from '/assets/logos/rolex.svg'
import LOGO_PATEK    from '/assets/logos/patek_philippe.svg'
import LOGO_CHARRIOL from '/assets/logos/charriol.svg'
import LOGO_TUDOR    from '/assets/logos/tudor.svg'
import LOGO_EDOX     from '/assets/logos/edox.svg'

// Collection watch photos — ALL from MinIO ✅
import IMG_ROLEX_DJ    from '/assets/watches/col_rolex_datejust.png'
import IMG_PATEK_RH    from '/assets/watches/col_patek_philippe_rare_handcrafts.png'
import IMG_CHARRIOL_ST from '/assets/watches/col_charriol_st_tropez.png'
import IMG_TUDOR_R     from '/assets/watches/col_tudor_royal.png'
import IMG_EDOX_GO     from '/assets/watches/col_edox_grand_ocean.png'

/* Apr 2026 Collections [1–5] — from Google Sheet */
const LINES: CollectionLine[] = [
    { label: 'Rolex Datejust',                 count: 41, logo: LOGO_ROLEX,    photo: IMG_ROLEX_DJ    },
    { label: 'Patek Philippe Rare Handcrafts', count: 31, logo: LOGO_PATEK,    photo: IMG_PATEK_RH    },
    { label: 'Charriol ST-TROPEZ',             count: 24, logo: LOGO_CHARRIOL, photo: IMG_CHARRIOL_ST },
    { label: 'Tudor Royal',                    count: 23, logo: LOGO_TUDOR,    photo: IMG_TUDOR_R     },
    { label: 'Edox Grand Ocean',               count: 22, logo: LOGO_EDOX,     photo: IMG_EDOX_GO     },
]

export function SlideV2Apr_15() {
    return (
        <CollectionsSlide
            subtitle='APR 2026 NOVELTIES [1–5]'
            lines={LINES}
            max={41}
        />
    )
}
