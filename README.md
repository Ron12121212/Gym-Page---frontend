# Mandalorian Warrior Gym Website

A front-end web project inspired by the world of Star Wars.  
This interactive gym website promotes fictional Mandalorian-themed fitness classes and offers information about training programs, membership, and contact options.

Built for educational and demonstration purposes using HTML, CSS, JavaScript, jQuery, and Bootstrap.

# Project Overview

The **Mandalorian Warrior Gym** is a themed, single-page-driven website simulating a futuristic fitness center inspired by Star Wars lore.  
Users can explore available classes, read about the gym’s mission, get in touch via a styled contact form, and navigate easily through various sections using a responsive interface.

This system is static and does not connect to a back-end or database.

# Key Features

* **Responsive Design** using Bootstrap 5
* **Top Navigation Bar** with links to:
  - Main Page
  - Class listings with dynamic filtering
  - Contact form with client-side validation
  - Trainers and membership (linked, not included in uploaded files)

* **Homepage Highlights**:
  - Themed branding and slogan
  - Hero image and prominent call-to-action buttons

* **Classes Page**:
  - Dynamic class search/filter using jQuery UI
  - Content injected into the page via JavaScript (`classes.js`)
  - Grid layout with Bootstrap cards (assumed from script structure)

* **Contact Page**:
  - Input form for name, email, and message
  - Client-side validation
  - Submit button styled and responsive

* **Shared Components**:
  - Custom header and footer on all pages
  - External stylesheet (`css/style.css`)
  - External scripts (`js/*.js`)
  - jQuery & Bootstrap CDN integration

# How to Use

**1. Open Locally**

- Clone or download the repository
- Open `homepage.html` in your browser to begin

**2. File Structure**
```
project-root/
│
├── homepage.html
├── classes.html
├── contact.html
├── js/
│   ├── main.js
│   ├── classes.js
│   └── contact.js
├── css/
│   └── style.css
├── images/
│   └── gymphoto.jpg
```

**3. Scripts and Styles**

All JavaScript files and CSS files are stored in separate folders and loaded externally.  
Ensure relative paths are preserved when moving or uploading to a server.

# Tech Stack

- HTML5 & CSS3
- Bootstrap 5.3 (CDN)
- jQuery 3.7 + jQuery UI
- Custom JS and CSS

# Hosting

Can be deployed to any static web host such as:

- GitHub Pages
- Netlify
- Vercel

> No server-side logic or database is used.

# Notes

- Images, theme, and branding are fictional and designed for creative/educational use.
- All scripts are client-side only.
- No user session or login functionality is implemented.

# License

This project is open for **non-commercial, educational, and personal** use only.  
Any commercial usage requires permission from the creators.

© 2025 Mandalorian Warrior Gym  
All rights reserved.
