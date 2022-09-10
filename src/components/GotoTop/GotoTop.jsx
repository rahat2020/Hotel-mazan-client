import React, { useEffect, useState } from 'react';
import './GotoTop.css';

const GotoTop = () => {
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const [isVisible, setIsVisible] = useState(false);
    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
    return (
        <>
            {
                isVisible &&
                (<div className="Gototop" onClick={gototop}>
                    <div className="topBtn__container">
                            <i className="fa-solid fa-arrow-up arrow__up"></i>
                        {/* <button className="gotop__btn">
                        </button> */}
                    </div>
                </div>)
            }
        </>
    )
}

export default GotoTop