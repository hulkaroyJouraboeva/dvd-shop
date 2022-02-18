DROP DATABASE IF EXISTS dvd_db;
CREATE DATABASE dvd_db;

\c dvd_db;

DROP TABLE IF EXISTS dvd_tb;

CREATE TABLE dvd_tb (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL,
    image TEXT,
    release_date TEXT,
    runtime INT,
    director TEXT,
    is_favorite BOOLEAN
);
