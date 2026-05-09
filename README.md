# Alex-Hou-2024-test-21

A small Vite + React + TypeScript application that will evolve into a clock UI.

## Requirements

- Node.js 20+
- npm 10+

## Environment variables

This project does not require environment variables to run locally.

An optional example file is included at [`.env.example`](./.env.example):

```bash
VITE_APP_TITLE=Alex Hou Clock
```

To use it locally:

```bash
cp .env.example .env
```

`VITE_APP_TITLE` changes the heading rendered by the placeholder app.

## Install dependencies

```bash
npm install
```

## Run the development server

The Vite dev server is configured to listen on `0.0.0.0:8080`.

```bash
npm run dev -- --host 0.0.0.0 --port 8080
```

## Build for production

```bash
npm run build
```

## Preview the production build

The preview server is also configured to listen on `0.0.0.0:8080`.

```bash
npm run preview -- --host 0.0.0.0 --port 8080
```

## Quality checks

```bash
npm run lint
npm run format
```
