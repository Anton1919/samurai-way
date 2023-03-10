import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../../Redux/redux-store";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";

export type ProfileDataType = {
	aboutMe: string | null
	contacts: {
		facebook: string | null
		website: string | null
		vk: string | null
		twitter: string | null
		instagram: string | null
		youtube: string | null
		github: string | null
		mainLink: string | null
	}
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string | null
	userId: number
	photos: {
		small: string | null
		large: string | null
	}
}

type PathParamsType = {
	userId: string
}

export type MapStatePropsType = {
	profile: ProfileDataType | null
	status: string

}
type MapDispatchPropsType = {
	getUserProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
}

export type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

	componentDidMount() {

		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	render() {

		return (
				<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
})

export default withAuthRedirect(withRouter(connect(mapStateToProps, {
	getUserProfile,
	getStatus,
	updateStatus
})(ProfileContainer)))
