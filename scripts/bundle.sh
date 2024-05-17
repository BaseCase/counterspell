#!/usr/bin/env bash

set -e
set pipefail


echo "Cleaning..."
rm -rf dist
mkdir dist

echo "Building..."
npx shadow-cljs release app
cp -r public/* dist

echo "Zipping..."
tar cz dist > counterspell_dist.zip
