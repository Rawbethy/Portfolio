import React, {Component} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './styles.css'

interface BodyState {
    dimensions: {
        width: number;
        height: number
    } | null;
}

export default class Body extends Component<{}, BodyState> {
    containerRef: any;

    constructor(props) {
        super(props)
        this.state = {
            dimensions: null
        };
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const containerElement = this.containerRef.current;
        this.setState({
            dimensions: {
                width: containerElement.offsetWidth,
                height: containerElement.offsetHeight
            }
        });
    }

    render() {
        const {dimensions} = this.state
        const h2Style = {
            fontSize: '30px',
        };

        const sliderImages = [
            {url: "https://drive.google.com/uc?export=view&id=1oiXtPLaPQ4ytsJ-046aeytvX8z6ve3fK"},
            {url: 'https://drive.google.com/uc?export=view&id=1VDbaFcyOw-z-YLHCCF2PDk2L6OofgHoy'},
            {url: 'https://drive.google.com/uc?export=view&id=1MBMUHhQhP3jZASkx5avn7W_fHe7E1TYG'}
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
                    <div className='hobbies' id='hobbies' ref={this.containerRef}>
                        <h3>Photography</h3>
                        {dimensions && (
                            <SimpleImageSlider 
                            width={dimensions.width}
                            height={dimensions.height}
                            images={sliderImages}
                            autoPlay={true}
                            autoPlayDelay={3}
                            showNavs={false}
                            showBullets={false}
                            />
                        )}
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