import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/state";

type MyPostPropsType = {
	posts: PostsType[]
	addPost: () => void
	newPostText: string
	updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

	let postsElemets = props.posts.map(el =>
		<Post key={el.id} message={el.message} likesCount={el.likesCount}/>
	)

	const addPost = () => {
		props.addPost()
	}

	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

		// let text = props.updateNewPostText(e.currentTarget.value)
		props.updateNewPostText(e.currentTarget.value)
	}

	return (
		<div className={s.postsBlock}><h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange}
										value={props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
				<div className={s.posts}>
					{postsElemets}
				</div>
			</div>
		</div>
	);
};

export default MyPosts;