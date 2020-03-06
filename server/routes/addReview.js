function addReviewsRoute(app) {
  const addReview = (reviewInfo, callback) => {
    pool.query(
      `INSERT INTO review (user_id, reviewer_id, skill_id, description, rating, review_date) VALUES (${reviewInfo.user_id},${reviewInfo.skill_id}, ${reviewInfo.reviewer_id}, "${reviewInfo.description}", ${reviewInfo.rating}, now())`,
      (err, data) => {
        if (err) throw err;
        else {
          callback(null, data);
        }
      }
    );
  };

  app.post("/post_review", urlencodedParser, (req, res) => {
    addReview(req.body, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    });
  });
}

module.exports.addReviewsRoute = addReviewsRoute;
