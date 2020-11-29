import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="search bar ui segment">
				<form>
					<div className="field">
						<input type="text" placeholder="Search..."></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
