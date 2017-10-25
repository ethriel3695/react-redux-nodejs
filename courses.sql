/*
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

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
-- Name: beer; Type: TABLE; Schema: public; Tablespace:
--

CREATE TABLE course (
    id integer NOT NULL,
    title text,
    watchHref text,
    watchHref authorId,
    length text,
    category text,
);


CREATE TABLE test (
    id serial NOT NULL
);


--
-- Name: beer_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE course_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: beer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner:
--

ALTER SEQUENCE course_id_seq OWNED BY course.id;

--
-- Name: brewery; Type: TABLE; Schema: public; Tablespace:
--

CREATE TABLE author (
    id integer NOT NULL,
    firtName text,
    lastName text
);


--
-- Name: brewery_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE author_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public;
--

ALTER SEQUENCE author_id_seq OWNED BY author.id;


--
-- Name: id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY course ALTER COLUMN id SET DEFAULT nextval('course_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY author ALTER COLUMN id SET DEFAULT nextval('author_id_seq'::regclass);


--
-- Data for Name: beer; Type: TABLE DATA; Schema: public;
--

COPY course (id, title, watchHref, authorId, length, category) FROM stdin;
1 Creating Reusable React Components http://pluralsight.com/courses/react-creating-reusable-components 1 6:20 JavaScript
\.

--
-- Name: beer_id_seq; Type: SEQUENCE SET; Schema: public;
--
SELECT pg_catalog.setval('course_id_seq', 1736, true);
--
-- Data for Name: brewery; Type: TABLE DATA; Schema: public;
--
COPY author (id, firstName, lastName) FROM stdin;
1 Reuben Ellis
2 Jessica Ellis

--
-- Name: brewery_id_seq; Type: SEQUENCE SET; Schema: public;
--
SELECT pg_catalog.setval('author_id_seq', 360, true);
--
-- Name: beer_pkey; Type: CONSTRAINT; Schema: public; Tablespace:
--
ALTER TABLE ONLY course
    ADD CONSTRAINT course_pkey PRIMARY KEY (id);
--
-- Name: brewery_pkey; Type: CONSTRAINT; Schema: public; Tablespace:
--
ALTER TABLE ONLY author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);
--
-- PostgreSQL database dump complete
--
*/
