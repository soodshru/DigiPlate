SET sql_safe_updates = FALSE;

USE defaultdb;
DROP DATABASE IF EXISTS bank CASCADE;
CREATE DATABASE IF NOT EXISTS bank;

USE bank;

CREATE TABLE accounts (
    id UUID PRIMARY KEY,
    driverPlate1 VARCHAR,
    insuranceNo1 INT8,
    driverPlate2 VARCHAR,
    insuranceNo2 INT8,
    locationX INT8,
    locationY INT8
);
