TRUNCATE TABLE orderbill RESTART IDENTITY CASCADE;


INSERT INTO orderbill (order_id, user_id, total_amount, status)
VALUES ('ORD001', 'U001', 115.00, 'Shipped'),
       ('ORD002', 'U002', 90.00, 'Paid'),
       ('ORD003', 'U004', 80.00, 'Pending'),
       ('ORD004', 'U005', 145.00, 'Shipped'),
       ('ORD005', 'U008', 55.00, 'Paid');

SELECT *
FROM orderbill;