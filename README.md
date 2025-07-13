# Frontend JavaScript Projects

This repository contains various frontend JavaScript projects, including TypeScript exercises.

## 0x04-TypeScript

This directory contains TypeScript-related projects.

### task_0: Creating an interface for a student

This project demonstrates the creation of a TypeScript interface for a `Student` object,
instantiation of student objects, and rendering them into an HTML table using Vanilla JavaScript.

**How to run:**

1. Navigate to the `0x04-TypeScript/task_0` directory.
2. Run `npm install` to install all necessary dependencies.
3. Run `npm run build` to compile the TypeScript code and generate the `dist/bundle.js` and `dist/index.html` files.
4. Open the `dist/index.html` file in your web browser to view the output.

**Development Server:**
You can also run a development server with live-reloading:

1. Navigate to the `0x04-TypeScript/task_0` directory.
2. Run `npm install` (if not already done).
3. Run `npm run start-dev`. This will open your default browser and serve the application.

### task_1: Creating an interface for a Teacher

This project defines a TypeScript interface for a `Teacher` object, demonstrating `readonly`
properties, optional properties, and the use of an index signature to allow for additional,
unspecified attributes.

**How to run:**

1. Navigate to the `0x04-TypeScript/task_1` directory.
2. Run `npm install` to install all necessary dependencies.
3. Run `npm run build` to compile the TypeScript code and generate the `dist/bundle.js` and `dist/index.html` files.
4. Open the `dist/index.html` file in your web browser.
5. Open your browser's developer console (F12) to see the logged `Teacher` objects.

**Development Server:**
You can also run a development server with live-reloading:

1. Navigate to the `0x04-TypeScript/task_1` directory.
2. Run `npm install` (if not already done).
3. Run `npm run start-dev`. This will open your default browser and serve the application.

### task_3: Ambient Modules and Type Declarations

This project demonstrates how to integrate an external JavaScript library (`crud.js`) into a TypeScript project
using an ambient declaration file (`crud.d.ts`). It defines custom types (`RowID`, `RowElement`) and
uses them to provide type safety for the imported JavaScript functions.

**How to run:**

1. Navigate to the `0x04-TypeScript/task_3` directory.
2. Run `npm install` to install all necessary dependencies.
3. Run `npm run build` to compile the TypeScript code and generate the `dist/bundle.js` and `dist/index.html` files.
4. Open the `dist/index.html` file in your web browser.
5. Open your browser's developer console (F12) to see the output from the `crud` functions.

**Development Server:**
You can also run a development server with live-reloading:

1. Navigate to the `0x04-TypeScript/task_3` directory.
2. Run `npm install` (if not already done).
3. Run `npm run start-dev`. This will open your default browser and serve the application.

### task_4: Namespaces, Inheritance, and Declaration Merging (TSC Build)

This project explores advanced TypeScript concepts including namespaces (`Subjects`), class inheritance,
and interface declaration merging. It defines a base `Subject` class and extends it for `Cpp`, `React`,
and `Java` subjects, while dynamically adding experience properties to the `Teacher` interface.
This task uses `tsc` directly for compilation, without Webpack.

**How to run:**

1. Navigate to the `0x04-TypeScript/task_4` directory.
2. Run `npm install` to install all necessary dependencies.
3. Run `npx tsc` to compile the TypeScript code into JavaScript files.
4. Open the `index.html` file directly in your web browser.
5. Open your browser's developer console (F12) to see the output from the subject requirements and available teachers.
