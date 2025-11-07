import { useLocation, Link } from "react-router-dom";

export default function MyHeader() {
	const location = useLocation();

	return (
		<header className="d-flex justify-content-between align-items-center my-4">
			<h1 className="display-1">
				<Link to="/">BooRoad</Link>
			</h1>
			{location.pathname === "/users" && (
				<Link to="/" className="btn btn-primary">
					Torna alla Homepage
				</Link>
			)}
		</header>
	);
}
