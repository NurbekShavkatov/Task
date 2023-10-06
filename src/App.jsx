import { Fragment, useState } from "react";
import { Svg } from "./Svg";
import "./app.css";
import PROFILE from "../images/Profil.png";
import filter from "../images/filter.png";
import Switch from "../images/Switch.png";
import Car from "../images/car.png";
import Car1 from "../images/car (1).png";
import Car2 from "../images/Car (2).png";
import Car3 from "../images/Car (3).png";
import Gas from "../images/gas-station.png";
import round from "../images/round.png";

const obj = [
    {
        location: "Locations",
        select: "Select your city",
    },
];
const arr = [
    {
        title: "Koenigsegg",
        sport: "Sport",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$99/",
        rent: "Rent Now",
        img: Car,
        isLiked: false,
        id: 1,
    },
    {
        title: "Nissan GT - R",
        sport: "Sport",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        isLiked: false,
        img: Car1,
        id: 2,
    },

    {
        title: "Rolls - Royce",
        sport: "Sedan",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$96/",
        rent: "Rent Now",
        isLiked: false,
        img: Car2,
        id: 3,
    },
    {
        title: "Nissan GT - R",
        sport: "Sport",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        isLiked: false,
        img: Car3,
        id: 4,
    },
    {
        title: "All New Rush",
        sport: "SUV",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$72/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 5,
    },

    {
        title: "CR  - V",
        sport: "SUV",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car,
        isLiked: false,
        id: 6,
    },
    {
        title: "All New Terios",
        sport: "SUV",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$74/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 7,
    },
    {
        title: "CR  - V",
        sport: "Suv",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car2,
        isLiked: false,
        id: 8,
    },

    {
        title: "MG ZX Exclusice",
        sport: "Hatchback",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$76/",
        rent: "Rent Now",
        img: Car1,
        isLiked: false,
        id: 9,
    },
    {
        title: "Koenigsegg",
        sport: "Sport",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$99/",
        rent: "Rent Now",
        img: Car1,
        isLiked: false,
        id: 10,
    },
    {
        title: "New MG ZS",
        sport: "SUV",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car2,
        isLiked: false,
        id: 11,
    },

    {
        title: "MG ZX Excite",
        sport: "Hatchback",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$74/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 12,
    },
];
const object = [
    {
        about: "About",
        events: "How it works",
        blog: "Featured",
        podcast: "Partnership",
        invite: "Business Relation",
    },
    {
        about: "Community",
        events: "Events",
        blog: "Blog",
        podcast: "Podcast",
        invite: "Invite a friend",
    },
    {
        about: "Socials",
        events: "Discord",
        blog: "Instagram",
        podcast: "Twitter",
        invite: "Facebook",
    },
];

const App = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [openModul, setopenModul] = useState(false);
    const [data, setData] = useState(arr);

    function close() {
        isLiked = true;
    }

    function modul() {
        setopenModul(true);
    }
    const changeLiked = (id) => {
        setData((prev) => {
            return prev.map((el) => {
                if (el.id === id) {
                    return { ...el, isLiked: !el.isLiked };
                }
                return el;
            });
        });
    };

    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="wrapper">
            <header>
                <div className="left-header">
                    <div className="morent">Morent</div>

                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>

                        <div>
                            <input
                                type="text"
                                placeholder="Search something here"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            />
                        </div>
                        <img className="filter" src={filter} alt="#" />
                    </div>
                </div>

                <div className="right-header">
                    <div id="modul" style={{ display: "inline-block" }} className="modul-box">
                        <span className="round"></span>
                        <i id="icon" onClick={() => modul()} className="fa-solid fa-heart"></i>
                        {openModul && (
                            <div className="box-modul-car">
                                <div className="back">
                                    <div onClick={() => setopenModul((prev) => !prev)} className="close">
                                        ❌
                                    </div>
                                    <div className="box-cars">
                                        {data.map((el) => {
                                            return (
                                                <>
                                                    {el.isLiked && (
                                                        <section className="car">
                                                            <div className="car-header">
                                                                <div className="title">{el.title}</div>
                                                                <span onClick={() => changeLiked(el.id)}>
                                                                    {el.isLiked ? (
                                                                        <i
                                                                            class="fa-solid fa-heart"
                                                                            style={{ color: "red" }}
                                                                        ></i>
                                                                    ) : (
                                                                        <i class="fa-regular fa-heart"></i>
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="sport">{el.sport}</div>
                                                            <img className="cars-car" src={el.img} alt="#" />

                                                            <div className="car-tools">
                                                                <div className="tools">
                                                                    <img src={Gas} alt="#" />
                                                                    <div className="90L">{el.oil}</div>
                                                                </div>
                                                                <div className="tools">
                                                                    <img src={round} alt="#" />
                                                                    <div className="90L">{el.oil}</div>
                                                                </div>
                                                                <div className="tools">
                                                                    <i class="fa-solid fa-users"></i>
                                                                    <div className="90L">{el.oil}</div>
                                                                </div>
                                                            </div>

                                                            <div className="car-footer">
                                                                <div className="price">
                                                                    {el.price} <span>day</span>
                                                                </div>
                                                                <button className="car-btn">Rent Now</button>
                                                            </div>
                                                        </section>
                                                    )}
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="alert">
                        <i id="icon" className="fa-solid fa-bell"></i>
                    </div>

                    <i id="icon" className="fa-solid fa-gear"></i>
                    <img src={PROFILE} alt="" />
                </div>
            </header>

            <div className="ads">
                <div className="headerCar df jc-sa">
                    <div className="headerCard">
                        <h1 className="TheBestText">The Best Platform for Car Rental</h1>
                        <p className="EaseOfText">
                            Ease of doing a car rental safely and reliably. Of course at a low price.
                        </p>
                        <button className="rent-car">Rent Car</button>
                        <br />
                        <img src={Car} alt="" />
                    </div>
                    <div className="headerCard headerCard1">
                        <h1 className="TheBestText">Easy way to rent a car at a low price</h1>
                        <p className="EaseOfText">
                            Providing cheap car rental services and safe and comfortable facilities.
                        </p>
                        <button className="rent-car">Rent Car</button>
                        <br />
                        <img src={Car} alt="" />
                    </div>
                </div>
            </div>

            {/* ??????????????????????????????????????????? */}
            <section className="display">
                {obj.map((el, idx) => {
                    return (
                        <section className="section">
                            <div className="card">
                                <div className="pick">
                                    <input type="radio" />
                                    <div className="pick-up">Pick-up</div>
                                </div>

                                <div className="cards">
                                    <div className="select">
                                        <div className="location">Locations</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Semarang</option>
                                            <option value="saab">Termiz</option>
                                            <option value="mercedes">Samarkand</option>
                                            <option value="audi">Toshkent</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Date</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">20 July 2022</option>
                                            <option value="saab">01.01.2024</option>
                                            <option value="mercedes">03.03.2024</option>
                                            <option value="audi">05.05.2024</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Time</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">07.00</option>
                                            <option value="saab">Morning</option>
                                            <option value="mercedes">Afternoon</option>
                                            <option value="audi">Evening</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" middle-card">
                                <img src={Switch} alt="#" />
                            </div>

                            <div id="second-card" className="card">
                                <div className="pick">
                                    <input type="radio" />
                                    <div className="pick-up">Drop-off</div>
                                </div>

                                <div className="cards">
                                    <div className="select">
                                        <div className="location">Locations</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Semarang</option>
                                            <option value="saab">Termiz</option>
                                            <option value="mercedes">Samarkand</option>
                                            <option value="audi">Toshkent</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Date</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo"> 20 July 2022</option>
                                            <option value="saab">01.01.2024</option>
                                            <option value="mercedes">03.03.2024</option>
                                            <option value="audi">05.05.2024</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Time</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">07.00</option>
                                            <option value="saab">Morning</option>
                                            <option value="mercedes">Afternoon</option>
                                            <option value="audi">Evening</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </section>

            {/* ??????????????????????????????????????????????? */}

            <section className="display-second">
                {obj.map((el, idx) => {
                    return (
                        <section className="section">
                            <div className="card">
                                <div className="pick">
                                    <input type="radio" />
                                    <div className="pick-up">Pick-up</div>
                                </div>

                                <div className=" flex cards">
                                    <div className="select">
                                        <div className="location">Locations</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your city</option>
                                            <option value="saab">Termiz</option>
                                            <option value="mercedes">Samarkand</option>
                                            <option value="audi">Toshkent</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Date</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your date</option>
                                            <option value="saab">01.01.2024</option>
                                            <option value="mercedes">03.03.2024</option>
                                            <option value="audi">05.05.2024</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Time</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your time</option>
                                            <option value="saab">Morning</option>
                                            <option value="mercedes">Afternoon</option>
                                            <option value="audi">Evening</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" middle-card">
                                <img src={Switch} alt="#" />
                            </div>

                            <div id="second-card" className="card">
                                <div className="pick">
                                    <input type="radio" />
                                    <div className="pick-up">Drop-off</div>
                                </div>

                                <div className="flex cards">
                                    <div className="select">
                                        <div className="location">Locations</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your city</option>
                                            <option value="saab">Termiz</option>
                                            <option value="mercedes">Samarkand</option>
                                            <option value="audi">Toshkent</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Date</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your date</option>
                                            <option value="saab">01.01.2024</option>
                                            <option value="mercedes">03.03.2024</option>
                                            <option value="audi">05.05.2024</option>
                                        </select>
                                    </div>

                                    <div className="select">
                                        <div className="location">Time</div>
                                        <select className="select-city" name="cars" id="cars">
                                            <option value="volvo">Select your time</option>
                                            <option value="saab">Morning</option>
                                            <option value="mercedes">Afternoon</option>
                                            <option value="audi">Evening</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </section>

            {searchTerm.length ? (
                <>
                    <p className="popular">Search results</p>
                    <ul className="ul">
                        {arr
                            .filter((user) => user.title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map((user) => (
                                <section className="car">
                                    <div className="car-header">
                                        <div className="title">{user.title}</div>
                                        <span onClick={() => changeLiked(e.id)}>
                                            {user.isLiked ? (
                                                <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
                                            ) : (
                                                <i class="fa-regular fa-heart"></i>
                                            )}
                                        </span>
                                    </div>
                                    <div className="sport">{user.sport}</div>
                                    <img className="cars-car" src={user.img} alt="#" />

                                    <div className="car-tools">
                                        <div className="tools">
                                            <img src={Gas} alt="#" />
                                            <div className="90L">{user.oil}</div>
                                        </div>
                                        <div className="tools">
                                            <img src={Gas} alt="#" />
                                            <div className="90L">{user.oil}</div>
                                        </div>
                                        <div className="tools">
                                            <img src={Gas} alt="#" />
                                            <div className="90L">{user.oil}</div>
                                        </div>
                                    </div>

                                    <div className="car-footer">
                                        <div className="price">
                                            {user.price} <span>day</span>
                                        </div>
                                        <button className="car-btn">Rent Now</button>
                                    </div>
                                </section>
                            ))}
                    </ul>
                </>
            ) : (
                <>
                    <p className="popular">Popular Car</p>

                    <section className="cars">
                        {data.map((e, idx) => {
                            return (
                                <section className="car">
                                    <div className="car-header">
                                        <div className="title">{e.title}</div>
                                        <span onClick={() => changeLiked(e.id)}>
                                            {e.isLiked ? (
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
                                            <img src={round} alt="#" />
                                            <div className="90L">{e.oil}</div>
                                        </div>
                                        <div className="tools">
                                            <i class="fa-solid fa-users"></i>
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
                            );
                        })}
                    </section>
                </>
            )}

            <div className="car-btn show">Show more options</div>

            <section className="descriptions">
                <div className="footer-left">
                    <div className="morent">Morent</div>
                    <div className="our">
                        Our vision is to provide convenience and help increase your sales business.
                    </div>
                </div>
                <div className="footer">
                    {object.map((e, idx) => {
                        return (
                            <div className="about" key={idx}>
                                <div className="about-in">{e.about}</div>
                                <div className="events">{e.events}</div>
                                <div className="events">{e.blog}</div>
                                <div className="events">{e.podcast}</div>
                                <div className="events">{e.invite}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <hr />

            <div className="eng-footer">
                <div className="left-side">©2022 MORENT. All rights reserved</div>
                <div className="right-side">
                    <div className="left-side">Privacy & Policy</div>
                    <div className="left-side">Terms & Condition</div>
                </div>
            </div>
        </div>
    );
};

export default App;
