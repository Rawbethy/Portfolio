import React, { Component, ReactElement} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import Desc from '../Utils/Descriptions';
import './styles.css';
import './styles/projects-styles.css';

export default class Body extends Component<any, any> {

  home_ref: React.RefObject<HTMLDivElement>;
  about_title_ref: React.RefObject<HTMLDivElement>;
  about_who_ref: React.RefObject<HTMLDivElement>;
  about_hobbies_ref: React.RefObject<HTMLDivElement>;
  images_ref: React.RefObject<HTMLDivElement>;
  projects_title_ref: React.RefObject<HTMLDivElement>;
  projects_first_ref: React.RefObject<HTMLDivElement>;
  projects_second_ref: React.RefObject<HTMLDivElement>;
  ref1 = {}
  

  constructor(props: {}) {
    super(props);
    this.state = {
      width: Number,
      height: Number,
      home_visible: null,
      about_title_visible: null,
      about_who_visible: null,
      about_hobbies_visible: null,
      images_visible: null,
      projects_title_visible: null,
      projects_first_visible: null,
      projects_second_visible: null
    };

    this.home_ref = React.createRef();
    this.about_title_ref = React.createRef();
    this.about_who_ref = React.createRef();
    this.about_hobbies_ref = React.createRef();
    this.images_ref = React.createRef();
    this.projects_title_ref = React.createRef();
    this.projects_first_ref = React.createRef();
    this.projects_second_ref = React.createRef();

    this.ref1 = {
      'home-title': [this.home_ref, 'home_visible'],
      'about-title': [this.about_title_ref, 'about_title_visible'],
      'about-who': [this.about_who_ref, 'about_who_visible'],
      'about-hobbies': [this.about_hobbies_ref, 'about_hobbies_visible'],
      'imageSlider': [this.images_ref, 'images_visible'],
      'projects-title': [this.projects_title_ref, 'projects_title_visible'],
      'projects-first': [this.projects_first_ref, 'projects_first_visible'],
      'projects-second': [this.projects_second_ref, 'projects_second_visible'],
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let currState = this.ref1[entry.target.className][1];
        this.setState({[currState]: entry.isIntersecting});
      })
    })
    
    for(const key in this.ref1) {
      observer.observe(this.ref1[key][0].current);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  componentDidUpdate() {
    this.updateDimensions();
  }

  updateDimensions = () => {
    const containerElement = this.images_ref.current;
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
                    <div className='home-title' id='home' ref={this.home_ref}>
                        <h1 style={{fontSize: '40px'}} className={this.state.home_visible ? 'animate-after': 'homeContent-before'}>✌Greetings!✌</h1>
                        <h2 style={h2Style} className={this.state.home_visible ? 'animate-after': 'homeContent-before'}>My name is Robert, I am an aspiring 
                        web/software developer from Houston who is always seeking opportunites
                        to take on tough challenges and implement new technologies</h2>
                        <h2 style={h2Style} className={this.state.home_visible ? 'animate-after': 'homeContent-before'}>Please enjoy my personal portfolio!</h2>
                    </div>
                </section>     
                <section className='about' id='section-about'>
                    <div className='about-title' id='about' ref={this.about_title_ref}>
                        <h2 className={this.state.about_title_visible ? 'animate-after': 'animate-before'}>This is the About component</h2>
                    </div>
                    <div className="about-who" ref={this.about_who_ref}>
                      <div className="sub-title2">
                        <h3 className={this.state.about_who_visible ? 'animate-after-sub': 'animate-before'}>Who am I?</h3>
                      </div>
                      <p className={this.state.about_who_visible ? 'animate-after': 'animate-before'}>{Desc.AboutMe}</p>
                    </div>
                    <div className='hobbies' id='hobbies'>
                      <div className="about-hobbies" ref={this.about_hobbies_ref}>
                        <h3 className={this.state.about_hobbies_visible ? 'animate-after-sub': 'animate-before'}>Hobbies</h3>
                      </div>
                      <div className="imageSlider" ref={this.images_ref}>
                        <h3 className={this.state.images_visible ? 'animate-after': 'animate-before'}>Photography</h3>
                        <div className={this.state.images_visible ? 'animate-after': 'animate-before'}>
                          {height && width && (this.state.images_visible) && (
                              <SimpleImageSlider 
                              style={{marginLeft: 'auto', marginRight: 'auto'}}
                              width={width/2}
                              height={width/2.5}
                              images={sliderImages}
                              autoPlay={true}
                              autoPlayDelay={4.5}
                              showNavs={true}
                              showBullets={true}
                              />
                          )}
                        </div>
                      </div>
                    </div>
                </section>
                <section className="projects">
                    <div className="projects-title" id='projects' ref={this.projects_title_ref}>
                      <h2 className={this.state.projects_title_visible ? 'animate-after': 'animate-before'}>This is the Projects component</h2>
                    </div>  
                    <div className="projects-main">
                      <div className="left-column">
                        <div className="projects-first" ref={this.projects_first_ref}>
                          <div className="projects-card">
                            <div className={this.state.projects_first_visible ? 'projects-header animate-after': 'projects-header animate-before'} >
                              <h2>Python Interpreter</h2>
                            </div>
                            <div className={this.state.projects_first_visible ? 'projects-content animate-after': 'projects-content animate-before'} role='button'>
                              <img src='https://drive.google.com/uc?export=view&id=1GUwot9sOCMTl03xbD2C3gfu_7GgMcInS' alt=""/>
                              <span className=''>View</span>                                
                            </div>
                          </div>
                        </div>
                        <div className="projects-second" ref={this.projects_second_ref}>
                          <div className="projects-card">
                            <div className={this.state.projects_first_visible ? 'projects-header animate-after': 'projects-header animate-before'} >
                              <h2>E-Commerce Website</h2>
                            </div>
                            <div className={this.state.projects_second_visible ? 'projects-content animate-after': 'projects-content animate-before'} role='button'>
                              <span className=''>View</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-column">
                        <div className="projects-first" ref={this.projects_first_ref}>
                          <div className="projects-card">
                            <div className={this.state.projects_first_visible ? 'projects-header animate-after': 'projects-header animate-before'} >
                              <h2>Earthquake Detection</h2>
                            </div>
                            <div className={this.state.projects_first_visible ? 'projects-content animate-after': 'projects-content animate-before'} role='button'>
                              <img src="https://drive.google.com/uc?export=view&id=1-jq36-V76kM2n1OX5aI70a_wLqv3T8xV" alt="" />
                              <span className=''>View</span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-second" ref={this.projects_second_ref}>
                          <div className="projects-card">
                            <div className={this.state.projects_first_visible ? 'projects-header animate-after': 'projects-header animate-before'} >
                              <h2>Something Else</h2>
                            </div>
                            <div className={this.state.projects_second_visible ? 'projects-content animate-after': 'projects-content animate-before'} role='button'>
                              <span className=''>View</span>
                            </div>
                          </div>    
                        </div>
                      </div>
                    </div>               
                </section>
            </div>
        )
    }
}