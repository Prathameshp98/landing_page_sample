import React from 'react';
import Details from './components/details';
import HomePage from './components/homePage';

function App () {
	

	return (
		<div className="App">
            <HomePage />

            <div className="detail-box">
                <h1 className="home-page-details">DETAILS</h1>
                <Details />
            </div>
            
		</div>
	);
}


export default App;
