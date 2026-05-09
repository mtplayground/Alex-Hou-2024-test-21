# Product Snapshot

## What This Project Is

A single-page clock application built with Vite, React, TypeScript, and Tailwind CSS. It runs entirely in the browser and is packaged for static deployment behind Nginx.

## What It Does Today

- Shows a live digital clock in `HH:MM:SS` format.
- Shows the current date in a long-form, human-readable format.
- Updates once per second via a custom React hook.
- Uses an optional `VITE_APP_TITLE` environment variable to customize the page title shown in the UI.
- Adapts its color theme to the OS light/dark preference.
- Ships with Docker and Nginx configuration for production-style static hosting.

## Key Features

- Responsive centered layout tuned for mobile and desktop.
- Fluid typography for the main title and clock readout.
- `Intl.DateTimeFormat` for time and date formatting.
- Media-query-driven dark mode with shared color tokens.
- SPA-friendly Nginx config with asset caching and `index.html` fallback.

## Architecture

- `src/hooks/useClock.ts`: owns current time state and the one-second interval lifecycle.
- `src/components/Clock.tsx`: presentational clock/date component.
- `src/App.tsx`: page shell, title handling, and composition root.
- `src/index.css`: Tailwind entrypoint plus app-level theme tokens.
- `Dockerfile` + `nginx.conf`: multi-stage container build and runtime web serving.

## Conventions

- Keep the app client-side and static-first unless requirements change.
- Prefer small React function components and hooks over additional state layers.
- Use Tailwind utilities for layout and styling; keep shared theme values in CSS custom properties.
- Keep deployment assumptions aligned around port `8080` for dev preview and container runtime.
