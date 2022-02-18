DROP DATABASE IF EXISTS dvds_db;
CREATE DATABASE dvds_db;

\c dvds_db;

DROP TABLE IF EXISTS dvds_tb;

CREATE TABLE dvds_tb (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL
);
