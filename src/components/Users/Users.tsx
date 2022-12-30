import React from 'react';
import s from './Users.module.css'
import {UsersPropType} from "./UsersContainer";

const Users = (props: UsersPropType) => {

	if(props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: 'https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000',
				followed: false, fullName: "Anton", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}
			},
			{
				id: 2,
				photoUrl: 'https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000',
				followed: true,
				fullName: "Vasya",
				status: "I am a boss",
				location: {city: "Moscow", country: "Russia"}
			},
			{
				id: 3,
				photoUrl: 'https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=2000',
				followed: false,
				fullName: "Petya",
				status: "I am a boss",
				location: {city: "Kiev", country: "Ukraine"}
			},
		])
	}

	return (
		<div>
			{props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img className={s.userPhoto} src={u.photoUrl}/>
					</div>
					<div>
						{u.followed
							? <button onClick={() => {
								props.unFollow(u.id)
							}}>Unfollow</button>
							: <button onClick={() => props.follow(u.id)}>Follow</button>}
					</div>
				</span>

				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>

			</div>)}
		</div>
	);
};

export default Users;