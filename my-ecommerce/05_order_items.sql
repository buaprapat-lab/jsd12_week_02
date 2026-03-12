TRUNCATE TABLE orderitems RESTART IDENTITY CASCADE;


INSERT INTO orderitems (order_item_id, order_id, product_id, quantity, price_at_purchase)
VALUES ('OI001', 'ORD001', 'PRO01', 1, 60.00),
       ('OI002', 'ORD001', 'PRO02', 1, 25.00),
       ('OI003', 'ORD001', 'PRO05', 1, 55.00),
       ('OI004', 'ORD002', 'PRO03', 1, 90.00),
       ('OI005', 'ORD003', 'PRO02', 2, 25.00),
       ('OI006', 'ORD003', 'PRO05', 1, 55.00),
       ('OI007', 'ORD004', 'PRO01', 1, 60.00),
       ('OI008', 'ORD004', 'PRO03', 1, 90.00),
       ('OI009', 'ORD005', 'PRO05', 1, 55.00);