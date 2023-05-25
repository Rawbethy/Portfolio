import React, {Component} from 'react';
import './styles.css'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <section className="home">
                    <div className='sub-title' id='home'>
                        <h2>This is the Home component</h2>
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
                </section>
            </div>
        )
    }
}