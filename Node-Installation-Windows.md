# To install Node.js version 18 on a Windows system, follow the steps below:

1. **Install NVM for Windows**: NVM for Windows is a version manager that allows you to easily switch between different versions of Node.js. Open a web browser and visit the [NVM for Windows GitHub repository](https://github.com/coreybutler/nvm-windows/releases). 

2. **Download NVM**: Download the latest version of NVM for Windows by clicking on the "nvm-setup.zip" file under the Assets section of the latest release. 

3. **Run the Installer**: Once the download is complete, locate the downloaded file and run the installer. Follow the prompts to complete the installation process. 

4. **Open a New Command Prompt**: After the installation, open a new command prompt window. This is necessary to ensure that the NVM command is available.

5. **Verify NVM installation**: To verify that NVM is installed correctly, run the following command:

   ```bash
   nvm version
   ```

   You should see the version number of NVM printed in the command prompt.

6. **Install Node.js version 18**: With NVM installed, you can use it to install Node.js version 18. Run the following command:

   ```bash
   nvm install 18
   ```

   NVM will download and install Node.js version 18 on your system.

7. **Verify Node.js installation**: To verify that Node.js version 18 is installed correctly, run the following commands:

   ```bash
   node --version
   ```

   You should see the version number of Node.js (v18.x.x) printed in the command prompt.

   ```bash
   npm --version
   ```

   You should see the version number of npm (Node Package Manager) printed in the command prompt.

Congratulations! You have successfully installed NVM and Node.js version 18 on your Windows system. You can now proceed with creating your Backstage app as mentioned in the previous instructions.
