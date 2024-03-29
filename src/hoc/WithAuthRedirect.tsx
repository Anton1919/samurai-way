import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
	isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
	function RedirectComponent(props: MapStatePropsType) {
		let {isAuth, ...restProps} = props
		if (!isAuth) return <Redirect to='/login'/>
		return <Component {...restProps as T}/>
	}
	return connect(mapStateToPropsForRedirect)(RedirectComponent)
}