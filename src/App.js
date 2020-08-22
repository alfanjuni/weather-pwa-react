import React, { useState } from 'react';
import { default as localforage } from 'localforage';
function App() {
	const [value, setValue] = useState('');
	const [retriveValue, setRetriveValue] = useState('');
	const p = null;

	console.log('log', value);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		localforage
			.setItem('somekey', value)
			.then(function (value) {
				console.log('submit', value);
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	const handleClick = () => {
		localforage
			.getItem('somekey')
			.then((val) => {
				console.log(val);
				setRetriveValue(val);
			})
			.catch(function (err) {
				console.log(err);
			});
	};
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label>Enter Favorite Color</label>
				<input onChange={handleChange} type="text" />
				<input type="submit" />
			</form>
			<button onClick={handleClick}>Retrieve</button>
			<p>{retriveValue}</p>
		</div>
	);
}

export default App;
