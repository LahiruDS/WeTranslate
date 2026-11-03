import reviews from "../data/reviews.js";

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Reviews</span>
          <h2>What our clients say</h2>
          <p>Real feedback from people who trusted us with their words.</p>
        </div>

        <div className="grid-3">
          {reviews.map((review) => (
            <article key={review.name} className="review-card reveal">
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p lang={review.lang || "en"}>{review.text}</p>
              <div className="reviewer">
                <span className="avatar">{review.initial}</span>
                <div>
                  <strong>{review.name}</strong>
                  <small>{review.location}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
