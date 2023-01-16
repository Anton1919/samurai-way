import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";

type ResponseProfileContainerType = {
	aboutMe: string
	contacts: {
		facebook: string
		website: string
		vk: string
		twitter: string
		instagram: string
		youtube: string
		github: string
		mainLink: string
	}
	lookingForAJob: string
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: {
		small: string
		large: string
	}
}

class ProfileContainer extends React.Component<any, any> {
	componentDidMount() {
		axios.get<ResponseProfileContainerType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response) => {
				// console.log(response)
				this.props.setUserProfile(response.data)

			})
	}

	render() {
		return (<div>
				<Profile {...this.props}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

})( ProfileContainer);