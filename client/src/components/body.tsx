import React, { Component, ReactElement } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import Desc from '../Utils/Descriptions';
import './styles.css';

export default class Body extends Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      width: Number,
      height: Number,
      homeVisible: null,
      aboutVisible: null,
      imagesVisible: null,
      projectsVisible: null
    };

    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.imagesRef = React.createRef();
    this.projectsRef = React.createRef();
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    const observerHome = new IntersectionObserver((entries1) => {
      const entry1 = entries1[0];
      this.setState({homeVisible: entry1.isIntersecting})
    })

    const observerAbout = new IntersectionObserver((entries2) => {
      const entry2 = entries2[0];
      this.setState({aboutVisible: entry2.isIntersecting})
    })
    
    const observerProjects = new IntersectionObserver((entries3) => {
      const entry3 = entries3[0];
      this.setState({projectsVisible: entry3.isIntersecting})
    })

    observerHome.observe(this.homeRef.current);
    observerAbout.observe(this.aboutRef.current);
    observerProjects.observe(this.projectsRef.current);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    this.updateDimensions();
  }

  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  imagesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;

  updateDimensions = () => {
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
                    <div className='home-title' id='home' ref={this.homeRef}>
                        <h1 style={{fontSize: '40px'}} className={this.state.homeVisible ? 'animate-after': 'homeContent-before'}>✌Greetings!✌</h1>
                        <h2 style={h2Style} className={this.state.homeVisible ? 'animate-after': 'homeContent-before'}>My name is Robert, I am an aspiring 
                        web/software developer from Houston who is always seeking opportunites
                        to take on tough challenges and implement new technologies</h2>
                        <h2 style={h2Style} className={this.state.homeVisible ? 'animate-after': 'homeContent-before'}>Please enjoy my personal portfolio!</h2>
                    </div>
                </section>     
                <section className='about' id='section-about'>
                    <div className='sub-title' id='about' ref={this.aboutRef}>
                        <h2 className={this.state.aboutVisible ? 'animate-after': 'animate-before'}>This is the About component</h2>
                    </div>
                    <div className="aboutMe">
                      <div className="sub-title2">
                        <h3 className={this.state.aboutVisible ? 'animate-after-sub': 'animate-before'}>Who am I?</h3>
                      </div>
                      <p className={this.state.aboutVisible ? 'animate-after': 'animate-before'}>{Desc.AboutMe}</p>
                    </div>
                    <div className='hobbies' id='hobbies'>
                      <div className="sub-title2">
                        <h3 className={this.state.aboutVisible ? 'animate-after-sub': 'animate-before'}>Hobbies</h3>
                      </div>
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
                    <div className="sub-title" id='projects' ref={this.projectsRef}>
                        <h2 className={this.state.projectsVisible ? 'animate-after': 'animate-before'}>This is the Projects component</h2>
                    </div>  

                    <div className="project-main">

                    </div>                 
                </section>
            </div>
        )
    }
}