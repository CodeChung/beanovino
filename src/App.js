import React from 'react';
import Home from './routes/Home/Home';
import Video from './routes/Video/Video';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import Book from './routes/Book/Book';
import Contact from './routes/Contact/Contact';
import { Link, Route, Switch } from 'react-router-dom';
import { IoLogoYoutube } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './App.css';
import './Hamburger.css';

class App extends React.Component {
  state = {
    currentView: '/',
    hamburgerActive: false,
  }
  setView = view => {
    this.setState({ currentView: view })
  }
  toggleHamburger = () => {
    const { hamburgerActive } = this.state
    this.setState({ hamburgerActive: !hamburgerActive })
  }
  render() {
    const { currentView, hamburgerActive, } = this.state
    const hamburgerClass = hamburgerActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'
    const sidebarClass = hamburgerActive ? 'side-nav active-side-nav' : 'side-nav'
    return (
      <div className="App">
        <nav className={sidebarClass}>
          <div className='side-nav-block'>
            <div className='side-nav-links'>
              <div className='side-links'>
                <Link onClick={() => {
                    this.setView('/video')
                    this.toggleHamburger()}
                  }
                  to='/video'>
                  Menu
                </Link>
                <Link onClick={() => {
                    this.setView('/blog')
                    this.toggleHamburger()}
                  }
                  to='/blog'>
                  Gallery
                </Link>
                <Link onClick={() =>{
                    this.setView('/about')
                    this.toggleHamburger()}
                  }
                  to='/about'>
                  About
                </Link>
              </div>
              <div className='side-links'>
                <a 
                  href='https://www.overdrive.com/media/2180549/영원히-젊은-아버지의-이야기-forever-young-a-fathers-tale'
                  rel="noopener noreferrer"
                  target='_blank'
                  onClick={this.toggleHamburger}
                >
                  Location
                </a>
                <Link onClick={() => {
                    this.setView('/contact')
                    this.toggleHamburger()}
                  }
                  to='/contact'>
                  Events
                </Link>
                <Link onClick={() => {
                    this.setView('/contact')
                    this.toggleHamburger()}
                  }
                  to='/contact'>
                  Delivery
                </Link>
              </div>
            </div>
            <div className='side-nav-icons'>
              <div className='sidecon'>
                <FaFacebookF />
              </div>
              <div className='sidecon'>
                <IoLogoYoutube />
              </div>
              <div className='sidecon'>
                <FiMail />
              </div>
            </div>
          </div>
        </nav>
        <nav className='navbar'>
          <Link 
            className={currentView === '/menu' ? 'nav-active' : ''}
            onClick={() => this.setView('/menu')}
            to='/menu'>
            Menu
          </Link>
          <Link 
            className={currentView === '/location' ? 'nav-active' : ''}
            onClick={() => this.setView('/location')}
            to='/location'>
            Location
          </Link>
          <Link 
            className={currentView === '/' ? 'name nav-active' : 'name'}
            onClick={() => this.setView('/')}
            to='/'>
            <span className='name'><img src='/images/logo.svg' alt='logo'/></span>
          </Link>
          <Link 
            className={currentView === '/events' ? 'nav-active' : ''}
            onClick={() => this.setView('/events')}
            to='/events'>
            Events
          </Link>
          <Link 
            className={currentView === '/about' ? 'nav-active' : ''}
            onClick={() => this.setView('/about')}
            to='/about'>
            About
          </Link>
          <h1 className='mobile-name'>
            Visit Us
          </h1>
          <button 
            onClick={this.toggleHamburger}
            className={hamburgerClass} 
            type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/video' component={Video} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/book' component={Book} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
