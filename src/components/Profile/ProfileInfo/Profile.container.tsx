import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../../Redux/profile-reducer";
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
	status: string,
	authId: string
	isOwner?: boolean
	savePhoto?: any
}

type MapDispatchPropsType = {
	getUserProfile: (userId: string) => void
	getStatus: (userId: string) => void
	updateStatus: (status: string) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authId
		}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile {...this.props}
							 profile={this.props.profile}
							 isOwner={!this.props.match.params.userId}
							 status={this.props.status}
							 updateStatus={this.props.updateStatus}
							 savePhoto={this.props.savePhoto}
			/>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authId: state.auth.userId + '',
})

export default withAuthRedirect(withRouter(connect(mapStateToProps, {
	getUserProfile,
	getStatus,
	updateStatus,
	savePhoto
})(ProfileContainer)))
