import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
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
        if (!this.props.data.loading) {
            return this.props.data.movies.map((movie) => {
                return <li className="collection-item" key={movie.id}>{movie.title}</li>
            })
        } else {
            return "chargement des données..."
        }
    }



}
const query = gql`
{
    movies{
        id,
        title
    }
}
`
export default graphql(query)(MovieList);