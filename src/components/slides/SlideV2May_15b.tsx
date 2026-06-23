import { CollectionsSlide } from './CollectionsSlide'
import type { CollectionLine } from './CollectionsSlide'

import LOGO_HAMILTON from '/assets/logos/hamilton.svg'
import LOGO_TAG      from '/assets/logos/tag_heuer.svg'
import LOGO_FC       from '/assets/logos/frederique_constant.svg'
import LOGO_UG       from '/assets/logos/universal_geneve.svg'
import LOGO_BALL     from '/assets/logos/ball_watch.svg'

import IMG_HAMILTON_KHAKI_NAVY        from '/assets/watches/col_hamilton_khaki_navy.png'
import IMG_TAG_AQUARACER              from '/assets/watches/col_tag_heuer_aquaracer.png'
import IMG_FC_CLASSICS                from '/assets/watches/col_frederique_constant_classics.png'
import IMG_UG_CABRIOLET               from '/assets/watches/col_universal_geneve_cabriolet.png'
import IMG_BALL_ROADMASTER            from '/assets/watches/col_ball_watch_roadmaster.png'

const LINES: CollectionLine[] = [
    { label: 'Hamilton Khaki Navy',              count: 8, logo: LOGO_HAMILTON, photo: IMG_HAMILTON_KHAKI_NAVY  },
    { label: 'TAG Heuer Aquaracer',              count: 8, logo: LOGO_TAG,      photo: IMG_TAG_AQUARACER        },
    { label: 'Frederique Constant Classic',      count: 7, logo: LOGO_FC,       photo: IMG_FC_CLASSICS          },
    { label: 'Universal Geneve Cabriolet',       count: 6, logo: LOGO_UG,       photo: IMG_UG_CABRIOLET         },
    { label: 'Ball Watch Roadmaster',            count: 6, logo: LOGO_BALL,     photo: IMG_BALL_ROADMASTER      },
]

export function SlideV2May_15b() {
    return (
        <CollectionsSlide
            subtitle='MAY 2026 NOVELTIES [6–10]'
            lines={LINES}
            max={22}
        />
    )
}
