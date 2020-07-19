import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                {/* La barre de navigation commun à toutes les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/">Pokédex</Link>
                    </div>
                </nav>
                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute exact path="/pokemons/add" component={PokemonAdd} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <Route path="/pokemons/:id" component={PokemonDetail} />                    
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;