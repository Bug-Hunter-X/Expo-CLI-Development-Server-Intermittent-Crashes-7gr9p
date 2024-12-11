The problem was resolved by performing a clean reinstall of the project's dependencies. This involved deleting the following folders:

1. `.expo`
2. `node_modules`

After deleting these folders, the next step is to reinstall all necessary packages:

1. `expo prebuild --clean`
2. `expo install`
3. `npm install`  or `yarn install` (depending on your package manager)

This process clears out any potentially corrupted cache files or incorrect dependency installations that might have caused the development server's instability. Following this process resolved the issue, and the Expo development server now functions reliably.