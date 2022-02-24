DROP DATABASE IF EXISTS dvd_db;
CREATE DATABASE dvd_db;

\c dvd_db;

DROP TABLE IF EXISTS dvd_tb;

CREATE TABLE dvd_tb (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT,
    release_date TEXT,
    runtime INT,
    director TEXT,
    is_favorite BOOLEAN,
    description TEXT, 
    price INT,
    rating INT,
    featured BOOLEAN
);

-- DROP TABLE IF EXISTS reviews_tb;

-- CREATE TABLE reviews_tb (
--     id SERIAL PRIMARY KEY,
--     reviewer TEXT NOT NULL,
--     content TEXT NOT NULL,
--     rating INT,
--     CHECK (rating >= 0 AND rating <= 10),
--     dvd_id INTEGER REFERENCES dvd_tb (id)
--     ON DELETE CASCADE
-- );
