import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/state";

type MyPostPropsType = {
	posts: PostsType[]
}

const MyPosts = (props: MyPostPropsType) => {
	// let posts = [
	// 	{id: 1, message: 'Hello', likesCount: 11},
	// 	{id: 2, message: 'It is my first post', likesCount: 22}
	// ]

	let postsElemets = props.posts.map(el =>
		<Post key={el.id} message={el.message} likesCount={el.likesCount}/>
	)

	return (
		<div className={s.postsBlock}><h3>My posts</h3>
			<div>
				<div><textarea></textarea></div>
				<div>
					<button>Add post</button>
				</div>
				<div className={s.posts}>
					{postsElemets}
				</div>
			</div>
		</div>
	);
};

export default MyPosts;