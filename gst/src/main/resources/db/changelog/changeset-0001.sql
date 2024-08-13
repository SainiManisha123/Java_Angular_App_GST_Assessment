--liquibase formatted sql

-- changeset manisha:0001-create-categories-table
CREATE TABLE public.categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gst_rate DOUBLE PRECISION NOT NULL
);
ALTER TABLE public.categories
    OWNER to postgres;

-- changeset manisha:0001-create-products-table
CREATE TABLE public.products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    category_id BIGINT REFERENCES categories(id)
);

ALTER TABLE IF EXISTS public.products
    OWNER to postgres;

-- changeset manisha:0001-create-sales-table
CREATE TABLE public.sales (
    id SERIAL PRIMARY KEY,
    quantity INT NOT NULL,
    total_price DOUBLE PRECISION NOT NULL,
    tax_amount DOUBLE PRECISION NOT NULL,
    product_id BIGINT REFERENCES products(id),
    sale_date TIMESTAMP NOT NULL
);

ALTER TABLE IF EXISTS public.sales
    OWNER to postgres;

