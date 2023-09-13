import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Col, Row, Divider, DatePicker, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { faCarSide, faCarRear, faCar, faBus, faLocationDot, faCalendarDays, faBed } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./home.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Home() {

    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalCars, setTotalcars] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)

    }, [cars])

    return (
        <DefaultLayout>


            <div className="header">
                <div className="headerContainer">
                    <div className="headerlist">
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Sedan</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCarSide} />
                            <span>SUV</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faCarRear} />
                            <span>Luxury</span>
                        </div>
                        <div className="headerlistitems">
                            <FontAwesomeIcon icon={faBus} />
                            <span>MUV</span>
                        </div>
                    </div>
                </div>
            </div>



            {loading == true && (<Spinner />)}


            <div className='cars'>
                <h3>The most searched cars</h3>
            <Row justify='center' gutter={16}>

                {totalCars.map(car => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2 bs1">
                            <img src={car.image} className="carimg" />

                            <div className="car-content d-flex align-items-center justify-content-between">

                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                                </div>

                                <div>
                                    <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </Col>
                })}

            </Row>
            </div>
            <div className='cars'>
                <h3>Latest cars</h3>
            <Row justify='center' gutter={16}>

                {totalCars.map(car => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="car p-2 bs1">
                            <img src={car.image} className="carimg" />

                            <div className="car-content d-flex align-items-center justify-content-between">

                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour {car.rentPerHour} /-</p>
                                </div>

                                <div>
                                    <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </Col>
                })}

            </Row>
            </div>
            <hr/>
            <div className='footer-container'>
                <div className='footer-item'>
                    <div className='footer-heading-items'>
                        <div id='footer-heading'>ABOUT CARDEKHO</div>
                        <span className='footer-heading-item'>About</span>
                        <span className='footer-heading-item'>Career With Us</span>
                        <span className='footer-heading-item'>Terms & Conditions</span>
                        <span className='footer-heading-item'>Privacy Policy</span>
                        <span className='footer-heading-item'>Corporate Policy</span>
                        <span className='footer-heading-item'>Investors</span>
                        <span className='footer-heading-item'>FAQs</span>
                    </div>
                </div>
                <div className='footer-item'>
                    <div className='footer-heading-items'>
                        <div id='footer-heading'>Connect With Us</div>
                        <span className='footer-heading-item'>Feedback</span>
                        <span className='footer-heading-item'>Contact Us</span>
                        <span className='footer-heading-item'>Advertise with Us</span>
                    </div>
                </div>
                <div className='footer-item'>
                    <div className='footer-heading-items'>
                        <div id='footer-heading'>OTHERS</div>
                        <span className='footer-heading-item'>Health Insurance</span>
                        <span className='footer-heading-item'>Term Insurance</span>
                        <span className='footer-heading-item'>Life Insurance</span>
                        <span className='footer-heading-item'>Crack-ED</span>
                        <span className='footer-heading-item'>Personal loan</span>
                        <span className='footer-heading-item'>TyreDekho</span>
                        <span className='footer-heading-item'>BatteryDekho</span>
                        <span className='footer-heading-item'>Girnar Vision Fund</span>
                    </div>
                </div>
                <div className='footer-item'>
                    <div className='footer-heading-items'>
                        <div id='footer-heading'>ABOUT CARDEKHO</div>
                        <span className='footer-heading-item'>
                            <img src='https://stimg.cardekho.com/pwa/img/appstore.png' alt='apple-image'/>
                        </span>
                        <span className='footer-heading-item'>
                            <img src='https://stimg.cardekho.com/pwa/img/playstore.png' alt='apple-image'/>
                        </span>
                        <span className='footer-heading-item'>
                            <img src='	https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg' alt='apple-image'/>
                        </span>
                        <span className='footer-heading-item'>
                            <img src='https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg' alt='apple-image'/>
                        </span>
                        <span className='footer-heading-item'>
                            <img src='	https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg' alt='apple-image'/>
                        </span>
                        
                    </div>
                </div>
                
            </div>
            <hr/>
            <div className='footer-item2'>
                <p>&#169;  2023 Girnar Software Pvt. Ltd.</p>
            </div>
            

        </DefaultLayout>
    )
}

export default Home