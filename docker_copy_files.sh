#!/bin/bash

source_paths=(
	./yarn
	./app
	./bin
	./config
	./db
	./lib
	./public
	./ruby-version
	./.yarnrc.yml
	./config.ru
	./Gemfile
	./Gemfile.lock
	./package.json
	./postcss.config.mjs
	./Rakefile
	./static.json
	./tsconfig.json
	./vite.config.ts
	./yarn.lock
)

destination_dir=/osc/

cp "${source_paths[@]}" "$destination_dir"

mkdir ./log
mkdir ./tmp

rm -f /osc/config/secrets/master.key
rm -f /osc/config/secrets/credentials.yml.enc

exit 0
