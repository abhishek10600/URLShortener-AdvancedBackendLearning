#!/usr/bin/env bash

set -e

echo "Generating PgBouncer configuration..."

set -a
source .env
set +a

mkdir -p docker/pgbouncer

envsubst < docker/pgbouncer/pgbouncer.ini.template \
> docker/pgbouncer/pgbouncer.ini

envsubst < docker/pgbouncer/userlist.txt.template \
> docker/pgbouncer/userlist.txt

echo "Done."
