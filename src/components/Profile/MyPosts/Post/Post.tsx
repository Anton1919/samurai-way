import React from 'react';
import s from "./Post.module.css";
import photo from '../../../../assets/img/user.png'

type PostsPropsType = {
	key: number
	message: string
	likesCount: number
}

const Post = (props: PostsPropsType) => {
	return (
		<div className={s.item}>
			<div className={s.descr}>
				<img
					src={photo}
					alt="img"/>
				<p className={s.message}>{props.message}</p>
			</div>

			<div>
				<span>Like: {props.likesCount}</span>
			</div>

		</div>
	);
};


export default Post;