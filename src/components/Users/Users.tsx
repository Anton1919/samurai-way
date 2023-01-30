import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.jpg";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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

	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []

	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map((p, index) => {
					return <span key={index} onClick={() => {
						props.onPageChanged(p)
					}} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
				})}

			</div>
			{props.users.map((u, index) => <div key={u.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
						</NavLink>
					</div>
					<div>
						{u.followed
							? <button disabled={props.followingInProgress.some(id => id === u.id)}
												onClick={() => props.unfollow(u.id)}>Unfollow
							</button>

							: <button disabled={props.followingInProgress.some(id => id === u.id)}
												onClick={() => props.follow}>Follow</button>}
					</div>
				</span>

				<span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{'u.location.country'}</div>
						<div>{'u.location.city'}</div>
					</span>
				</span>

			</div>)}
		</div>
	);
};

export default Users;