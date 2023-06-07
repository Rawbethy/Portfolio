import React, { Component, ReactElement } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './styles.css';

export default class Body extends Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      width: Number,
      height: Number,
      visible: null
    };
    this.imagesRef = React.createRef();
    this.projectRef = React.createRef();
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      this.setState({visible: entry.isIntersecting})
    })
    observer.observe(this.projectRef.current);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    this.updateDimensions();
    console.log(this.state.width);
  }

  imagesRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;

  updateDimensions = () => {
    console.log(this.imagesRef);
    const containerElement = this.imagesRef.current;
    if (containerElement) {
        const dimensions = {
            width: containerElement.offsetWidth,
            height: containerElement.offsetHeight
        };
    if (
        !this.state.width || !this.state.height ||
        dimensions.width !== this.state.width ||
        dimensions.height !== this.state.height
      ) {
        this.setState({width: dimensions.width, height: dimensions.height });
      }
    }
  };

    render() {
        const {height, width} = this.state;
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
                    <div className='hobbies' id='hobbies'>
                        <div className="imageSlider" ref={this.imagesRef}>
                          <h3>Photography</h3>
                          {height && width && (
                              <SimpleImageSlider 
                              style={{marginLeft: 'auto', marginRight: 'auto'}}
                              width={width/1.5}
                              height={width/2}
                              images={sliderImages}
                              autoPlay={true}
                              autoPlayDelay={4.5}
                              showNavs={true}
                              showBullets={true}
                              />
                          )}
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="sub-title" id='projects' ref={this.projectRef}>
                        <h2>This is the Projects component</h2>
                    </div>  

                    <div className="project-main">

                    </div>                 
                </section>
            </div>
        )
    }
}