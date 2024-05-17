#!/usr/bin/env bash

set -e
set pipefail


echo "Cleaning..."
git checkout deploy
git merge main -m "update with latest"
rm -rf docs
mkdir docs

echo "Building app in release mode..."
npx shadow-cljs release app
cp -r public/* docs

echo "Committing and deploying..."
git add docs
git commit -m "Deploy: $(date)"
git push github deploy

echo "Done!"

git checkout main
