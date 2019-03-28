import React, { Component } from 'react';
import LikeReviewMutation from "../queries/likeReview";
import { graphql, compose } from "react-apollo";

class ReviewList extends Component {
    render() {
        console.log("Props reviews : "+ this.props.reviews)
        return (
            <div>
                <ul className="collection">
                    {this.props.reviews && this.renderReviewList()}
                </ul>
            </div>
        );
    }

    renderReviewList(){
        return this.props.reviews.map( (review) => {
            return <li key={review.id} className="collection-item" >
            {review.content}
            <div className="secondary-content delete_button">
              <i className="material-icons" onClick={() => this.likeReview(review.id) }>thumb_up</i>
              {review.likes}
            </div>
            </li>
        })
    }

    likeReview(id){
        this.props.LikeReviewMutation({variables: {id}})
    }

}
export default compose(
    graphql(LikeReviewMutation, {
        name:"LikeReviewMutation"
    })
    )(ReviewList);