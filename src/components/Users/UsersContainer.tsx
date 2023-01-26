import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers, toggleFollowingProgress,
	toggleIsFetching,
	unFollow,
	UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

// type ResponseUsersContainerType = {
// 	error: null | string
// 	items: UserType[]
// 	totalCount: number
// }
type MapStatePropsType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
}
type MapDispatchPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (pageNumber: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
	toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
export type UsersPropType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropType> {
	componentDidMount() {

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount)
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then((data) => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching
				? <Preloader/>
				: ''}

			<Users
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				pageSize={this.props.pageSize}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress
})(UsersContainer)