#!/usr/bin/env sh

if [ -z "$1" ]
then
  echo "don't forget article id"
  exit 1
fi

SLUG=$1
POST_PATH="src/content/posts-tw/"
FILE_NAME="$(date +'%Y-%m-%d-%H-%M-%S')_$SLUG.md"
FILE_PATH="$POST_PATH$FILE_NAME"

TEMPLATE="---\n\
title: \"\"\n\
date: $(date +"%Y-%m-%dT%H:%M:%S+08:00")\n\
slug: \"$SLUG\"\n\
excerpt: \"\"\n\
feature_image: \"\"\n\
guid: \"$SLUG\"\n\
---\n\
"

echo $TEMPLATE > $FILE_PATH
echo "$FILE_PATH created."
