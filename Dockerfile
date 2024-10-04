FROM postgres:latest

# Set environment variables
ENV POSTGRES_USER=Ailluminator
ENV POSTGRES_PASSWORD=Avatar3011
ENV POSTGRES_DB=myinitialdb

# Copy the initialization script to the Docker container
COPY ./database_init/init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432