import React from 'react';
import './LangSwitch.css';

class LangSwitch extends React.Component {
    state = {
        koreanActive: false
    }
    toggleSwitch = () => {
        const { koreanActive } = this.state
        this.setState({ koreanActive: !koreanActive })
    }
    render() {
        const { koreanActive } = this.state
        return (
            <div className='center'>
                <h3>
                    <span className={!koreanActive && 'active-lang'} >
                        English
                    </span> 
                    / 
                    <span className={koreanActive && 'active-lang'}>
                        Korean
                    </span>
                </h3>
                <input 
                    onClick={this.props.setLang}
                    onChange={this.toggleSwitch}
                    checked={koreanActive}
                    type='checkbox' 
                    name='' />
            </div>
        )
    }
}

export default LangSwitch