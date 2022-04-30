 DROP TABLE IF EXISTS notes;
-- makenotenotenote, notenotenotemodeltypetypetype, vdetails, notenotenoteyear, order_iep, disabiliy, is_default, uid, due_date 

-- \c portal;


-- CREATE TABLE days (
--     id SERIAL PRIMARY KEY, 
--     name TEXT
-- );

CREATE TABLE
    notes(
        id SERIAL PRIMARY key,
        makenote TEXT not null,
        notemodeltype TEXT not null,
        vdetails TEXT not null,
        noteyear INT not null,
        order_iep INT not null, 
        disability INT not null,
        is_default BOOLEAN NOT NULL,
        uid TEXT not null,
        due_date TEXT not null
    );





-- DROP DATABASE IF EXISTS mileage_db;

-- CREATE DATABASE mileage_db;

-- \c mileage_db;


-- DROP TABLE IF EXISTS mileage_db;
-- CREATE TABLE
--     notes(
--         id SERIAL PRIMARY key,
--         makenote TEXT not null,
--         notemodeltype TEXT not null,
--         vdetails TEXT not null,
--         noteyear INT not null,
--         order_iep INT not null, 
--         disability INT not null,
--         is_default BOOLEAN NOT NULL,
--         uid TEXT not null,
--         due_date TEXT not null
--     );

--  CREATE TABLE
--     expenses(
--         id SERIAL PRIMARY key,
--         expense_type TEXT NOT NULL,
--         business_use BOOLEAN NOT NULL,
--         note_id INT REFERENCES notes (id) ON DELETE CASCADE,
--         amount_spent TEXT NOT NULL,
--         date TEXT 
--     );

-- CREATE TABLE
--     trips(
--         id SERIAL PRIMARY key,
--         note_id INT REFERENCES notes (id) ON DELETE CASCADE,
--         business_use BOOLEAN not null,
--         miles INT NOT null,
--         date TEXT,
--         reason TEXT not null,	
--         favorite BOOLEAN NOT NULL
--     );



















        --  start_order_iep INT NOT null,
        -- stop_order_iep INT NOT null,