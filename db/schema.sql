DROP TABLE IF EXISTS portal;


\c portal;

CREATE TABLE portal (
    id SERIAL PRIMARY KEY, 
    name TEXT
);