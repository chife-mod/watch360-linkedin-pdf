import './v2.css'
import './SlideV2_01.css'
import './SlideV2May_01.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'
import COVER_IMG from '/assets/images/May-Cover_x2.png'

export function SlideV2May_01() {
    return (
        <div className="v2-slide slide01 slide01may">
            <div className="slide01__sand" />
            <div className="slide01__dark" />

            <div className="v2-header">
                <div className="v2-header__logo">
                    <img src={LOGO_SYMBOL} alt="Watch360" className="v2-header__logo-symbol" />
                    <img src={LOGO_WORDMARK} alt="WATCH360" className="v2-header__logo-wordmark" />
                </div>
                <p className="v2-header__url">www.watch360.ai</p>
            </div>

            <p className="v2-title">{'WATCH\nNOVELTIES'}</p>
            <p className="v2-title slide01__jan">MAY 2026</p>

            <div className="slide01__stats">
                <div className="slide01__card slide01__card--shadow">
                    <p className="slide01__num">280</p>
                    <p className="slide01__lbl">New Models</p>
                </div>
                <div className="slide01__card">
                    <p className="slide01__num">64</p>
                    <p className="slide01__lbl">Watch Brands</p>
                </div>
            </div>

            <div className="slide01__img-wrap">
                <img src={COVER_IMG} alt="Watch Cover" className="slide01__img" />
            </div>
        </div>
    )
}
