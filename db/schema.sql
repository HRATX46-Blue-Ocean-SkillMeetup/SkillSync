USE heroku_7c77d5ad4c092b8;

CREATE TABLE users (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(200),
    location INT,
    bio TEXT,
    user_photo VARCHAR(200)
);

CREATE TABLE skills (
    categories VARCHAR(200),
    skill VARCHAR(200)
);

CREATE TABLE usermentorskills (
    users_username VARCHAR(50),
    FOREIGN KEY (users_username) REFERENCES users(username),
    skills_skill VARCHAR(200),
    FOREIGN KEY (skills_skill) REFERENCES skills(skill),
    description TEXT
);

CREATE TABLE usermenteeskills (
    users_username VARCHAR(50),
    FOREIGN KEY (users_username) REFERENCES users(username),
    skills_skill VARCHAR(200),
    FOREIGN KEY (skills_skill) REFERENCES skills(skill),
    description TEXT
);

CREATE TABLE messages (
    message_id INT AUTO_INCREMENT,
    message_text TEXT,
    message_date TIMESTAMP,
    visited BOOLEAN,
    from_username VARCHAR(50),
    FOREIGN KEY (from_username) REFERENCES users(username),
    to_username VARCHAR(50),
    FOREIGN KEY (to_username) REFERENCES users(username)
    PRIMARY KEY message_id
);

CREATE TABLE meetings (
    meeting_date DATETIME,
    skills_skill VARCHAR(200),
    FOREIGN KEY (skills_skill) REFERENCES skills(skill),
    from_user VARCHAR(50),
    FOREIGN KEY (from_user) REFERENCES users(user_id),
    to_user VARCHAR(50),
    FOREIGN KEY (to_user) REFERENCES users(user_id)
);

CREATE TABLE reviews (
    review_text TEXT,
    review_date TIMESTAMP,
    star_rating NUMBER,
    skills_skill VARCHAR(200),
    FOREIGN KEY (skills_skill) REFERENCES skills(skill),
    reviewer_id VARCHAR(50),
    FOREIGN KEY (reviewer_id) REFERENCES users(username),
    reviewee_id VARCHAR(50),
    FOREIGN KEY (reviewee_id) REFERENCES users(username)
);


