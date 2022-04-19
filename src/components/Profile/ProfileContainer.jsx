import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { /*SET_PROFILE,*/ getProfileTC, getStatusTC, updateStatusTC, setPhotoTC } from "../redux/profileReducer.ts"
import { withRedirect } from "../hoc/withAuthRedirect";
import withRouter from "../hoc/withRoter";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match ? this.props.match.params.userId : this.props.authId
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (!this.props.match  && prevProps.match.params.userId != this.props.authId) {
    //         debugger
    //         let userId = this.props.match ? this.props.match.params.userId : this.props.authId
    //         this.props.getProfileTC(userId)
    //         this.props.getStatusTC(userId)
    //     }
    // }

    render() {

        return <Profile {...this.props} />
    }
}



//const withRouterContainer = withRouter(ProfileContainer)




const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authId: state.auth.id,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose(
    withRouter,
    withRedirect,
    connect(mapStateToProps, { /*SET_PROFILE,*/ getProfileTC, getStatusTC, updateStatusTC, setPhotoTC })
)(ProfileContainer)

//export default withRedirect(connect(mapStateToProps, { /*SET_PROFILE,*/ getProfileTC })(withRouterContainer));