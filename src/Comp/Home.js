import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import './Home.css';

const Home = () => {

    const [windowwidth, setwindowwidth] = useState(window.innerWidth);
    const [openmenu, closemenu] = useState(false);

    const data = [
        {
            name: 'Diamonds'
        },
        {
            name: 'Accessories'
        },
        {
            name: 'Fine Jewelry'
        },
        {
            name: 'Watches'
        },
    ]

    useEffect(() => {
        const cards = document.querySelectorAll('.cards');

        const setClasses = () => {
            const classes = ['left1', 'left', 'active', 'right', 'right1'];
            cards.forEach((card, index) => card.classList.add(classes[index]));
        };

        const changePositions = (e) => {
            const clickedCard = e.currentTarget;
            const activeCard = document.querySelector('.cards.active');
            if (clickedCard.classList.contains('active')) return;
            const classesFrom = e.currentTarget.className;
            const classesTo = activeCard.className;
            clickedCard.className = classesTo;
            activeCard.className = classesFrom;
        };

        cards.forEach((card) => {
            card.addEventListener('click', changePositions);
        });

        setClasses();
    }, []);

    useEffect(() => {

        const handleWindowsize = () => {
            // console.log(window.innerWidth)
            setwindowwidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowsize);
        return () => {
            window.removeEventListener('resize', handleWindowsize)
        }

    }, [])

    return (
        <>
            {
                openmenu ?
                    <div style={{ width: '100%', height: 'auto' }}>
                        <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-end', margin: 'auto' }}>
                            <span onClick={()=>{closemenu(false)}} style={{ marginTop: '40px', backgroundColor: '#eceaea', textAlign: 'center', display: 'flex', borderRadius:'5px' }}> <CloseRoundedIcon /></span>
                        </div>
                        <div style={{ width: '80%', margin: 'auto' }}>
                            {
                                data.map((s, index) => {
                                    return (
                                        <>
                                            <div className='menuitems' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span >{s.name}</span>
                                                <div>
                                                    < KeyboardArrowDownRoundedIcon style={{ height: '40px', width: '40px', color:'gray' }} />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div style={{ margin: '40px 0 40px 0' }}>
                            <hr style={{ width: '80%', margin: 'auto', margin: '40px 0 40 0px', color: '#C2C2C2' }} />
                        </div>
                        <div style={{width: '80%', margin: 'auto',}}>
                            <div >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <ForumIcon style={{ color: 'gray' }} /> Inquiry</span>
                            </div>
                            <div  style={{marginTop:'30px'}}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <PersonIcon style={{ color: 'gray' }} /> Feedback </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ width: '100%', height: 'auto' }}>
                        <div className='Navbar'>
                            {windowwidth < 760 ?
                                <div>
                                    <span onClick={() => { closemenu(true) }}><MenuIcon /></span>
                                </div>
                                : null
                            }
                            <div>
                                <span style={{ fontSize: '22px', fontWeight: '500' }}>dimend<b>SCAASI</b></span>
                            </div>
                            {
                                windowwidth > 760 ?
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <span className='menuvertical'>Diamonds</span>
                                        <span className='menuvertical'>Accessories</span>
                                        <span className='menuvertical'>Fine Jewelry</span>
                                        <span className='menuvertical'>Watches</span>
                                    </div>
                                    : null
                            }
                            <div>
                                <span> <SearchIcon /> </span>
                                <span> <FavoriteBorderIcon /> </span>
                                <span> <PersonIcon /> </span>
                            </div>
                        </div>
                        {
                            windowwidth > 760 ?
                                <div className='Navbelow'>
                                    <div >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <ForumIcon style={{ color: 'gray' }} /> Inquiry</span>
                                    </div>
                                    <div >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}> <PersonIcon style={{ color: 'gray' }} /> Feedback </span>
                                    </div>
                                </div>
                                : null
                        }
                        <div style={windowwidth >502 ?{ width: '100%', height: 'auto', display: 'flex', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' } : {width: '100%', height: 'auto', display: 'flex', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                            <div style={{ width: '15%', height: 'auto' }}>
                                <div>
                                    <img src="/Assests/R3.png" alt="" className='navbarring'  ></img>
                                </div>
                            </div>
                            <div style={windowwidth <670 ? {position: 'relative', textAlign: 'center', width: '65%', height: 'auto',} : { position: 'relative', textAlign: 'center', width: '70%', height: 'auto', }}>
                                <div style={{ position: 'absolute', textAlign: 'center', width: '100%', marginTop: '80px' }}>
                                    <span className='backgroundtextstyle'>Vintage & Antique</span>
                                </div>
                                <div style={{ zIndex: '2', textAlign: 'center', position: 'relative' }}>
                                    <img src="/Assests/R2.png" style={windowwidth < 580 ? { width: '200px', height: '250px' } : { width: '250px', height: '300px' }} alt=""></img>

                                </div>
                                <div>
                                    <div>
                                        <h1 style={windowwidth < 420 ? { fontSize: '1.5rem' } : {}}>Vintage & Antique</h1>
                                    </div>
                                    <div>
                                        <h4>$4500</h4>
                                    </div>
                                    <div style={{ marginBottom: '40px', color: '#c9c9c9', fontWeight: '500' }}>
                                        <span style={windowwidth < 420 ? { fontSize: '0.9rem' } : {}} >Take 20% off for a limited time.<br />Use Code: LOVE20</span>
                                    </div>
                                    <div style={{ height: '40px' }}>
                                        <span className='productDetail'>View Details</span>
                                    </div>
                                </div>

                            </div>
                            <div style={{ width: '15%', height: 'auto', display: 'flex', alignItems: 'flex-end' }}>
                                <div>
                                    <img src="/Assests/R1.png" className='navbarring' alt=""></img>
                                </div>
                            </div>
                        </div>


                        {/* Collections */}
                        <div style={{ widht: '100%', height: 'auto', marginBottom: '100px' }}>
                            <div style={windowwidth < 900 ? { width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '50px' } : { width: '30%', margin: 'auto', textAlign: 'center', marginBottom: '50px' }}>
                                <h2>Our Collection</h2>
                                <span style={{ color: 'rgb(164 156 156)', }}>Discover our elegant and unique fine jewelry collections,
                                    ranging from classic diamond studs to stylish pendants
                                    and dazzling bracelets.</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div
                                    className='itemsbackgroundstyle'></div>
                                <div style={windowwidth < 900 ? { display: 'flex', gap: '20px', width: '95%', margin: 'auto' } : { display: 'flex', gap: '20px', width: '80%', margin: 'auto' }}>
                                    <div className='CollectionCard'>
                                        <img src="/Assests/A1.png" style={{ width: '100%' }}></img>
                                        <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
                                            <h4 className='textresponsivestyle'>Wedding Rings</h4>
                                            <span className='cardtextstyle'  >Every diamond in our collection</span>
                                        </div>
                                    </div>
                                    <div className='CollectionCard'>
                                        <img src="/Assests/A2.png" style={{ width: '100%' }}></img>
                                        <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
                                            <h4 className='textresponsivestyle'>Engagement Rings</h4>
                                            <span className='cardtextstyle'  >Every diamond in our collection</span>
                                        </div>
                                    </div>
                                    <div className='CollectionCard'>
                                        <img src="/Assests/A3.png" style={{ width: '100%' }}></img>
                                        <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
                                            <h4 className='textresponsivestyle'>Fine Jewelry</h4>
                                            <span className='cardtextstyle'  >Every diamond in our collection</span>
                                        </div>
                                    </div>
                                    <div className='CollectionCard'>
                                        <img src="/Assests/A4.png" style={{ width: '100%' }}></img>
                                        <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                            <h4 className='textresponsivestyle'>Latest Rings</h4>
                                            <span className='cardtextstyle'  >Every diamond in our collection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Explore Collection */}
                        <div style={{ widht: '100%', height: 'auto', marginBottom: '100px' }}>
                            <div style={windowwidth < 925 ? { width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '50px' } : { width: '30%', margin: 'auto', textAlign: 'center', marginBottom: '50px' }}>
                                <h2>Explore Loose Diamonds</h2>
                                <span style={{ color: 'rgb(164 156 156)', }}>Every diamond in our collection is selected for its
                                    superior cut, symmetry, and shape..</span>
                            </div>
                            <div class="container">
                                <div class="cards">
                                    <div class="cards__inner">
                                        <div style={{ width: '100%' }}>
                                            <img src="/Assests/B1.png" alt="" style={{ height: '200px', width: '100%', borderBottom: '1px solid #DFDFDF' }}></img>
                                            <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                                <h4 style={{ marginTop: '0' }}>Round</h4>
                                                <span className='cardtextstyle' style={{ color: '#F7B79D' }}>Every diamond in our collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="cards__inner">
                                        <div style={{ width: '100%' }}>
                                            <img src="/Assests/B2.png" alt="" style={{ height: '200px', width: '100%', borderBottom: '1px solid #DFDFDF' }}></img>
                                            <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                                <h4 style={{ marginTop: '0' }}>Emerald</h4>
                                                <span className='cardtextstyle' style={{ color: '#F7B79D' }}>Every diamond in our collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="cards__inner">
                                        <div style={{ width: '100%' }}>
                                            <img src="/Assests/B6.png" alt="" style={{ height: '200px', width: '100%', borderBottom: '1px solid #DFDFDF' }}></img>
                                            <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                                <h4 style={{ marginTop: '0' }}>Asscher</h4>
                                                <span className='cardtextstyle' style={{ color: '#F7B79D' }}>Every diamond in our collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="cards__inner">
                                        <div style={{ width: '100%' }}>
                                            <img src="/Assests/B4.png" alt="" style={{ height: '200px', width: '100%', borderBottom: '1px solid #DFDFDF' }}></img>
                                            <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                                <h4 style={{ marginTop: '0' }}>Oval</h4>
                                                <span className='cardtextstyle' style={{ color: '#F7B79D' }}>Every diamond in our collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cards">
                                    <div class="cards__inner">
                                        <div style={{ width: '100%' }}>
                                            <img src="/Assests/B5.png" alt="" style={{ height: '200px', width: '100%', borderBottom: '1px solid #DFDFDF' }}></img>
                                            <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                                <h4 style={{ marginTop: '0' }}>Heart</h4>
                                                <span className='cardtextstyle' style={{ color: '#F7B79D' }}>Every diamond in our collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="cards">
                            <div class="cards__inner">
                            <div style={{ width: '100%' }}>
                                    <img src="/Assests/B6.png" alt="" style={{ height: 'auto', width: '100%' }}></img>
                                    <div style={{ width: '90%', margin: 'auto', textAlign: 'center', marginBottom: '20px' }}>
                                        <h4 style={{ marginTop: '0' }}>Round</h4>
                                        <span style={{ color: 'rgb(164 156 156)', fontSize: '0.9rem' }}>Every diamond in our collection</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            </div>
                        </div>

                        {/* SignUp page */}
                        <div className='signUpstyle' >
                            <div className='subsignup'>
                                <div>
                                    <h2>Keep In Touch</h2>
                                </div>
                                <div>
                                    <span>
                                        Our lab created diamonds are the
                                        eco-conscious choice, and exhibit
                                        the same sparkle as natural diamonds.
                                    </span>

                                </div>
                                <div style={{ marginTop: '50px' }}>
                                    <input placeholder='Enter your email Id to subscribe' className='inputstyle' style={{ borderBottom: '2px solid #dadada', marginBottom: '30px' }}></input>
                                    <div>
                                        <span className='productDetail'>Sign Up</span>
                                    </div>
                                </div>
                            </div>
                            <div className='subsignup'>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ width: '100%' }}>
                                        <img src="/Assests/C1.png" alt="" style={{ width: '100%', height: '200px' }}></img>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <img src="/Assests/C2.png" alt="" style={{ width: '100%', height: '200px' }}></img>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                    <div style={{ width: '100%' }}>
                                        <img src="/Assests/C3.png" alt="" style={{ width: '100%', height: '200px' }}></img>
                                    </div>
                                    <div style={{ width: '100%' }}>
                                        <img src="/Assests/C4.png" alt="" style={{ width: '100%', height: '200px' }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ margin: '40px 0 40px 0' }}>
                            <hr style={{ width: '80%', margin: 'auto', margin: '40px 0 40 0px', color: '#C2C2C2' }} />
                        </div>

                        {/* Footer page */}
                        <footer style={{ backgroundColor: '#F9F9F9' }}>
                            <div style={{ width: '100%', height: 'auto' }}>
                                <div style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
                                    <div style={{ paddingTop: '40px' }}>
                                        <span style={{ fontSize: '22px', fontWeight: '500' }}>dimend<b>SCAASI</b></span>
                                    </div>
                                    <div >
                                        <span style={{ fontSize: '16px', color: '#F7B79D' }}>20+ years of Trust</span>
                                    </div>
                                    <div style={{ width: '70%', margin: 'auto', paddingTop: '40px' }}>
                                        <span style={{ color: '#929292' }}>dimend SCAASI Jeweler is a unique Jewelry store located in
                                            Chicago with an emphasis on great style and exceptional quality.</span>
                                    </div>
                                    <div style={{ margin: '40px 0 40px 0' }}>
                                        <hr style={{ width: '100%', margin: 'auto', margin: '40px 0 40 0px', color: '#C2C2C2' }} />
                                    </div>
                                    <div style={windowwidth < 800 ? { width: '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between', color: '#C2C2C2' } : { width: '60%', margin: 'auto', display: 'flex', justifyContent: 'space-between', color: '#C2C2C2' }}>
                                        <span className='footerpages'>Education</span>
                                        <span className='footerpages'>About</span>
                                        <span className='footerpages'>Customer Care</span>
                                        <span className='footerpages'>Contact Us</span>
                                    </div>
                                    <div className='footercompanylist' style={{ paddingTop: '40px', display: 'flex', width: '95%', margin: 'auto', gap: '40px'}}>
                                        <div className='footercompany'>
                                            <img src="/Assests/F1.png" alt="" className='footerimages'  ></img>
                                            <img src="/Assests/F2.png" alt="" className='footerimages'  ></img>
                                            <img src="/Assests/F3.png" alt="" className='footerimages'  ></img>
                                            <img src="/Assests/F4.png" alt="" className='footerimages'  ></img>
                                            {/* <img src="/Assests/F5.png" alt="" ></img> */}

                                        </div>
                                        <div className='footercompany'>
                                            <img src="/Assests/F6.png" alt="" className='footerimages' ></img>
                                            <img src="/Assests/F7.png" alt=""  className='footerimages'  ></img>
                                            <img src="/Assests/F8.png" alt="" className='footerimages'  ></img>
                                            <img src="/Assests/F9.png" alt="" className='footerimages'  ></img>
                                        </div>
                                    </div>
                                    <div style={{ padding: '50px 0 50px 0', width: '90%', margin: 'auto', textAlign: 'center' }}>
                                        <span style={{ color: '#C2C2C2', fontSize: '0.8rem' }}>dimendSCAASI™ and InnerView® are Registered Trademarks of dimend SCAASI Ltd. © 2010-2020 dimend SCAASI Ltd. erms Of Use | Sitemap | Privacy Policy</span>

                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div >
            }

        </>
    )
}

export default Home