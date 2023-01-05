import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.jpg";
import axios from "axios";
import {UsersPropType} from "./UsersContainer";
import {UserType} from "../../Redux/users-reducer";


type ResponceType = {
	error: null|string
	items: UserType[]
	totalCount: number
}


class Users extends React.Component<UsersPropType> {

		componentDidMount() {
			axios.get<ResponceType>("https://social-network.samuraijs.com/api/1.0/users")
				.then((response) => {
					console.log(response)
					this.props.setUsers(response.data.items)
				})
		}

	render() {
		return (
			<div>
				{this.props.users.map((u, index) => <div key={u.id}>
				<span>
					<div>
						<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
					</div>
					<div>
						{u.followed
							? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
							: <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
	}

}

export default Users