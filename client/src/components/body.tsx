import React, {Component} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './styles.css'

export default class Body extends Component {

    render() {
        const h2Style = {
            fontSize: '30px',
        };

        const sliderImages = [
            {url: "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"},
            {url: '../Utils/images/img639.jpg'},
            {url: '../Utils/images/img640.jpg'}
        ]

        return (
            <div className="body">
                <section className="home">
                    <div className='home-title' id='home'>
                        <h1 style={{fontSize: '40px'}}>✌Greetings!✌</h1>
                        <h2 style={h2Style}>My name is Robert, I am an aspiring 
                        web/software developer from Houston who is always seeking opportunites
                        to take on tough challenges and implement new technologies</h2>
                        <h2 style={h2Style}>Please enjoy my personal portfolio!</h2>
                    </div>
                </section>     
                <section className='about' id='section-about'>
                    <div className='sub-title' id='about'>
                        <h2>This is the About component</h2>
                    </div>
                    <div className='hobbies' id='hobbies'>
                        <h3>Photography</h3>
                        <SimpleImageSlider 
                            width={document.getElementById('hobbies').offsetWidth}
                            height={document.getElementById('hobbies').offsetHeight}
                            images={sliderImages}
                            autoPlay={true}
                            autoPlayDelay={2.5}
                            showNavs={false}
                            showBullets={false}
                        />
                    </div>
                </section>
                <section className="projects">
                    <div className="sub-title" id='projects'>
                        <h2>This is the Projects component</h2>
                    </div>  

                    <div className="project-main">

                    </div>                 
                </section>
            </div>
        )
    }
}