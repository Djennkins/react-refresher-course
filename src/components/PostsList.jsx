import Post from './Post'
import NewPost from './NewPost'
import styles from './PostsList.module.css'

function PostsList() {
	return (
		<>
		<NewPost/>
		<ul className={styles.posts}>
			<Post author="Maximilian" body = "React is awesome!"/>
			<Post author= "Manuel" body="Check out the full course!"/>
		</ul>
		</>
	)
	
}

export default PostsList;