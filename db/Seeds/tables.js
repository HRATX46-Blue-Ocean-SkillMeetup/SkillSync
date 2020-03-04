const faker = require("faker");

const createFakeUser = () => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.internet.username(),
  location: Math.floor(Math.random() * (99999 - 10)) + 10,
  bio: faker.lorem.paragraph(),
  user_photo: faker.image.imageUrl()
});

exports.seed = async function (knex, Promise) {
  const fakeUser = [];
  const desiredFakeUsers = 100;
  for (let i = 0; i < desiredFakeUsers.length; i++) {
    fakeUser.push(createFakeUser());
  }
  await knex("user")
    .insert(fakeUser)
};


/*   
  CREATE TABLE user_skill (
    user_id INT NOT NULL,
    skill_id INT NOT NULL,
    role ENUM('mentor', 'mentee'),
    FOREIGN KEY (user_id) REFERENCES user (user_id),
    FOREIGN KEY (skill_id) REFERENCES skill (skill_id)
  );
  
  CREATE TABLE posting (
    posting_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role ENUM('mentor', 'mentee'),
    skill_id INT NOT NULL,
    user_id INT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
  );
  
  CREATE TABLE booking (
    booking_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    skill_id INT NOT NULL,
    requester_id INT NOT NULL,
    requestee_id INT NOT NULL,
    FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
    FOREIGN KEY (requester_id) REFERENCES user (user_id),
    FOREIGN KEY (requestee_id) REFERENCES user (user_id)
  ); 
  
  CREATE TABLE review (
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rating TINYINT NOT NULL,
    skill_id INT NOT NULL,
    description TEXT,
    reviewer_id INT NOT NULL,
    user_id INT NOT NULL,
    review_date TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id),
    FOREIGN KEY (reviewer_id) REFERENCES user (user_id)
  );
  
  CREATE TABLE message (
    message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    message_text TEXT,
    message_date TIMESTAMP NOT NULL DEFAULT NOW(),
    visited BOOLEAN,
    from_username INT NOT NULL,
    FOREIGN KEY (from_username) REFERENCES user (user_id),
    to_username INT NOT NULL,
    FOREIGN KEY (to_username) REFERENCES user (user_id)
  );
*/
