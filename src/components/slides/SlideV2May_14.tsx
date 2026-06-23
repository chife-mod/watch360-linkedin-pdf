import { SimpleBarSlide } from './SimpleBarSlide'

/* May 2026 Functions — top 10 from Google Sheet */
export function SlideV2May_14() {
    return (
        <SimpleBarSlide
            title='FUNCTIONS'
            subtitle='MAY 2026 NOVELTIES'
            rows={[
                { label: 'Sweeping Seconds',        count: 178 },
                { label: 'Date',                    count: 110 },
                { label: 'Hacking Seconds',         count: 83  },
                { label: 'Chronograph',             count: 51  },
                { label: 'Power Reserve Indicator', count: 24  },
                { label: 'Dual Time',               count: 21  },
                { label: 'Day/Night Indicator',     count: 14  },
                { label: 'World Timer',             count: 12  },
                { label: 'Tachymeter',              count: 10  },
                { label: 'Calendar',                count: 9   },
            ]}
        />
    )
}
