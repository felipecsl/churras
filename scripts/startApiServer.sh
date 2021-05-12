#! /bin/bash
set -e
CURR_DATE=$(date -u +%Y%m%d)
yarn run api:build
sudo -E bash -c 'yarn run api:run | tee -a api-$CURR_DATE.log'