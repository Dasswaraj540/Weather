import React, { useEffect, useState } from 'react';
import ModalCSS from "./Modal.module.css";
import { GoLocation } from "react-icons/go";
import { FaSun } from "react-icons/fa";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { WiDayLightWind } from "react-icons/wi";
import { WiDaySnowWind } from "react-icons/wi";

const icons = {
    fontSize: "24px",
}

const Modal = () => {

    const [data, setdata] = useState(null);
    const [region, setRegion] = useState("Bhubaneswar");
    const [place, setPlace] = useState(region);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(datas => setdata(datas))
        
        .catch(err => {
            console.log(err)
        });
    }, [place]);

    let date = new Date();

    const setPlaces = (e) => {
        e.preventDefault();
        setPlace(region);
    }



    return (
        <>
            <div className={ModalCSS.center}>
                <div className={ModalCSS.card}>
                    {!data ? <img src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif" height="50px" width="90px" /> :
                        <div className={ModalCSS.box}>


                            <div className={ModalCSS.location_box}>
                                <GoLocation style={icons} className={ModalCSS.icon} />
                                <h5 className={ModalCSS.head}>{place}</h5>
                            </div>
                            <h5 className={ModalCSS.dates}>{date.toDateString()}</h5>



                            <div className={ModalCSS.img}>
                                <FaSun className={ModalCSS.imgs} />
                                <BsFillCloudLightningRainFill className={ModalCSS.imgs} />
                                <WiDayLightWind className={ModalCSS.imgs} />
                                <WiDaySnowWind className={ModalCSS.imgs} />
                            </div>



                            <h2 className={ModalCSS.desc}>{data.weather[0].description}</h2>
                            <div className={ModalCSS.temp_box}>
                                <div className={ModalCSS.temps}>
                                    <h2 className={ModalCSS.temp - data}>{data.main.temp}<sup>o</sup>C </h2>
                                </div>
                                <div className={ModalCSS.status}>
                                    <div className={ModalCSS.humidity}>
                                        <div className={ModalCSS.icons_text}>
                                            <h6 className={ModalCSS.texts}>Humidity: {data.main.humidity}</h6>
                                        </div>
                                        <div className={ModalCSS.icons_text}>
                                            <h6 className={ModalCSS.texts}>Pressure: {data.main.pressure}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
                <div className={ModalCSS.Inputcard}>
                    <form action="" onSubmit={setPlaces}>
                        <label htmlFor="region">Enter Your Region</label>
                        <input placeholder="Enter Your Region" type="text" value={region} onChange={(e) => setRegion(e.target.value)} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Modal
