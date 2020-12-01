import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	render() {
		return (
			<div className="search bar ui segment">
				<form className="ui form">
					<div className="field">
						<label>Search Bar</label>
						<input
							type="text"
							// every time the react rerenders it will update with the new value
							value={this.state.term}
							// As Soon as the user types into the search bar callback gets called
							// Pull the change event the user did out of the object and store it as the new value
							onChange={(event) => this.setState({ term: event.target.value })}
							placeholder="Search..."
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
