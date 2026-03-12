# JSD12 Week 02 - My E-commerce & SQL Practice

## Project Overview
This project is a compilation of exercises focused on e-commerce design, data modeling, and SQL database practice. It covers two distinct scenarios:
1. **Dog Longevity Supplement Shop:** A conceptual e-commerce platform ("My E-commerce") providing premium, longevity-focused nutrition for pets.
2. **Chrome & Burger Restaurant:** A SQL-based practice scenario for managing a restaurant's staff, inventory, and orders.

## Project Structure
The repository is organized into design documentation, JavaScript prototypes, and PostgreSQL scripts.

### 1. Conceptual Design & Business Model
- **`01_my-ecommerce.md`**: Problem statement and solution for the pet longevity supplement platform.
- **`05_product-backlog.md`**: User stories and core entities (Must/Should/Could) for the e-commerce site.
- **`02_business-model-canvas.excalidraw`**: Strategic management template for the business.
- **`03_use-case-diagram.excalidraw`**: Visual representation of user interactions with the system.
- **`04_er-diagram.excalidraw`**: Entity-Relationship diagram for the database design.

### 2. JavaScript Prototyping
- **`06_bring-it-to-javascript.js`**: Initial mockup data for users, pets, products, and a simulated transaction.
- **`07_trial-and-error-lab.js`**: Functional prototypes, including stock checking logic (`addToCart`) and scenario testing.

### 3. PostgreSQL Database
Located in the `postgresql/` directory, these files contain the schema and data for the "Chrome & Burger" scenario:
- **`create-table.sql`**: Defines tables for `Suppliers`, `Staff`, `Ingredients`, `MenuItems`, `RecipeItems`, `Orders`, and `OrderItems`.
- **`01_suppliers.sql`** to **`07_order_items.sql`**: Data insertion scripts (implied by naming).
- **`exercise.sql`**: A collection of SQL query practices, including joins, aggregations, and revenue calculations.

## Building and Running

### Database Setup
To set up the database, run the SQL scripts in order:
1. `postgresql/create-table.sql`
2. Followed by the numerical data insertion scripts (e.g., `01_suppliers.sql`, `02_staff.sql`, etc.).

### JavaScript Testing
You can run the prototype scripts using Node.js:
```bash
node 06_bring-it-to-javascript.js
node 07_trial-and-error-lab.js
```

## Development Conventions
- **Naming:** Follows a mix of snake_case for database fields and camelCase for JavaScript variables.
- **Data Modeling:** Uses a normalized relational model (3NF) for the restaurant scenario, tracking ingredients down to the recipe level.
- **Design:** Prioritizes user stories (Backlog) before implementation.
