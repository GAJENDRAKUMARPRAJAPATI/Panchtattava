import React from "react";

const Review = () => {
  return (
    <div className="review">
      <h4>Review & Testimonials</h4>

      <div className="review1"></div>
      <div className="review2"></div>
      <div className="review-content">
        <div></div>
        <div>
            <div className="d-flex ">
             ☆☆☆☆☆
             <p>4.5 rating</p>
            </div>
          <div className="contents">
          An article review is both a summary and an evaluation of another
          writer's article. Teachers often assign article reviews to introduce
          students to the work of experts in the field. Experts also are often
          asked to review the work of other professionals. Understanding the
          main points and arguments of the article is essential for an accurate
          summation. Logical evaluation of the article's main theme, supporting
          arguments, and implications for further research is an important
          element of a review. Here are a few guidelines for writing an article
          review.
          </div>
        </div>
      </div>
      <div className="review-img">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Review;
