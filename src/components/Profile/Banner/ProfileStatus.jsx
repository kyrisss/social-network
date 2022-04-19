import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode

        })
        if (this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.changeEditMode} >{this.state.status || "======"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.changeEditMode} onChange={this.onChangeStatus} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}



export default ProfileStatus