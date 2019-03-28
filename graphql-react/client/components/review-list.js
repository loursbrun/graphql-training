import React, { Component } from 'react';

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
            return <li key={review.id} className="collection-item" >{review.content}</li>
        })
    }

}

export default ReviewList;