ifneq (,$(wildcard ./.env))
    include .env
    export
endif

setEnv:
	cp .env.example .env
setDbPath:
	mkdir ./db/data
build:
	docker build -t ${SERVER_IMAGE}:${SERVER_IMAGE_VERSION} .
buildClient:
	docker build -t ${WEB_IMAGE}:${WEB_IMAGE_VERSION} ./client
buildServer:
	docker build -t ${SERVER_IMAGE}:${SERVER_IMAGE_VERSION} ./api
upAll:
	docker compose up
down:
	docker compose down