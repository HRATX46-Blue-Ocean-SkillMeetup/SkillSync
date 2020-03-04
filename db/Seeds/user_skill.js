/*
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
  */
