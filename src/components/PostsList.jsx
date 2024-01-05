import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import styles from './PostsList.module.css'
import { useState } from 'react'

function PostsList() {

	const [enteredBody, setEnteredBody] = useState('');
	const [enteredAuthor, setEnteredAuthor] = useState('');

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value);
	}

	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value);
	}

	return (
		<>
			<Modal>
				<NewPost
					onBodyChange={bodyChangeHandler}
					onAuthorChange={authorChangeHandler}
				/>	
			</Modal>
			<ul className={styles.posts}>
				<Post author={enteredAuthor} body={ enteredBody} />
				<Post author= "Manuel" body="Check out the full course!"/>
			</ul>
		</>
	)
	
}

export default PostsList;