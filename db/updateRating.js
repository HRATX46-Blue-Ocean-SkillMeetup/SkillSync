// QUERY TO UPDATE AVERAGE RATING FOR USERS

app.get("/seed", (req, res) => {
  let i = 1;
  function seed() {
    pool.query(
    `
    UPDATE user 
    SET rating = (SELECT AVG(rating) FROM review WHERE user_id = ${i})
    WHERE user_id=${i};`,
      (err, data) => {
        if (err) {
          console.log("error at row", i);
        }
        i++;
        i === 20 ? res.status(200).send("done") : seed();
      }
    );
  }
  seed();
});