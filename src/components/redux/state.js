import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
              { post: "Hello" },
              { post: "Hi, how are you?" },
              { post: "My first message" }
            ],
            newText: ""
        },
        dialogsPage: {
            dialogsData: [
              {
                user: "Andrey",
                id: 1
              },
              {
                user: "Boris",
                id: 2
              },
              {
                user: "Pasha",
                id: 3
              },
              {
                user: "Nika",
                id: 4
              },
              {
                user: "Roma",
                id: 5
              },
            ],
            messagesData: [
              {message: "HI"},
              {message: "Hi, how are you?"},
              {message: "Nice"},
            ],
            newText: ""
        }
    },

    _reRender(){},

    getState(){
        return this._state
    },
    getDialogsData(){
        return this._state.dialogsPage.dialogsData
    },
    
    getMessagesData(){
        return this._state.dialogsPage.messagesData
    },

    getPostsData(){
        return this._state.profilePage.postsData
    },

    getNewPostText(){
        return this._state.profilePage.newText
    },
    
    getNewMessageText(){
        return this._state.dialogsPage.newText
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._reRender();
    },

    subscribe(observer){
        this._reRender = observer;
    }

}


  export default store;