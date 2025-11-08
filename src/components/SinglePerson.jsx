import { Link } from "react-router-dom";

export default function SinglePerson(props) {
	const { person } = props;

	return (
		<div>
			<Link to={`/people/${person.id}`}>
				<div>
					<p>{person.nome}</p>
					<p>{person.cognome}</p>
				</div>
			</Link>
		</div>
	);
}
