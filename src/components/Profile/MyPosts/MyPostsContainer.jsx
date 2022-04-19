
import { connect } from "react-redux";
import { NEW_POST} from "../../redux/profileReducer.ts";
import MyPosts from "./MyPosts"


const mapStateToProps = (state) =>{
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {dispatch(NEW_POST(newPostText))},
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;