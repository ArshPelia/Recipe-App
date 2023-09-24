import React from 'react'
import Search from './components/search/Search'
import Header from './components/header/Header'
/**
 * Renders the `Search` component.
 *
 * @returns {JSX.Element} The rendered `Search` component.
 */
const App = () => {
  return (
    <>
      <Header/>
      <Search/>
    </>
  );
};

export default App;