import React from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
      super(props);
      console.log(props);

      this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: "chefcurry@warriors.com", password: "splashbro" }
    this.props.submitForm(user);
  }

  randomBiz(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
  }
  
  render(){
    // const bizKeys = Object.keys(this.props.businesses);
    // const b1 = this.props.businesses[bizKeys[0]];
    // const b2 = this.props.businesses[bizKeys[1]];
    // const b3 = this.props.businesses[bizKeys[2]];
    // console.log(b1);
    const { currentUser, logout } = this.props;

    const display = () => {
      const sessionLinks = () => (
        <div className={"session-links " + this.props.extraClass}>
          <Link to="/login" className={"log-in-btn " + this.props.extraClass}>Log in</Link>
          <Link to="/signup" className={"sign-up-btn " + this.props.extraClass}>Sign up</Link>
          <button className={"demo-login-btn " + this.props.extraClass}onClick={this.handleDemoSubmit}>demo login</button>
        </div>
      );

      const profileIcon = () => (
        <div className="right-nav-bar">
          <Link to="#"><img className="fav-icon" src={window.cloud} /></Link>
          <Link to="#"><img className="fav-icon" src={window.whistle} /></Link>
          <div className="profile-pic">
            <img className="yelp-profile" src={window.pf} />
            <button className="nav-links" id="logout" onClick={logout}>Logout</button>
          </div>
        </div>
      )
      return currentUser ? profileIcon() : sessionLinks();
    }
    return(
      <div>
        <header className={"splash-header " + this.props.extraClass}>
          <div className="new-header-container">
            <div className="nav-bar">
              {display()}
            </div>
            <div className={"search " + this.props.extraClass}>
              <div className={"search-bar " + this.props.extraClass}>
                <span id="static-search">Find</span>
                <input
                  className={"search-field " + this.props.extraClass}
                  type="search"
                  placeholder="basketball courts, parks.. "
                />
                <span id="divider">|</span>
                <span id="static-search">Near</span>
                <input
                  className={"search-field " + this.props.extraClass}
                  type="search"
                  placeholder="Brooklyn, NY"
                />
                <div className="ball-container">
                <button className={"search-btn " + this.props.extraClass}><img className="search-ball" src={window.ball} /></button>
                </div>
              </div>
            </div>
            <section className="links-header">
              {/* <Link to="#" className={"nav-links " + this.props.extraClass}>Write a Review</Link> */}
              <Link to="/businesses" className={"nav-links " + this.props.extraClass}>All Parks</Link>
              <Link to="#" className={"nav-links " + this.props.extraClass}>About</Link>
            </section>
            <Link id="logo-wrapper" to="/"><img id="logo-biz-page" src={window.logo} /></Link>
            <div className="logo-header-div">
              <Link id="logo-header" to="/"><img className={"logo-header " + this.props.extraClass} src={window.logo} /></Link>
            </div>
          </div>
        </header>
       


        {/* <footer className="footer-container home-page">
          <Link to="#"><img className="fav-icon" src={window.cloud} /></Link>
          <Link to="#"><img className="fav-icon" src={window.whistle} /></Link>
        </footer> */}
      </div>
    );
  }
}

export default Header;

//              <input
// type = "submit"
// className = "search-btn"
//   />