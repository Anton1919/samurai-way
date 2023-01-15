import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/store";

type MyPostPropsType = {
	posts: PostsType[]
	newPostText: string
	updateNewPostText: (e: string) => void
	addPost: () => void
}

const MyPosts = (props: MyPostPropsType) => {

	const postsElemets = props.posts.map(el =>
		<Post key={el.id} message={el.message} likesCount={el.likesCount}/>
	)

	const onAddPost = () => {
		 props.addPost()
	}

	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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