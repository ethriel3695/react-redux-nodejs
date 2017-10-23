--
-- PostgreSQL database dump
--

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

CREATE TABLE beer (
    name text,
    tags text,
    alcohol numeric(3,1),
    brewery text,
    id integer NOT NULL,
    brewery_id integer,
    image text
);


--
-- Name: beer_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE beer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: beer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner:
--

ALTER SEQUENCE beer_id_seq OWNED BY beer.id;


--
-- Name: brewery; Type: TABLE; Schema: public; Tablespace:
--

CREATE TABLE brewery (
    id integer NOT NULL,
    name text
);


--
-- Name: brewery_id_seq; Type: SEQUENCE; Schema: public;
--

CREATE SEQUENCE brewery_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public;
--

ALTER SEQUENCE brewery_id_seq OWNED BY brewery.id;


--
-- Name: id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY beer ALTER COLUMN id SET DEFAULT nextval('beer_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public;
--

ALTER TABLE ONLY brewery ALTER COLUMN id SET DEFAULT nextval('brewery_id_seq'::regclass);


--
-- Data for Name: beer; Type: TABLE DATA; Schema: public;
--

COPY beer (name, tags, alcohol, brewery, id, brewery_id, image) FROM stdin;

--
-- Name: beer_id_seq; Type: SEQUENCE SET; Schema: public;
--
SELECT pg_catalog.setval('beer_id_seq', 1736, true);
--
-- Data for Name: brewery; Type: TABLE DATA; Schema: public;
--
COPY brewery (id, name) FROM stdin;

--
-- Name: brewery_id_seq; Type: SEQUENCE SET; Schema: public;
--
SELECT pg_catalog.setval('brewery_id_seq', 360, true);
--
-- Name: beer_pkey; Type: CONSTRAINT; Schema: public; Tablespace:
--
ALTER TABLE ONLY beer
    ADD CONSTRAINT beer_pkey PRIMARY KEY (id);
--
-- Name: brewery_pkey; Type: CONSTRAINT; Schema: public; Tablespace:
--
ALTER TABLE ONLY brewery
    ADD CONSTRAINT brewery_pkey PRIMARY KEY (id);
--
-- PostgreSQL database dump complete
--