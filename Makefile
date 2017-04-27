.DEFAULT_GOAL := build
IMAGE_NAME=application
$(shell echo IMAGE_NAME=${IMAGE_NAME} >> .env)

build:
	sudo docker-compose -f docker/common-services.yml run --rm build npm install
	sudo docker build -t $(IMAGE_NAME) .

run:
	sudo docker-compose -f docker/common-services.yml run --rm application

run-dev:
	sudo docker-compose -f docker/common-services.yml -f docker/dev.yml run --rm application

test:
	sudo docker-compose -f docker/common-services.yml -f docker/test.yml run --rm app npm test

up-dev:
	sudo docker-compose -f docker/common-services.yml -f docker/dev.yml up -d

 .PHONY: test
