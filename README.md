# My Portfolio

This project includes a simple portfolio website with sections for a personal profile, projects, and an option to add new projects.

## Sections

1. [My Profile](#my-profile)
2. [Add Project](#add-project)

## My Profile

The profile section showcases personal information, including a background image, contact details, role, and a brief description. It is designed to be responsive, adjusting for smaller screens.

### Technologies Used

- HTML
- CSS
- React JS

### Usage

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Add Project

The "Add Project" section allows users to add new projects to the portfolio. It includes a form with fields for project name, link, and description. The added projects are displayed in a list below the form.

### Technologies Used

- HTML
- CSS
- React JS
- UUID library for unique project IDs

### Usage

1. Fill in the project details in the form.
2. Click the "Add" button to add the project to the list.

## Project Item

The project item component (`ProjectItem.js`) is used to display individual projects in the project list. Each project includes a name, description, and a "View Project" button that links to the project's page.

### Technologies Used

- HTML
- CSS
- React JS

### Usage

No additional configuration is required for the `ProjectItem` component. It receives project details as props and renders them accordingly.

## App

The main application (`App.js`) integrates the `MyProfile` and `AddProject` components to create a complete portfolio website.

### Technologies Used

- HTML
- CSS
- React JS

### Usage

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.

---


