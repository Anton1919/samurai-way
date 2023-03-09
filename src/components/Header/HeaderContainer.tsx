import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type mapStateToProps = {
	isAuth: boolean
	login: string | null
}

type mapDispatchPropsType = {
	getAuthUserData: () => void
}

export type ResponseHeaderType = {
	data: { id: number, email: string, login: string }
	fieldsErrors: [] | string[]
	resultCode: number
	messages: [] | string[]
}

type HeaderContainerPropType = mapStateToProps & mapDispatchPropsType

class HeaderContainer extends React.Component <HeaderContainerPropType> {

	render() {
		return <Header/>
	}
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)

