import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type mapStateToProps = {
	isAuth: boolean
	login: string | null
}

type mapDispatchPropsType = {
	setAuthUserData: (userId: number, email: string, login: string) => void
}

type ResponseType = {
	data: { id: number, email: string, login: string }
	fieldsErrors: [] | string[]
	resultCode: number
	messages: [] | string[]
}

type HeaderContainerPropType = mapStateToProps & mapDispatchPropsType

class HeaderContainer extends React.Component <HeaderContainerPropType> {
	componentDidMount() {
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then((response) => {
				// console.log(response)
				let {id, email, login} = response.data.data
				if (response.data.resultCode === 0) {
					this.props.setAuthUserData(id, email, login)
				}
			})
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

