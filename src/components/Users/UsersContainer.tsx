import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	getUsers,
	setCurrentPage,
	toggleFollowingProgress,
	unfollow,
	UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

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
	unfollow: (userId: number) => void
	setCurrentPage: (pageNumber: number) => void
	toggleFollowingProgress: (isFetching: boolean, userId: number) => void
	getUsers: (pageNum: number, pageSize: number) => void
}
export type UsersPropType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropType> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
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
				unfollow={this.props.unfollow}
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
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers
})(UsersContainer)