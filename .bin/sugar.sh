#!/bin/bash

NEOMEDIC_COMMAND=$1
shift

if [[ "$NEOMEDIC_COMMAND" == "play" ]]; then
  eval "yarn lerna run $1 $2 $3"
elif [[ -z "$1" ]] || [[ $1 == --* ]]; then

  eval "yarn lerna run $NEOMEDIC_COMMAND $@"
else
  NEOMEDIC_WORKSPACES=$1
  shift

  IFS=', ' read -r -a workspaces <<< "$NEOMEDIC_WORKSPACES"

  if [[ ${#workspaces[@]} -gt 1 ]]; then
    echo "Running command on $NEOMEDIC_WORKSPACES workspaces"
    eval "yarn lerna run $NEOMEDIC_COMMAND --scope=neomedic-{$NEOMEDIC_WORKSPACES} --parallel $@"
  else
    echo "Running command on $NEOMEDIC_WORKSPACES workspace"
    eval "yarn lerna run $NEOMEDIC_COMMAND --scope=neomedic-$NEOMEDIC_WORKSPACES --parallel $@"
  fi
fi
