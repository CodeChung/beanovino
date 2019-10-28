import React from 'react';
import './Home.css';

class Home extends React.Component {
    state = {
        bean: true
    }
    toggleBean = () => {
        this.setState({ bean: !this.state.bean })
    }
    render() {
        const { bean } = this.state
        return (
            <section className='home-page'>
                <div className='home-block'>
                    <div onMouseEnter={() => {
                        if (!bean) {
                            this.toggleBean()
                        }
                    }}
                        className={'beano-view landing-logo' + (bean ? ' logo-active' : '')}>
                        Beano
                        <div className={'landing-icon icon-beano' + (bean ? ' icon-active' : '')}>
                        <div id="wrap">
                            <div class="steam" id="steam-one"></div>
                            <div class="steam" id="steam-two"></div>
                            <div class="steam" id="steam-three"></div>
                            <div class="steam" id="steam-four"></div>
                            
                            <div id="cup">
                                <div id="cup-body">
                                <div id="cup-shade"></div>
                                </div>
                                <div id="cup-handle"></div>
                            </div>
                            
                            <div id="saucer"></div>
                            
                            <div id="shadow"></div>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => {
                        if (bean) {
                            this.toggleBean()
                        }
                    }}
                        className={'vino-view landing-logo' + (!bean ? ' logo-active' : '')}>
                        Vino
                        <div className={'landing-icon icon-vino' + (!bean ? ' icon-active' : '')}>
                            <div class="loader">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <div class="wineglass left">
                                    <div class="top"></div>
                                </div>
                                <div class="wineglass right">
                                    <div class="top"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;