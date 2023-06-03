import React, {Component} from 'react';
import './styles.css'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <section className="home">
                    <div className='home-title' id='home'>
                        <h1>Greetings!✌<br /><br />My name is Robert and I am an aspiring web developer and software developer</h1>
                    </div>
                </section>     
                <section className='about'>
                    <div className='sub-title' id='about'>
                        <h2>This is the About component</h2>
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