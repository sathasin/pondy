# Migration from Node.js to PHP (Shared Hosting)

Since your hosting only supports PHP, we are switching the architecture.

## The Strategy
1. **PDF Generation**: Moved from Server (Node.js/Puppeteer) to **Browser** (React/html2canvas).
   - *Why?* Shared hosting cannot run headless Chrome (Puppeteer).
2. **Backend Logic**: Replaced `server/index.js` with **PHP Scripts**.
   - `api/membership.php`: Handles registration, photo upload, and emails.
   - `api/nominee.php`: Handles nominations.
   - `api/contact.php`: Handles contact form.
3. **Database**: You will use the same MySQL database, but accessed via PHP.

## Tasks
- [ ] Install `html2canvas` & `jspdf` for frontend PDF generation.
- [ ] Create PHP API scripts in a `public/api` folder (or separate `php` folder).
- [ ] Update React components (`Membership`, `Nominee`, `Contact`) to point to `.php` endpoints.
- [ ] Implement PDF generation component in React.
