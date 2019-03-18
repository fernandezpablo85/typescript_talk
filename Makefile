build:
	tsc --build tsconfig.json

run: build
	node dist/main.js

watch:
	tsc --build tsconfig.json --watch
