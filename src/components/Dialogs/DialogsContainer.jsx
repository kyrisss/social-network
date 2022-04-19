
import Dialogs from "./Dialogs"
import { NEW_MESSAGE, UPDATE_TEXT_NEW_MESSAGE } from "../redux/dialogsReducer.ts";
import { connect } from "react-redux";
import { withRedirect } from './../hoc/withAuthRedirect';
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {dispatch(NEW_MESSAGE(newMessage))}
    }
}

// let withRedirectComponent = withRedirect(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectComponent)




export default compose(withRedirect, connect(mapStateToProps, mapDispatchToProps) )(Dialogs);