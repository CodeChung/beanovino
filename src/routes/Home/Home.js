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
                    <div onMouseEnter={this.toggleBean}
                        className={'beano-view landing-logo' + (bean ? ' logo-active' : '')}>
                        Beano
                    </div>
                    <div onMouseEnter={this.toggleBean}
                        className={'vino-view landing-logo' + (!bean ? ' logo-active' : '')}>
                        Vino
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;