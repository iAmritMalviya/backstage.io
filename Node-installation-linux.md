 # For linux users only

To install NVM (Node Version Manager) and Node.js version 18, follow the steps below:

1. **Install NVM**: NVM allows you to manage multiple versions of Node.js on your system. Open a terminal and run the following command to install NVM:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

   This command downloads and executes the NVM installation script.

2. **Close and reopen the terminal**: After installing NVM, close your terminal and open a new one. This step is necessary to ensure that the NVM command is available.

3. **Verify NVM installation**: To verify that NVM is installed correctly, run the following command:

   ```bash
   nvm --version
   ```

   You should see the version number of NVM printed in the terminal.

4. **Install Node.js version 18**: Now that NVM is installed, you can use it to install Node.js version 18. Run the following command:

   ```bash
   nvm install 18
   ```

   NVM will download and install Node.js version 18 on your system.

5. **Verify Node.js installation**: To verify that Node.js version 18 is installed correctly, run the following commands:

   ```bash
   node --version
   ```

   You should see the version number of Node.js (v18.x.x) printed in the terminal.

   ```bash
   npm --version
   ```

   You should see the version number of npm (Node Package Manager) printed in the terminal.

Congratulations! You have successfully installed NVM and Node.js version 18 on your system. You can now proceed with creating your Backstage app as mentioned in the previous instructions.
