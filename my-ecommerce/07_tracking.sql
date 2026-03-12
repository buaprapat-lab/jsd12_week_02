TRUNCATE TABLE tracking RESTART IDENTITY CASCADE;


INSERT INTO tracking (tracking_id, order_id, tracking_number, courier_name, tracking_status)
VALUES ('TRK001', 'ORD001', 'FL-20250301-001', 'Flash', 'delivered'),
       ('TRK002', 'ORD002', 'KR-20250303-045', 'Kerry', 'delivered'),
       ('TRK003', 'ORD004', 'JT-20250305-112', 'J&T', 'in transit');