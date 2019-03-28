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
              <i className="material-icons" onClick={() => this.likeReview(review.id, review.likes) }>thumb_up</i>
              {review.likes}
            </div>
            </li>
        })
    }

    likeReview(id, oldLikes){
        this.props.LikeReviewMutation({
            variables: {id},
            optimisticResponse: {
                __typename: "Mutation",
                likeReview: { 
                    id,
                    __typename: "ReviewType",
                    likes: oldLikes + 1
                 }
            }
        })
    }

}
export default compose(
    graphql(LikeReviewMutation, {
        name:"LikeReviewMutation"
    })
    )(ReviewList);