.PHONY: up down install migrate-example-run migrate-example-revert seed-example-run seed-example-revert run-dev run-start run-build run-test run-test-unit run-test-unit-coverage eslint-check eslint-fix

API_CONTAINER_NAME=daily_trends_api

up:
	@docker-compose up -d

down:
	@docker-compose down

install: up
	@docker-compose exec $(API_CONTAINER_NAME) npm install $(ARGS)

migrate-example-create:up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:example:create $(ARGS)

migrate-example-run: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:example:run

migrate-example-revert: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run migrate:example:revert

seed-example-run: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run seed:example:run

seed-example-revert: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run seed:example:revert

run-dev: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run dev

run-start: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run start

run-build: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run build

run-test-all: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:all

run-test-e2e: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:e2e

run-test-unit: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:unit

run-test-unit-coverage: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run test:unit:coverage

eslint-check: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run eslint:check

eslint-fix: up
	@docker-compose exec $(API_CONTAINER_NAME) npm run eslint:fix
