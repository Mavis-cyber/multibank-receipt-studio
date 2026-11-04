# MultiBank Receipt Studio

A mobile-friendly, static front-end project for educational UI demonstrations and software testing.

## Safety and scope
- The templates are generic, unofficial style demonstrations.
- Every preview has a visible DEMO watermark and a disclaimer.
- The app does not connect to banks, payment networks, accounts, or transaction APIs.
- Generated reference numbers are fictional and do not verify payments.
- Use fictional sample details only. Do not represent output as proof of payment.

## Run locally
Open `index.html` in a modern browser. PNG export uses html2canvas from jsDelivr; printing / Save as PDF uses the browser's print dialog.

## Deploy on Vercel using Android
1. Extract the ZIP on your phone.
2. Create or sign in to a GitHub account in Chrome.
3. On GitHub, create a new public or private repository named `multibank-receipt-studio`.
4. In the repository, choose **Add file → Upload files** and upload `index.html`, `style.css`, `script.js`, and `README.md` from the extracted project folder. Commit the files.
5. Sign in to Vercel using Chrome and choose **Add New → Project**.
6. Import the GitHub repository `multibank-receipt-studio`.
7. For a plain HTML/CSS/JS site, leave the framework preset as **Other** (or no framework), leave build command and output directory blank, then choose **Deploy**.
8. When deployment completes, open the generated `.vercel.app` address on your phone.

## Updating the site
Edit a file in GitHub, commit the change, and Vercel will automatically redeploy the project.
