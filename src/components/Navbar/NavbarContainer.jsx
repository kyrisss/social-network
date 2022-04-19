import React from "react";
import Navbar from './Navbar';
import { connect } from "react-redux";
//import { SET_AUTH_USER, SET_AUTH_PROFILE } from "../redux/authReducer"
import { authMeTC, logoutTC } from "../redux/authReducer.ts"


class NavbarContainer extends React.Component {

    componentDidMount() {
        // this.props.authMeTC()
        //    samuraiApi.authMe()
        //         .then(data => {
        //             if (data.resultCode === 0) {
        //                 let { id, login, email } = data.data
        //                 this.props.SET_AUTH_USER(id, login, email)
        //                 samuraiApi.getProfile(id)
        //                     .then(data => {
        //                         this.props.SET_AUTH_PROFILE(data)
        //                     })
        //             }

        //         })
    }


    render() {
        return (
            <Navbar {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.auth
    }
}


export default connect(mapStateToProps, { /*SET_AUTH_USER, SET_AUTH_PROFILE, authMeTC,*/ logoutTC })(NavbarContainer);