import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
	const [modalIsVisible, setModelIsVisible] = useState(false);

	return (
		<>
			<Outlet />
			<main>
				<PostsList />
			</main>
		</>
	);
}

export default Posts;
