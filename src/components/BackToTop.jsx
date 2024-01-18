import React, { useState } from "react";
import backtopicon from "../assets/images/back-to-top.webp";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce flex justify-center items-center p-2 w-[45px] h-[45px] rounded-[100%] fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300 "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center"><img className="w-full" src={backtopicon} alt="backtoptop" /></div>
            </button>
        </div>
    );
};

export default BackToTop;