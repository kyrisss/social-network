import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css"

const DialogItem = (props) =>{
    return <NavLink to={`/dialogs/${props.id}`} className={navData => navData.isActive ? s.active : ''}>{props.name}</NavLink>;
}

export default DialogItem;