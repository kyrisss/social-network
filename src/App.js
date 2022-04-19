import './App.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Aside from './components/Aside/Aside';
import FriendsContainer from './components/Friends/FriendsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Routes, Route } from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { setInitailizeTC } from './components/redux/appReducer.ts';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from "redux";
import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  
  componentDidMount(){
    this.props.setInitailizeTC()
  }
  
  render(){
    
    if(!this.props.initialized){
      
      return <Preloader />
    }

    return (
      <div className="App">
        <NavbarContainer />
        <Aside />
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/friends/*' element={<FriendsContainer />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {setInitailizeTC})
)(App);
