-- Write a query to see a list of all employees working at Chrome & Burger.

SELECT *
FROM staff;

-- Write a query to find all menu items that fall under the 'Burger' category.

SELECT *
FROM MenuItems
WHERE category = 'Burger';

-- Write a query to show all menu items, but list them from the most expensive to the least expensive.

SELECT *
FROM Menuitems
ORDER BY price DESC;

-- Write a query to find the three cheapest items available on the menu.

SELECT *
FROM Menuitems
ORDER by price ASC
LIMIT 3;

-- Write a query to find all the ingredients supplied by 'Patty''s Premium Meats'.

SELECT *
FROM Ingredients
JOIN suppliers ON ingredients.supplier_id = suppliers.supplier_id
WHERE suppliers.name = 'Patty''s Premium Meats';

-- Write a query to see all orders processed by the staff member with staff_id = 1

SELECT *
FROM orders
WHERE staff_id = 1;

-- Write a query to find out how many orders each staff member has processed. Show the staff member's first name, last name, and their total order count.

SELECT first_name,
       last_name,
       COUNT(orders.staff_id) AS order_count -- คำสั่งให้นับ COUNT() AS กำหนดตัวแปรใหม่
FROM staff
JOIN orders ON staff.staff_id = orders.staff_id -- แต้คำสั่งนี้จะไม่นับคนที่ไม่มีออเดอร์ เหลือ Chris / ถ้าจะนับ Cris ด้วยต้องสั่ง JOIN LEFT
GROUP BY staff.staff_id, -- staff.id มีอยู่ 2 ที่เลยต้องระบุว่าเอาจากตารางไหน
 first_name, -- เป็นกฎว่าต้องระบุตัวแปรใน SELECT ให้หมดด้วย
 last_name
ORDER BY order_count ASC;

-- Write a query to calculate the total revenue for each day of sales

SELECT DATE(order_date) AS sales_date, -- DATE จะช่วยตัดเวลาออกเหลือแค่วันที่ ที่มาประกาศตรงนี้เพราะอยากเห็นเวลาในผลลัพธ์ ไม่ใส่ไม่รู้เลยวันไหน
 SUM(total_price) AS daily_revenue
FROM orders
GROUP BY DATE(order_date) -- ใช้ sales_date ไม่ได้เพราะ postgreSQL อ่าน GROUP BY ก่อน SELECT มันจะไม่รู้ว่า sales_date คืออะไร แต่ mySQL ใช้ได้
ORDER BY sales_date ASC; -- ทำไมไม่ใช้ DATE(order_date) ตอบคือใช่ได้เหมือนกัน แนะนำเพราะสั้นว่า

-- Write a query to find out which menu item has been ordered the most.

SELECT name,
       SUM(OrderItems.quantity) AS order_count
FROM MenuItems
JOIN OrderItems ON MenuItems.item_id = OrderItems.item_id
GROUP BY MenuItems.item_id,
         name
ORDER BY order_count DESC
LIMIT 1;

-- checking ทำไปก็ขึ้นแค่หัวตาราง ไม่ขึ้นข้อมูล ต้องไปรันแต่ละฟล์ใหม่อีกที เฮ้อ
 -- List All Ingredients for the 'Bacon Cheeseburger'

SELECT name,
       quantity_needed,
       unit -- ไม่ต้องใส่ที่มาว่ามาจากตารางไหนก็ได้เ้พราะถ้ามีแค่ชื่อเดียวไม่ซ้ำ
FROM ingredients -- ตารางหลักที่มีข้อมูลที่สนใจ จอยตาราง
INNER JOIN RecipeItems ON ingredients.ingredient_id = RecipeItems.ingredient_id
WHERE RecipeItems.item_id = 2;