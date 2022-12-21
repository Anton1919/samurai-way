import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsType, PostsType} from "../../../Redux/store";
import {addPostActionCreator, upDateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

type MyPostPropsType = {
	posts: PostsType[]
	// dispatch: (action: ActionsType) => void
	newPostText: string
	updateNewPostText: (text: string) => void
	addPost: () => void
}


const MyPosts = (props: MyPostPropsType) => {

	const postsElemets = props.posts.map(el =>
		<Post key={el.id} message={el.message} likesCount={el.likesCount}/>
	)

	const onAddPost = () => {
		 props.addPost()
		//  props.dispatch(addPostActionCreator())
	}

	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.currentTarget.value
		 props.updateNewPostText(text)
		// let action = upDateNewPostTextActionCreator(text)
		// props.dispatch(action)
	}

	return (
		<div className={s.postsBlock}><h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange}
										value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
				<div className={s.posts}>
					{postsElemets}
				</div>
			</div>
		</div>
	);
};

export default MyPosts;