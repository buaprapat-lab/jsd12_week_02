-- Clear existing data to prevent duplication

TRUNCATE TABLE products RESTART IDENTITY CASCADE;

-- Mock Data for Products

INSERT INTO products (product_id, product_name, product_desc, price, stock_quantity, instock, category)
VALUES ('PRO01', 'Spirulina Powder', 'Premium superfood algae powder for health and smoothies.', 60, 17, true, 'Superfood Boosters'),
       ('PRO02', 'Mixed Berry Yogurt','Premium superfood algae powder for health and smoothies.', 25, 25, true, 'Superfood Boosters'),
       ('PRO03', 'Freeze-dried Salmon','Premium superfood algae powder for health and smoothies.', 90, 18, true, 'High-performance Proteins'),
       ('PRO04', 'Jerky Sticks', 'Premium superfood algae powder for health and smoothies.',40, 0, false, 'High-performance Proteins'),
       ('PRO05', 'Bone Broth', 'Premium superfood algae powder for health and smoothies.', 55, 30, true, 'Vitality Hydration');