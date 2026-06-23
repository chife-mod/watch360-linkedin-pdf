import './v2.css'
import './SlideV2_01.css'
import LOGO_SYMBOL from '/assets/logos/watch360-symbol.svg'
import LOGO_WORDMARK from '/assets/logos/watch360-wordmark.svg'
import WATCH_IMG from '/assets/images/May-Watch.png'

export function SlideV2May_01() {
    return (
        <div className="v2-slide slide01">
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

            {/* Watch image — exact Figma layout: container top:801 h:549, watch rotated -34.05deg */}
            <div style={{
                position: 'absolute',
                top: 801,
                left: 0,
                width: 1080,
                height: 549,
                overflow: 'hidden',
                zIndex: 4,
            }}>
                <div style={{
                    position: 'absolute',
                    left: -41,
                    top: -209,
                    width: 1162,
                    height: 1224,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{ transform: 'rotate(-34.05deg)', flexShrink: 0 }}>
                        <img
                            src={WATCH_IMG}
                            alt=""
                            style={{
                                width: 743,
                                height: 975,
                                objectFit: 'cover',
                                display: 'block',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
