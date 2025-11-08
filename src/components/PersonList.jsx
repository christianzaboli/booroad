import partecipanti from "../data/partecipanti";
import SinglePerson from "./SinglePerson";

const PersonList = () => {
	return (
		<div>
			{partecipanti.map((person) => (
				<SinglePerson key={person.id} person={person} />
			))}
		</div>
	);
};

export default PersonList;
