import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string | undefined
    updateStatus: (status: string) => void
}
type ProfileStatusState = {
    editMode: boolean
    status: string | undefined
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state: ProfileStatusState = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status!)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusState>) {
        if (prevProps.status !== this.props.status) {
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
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                               autoFocus={true}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus