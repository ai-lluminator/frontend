-- Create a new user
CREATE USER ailluminator WITH ENCRYPTED PASSWORD 'Avatar3011';

-- Create a new database
CREATE DATABASE papers;

-- Grant privileges to the user on the new database
GRANT ALL PRIVILEGES ON DATABASE papers TO ailluminator;

-- Connect to the new database
\connect papers;

-- Create a table in the new database
CREATE TABLE paper_access (
    paper VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    timestamp TIMESTAMP NOT NULL
);
