import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';

function Home() {
    return (
        <div className='homeSection'>
            <Particles className='particles' params={{
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#21c0dc"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#21c0dc",
                        opacity: 0.4,
                        width: 1
                    },
                }
            }}/>

            <div className="intro">
                <div className="intro-text">
                    <span style={{color: '#D33653', fontFamily: 'Raleway-semibold'}}>Mohamed Yassine</span> <span
                    style={{color: '#D33653', fontFamily: 'Raleway-semibold'}}>BEN KHALIFA</span>
                    <div className='line' style={{
                        backgroundColor: '#BBD336',
                        margin: '0 auto 0 auto',
                        height: '3px',
                        padding: '0'
                    }}/>
                    <span style={{color: '#D38338', fontFamily: 'Raleway-semibold'}}>Software engineer</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
