TRUNCATE TABLE users RESTART IDENTITY CASCADE;


INSERT INTO users (user_id, user_name, user_email, user_password, user_address, role)
VALUES ('U001', 'Sato Foster', 'sato.foster@doggieclub.com', 'hashed_pw_001', '101 Bellavue, Seattle', 'customer'),
       ('U002', 'Megumi Yui', 'Megumi.y@doggieclub.com', 'hashed_pw_002', '87-501 Shibuya, Tokyo', 'customer'),
       ('U003', 'Biscuit', 'biscuit.thedal@doggieclub.com', 'hashed_pw_003', 'The Rainbow Bridge, Milky Way', 'admin'),
       ('U004', 'Liam Nguyen', 'liam.nguyen@doggieclub.com', 'hashed_pw_004', '22 Le Loi, Ho Chi Minh City', 'customer'),
       ('U005', 'Aria Patel', 'aria.patel@doggieclub.com', 'hashed_pw_005', '9 Baker St, London', 'customer'),
       ('U006', 'Carlos Ruiz', 'carlos.ruiz@doggieclub.com', 'hashed_pw_006', '48 Gran Via, Madrid', 'customer'),
       ('U007', 'Nana Asante', 'nana.asante@doggieclub.com', 'hashed_pw_007', '3 Osu Rd, Accra', 'customer'),
       ('U008', 'Priya Sharma', 'priya.sharma@doggieclub.com', 'hashed_pw_008', '12 MG Road, Bangalore', 'customer'),
       ('U009', 'Felix Müller', 'felix.muller@doggieclub.com', 'hashed_pw_009', '77 Unter den Linden, Berlin', 'customer'),
       ('U010', 'Jenny Tanaka', 'jenny.tanaka@doggieclub.com', 'hashed_pw_010', '500 Namba, Osaka', 'admin');