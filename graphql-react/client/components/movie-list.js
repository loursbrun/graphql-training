import React, { Component } from 'react';
import { graphql, compose } from "react-apollo";
import readMoviesQuery from "../queries/readMovies";
import { Link } from "react-router";

class MovieList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Liste de film
                <ul className="collection">
                    {this.renderMovies()}
                </ul>
                <Link to="/movies/create" className="btn-floating btn-large btn-effect blue right">
                <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }


    renderMovies() {
        if (!this.props.readMoviesQuery.loading) {
            return this.props.readMoviesQuery.movies.map((movie) => {
                return (
                <li className="collection-item" key={movie.id}>
                {movie.title}
                <i className="material-icons secondary-content delete_button">delete</i>
                </li>)
            })
        } else {
            return "chargement des données..."
        }
    }



}

export default compose(
graphql(readMoviesQuery, {
    name:"readMoviesQuery"
})

)(MovieList);