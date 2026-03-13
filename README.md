# Deepak R — Portfolio

A clean, interactive personal portfolio built with vanilla HTML, CSS, and JavaScript. Designed for GitHub Pages hosting.

## 📁 Folder Structure

```
portfolio/
├── index.html       ← Main HTML file
├── style.css        ← All styles
├── script.js        ← All JavaScript (cursor, animations, canvas, typewriter)
├── resume.pdf       ← ✏️ Add your resume here
├── assets/
│   └── deepak.jpeg   ← ✏️ Add your photo here
└── README.md
```

## ✏️ Things to Update Before Publishing

### 1. Your Photo
- Put your photo inside `/assets/` and name it `deepak.jpeg`
- Open `index.html` and find the `hero-photo-placeholder` div
- Delete the placeholder div and uncomment the `<img>` tag below it:
  ```html
  <img src="./assets/deepak.jpeg" alt="Deepak R" />
  ```

### 2. Resume PDF
- Drop your resume PDF into the root folder, named `resume.pdf`
- It's already linked correctly in `index.html`

### 3. Email Address
- Search for `your@email.com` in `index.html` and replace with your real email (appears twice)

### 4. Social Links
- Search for the 3 social `<a href="#">` tags in the Contact section
- Replace `#` with:
  - LinkedIn: `https://linkedin.com/in/your-profile`
  - GitHub: `https://github.com/your-username`
  - WhatsApp: `https://wa.me/91XXXXXXXXXX`

### 5. Institution Names
- Find the two `<!-- ✏️ UPDATE: Your institution name -->` comments in the Education section
- Add your college/university names

### 6. Projects
- Find the 4 project cards in the Projects section
- Update: title, description, stack tags, Live link, GitHub link

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository named `username.github.io`
2. Upload all files (keep folder structure intact)
3. Go to **Settings → Pages → Source → main branch**
4. Your portfolio will be live at `https://username.github.io`

## 🎨 Color Palette

| Name   | Hex       | Usage                    |
|--------|-----------|--------------------------|
| Orange | `#F36C21` | Accents, highlights      |
| Sand   | `#E8E0CF` | Background               |
| Black  | `#1E1E1E` | Body text                |
| Muted  | `#6B6560` | Secondary text           |
| Card   | `#DDD5C2` | Card backgrounds         |

## ✨ Features

- Custom animated cursor (dot + lagging ring)
- Interactive dot-grid hero canvas (mouse repulsion)
- Typewriter cycling through roles
- Scroll-triggered reveal animations on all sections
- 3D tilt effect on project cards
- Animated skill bars (trigger on scroll)
- Sticky frosted-glass nav
- Fully responsive (mobile friendly)
- Zero dependencies — pure vanilla HTML/CSS/JS
