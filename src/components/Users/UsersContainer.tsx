import React from 'react';

import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from 'redux'

type MapStatePropsType = {
	users: UserType[]
}

type MapDispatchPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
}

export type UsersPropType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
	return {
		follow: (userId: number) => {
			dispatch(followAC(userId))
		},
		unFollow: (userId: number) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users: UserType[]) => {
			dispatch(setUsersAC(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)