import React, { useState } from "react";
import Gas from "../../images/gas-station.png";

export default function CarBox(e) {
    const [isLiked, setIsLiked] = useState(false);

    const changeLiked = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <React.Fragment>
            <section className="car">
                <div className="car-header">
                    <div className="title">{e.title}</div>
                    <span onClick={() => changeLiked()}>
                        {isLiked ? (
                            <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
                        ) : (
                            <i class="fa-regular fa-heart"></i>
                        )}
                    </span>
                </div>
                <div className="sport">{e.sport}</div>
                <img className="cars-car" src={e.img} alt="#" />

                <div className="car-tools">
                    <div className="tools">
                        <img src={Gas} alt="#" />
                        <div className="90L">{e.oil}</div>
                    </div>
                    <div className="tools">
                        <img src={Gas} alt="#" />
                        <div className="90L">{e.oil}</div>
                    </div>
                    <div className="tools">
                        <img src={Gas} alt="#" />
                        <div className="90L">{e.oil}</div>
                    </div>
                </div>

                <div className="car-footer">
                    <div className="price">
                        {e.price} <span>day</span>
                    </div>
                    <button className="car-btn">Rent Now</button>
                </div>
            </section>
        </React.Fragment>
    );
}
