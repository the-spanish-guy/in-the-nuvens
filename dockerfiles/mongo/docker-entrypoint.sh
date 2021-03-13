#!/bin/bash
set -e

function waitForMongo {
    port=$1
    n=0
    until [ $n -ge 20 ]
    do
        mongo admin --quiet --port $port --eval "db" && break
        n=$[$n+1]
        sleep 2
    done
}

echo "STARTING CLUSTER"

mongod --port 27017 --replSet rs0 --bind_ip_all &
DB1_PID=$!

waitForMongo 27017

echo "CONFIGURING REPLICA SET"
mongo admin --port 27017 --eval "db.runCommand({ replSetInitiate: '' })"

echo "REPLICA SET ONLINE"

trap 'echo "KILLING"; kill $DB1_PID; wait $DB1_PID' SIGINT SIGTERM EXIT

wait $DB1_PID