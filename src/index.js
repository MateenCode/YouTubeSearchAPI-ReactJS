import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDIY7vkM-LHOVzAYVzZhd9rw8AyV_ubK90';

// Create a new component. This component should produce
// some HTML
const App = () => {
  return <div>
    <SearchBar />
        </div>
}


// take this component and generated HTML and put in
// on the page (in the DOM)

ReactDOM.render( <App />, document.querySelector('.container'));
