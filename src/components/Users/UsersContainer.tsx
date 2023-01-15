import React from 'react';

import {connect} from "react-redux";
import {
	followAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	setUsersAC,
	unFollowAC,
	UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from 'redux'
import Users from "./Users";


type MapStatePropsType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
}

type MapDispatchPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (pageNumber: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: (pageNumber: number) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch((setTotalUsersCountAC(totalCount)))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)