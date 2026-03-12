TRUNCATE TABLE pets RESTART IDENTITY CASCADE;


INSERT INTO pets (pet_id, user_id, pet_name, pet_breed, pet_age, pet_health_goal)
VALUES ('P001', 'U001', 'Bobo', 'Dalmatian', 7.0, '25 years life expectancy'),
       ('P002', 'U002', 'Conan', 'Golden Retriever', 3.0, 'Frisbee forever'),
       ('P003', 'U002', 'Cocoa', 'Weimaraner', 1.5, 'Grow old with baby face'),
       ('P004', 'U004', 'Pho', 'Shiba Inu', 4.0, 'Stay lean and energetic'),
       ('P005', 'U005', 'Biscuit', 'Beagle', 2.0, 'Build stronger joints'),
       ('P006', 'U006', 'Churro', 'Chihuahua', 6.0, 'Healthy weight management'),
       ('P007', 'U007', 'Kojo', 'Basenji', 3.5, 'Shiny coat and gut health'),
       ('P008', 'U008', 'Dosa', 'Labrador', 5.0, 'Reduce allergy symptoms'),
       ('P009', 'U009', 'Bratwurst','Dachshund', 8.0, 'Support aging spine'),
       ('P010', 'U010', 'Mochi', 'Pomeranian', 1.0, 'Boost immunity from puppyhood');