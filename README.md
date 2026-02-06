# Pizza.co

A small React + Vite pizza ordering demo. Includes a simple order form, routes with react-router-dom, and Prettier + Tailwind formatting.

## Features

- Create order form (src/features/order/CreateOrder.jsx)  
- Client-side routing with react-router-dom v6  
- Prettier formatting (with prettier-plugin-tailwindcss)

## Tech

- React  
- Vite  
- react-router-dom  
- Prettier (prettier-plugin-tailwindcss)

## Setup (PowerShell)

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

## Formatting

Install the Tailwind Prettier plugin so Prettier and VS Code can load the workspace config:

```powershell
npm install -D prettier-plugin-tailwindcss
```

Add a convenience script to package.json:

```json
"scripts": {
  "format": "prettier --write ."
}
```

Run formatter:

```powershell
npm run format
```

## Git tips

If your local branch is `master` but remote uses `main`:

```powershell
# inspect remotes & current branch
git remote -v
git branch --show-current

# push master as remote main
git push -u origin master:main

# or rename local master to main and push
git branch -M main
git push -u origin main
```

## Notes

- If you see "React is not defined", keep `import React from 'react'` in JSX files or enable the automatic JSX runtime via `@vitejs/plugin-react`.
- VS Code Prettier extension uses the workspace config; install `prettier-plugin-tailwindcss` locally to avoid "Cannot find module 'prettier-plugin-tailwindcss'" errors.
- CreateOrder sample: src/features/order/CreateOrder.jsx

Feel free to edit this README with project-specific details (contributing, license, screenshots). 
```// filepath: c:\Users\commu\Desktop\Pizza.co\README.md
# Pizza.co

A small React + Vite pizza ordering demo. Includes a simple order form, routes with react-router-dom, and Prettier + Tailwind formatting.

## Features

- Create order form (src/features/order/CreateOrder.jsx)  
- Client-side routing with react-router-dom v6  
- Prettier formatting (with prettier-plugin-tailwindcss)

## Tech

- React  
- Vite  
- react-router-dom  
- Prettier (prettier-plugin-tailwindcss)

## Setup (PowerShell)

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

## Formatting

Install the Tailwind Prettier plugin so Prettier and VS Code can load the workspace config:

```powershell
npm install -D prettier-plugin-tailwindcss
```

Add a convenience script to package.json:

```json
"scripts": {
  "format": "prettier --write ."
}
```

Run formatter:

```powershell
npm run format
```

## Git tips

If your local branch is `master` but remote uses `main`:

```powershell
# inspect remotes & current branch
git remote -v
git branch --show-current

# push master as remote main
git push -u origin master:main

# or rename local master to main and push
git branch -M main
git push -u origin main
```

## Notes

- If you see "React is not defined", keep `import React from 'react'` in JSX files or enable the automatic JSX runtime via `@vitejs/plugin-react`.
- VS Code Prettier extension uses the workspace config; install `prettier-plugin-tailwindcss` locally to avoid "Cannot find module 'prettier-plugin-tailwindcss'" errors.
- CreateOrder sample: src/features/order/CreateOrder.jsx

Feel free to edit this README with project-specific details (contributing, license, screenshots). 
