--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: books; Type: TABLE; Schema: public; Owner: dmykhailov
--

CREATE TABLE books (
    id integer NOT NULL,
    title text,
    author text,
    price integer
);


ALTER TABLE books OWNER TO dmykhailov;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: dmykhailov
--

CREATE SEQUENCE books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE books_id_seq OWNER TO dmykhailov;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dmykhailov
--

ALTER SEQUENCE books_id_seq OWNED BY books.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: dmykhailov
--

CREATE TABLE reviews (
    id integer NOT NULL,
    book_id integer,
    rating integer
);


ALTER TABLE reviews OWNER TO dmykhailov;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: dmykhailov
--

CREATE SEQUENCE reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE reviews_id_seq OWNER TO dmykhailov;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dmykhailov
--

ALTER SEQUENCE reviews_id_seq OWNED BY reviews.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: dmykhailov
--

ALTER TABLE ONLY books ALTER COLUMN id SET DEFAULT nextval('books_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: dmykhailov
--

ALTER TABLE ONLY reviews ALTER COLUMN id SET DEFAULT nextval('reviews_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: dmykhailov
--

COPY books (id, title, author, price) FROM stdin;
1	The Rails Way	Obie	2999
2	Clean Code	Someone	3999
3	GraphQL	Samer Buna	2529
4	Eloquent JavaScript	Someone	1555
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: dmykhailov
--

COPY reviews (id, book_id, rating) FROM stdin;
1	1	3
2	2	5
3	2	2
4	1	1
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dmykhailov
--

SELECT pg_catalog.setval('books_id_seq', 4, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dmykhailov
--

SELECT pg_catalog.setval('reviews_id_seq', 4, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: dmykhailov
--

ALTER TABLE ONLY books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: dmykhailov
--

ALTER TABLE ONLY reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

