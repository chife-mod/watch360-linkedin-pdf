import './v2.css'
import './SlideV2_01.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'
import COVER_IMG from '/assets/images/Feb-Cover-Watch.png'

export function SlideV2Feb_01() {
    return (
        <div className="v2-slide slide01">
            {/* Full sand background */}
            <div className="slide01__sand" />

            {/* Dark panel */}
            <div className="slide01__dark" />

            {/* Header */}
            <div className="v2-header">
                <div className="v2-header__logo">
                    <img src={LOGO_SYMBOL} alt="Watch360" className="v2-header__logo-symbol" />
                    <img src={LOGO_WORDMARK} alt="WATCH360" className="v2-header__logo-wordmark" />
                </div>
                <p className="v2-header__url">www.watch360.ai</p>
            </div>

            {/* Title: WATCH NOVELTIES (gold, 2 lines) */}
            <p className="v2-title">{'WATCH\nNOVELTIES'}</p>

            {/* FEB 2026 — charcoal */}
            <p className="v2-title slide01__jan">FEB 2026</p>

            {/* Stat cards */}
            <div className="slide01__stats">
                <div className="slide01__card slide01__card--shadow">
                    <p className="slide01__num">215</p>
                    <p className="slide01__lbl">New Models</p>
                </div>
                <div className="slide01__card">
                    <p className="slide01__num">59</p>
                    <p className="slide01__lbl">Watch Brands</p>
                </div>
            </div>

            {/* Watch image — same layout as Jan */}
            <div className="slide01__img-wrap">
                <img src={COVER_IMG} alt="IWC Portugieser" className="slide01__img" />
            </div>
        </div>
    )
}
