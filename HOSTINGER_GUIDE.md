# Deploying to Hostinger Shared Hosting (public_html)

Since you are using Shared Hosting (`public_html`), you must use the **"Setup Node.js App"** feature in your Hostinger hPanel. You cannot just upload files; you **must** create a Node.js application to run the server.

## 1. Prepare Your Files (Locally)
1. Run `npm run build` on your computer.
2. Verify you have a `dist` folder.
3. Verify you have a `server` folder.
4. Verify your `package.json` in the root has `"start": "node server/index.js"`.

## 2. Upload to Hostinger
1. Go to **Files > File Manager**.
2. Navigate to **public_html**.
3. **Delete** any existing `index.php` or `default.php`.
4. Upload the following **into public_html**:
   - `dist` (Folder)
   - `server` (Folder)
   - `package.json` (File - IMPORTANT)
   - `.env` (File - Create this manually with your DB credentials)

*Do NOT upload `node_modules`. We will install them on the server.*

Structure inside public_html should look like:
```text
/public_html
  /dist
  /server
  package.json
  .env
```

## 3. Configure Node.js APP (hPanel)
1. Go to **Advanced > Setup Node.js App**.
2. Click **Create New Application**.
3. **Node.js Version**: Select **18** or **20** (Recommended).
4. **Application Mode**: Production.
5. **Application Root**: `public_html` (This creates the app in your main folder).
6. **Application Startup File**: `server/index.js` (Type this in exactly).
7. Click **Create**.

## 4. Install Dependencies
1. Once created, click the **"NPM Install"** button in the Node.js Setup screen.
   - This will read your `package.json` and install libraries.
   - *If the button fails or is grayed out, standard shared hosting might require you to upload `node_modules` manually (zipped, then unzip), but try the button first.*

## 5. Troubleshooting (Important)
- **Database Connection**: Ensure your `.env` file uses `DB_HOST=localhost` and the correct database user/password you created in **Databases > MySQL Databases**.
- **Images**: Since the server runs from `server/index.js`, file upload paths might be tricky. Ensure `server/uploads` folder exists and has write permissions (755 or 777).

Your site should now be live! The Node.js server will handle both the Website and the API.
