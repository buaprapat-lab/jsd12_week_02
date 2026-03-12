-- 1. Create products Table

CREATE TABLE IF NOT EXISTS products (product_id VARCHAR(10) PRIMARY KEY,
                                                            product_name VARCHAR(100),
                                                                         product_desc TEXT, price NUMERIC, stock_quantity INT, instock BOOLEAN, category VARCHAR(100));

-- 2. Create users Table

CREATE TABLE IF NOT EXISTS users (user_id VARCHAR(10) PRIMARY KEY,
                                                      user_name VARCHAR(100),
                                                                user_email VARCHAR(100) UNIQUE,
                                                                                        user_password VARCHAR(255),
                                                                                                      user_address TEXT, role VARCHAR(20) CHECK (role IN ('customer',
                                                                                                                                                          'admin')));

-- 3. Create pets Table

CREATE TABLE IF NOT EXISTS pets
    (pet_id VARCHAR(10) PRIMARY KEY,
                        user_id VARCHAR(10) REFERENCES Users(user_id) ON DELETE CASCADE,
                                                                                pet_name VARCHAR(100),
                                                                                         pet_breed VARCHAR(100),
                                                                                                   pet_age NUMERIC(4, 1),
                                                                                                           pet_health_goal TEXT);

-- 4. Create orderbill Table

CREATE TABLE IF NOT EXISTS orderbill
    (order_id VARCHAR(10) PRIMARY KEY,
                          user_id VARCHAR(10) REFERENCES Users(user_id) ON DELETE
     SET NULL,
         total_amount NUMERIC, status VARCHAR(20) CHECK (status IN ('Pending',
                                                                    'Paid',
                                                                    'Shipped')));

-- 5. Create ordeitems Table

DROP TABLE IF EXISTS orderitems CASCADE;


CREATE TABLE IF NOT EXISTS orderitems
    (order_item_id VARCHAR(10) PRIMARY KEY,
                               order_id VARCHAR(10) REFERENCES orderbill(order_id) ON DELETE CASCADE,
                                                                                             product_id VARCHAR(10) REFERENCES products(product_id) ON DELETE
     SET NULL,
         quantity INT, price_at_purchase NUMERIC);

-- 6. Create payment table

DROP TABLE IF EXISTS payment CASCADE;


CREATE TABLE IF NOT EXISTS payment
    (payment_id VARCHAR(10) PRIMARY KEY,
                            order_id VARCHAR(10) REFERENCES orderbill(order_id) ON DELETE CASCADE,
                                                                                          payment_amount NUMERIC, status VARCHAR(20),
                                                                                                                         payment_method VARCHAR(20) CHECK (payment_method IN ('COD',
                                                                                                                                                                              'Transfer',
                                                                                                                                                                              'Card')), transaction_ref VARCHAR(100),
                                                                                                                                                                                                        paid_at TIMESTAMP);

-- 7. Create Tracking Table

DROP TABLE IF EXISTS tracking CASCADE;


CREATE TABLE IF NOT EXISTS tracking
    (tracking_id VARCHAR(10) PRIMARY KEY,
                             order_id VARCHAR(10) REFERENCES orderbill(order_id) ON DELETE CASCADE,
                                                                                           tracking_number VARCHAR(100),
                                                                                                           courier_name VARCHAR(20) CHECK (courier_name IN ('Flash',
                                                                                                                                                            'Kerry',
                                                                                                                                                            'J&T')), tracking_status VARCHAR(20) CHECK (tracking_status IN ('in transit',
                                                                                                                                                                                                                            'delivered')));