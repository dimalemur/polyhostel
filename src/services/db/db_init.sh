set -e

psql -h localhost -p 5432 -U postgres -a -f database.sql