DROP DATABASE IF EXISTS heroku_7c77d5ad4c092b8;

CREATE DATABASE heroku_7c77d5ad4c092b8;

USE heroku_7c77d5ad4c092b8;

CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password CHAR(64) NOT NULL,
  username VARCHAR(50) NOT NULL,
  location CHAR(5) NOT NULL,
  bio TEXT,
  user_photo TEXT
);

CREATE TABLE skill (
  skill_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  categories VARCHAR(200),
  skill VARCHAR(200) NOT NULL
);

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
  creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
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
  review_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (reviewer_id) REFERENCES user (user_id)
);

CREATE TABLE message (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message_text TEXT,
  message_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  visited BOOLEAN,
  from_username INT NOT NULL,
  FOREIGN KEY (from_username) REFERENCES user (user_id),
  to_username INT NOT NULL,
  FOREIGN KEY (to_username) REFERENCES user (user_id)
);

CREATE TABLE test (
  likes INT
);
INSERT INTO test (likes) VALUES (5);
