import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	requestUsers,
	setCurrentPage,
	toggleFollowingProgress,
	unfollow,
	UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from "../../Redux/users-selectors";


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
	requestUsers: (pageNum: number, pageSize: number) => void
}
export type UsersPropType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropType> {
	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.requestUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching
				? <Preloader/>
				: null}

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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default withAuthRedirect(connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	requestUsers
})(UsersContainer))



