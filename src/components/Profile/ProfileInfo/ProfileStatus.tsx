import React, {ChangeEvent} from 'react';

type PropsType = {
	status: string
	updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		console.log('this.state',this)
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
		if (prevProps.status !== this.props.status)
			this.setState({
				status: this.props.status
			})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
            <span onClick={this.activateEditMode}>
							{this.props.status || "NO STATUS"}
            </span>
				}
				{this.state.editMode &&
            <div>
                <input
                    value={this.state.status}
                    onChange={this.onStatusChange}
                    autoFocus
                    onBlur={this.deactivateEditMode}/>
            </div>
				}
			</div>
		);
	}
}

export default ProfileStatus;