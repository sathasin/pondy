# Deployment Guide (Hostinger)

This project is configured to run as a single integrated application (Frontend + Backend).

## 1. Build the Frontend
Before deploying, generate the production build of your React app:
```bash
npm run build
```
This creates the `dist` folder containing your website.

## 2. Prepare Files for Upload
You need to upload the following files/folders to your Hostinger File Manager (usually in `public_html` or a subdomain folder):

- `package.json` (The one in the root directory)
- `server/` (The entire server folder)
- `dist/` (The build folder you just created)
- `vite.config.ts` (Optional, but good to keep)
- `node_modules` (OPTIONAL: standard practice is to NOT upload this, but run `npm install` on the server. If you can't run terminal commands on Hostinger, you might need to upload it, but specific platform rules apply).

**Do NOT upload:** `.git`, `.env` (Create the .env file manually on the server for security).

## 3. Hostinger Configuration
1. **Node.js configuration**: In your Hostinger dashboard, create a Node.js application.
2. **Application Root**: Point to the folder where you uploaded the files.
3. **Application Startup File**: Enter `server/index.js`.
4. **Run NPM Install**: Click the "NPM Install" button in the dashboard.

## 4. Environment Variables
Create a `.env` file in the `server/` directory on Hostinger with your production credentials:
```env
DB_HOST=localhost
DB_USER=u184589548_best
DB_PASS=Mail@best2025
DB_NAME=u184589548_best
EMAIL_USER=mail@bestpuducherry.org
...
```

## 5. Start the App
Once configured, the application will serve both your API and the React Website from the same domain.
