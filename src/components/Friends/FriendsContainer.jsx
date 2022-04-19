
import { connect } from "react-redux";
//import { FOLLOW, SET_USERS, CHANGE_PAGE, SET_TOTAL_COUNT, TOGGLE_FETCHING, TOGGLE_FOLLOWING } from "../redux/friendsReducer";
import React from "react"
import s from "./Friends.module.css"
import Preloader from "../common/Preloader/Preloader"
import { NavLink } from "react-router-dom";
import { getUsersTC, getPageUsersTC, followTC, unfollowTC } from './../redux/friendsReducer.ts';
import { withRedirect } from './../hoc/withAuthRedirect';
import { compose } from "redux";

// type PropsType = {

// }


class Friends extends React.Component {

    componentWillMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.TOGGLE_FETCHING(true)
        // samuraiApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.TOGGLE_FETCHING(false)
        //         this.props.SET_USERS(data.items)
        //         this.props.SET_TOTAL_COUNT(data.totalCount)
        //     })
        console.log(this.props)
        console.log(this.state)
    }


    changePage = (numberPage) => {
        this.props.getPageUsersTC(numberPage, this.props.pageSize)
        // this.props.CHANGE_PAGE(numberPage)
        // this.props.TOGGLE_FETCHING(true)
        // samuraiApi.getPageUsers(numberPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.TOGGLE_FETCHING(false)
        //         this.props.SET_USERS(data.items)
        //     })

    }

    render() {
        

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.container}>
                <div className={s.pages}>
                    {
                        pages.map(p => {
                            return <span onClick={() => { this.changePage(p) }} className={p == this.props.currentPage ? `${s.activePage} ${s.page}` : s.page} >{p}</span>
                        })
                    }
                </div>
                {this.props.isFetching === true ? <Preloader /> : null}
                {
                    this.props.state.users.map(u => {
                        return (
                            <div className={s.user}>
                                <NavLink to={"/profile/" + u.id} >
                                    <div><img className={s.ava} src={u.photos.small != null ? u.photos.small : "./logo192.png"} alt="Photo" /></div>
                                </NavLink>
                                <div>{`${u.name}, ${u.status}`}</div>
                                <div><button disabled={this.props.isFollowing.some(id => id === u.id)} onClick={() => {
                                    // debugger
                                    if (!u.followed) {
                                        this.props.followTC(u.id)
                                        // this.props.TOGGLE_FOLLOWING(true, u.id)
                                        // samuraiApi.follow(u.id)
                                        //     .then(data => {
                                        //         if (data.resultCode === 0) {
                                        //             this.props.FOLLOW(u.id)
                                        //         }
                                        //         this.props.TOGGLE_FOLLOWING(false, u.id)
                                        //     })
                                    } else {
                                        this.props.unfollowTC(u.id)
                                        // this.props.TOGGLE_FOLLOWING(true, u.id)
                                        // samuraiApi.unfollow(u.id)
                                        //     .then(data => {
                                        //         if (data.resultCode === 0) {
                                        //             this.props.FOLLOW(u.id)
                                        //         }
                                        //         this.props.TOGGLE_FOLLOWING(false, u.id)
                                        //     })

                                    }
                                }}>{u.followed ? `Unfollow` : `Follow`}</button></div>
                            </div>
                        )
                    }
                    )
                }
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.friendsPage,
        currentPage: state.friendsPage.currentPage,
        totalCount: state.friendsPage.totalCount,
        pageSize: state.friendsPage.pageSize,
        isFetching: state.friendsPage.isFetching,
        isFollowing: state.friendsPage.isFollowing
    }
}
// let withRedirectComponent = withRedirect(Friends)
// const FriendsContainer = connect(mapStateToProps, { /*FOLLOW, SET_USERS, CHANGE_PAGE, SET_TOTAL_COUNT, TOGGLE_FETCHING, TOGGLE_FOLLOWING,*/
//     getUsersTC, getPageUsersTC, followTC, unfollowTC
// })(withRedirectComponent)


export default compose(
    withRedirect,
    connect(mapStateToProps, { /*FOLLOW, SET_USERS, CHANGE_PAGE, SET_TOTAL_COUNT, TOGGLE_FETCHING, TOGGLE_FOLLOWING,*/ getUsersTC, getPageUsersTC, followTC, unfollowTC }))
    (Friends);