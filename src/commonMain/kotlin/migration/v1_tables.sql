Drop TABLE  HEALTH_CATEGORY;
DROP TABLE EXPERT;

Create  Table HEALTH_CATEGORY(
    cat_id SERIAL PRIMARY KEY,
    cat_title Varchar(64) NOT NULL
);

INSERT INTO HEALTH_CATEGORY
VALUES (0, 'ACCIDENTS');

INSERT INTO HEALTH_CATEGORY
VALUES (1, 'CELL');

INSERT INTO HEALTH_CATEGORY
VALUES (2, 'PHARMACY');

INSERT INTO HEALTH_CATEGORY
VALUES (3, 'EMERGENCY');

INSERT INTO HEALTH_CATEGORY
VALUES (4, 'GENERAL');

INSERT INTO HEALTH_CATEGORY
VALUES (5, 'GENETIC');

INSERT INTO HEALTH_CATEGORY
VALUES (6, 'HEART');

INSERT INTO HEALTH_CATEGORY
VALUES (7, 'LUNGS');

INSERT INTO HEALTH_CATEGORY
VALUES (8, 'TOOTH');


CREATE Table EXPERT(
    expert_id SERIAL PRIMARY KEY,
    expert_name varchar(265) not null ,
    expert_title VARCHAR(256) not null ,
    expert_picture varchar(256),
    expert_category varchar(265),
    expert_description varchar(256)
);

INSERT INTO EXPERT(expert_id, expert_name, expert_title, expert_category, expert_description)
VALUES (0, 'Wang', 'Doktor', 'TOOTH', 'Zahnarzt mit leidenschaft');

INSERT INTO EXPERT(expert_id, expert_name, expert_title, expert_category, expert_description)
VALUES (1, 'Lilie', 'Therapeut', 'ACCIDENTS', 'Wir bekommen sie wieder hin');