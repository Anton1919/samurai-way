import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../../Redux/redux-store";

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
}
type MapDispatchPropsType = {
	getUserProfile: (userId: string) => void
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

	}

	render() {
		return (<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);