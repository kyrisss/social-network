import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Aside.module.css"

const Aside = () => {
    return (
        <aside className={s.aside}>
            <div className={s.aside_list}>
                <NavLink to="/profile" className={(navData => navData.isActive ? s.active : '')}>Profile</NavLink>
                <NavLink to="/dialogs" className={(navData => navData.isActive ? s.active : '')}>Dialogs</NavLink>
                <NavLink to="/friends" className={(navData => navData.isActive ? s.active : '')}>Friends</NavLink>
                <NavLink to="/gallery" className={(navData => navData.isActive ? s.active : '')}>Gallery</NavLink>
                <NavLink to="/videos" className={(navData => navData.isActive ? s.active : '')}>Videos</NavLink>
            </div>
        </aside>
    )
}

export default Aside;