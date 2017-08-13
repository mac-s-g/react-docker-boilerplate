#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-dev_server}
echo "Running with NODE_ENV=$NODE_ENV"

# stop and remove the containers if they are running
stop_and_remove_container()
{
    docker stop BOILERPLATE-PROJECT-NAME
    docker rm BOILERPLATE-PROJECT-NAME
}
stop_and_remove_container || true

# run the BOILERPLATE-PROJECT-NAME container
docker run \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/example:/react/example \
    -v $(pwd)/entrypoints:/react/entrypoints \
    -v $(pwd)/webpack.config.js:/react/webpack.config.js \
    --name=BOILERPLATE-PROJECT-NAME \
    -e NODE_ENV=$NODE_ENV \
    --publish BOILERPLATE-PORT:BOILERPLATE-PORT \
    --entrypoint=/react/entrypoints/dev-server.sh \
    -t BOILERPLATE-PROJECT-NAME