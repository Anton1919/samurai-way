import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
	user: UserType
	followingInProgress: number[]
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {

	return (
		<div className={s.usersInfo}>
			<NavLink to={'/profile/' + user.id}>
				<img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
			</NavLink>

			<div className={s.info}>
				<div>
					<div className={s.about}> Name: {user.name}</div>
					<div className={s.about}> Status: {user.status ? user.status : "No status"}</div>
				</div>
				<div>
					<div className={s.about}> Country: {'u.location.country'}</div>
					<div className={s.about}> City: {'u.location.city'}</div>
				</div>
				<div>
					{user.followed
						? <button className={s.btn} disabled={followingInProgress.some(id => id === user.id)}
											onClick={() => unfollow(user.id)}>Unfollow
						</button>

						: <button className={s.btn} disabled={followingInProgress.some(id => id === user.id)}
											onClick={() => follow(user.id)}>Follow</button>}
				</div>
			</div>

		</div>
	)
};

export default User;