TRUNCATE TABLE payment RESTART IDENTITY CASCADE;


INSERT INTO payment (payment_id, order_id, payment_amount, status, payment_method, transaction_ref, paid_at)
VALUES ('PAY001', 'ORD001', 115.00, 'Completed', 'Card', 'TXN-CC-88421', '2025-03-01 10:32:00'),
       ('PAY002', 'ORD002', 90.00, 'Completed', 'Transfer', 'TXN-TF-77310', '2025-03-03 14:15:00'),
       ('PAY003', 'ORD003', 80.00, 'Pending', 'COD', NULL, NULL),
       ('PAY004', 'ORD004', 145.00, 'Completed', 'Card', 'TXN-CC-99102', '2025-03-05 09:44:00'),
       ('PAY005', 'ORD005', 55.00, 'Completed', 'Transfer', 'TXN-TF-66089', '2025-03-06 18:20:00');


SELECT *
FROM payment;