# InC_23_Website

#### Before cloning and starting this project, always follow these steps to ensure error-free and in sync collaboration,

  - [Update Node.js to latest LTS version](https://github.com/InC-Web-Team/InC_23_Website/edit/main/README.md#updating-nodejs-version)
  - [Update npm](https://github.com/InC-Web-Team/InC_23_Website/edit/main/README.md#updating-npm)
  - [Clone this repo](https://github.com/InC-Web-Team/InC_23_Website/edit/main/README.md#clone-this-repository)
  - [Install project dependencies(node_modules)](https://github.com/InC-Web-Team/InC_23_Website/edit/main/README.md#install-project-dependencies)
---
## Updating Node.js version
Ensure Node Version Manager is installed on your machine by running
```bash
nvm -v
```
If you get some version number as _1.x.x_, then you already have nvm installed. However, if you don't get such version number, but an error then consider installing nvm from [this link](https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe). Download the `nvm-setup.exe` file and install it by following the installation wizard.
After installation, check for successful installation by running above command in terminal, this time you should see a version number as output.

Now, after having **nvm** installed, go on updating Node version by running,
```bash
nvm install lts
```
This will install latest LTS version. And after installation, you will see a command in the last line of the output as,
```bash
Installation complete. If you want to use this version, type

nvm use 18.x.x
```
Copy and run the last command of ypu output to use recently installed Node version.
Now, we have installed and set up latest Node version🤘

---
## Updating npm
To use latest features of npm and react-app, we need to keep **npm** updated. Run the following command to update
```bash
npm install -g npm
```
You will get some information, how many packages removed, how manu changed, etc.
Now, we have all the updated stuff, it's time to focus on this project.

---
## Clone this Repository
Open terminal into any preferred folder where you want to keep this project. Run this command to clone(download) the project,
```git
git clone https://github.com/InC-Web-Team/InC_23_Website.git
```
---
## Install project dependencies
After cloning the repo, `cd` into the repo folder
```bash
cd InC_23_Website
```
And run following command to install project's dependencies,
```bash
npm ci
```
It will download all the dependency packages mentioned inside `package.json`, into `node_modules` folder.
Now, finally start the project by running,
```powershell
npm start
```
---
