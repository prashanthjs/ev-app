# EvApp

## Run the app

```sh
npx nx serve ev-frontend1
```

## Build the app

```sh
npx nx build ev-frontend1
```

## Run the api

```sh
npx nx serve ev-api1
```

## Build the api

```sh
npx nx build ev-api1
```

## Run the api in docker

```sh
npx nx docker-build ev-api1
npx nx affected -t docker-push --registry=631248157752.dkr.ecr.us-east-1.amazonaws.com --tagVersion:v0.1
```
