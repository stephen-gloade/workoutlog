import LandingPageAccordian from './LandingPageAccordian';
import './css/home.css'

const Landing = () => {
    return (
        // <div className="container">
        //     <div className="container">
        //         <h1>Love this shit</h1>
        //     </div>
        //     <div className="container">
        //         <img src={home} />
        //     </div>
        // </div>
        <div className="home-page">
            <div className="bg-image"></div>
            <div className="content d-flex flex-row justify-content-end">
                <div >
                    {/* <h1 className='hero-h1 display-1'>Rep Tally</h1> */}
                    <h2 className='display-4 hero-h1'>lift</h2>
                    <h2 className='display-4 hero-h1'>log</h2>
                    <h2 className='display-4 hero-h1'>level up</h2>
                </div>
                <div className='container-md d-flex flex-column align-items-end justify-content-center'>
                    <div className='list-item d-flex'>
                        <h3 className='fs-1'>01.</h3>
                        <h3>Workout consistently, this is key</h3>
                    </div>
                    <div className='list-item d-flex'>
                        <h3>02.</h3>
                        <h3>Track your lifts</h3>
                    </div>
                    <div className='list-item d-flex'>
                        <h3>03.</h3>
                        <h3>Improve with the help of AI</h3>
                    </div>

                </div>
            </div>
    </div>
    )
}

export default Landing;