import React from 'react';

type PropsType = {
	status: string
}

class ProfileStatus extends React.Component<PropsType> {

	state = {
		editMode: false
	}

	activateEditMode() {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode() {
		this.setState({
			editMode: false
		})
	}


	render() {
		return (
			<div>
				{!this.state.editMode &&
            <span onClick={this.activateEditMode.bind(this)}>
							{this.props.status}
            </span>
				}
				{this.state.editMode &&
            <div>
                <input value={this.props.status} autoFocus onBlur={this.deactivateEditMode.bind(this)}/>
            </div>
				}
			</div>
		);
	}
}

export default ProfileStatus;