#! /bin/bash
set -e

COMMIT_SHA1=$CIRCLE_BRANCH-$CIRCLE_SHA1
BRANCH=$CIRCLE_BRANCH

export COMMIT_SHA1=$COMMIT_SHA1
export BRANCH=$BRANCH

envsubst < .circleci/deployment.yaml > .circleci/deployment.yaml.out
mv .circleci/deployment.yaml.out .circleci/deployment.yaml

kubectl apply -f .circleci/deployment.yaml