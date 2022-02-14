 DROP TABLE IF EXISTS days;


-- \c portal;

CREATE TABLE days (
    id SERIAL PRIMARY KEY, 
    name TEXT
);