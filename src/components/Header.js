import React from "react";
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import { Route, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      {/* // * Links for navigation
       */}
      <div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/CharacterList">Characters</NavLink>
      </div>


      {/* // * Routes for navigation
       */}
      <Route exact path={`/`} render={() => <WelcomePage />} />
      <Route exact path={`/CharacterList`} render={() => <CharacterList />} />
      
    </header>
  );
}
