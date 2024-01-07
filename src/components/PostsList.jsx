import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
	return (
		<>
			{isPosting && (
				<Modal>
					<NewPost onCancel={onStopPosting} />
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author="Manuel" body="Check out the full course!" />
			</ul>
		</>
	);
}

export default PostsList;
