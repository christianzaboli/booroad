import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";

export default function DefaultLayout() {
	return (
		<div className="container-wide">
			<MyHeader />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
