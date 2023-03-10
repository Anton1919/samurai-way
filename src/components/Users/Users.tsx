import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";


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
			<div className={s.pages}>
				{pages.map((p, index) => {
					return <a key={index} onClick={() => {
						props.onPageChanged(p)
					}} className={props.currentPage === p ? s.selectedPage : ''}>{p}</a>
				})}
			</div>

			{props.users.map((u, index) => {
					return <div className={s.usersInfo} key={u.id}>
						<NavLink to={'/profile/' + u.id}>
							<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
						</NavLink>

						<div className={s.info}>
							<div>
								<div className={s.about}> Name: {u.name}</div>
								<div className={s.about}> Status: {u.status ? u.status : "No status"}</div>
							</div>
							<div>
								<div className={s.about}> Country: {'u.location.country'}</div>
								<div className={s.about}> City: {'u.location.city'}</div>
							</div>
							<div>
								{u.followed
									? <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)}
														onClick={() => props.unfollow(u.id)}>Unfollow
									</button>

									: <button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)}
														onClick={() => props.follow(u.id)}>Follow</button>}
							</div>
						</div>

					</div>
				}
			)
			}
		</div>
	);
};

export default Users;