import React from "react"
import { useMatch } from "react-router"

const withRouter = (Component) => {

    const RouterComponent = (props) => {
        const match = useMatch("/profile/:userId/")
        return <Component {...props} match={match} />
    }
    return RouterComponent
}

export default withRouter