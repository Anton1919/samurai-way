import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unFollow,
	UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type ResponseUsersContainerType = {
	error: null | string
	items: UserType[]
	totalCount: number
}
type MapStatePropsType = {
	users: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
}
type MapDispatchPropsType = {
	follow: (userId: number) => void
	unFollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (pageNumber: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropType> {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get<ResponseUsersContainerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then((response) => {
				// console.log(response)
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios.get<ResponseUsersContainerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response) => {
				// console.log(response)
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
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
		isFetching: state.usersPage.isFetching
	}
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
// 	return {
// 		follow: (userId: number) => {
// 			dispatch(followAC(userId))
// 		},
// 		unFollow: (userId: number) => {
// 			dispatch(unFollowAC(userId))
// 		},
// 		setUsers: (users: UserType[]) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (pageNumber: number) => {
// 			dispatch(setCurrentPageAC(pageNumber))
// 		},
// 		setTotalUsersCount: (totalCount: number) => {
// 			dispatch(setTotalUsersCountAC(totalCount))
// 		},
// 		toggleIsFetching: (isFetching: boolean) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		}
//
// 	}
// }


export default connect(mapStateToProps, {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer)