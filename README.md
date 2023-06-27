[![headline](docs/assets/headline.png)](https://backstage.io/)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![CNCF Status](https://img.shields.io/badge/cncf%20status-incubation-blue.svg)](https://www.cncf.io/projects)
[![Main CI Build](https://github.com/backstage/backstage/workflows/Main%20Master%20Build/badge.svg)](https://github.com/backstage/backstage/actions?query=workflow%3A%22Main+Master+Build%22)
[![Discord](https://img.shields.io/discord/687207715902193673)](https://discord.gg/backstage-687207715902193673)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Codecov](https://img.shields.io/codecov/c/github/backstage/backstage)](https://codecov.io/gh/backstage/backstage)
[![](https://img.shields.io/github/v/release/backstage/backstage)](https://github.com/backstage/backstage/releases)
[![Uffizzi](https://img.shields.io/endpoint?url=https%3A%2F%2Fapp.uffizzi.com%2Fapi%2Fv1%2Fpublic%2Fshields%2Fgithub.com%2Fbackstage%2Fbackstage)](https://app.uffizzi.com/ephemeral-environments/backstage/backstage)


# [Backstage Developer Portal](https://backstage.io)

Backstage is an open-source developer portal developed by Spotify and a large community of contributors. It provides a platform for developers and organizations to manage their technical documentation, APIs, software catalog, and more. This guide will walk you through the process of setting up Backstage and creating your first app.

## Prerequisites

Before getting started with Backstage, make sure you have the following prerequisites:

### Operating System: 

While Backstage can be installed on any OS, it is recommended to use a Linux-based system like macOS or WSL.
Node.js: Install Node.js version 16 or 18. You can use a version manager like NVM to install and switch between different Node.js versions.
Yarn: Install Yarn package manager using npm.

**Creating a Backstage App**

To create your first Backstage app, follow these steps:

Open any folder in your development environment.
Run the following command to create a new Backstage app and install its dependencies using Yarn:

```bash
npx @backstage/create-app@latest
```

The command will create a new folder for your app and install all the necessary dependencies.
Enter a name for your Backstage app when prompted.
Navigate to the app's directory using the following command:

```bash
cd your-app-name
```

To start both the frontend and backend scripts together, run the following command:
```bash
yarn dev
```
Alternatively, if you want to start the frontend and backend separately in different terminals, you can use the following commands:

arduino
Copy code
yarn start       // For the frontend
yarn start-backend  // For the backend
You can now access your Backstage app at the following URLs:
Client-side: http://localhost:3000
Backend: http://localhost:7007/api/your-plugin-name/
Congratulations! You have successfully created your first Backstage app and can now start managing your tech documents, APIs, and software catalog through the Backstage developer portal.

Conclusion
Backstage provides a powerful platform for developers and organizations to manage their projects and collaborate effectively. By following the steps outlined in this guide, you can set up your own Backstage app and leverage its features to enhance your development workflow. Enjoy using Backstage and take advantage of the vibrant community and ecosystem surrounding it!
