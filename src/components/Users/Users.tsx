import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import Paginator from "../common/Pginator/Paginator";
import User from "./User";

type UsersPropsType = {
	totalUsersCount: number
	currentPage: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	users: UserType[]
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	followingInProgress: number[]
}

const Users = (props: UsersPropsType) => {
	return (
		<>
			<Paginator currentPage={props.currentPage}
								 onPageChanged={props.onPageChanged}
								 totalUsersCount={props.totalUsersCount}
								 pageSize={props.pageSize}
								 portionSize={10}
			/>

			{props.users.map(u => {
					return <User key={u.id}
											 user={u}
											 followingInProgress={props.followingInProgress}
											 follow={props.follow}
											 unfollow={props.unfollow}
					/>
				}
			)
			}
		</>
	);
};

export default Users;