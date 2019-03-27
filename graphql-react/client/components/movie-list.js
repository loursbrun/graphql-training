import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class MovieList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Liste de film
            </div>
        );
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