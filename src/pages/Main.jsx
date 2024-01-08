import React from "react";
import "scss/_main.scss"
import Shower from "img/big_fotos/showreel2.png"

export default function Main() {
    return(
        <section className="main__wrapper">
            <div className="main__content">
                <h1 className="text__title">
                    Агентство мультимедийного концептуального контента и прямых трансляций для бизнеса
                </h1>
                <div className="logo__container">
                    <img className="main__logo" src={Shower} alt="" />
                </div>
            </div>
        </section>
    )
};
