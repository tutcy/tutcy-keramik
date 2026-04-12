CREATE TABLE users
(
    id           BIGSERIAL PRIMARY KEY,
    name         varchar(200) NOT NULL,
    street       varchar(200) NOT NULL,
    house_number varchar(200) NOT NULL,
    city         varchar(200) NOT NULL,
    country      varchar(200) NOT NULL,
    CONSTRAINT user_name_unique UNIQUE (name)
);