import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__active qualification__icon"> </i>   Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"> </i>   Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    MIS
                                </h3>
                                <span className="qualification__subtitle">
                                    SETEC Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    High School
                                </h3>
                                <span className="qualification__subtitle">
                                    Angroka High School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015-2018
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Secondary School
                                </h3>
                                <span className="qualification__subtitle">
                                    Angseyma Secondary School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2012-2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Primary School
                                </h3>
                                <span className="qualification__subtitle">
                                    Angrseyma Primary School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2006-2012
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Web Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    CA Solutions
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022-Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    Junior Backend Developer
                                </h3>
                                <span className="qualification__subtitle">
                                    PHSATECH Solutions
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021-2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Designer
                                </h3>
                                <span className="qualification__subtitle">
                                    KAMPUH Trading Co, Ltd
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"> </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification