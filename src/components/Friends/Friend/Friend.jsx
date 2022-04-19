import { FOLLOW } from "../../redux/friendsReducer";


const Friend = (props) => {
    const followF = (userId) => {
        props.followF(userId)
    }
    return (
        <div>
            <div>{`${props.name}, ${props.status}`}</div>
            {console.log(props.follow)}
            <div><button onClick={ followF }>{props.follow ? `Unfollow` : `Follow`}</button></div>

        </div>
    )

}

export default Friend;