import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {ActionsType, PostsType} from "../../../Redux/state";

type MyPostPropsType = {
	posts: PostsType[]
	dispatch: (action: ActionsType) => void
	newPostText: string
}

const MyPosts = (props: MyPostPropsType) => {

	let postsElemets = props.posts.map(el =>
		<Post key={el.id} message={el.message} likesCount={el.likesCount}/>
	)

	const addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let text = e.currentTarget.value
		let action = upDateNewPostTextActionCreator(text)
		props.dispatch(action)
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