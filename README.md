# Expo CLI Development Server Intermittent Crashes

This repository demonstrates an uncommon bug encountered with the Expo CLI development server. The server would intermittently crash during development, displaying unhelpful error messages. The project builds successfully but the dev server is unstable and unreliable, making development challenging. 

**Bug:** The Expo development server crashes intermittently. The error messages are inconsistent and not very helpful for debugging. The project builds correctly, but the dev server's instability makes development very difficult.

**Solution:** The issue was solved by deleting the `.expo` and `node_modules` folders and reinstalling all dependencies and Expo packages. This fixed the issue and the development server became stable.