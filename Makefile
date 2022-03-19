ifneq (,$(wildcard ./.env))
    include .env
    export
endif

setEnv:
	cp .env.example .env
build:
	docker build -t ${SERVER_IMAGE}:${SERVER_IMAGE_VERSION} .
buildClient:
	docker build -t ${WEB_IMAGE}:${WEB_IMAGE_VERSION} ./client
upAll:
	docker compose up
down:
	docker compose down