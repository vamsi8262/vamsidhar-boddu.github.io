# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your work, skills, and contact information in a beautiful and professional manner.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling navigation
- 🎯 Interactive sections (About, Projects, Skills, Contact)
- 🌈 Beautiful gradient hero section
- 📧 Contact form (ready for integration with backend services)

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal information and statistics
3. **Projects** - Showcase of featured projects with descriptions
4. **Skills** - Technical skills organized by category
5. **Contact** - Contact information and form

## Customization

### Personal Information

1. **Name and Title**: Update in `index.html`
   - Line 10: Change the `<title>`
   - Line 30: Update "Your Name" in the hero section
   - Line 31: Update your subtitle/role

2. **About Section**: Edit the about text in `index.html` (lines 58-61)

3. **Projects**: Update project cards in `index.html` (lines 70-120)
   - Change project titles, descriptions, tech tags, and links

4. **Skills**: Modify skill items in `index.html` (lines 130-160)

5. **Contact Information**: Update in `index.html` (lines 170-190)
   - Email, LinkedIn, GitHub links

6. **Profile Photo**: Add your professional photo
   - Place your photo in the `images/` folder
   - Name it `profile.jpg` (or update the path in `index.html`)
   - Recommended size: 800x800px or larger (square format works best)
   - The photo will be automatically cropped to a circle with a beautiful border

7. **Logos**: Add logo images to the `images/` folder
   - **GW Logo**: Name it `gw-logo.png` (for George Washington University)
   - **AWS Logo**: Name it `aws-logo.png` (for AWS certifications)
   - **Azure Logo**: Name it `azure-logo.png` (for Azure certification)
   - Recommended size: 200x200px or larger (will be automatically resized)
   - Logos will be displayed in the Education and Certifications sections

8. **Credly Badges**: Add your Credly badge embed codes
   - Go to your Credly profile and click "Share" on each badge
   - Copy the embed code for each certification
   - In `index.html`, find the certifications section (around line 183)
   - Replace `YOUR_BADGE_ID_1`, `YOUR_BADGE_ID_2`, etc. with your actual badge IDs
   - The badge ID is found in the `data-share-badge-id` attribute
   - Example: If your embed code has `data-share-badge-id="abc123"`, replace `YOUR_BADGE_ID_1` with `abc123`

9. **Resume**: Add your resume PDF
   - Place your resume PDF in the `documents/` folder
   - Name it `Vamsidhar_Boddu_Resume.pdf` (or update the path in `index.html` line ~180)
   - The resume section includes both "View" (opens in new tab) and "Download" buttons
   - Update the "Last updated" date in `index.html` if needed (line ~187)

10. **Colors**: Customize colors in `styles.css`
   - Edit CSS variables in `:root` (lines 5-13)

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `username.github.io` where `username` is your GitHub username)
   - **Important**: If you want the site at `username.github.io`, the repository MUST be named exactly `username.github.io`
   - Otherwise, you can use any name and it will be at `username.github.io/repository-name`
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README (since you already have files)
7. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt in the portfolio directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Site

- If repository is named `username.github.io`: Your site will be live at `https://username.github.io`
- If repository has a different name: Your site will be at `https://username.github.io/repository-name`

**Note**: It may take a few minutes for the site to be available after enabling GitHub Pages.

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Contact Form Integration

The contact form currently shows an alert. To make it functional, you can:

1. **Use a service like Formspree**:
   - Sign up at [Formspree](https://formspree.io)
   - Get your form endpoint
   - Update the form action in `index.html`

2. **Use EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com)
   - Add their script and configure it

3. **Backend Integration**:
   - Create a backend API endpoint
   - Update the form submission handler in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Design inspiration: Modern web design principles

---

**Happy Coding! 🚀**

