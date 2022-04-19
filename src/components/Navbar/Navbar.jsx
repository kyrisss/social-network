import React from "react";
import s from "./Navbar.module.css";
import ava from "./logo192.png"

const Navbar = (props) => {
    
    return (
        <nav className={s.nav}>
            <div className={s.nav_logo}>
                
            </div>
            <div className={s.nav_list}>
                <ul>
                    <li className={s.nav_list_item}>Home</li>
                    <li className={s.nav_list_item}>Community</li>
                    <li className={s.nav_list_item}>Pages</li>
                    <li className={s.nav_list_item}>Shop</li>
                </ul>
            </div>
            <div className={s.nav_search}>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className={s.nav_ava}>
                {props.authUser.profile.photos.small ? <img src={props.authUser.profile.photos.small}  alt="avaProps" /> : <img className={s.nav_ava} src={ava} alt="avaDefault" /> }
            </div>
            <div className={s.nav_login}>
                {props.authUser.isAuth ? <span>{props.authUser.login}<button onClick={props.logoutTC}>Log out</button></span> :<button>Login</button>}
            </div>
        </nav>

    )
}

export default Navbar;