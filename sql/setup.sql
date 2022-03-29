-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS secret;

CREATE TABLE secret (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL
);

-- CREATE TABLE posts (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   title TEXT NOT NULL,
--   content TEXT NOT NULL,
--   user_id BIGINT REFERENCES users(id)
-- );