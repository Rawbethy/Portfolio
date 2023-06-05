import React, {Component} from 'react';
import './styles.css'

export default class Body extends Component {

    render() {
        const h2Style = {
            fontSize: '30px',
        };

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