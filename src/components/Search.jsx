import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="search">
			<div>
				<img src="search.svg" alt="search" />

				<input
					type="text"
					placeholder="Search through thousand of movies"
					value={searchTerm}
                    // listening onChange event(key press) everytime we press key the event gets fired
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
			</div>
		</div>
	);
};

export default Search;
