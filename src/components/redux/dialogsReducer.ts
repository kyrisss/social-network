type DialogType ={
  user: string
  id: number
}

type MessageType = {
  message: string
}

let initialStore = {
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
        ] as Array<DialogType>,
        messagesData: [
          {message: "HI"},
          {message: "Hi, how are you?"},
          {message: "Nice"},
        ] as Array<MessageType>
}

type InitialStoreType = typeof initialStore

const dialogsReducer = (state = initialStore, action):InitialStoreType  =>{
   
    switch(action.type){
        case "NEW-MESSAGE":
            return{
                ...state,
                messagesData: [...state.messagesData, {message: action.newMessage}],
            }
        default:
            return state;
    }
    
}

type NEW_MESSAGE_TYPE = {
  type: "NEW-MESSAGE"
  newMessage:string
}

export const NEW_MESSAGE = (newMessage: string):NEW_MESSAGE_TYPE =>{
    return {type: "NEW-MESSAGE", newMessage}
}


export default dialogsReducer;