# CV Builder

A dynamic CV builder app built with React as part of the Odin Project curriculum. Fill in your details, preview your CV in real time, and download it as a PDF with one click.

## Features

- **Personal Info** — Add your name, email, phone number, and location
- **Education** — Add, edit, and delete multiple education entries
- **Experience** — Add, edit, and delete multiple work experience entries
- **Projects** — Showcase your personal and professional projects
- **Certificates** — Highlight your certifications and achievements
- **Skills & Languages** — List your technical skills and spoken languages
- **Edit/Preview Toggle** — Seamlessly switch between editing details and previewing the final CV layout
- **Live Preview** — See your CV update in real time as you fill in your details
- **PDF Download** — Download your CV as a clean, single-page A4 PDF
- **ATS Friendly** — Semantic HTML structure optimized for applicant tracking systems
- **Dark Mode UI** — Clean, modern dark interface with blue accents
- **Responsive Design** — Fully adaptive layout that works seamlessly across desktop, tablet (1270px, 1024px, 850px), and mobile (550px, 425px) views

## Tech Stack

- React 19 (Vite)
- Vanilla CSS (with extensive media queries for responsiveness)
- html2pdf.js
- react-icons
- gh-pages (for simplified deployment to GitHub Pages)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## What I Learned

- Managing arrays in React state
- Add, edit, and delete patterns using `.map()` and `.filter()`
- Lifting state up and passing functions as props
- `useEffect` for syncing prop changes to local state
- `useRef` for targeting DOM elements
- Conditional rendering with show/hide state
- Generating PDFs from HTML using html2pdf.js
- Building reusable components with flexible props
- Implementing responsive design and layouts across multiple device breakpoints

## [Live Preview](https://mustafamanhall.github.io/cv-application/)