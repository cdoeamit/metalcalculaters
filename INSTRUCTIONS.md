# Metal Calculator Project Instructions

## 1. Project Overview
This is a React-based web application for your Metal Calculator. It is designed to be fast, SEO-friendly, and ready for Google Ads (AdSense).

**Key Features:**
- **No Database Needed**: Runs entirely in the browser.
- **Google Ads Ready**: Includes Privacy Policy, Terms, and Contact pages required by AdSense.
- **SEO Optimized**: Includes Sitemap, Robots.txt, and Meta tags.

## 2. Technical Setup
The project uses **Vite** + **React** + **Tailwind CSS**.

### Prerequisites
- Node.js installed on your computer.

### Installation
If you haven't already, install the dependencies:
```bash
npm install
```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open your browser to the URL shown (usually `http://localhost:5173`).

### Building for Production
To create the final website files for uploading:
```bash
npm run build
```
This will create a `dist` folder containing your website.

## 3. Deployment & Domain
Since this is a static site (no database), you can host it for free on high-performance platforms.

### Recommended Hosting: Vercel or Netlify
1.  Create an account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2.  Install the Vercel CLI or drag-and-drop your `dist` folder (after building) to their dashboard.
3.  **Connect your Domain**:
    - Buy your domain (e.g., from Namecheap or GoDaddy).
    - In Vercel/Netlify settings, add your custom domain.
    - Follow their DNS instructions (usually adding an A Record or CNAME).

## 4. Google Ads & SEO
### Google Search Console
1.  Go to [Google Search Console](https://search.google.com/search-console).
2.  Add your domain property.
3.  Submit your sitemap: `https://yourdomain.com/sitemap.xml`.

### Google AdSense
1.  Go to [Google AdSense](https://adsense.google.com).
2.  Add your site.
3.  **Important**: Ensure your `Privacy Policy`, `Terms`, and `Contact` pages are accessible from the footer (they are already linked in the code).
4.  Copy the AdSense script code they give you.
5.  Open `index.html` in this project and replace the placeholder script with your actual AdSense code:
    ```html
    <script async src="https://pagead2.googlesyndication.com/..."></script>
    ```

## 5. File Structure
- `src/MetalCalculator.jsx`: Your main calculator logic.
- `src/RegularDashboard.jsx`: The layout wrapper (Header/Footer).
- `src/pages/`: Policy pages (Privacy, Terms, Contact).
- `public/`: Static files like `sitemap.xml` and `robots.txt`.

## 6. FAQs & Modifications

### Content Approvals (Google Ads/Search)
- **Status**: The current pages (Privacy, Terms, Contact, About) meet the *technical* requirements for AdSense.
- **Tip**: To improve approval chances, consider adding more text to the "About" page or a "How to Use" guide on the home page. Google likes "valuable content".
- **Keywords**: Adding more keywords to `meta name="keywords"` in `index.html` has **no effect** on Google ranking. Focus on writing good descriptions and titles instead.

### 🔄 Changing Your Domain
If you buy a domain other than `metalcalculator.com`, you must update these 3 files:

1.  **`public/sitemap.xml`**: Replace all `https://www.metalcalculator.com` links with your new domain (e.g., `https://www.mysilvertool.com`).
3.  **`src/pages/Contact.jsx`**: Update the support email address.

### 🔄 How Updates Work
**Important:** Your live website does *not* auto-update when you change code on your computer.
1.  Make your changes in the code.
2.  Run `npm run build` again.
3.  Upload the **new** `dist` folder to your hosting provider (Vercel/Netlify/cPanel).
*Note: If you link Vercel/Netlify to GitHub, pushing code to GitHub WILL auto-update the site.*

### 📢 Where do Ads Appear? (Auto vs. Manual)
By default, the code in `index.html` uses **Google Auto Ads**.
-   **Who decides?** Google's AI decides where to show ads (top, bottom, between paragraphs) to maximize earnings.
-   **Can I decide?** Yes. You can turn *off* Auto Ads in your Google AdSense settings and manually place "Ad Units" if you prefer specific spots, but Auto Ads are recommended for beginners.


