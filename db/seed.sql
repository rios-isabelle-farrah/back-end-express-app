INSERT INTO
    notes(makenote, notemodeltype, vdetails,noteyear, order_iep, disability, is_default,uid, due_date)
VALUES 
    ('iep','legal','1234567890AUPMNTR',2005,90000,4,FALSE, 'abcd', 'yes'),
    ('hearing','legal','4544567890AUPMNTR',2010,50000,4,FALSE, 'efgh', 'yes'),
    ('clinic','legal','9894567890AUPMNTR',2015,30000,4,FALSE, 'ijkl', 'yes');



---- makenotenotenotenote, notenotenotenotemodeltypetypetypetype, vdetails, notenotenotnoteyear, order_iep, disabiliy, is_default, uid, due_date 


-- \c portal;

-- INSERT INTO days (name) VALUES
-- ('Monday'),
-- ('Tuesday'),
-- ('Wednesday'),
-- ('Thursday'),
-- ('Friday'),
-- ('Saturday'),
-- ('Sunday');
-- \c mileage_db;



-- INSERT INTO
--     notes(makenote, notemodeltype, vdetails,noteyear, order_iep, disability, is_default,uid, due_date)
-- VALUES 
--     ('Dodge','Charger','1234567890AUPMNTR',2005,90000,4,FALSE, 'abcd', 'Durdona'),
--     ('Chevy','Impala','4544567890AUPMNTR',2010,50000,4,FALSE, 'efgh', 'Joshua'),
--     ('Ford','Mustang','9894567890AUPMNTR',2015,30000,4,FALSE, 'ijkl', 'Damien');


-- INSERT INTO
--     expenses( note_id,expense_type, business_use, amount_spent, date)
-- VALUES 
-- (1,'Gas',TRUE,100,'2021-01-12'),
-- (2,'Repairs',TRUE,700,'2021-02-10'),
-- (2,'note Insurance',FALSE,150,'2021-08-21'),
-- (1,'Oil Change',TRUE,40,'2021-05-15'),
-- (1,'note Insurance',TRUE,150,'2021-05-15'),
-- (1,'Repairs',TRUE,400,'2021-05-15'),
-- (1,'Depreciation',FALSE,40,'2021-05-15'),
-- (1,'Registration fees',TRUE,120,'2021-05-15'),
-- (2,'Oil Change',FALSE,40,'2021-05-15'),
-- (3,'note Insurance',TRUE,150,'2021-05-15'),
-- (2,'Gas',TRUE,100,'2021-01-12'),
-- (3,'Repairs',TRUE,500,'2021-05-15'),
-- (2,'Depreciation',FALSE,40,'2021-05-15'),
-- (2,'Registration fees',TRUE,130,'2021-05-15'),
-- (3,'Oil Change',TRUE,40,'2021-05-15'),
-- (3,'Registration fees',FALSE,130,'2021-05-15'),
-- (3,'Gas',TRUE,100,'2021-01-12'),
-- (3,'Depreciation',TRUE,100,'2021-01-12');


--  -- seed trips
-- INSERT INTO
--     trips(note_id,business_use,miles,date,reason,favorite)
--     -- start_order_iep,stop_order_iep,
-- VALUES 
-- (1,TRUE,120,'2021-11-11','delivery',false),
-- (2,TRUE,150,'2021-01-14','date night',TRUE),
-- (3,FALSE,110,'2021-12-11','delivery',false),
-- (1,TRUE,200,'2021-11-11','delivery',false),
-- (2,TRUE,90,'2021-01-14','date night',TRUE),
-- (3,FALSE,50,'2021-12-11','delivery',false),
-- (1,TRUE,100,'2021-11-11','delivery',false),
-- (2,TRUE,60,'2021-01-14','date night',TRUE),
-- (3,TRUE,120,'2021-12-11','delivery',false),
-- (1,FALSE,190,'2021-11-11','delivery',false),
-- (2,TRUE,200,'2021-01-14','date night',TRUE),
-- (3,TRUE,250,'2021-12-11','delivery',false);

