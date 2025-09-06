# Aryan's Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and TailwindCSS.

<!-- Updated: September 7, 2025 - Social links and resume updated -->

## 🚀 Features

- **Modern Design**: Clean, minimalistic dark theme with blue accents
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive Elements**: Hover effects and animations
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Grid layout for displaying projects
- **Social Links**: Placeholder social media links

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About section with bio and skills
│   ├── Projects.jsx    # Projects showcase grid
│   ├── Contact.jsx     # Contact form and social links
│   └── Footer.jsx      # Footer with back-to-top button
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # TailwindCSS imports and global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Hero.jsx**: Change name, tagline, and description
- **About.jsx**: Update bio, skills, and photo placeholder
- **Projects.jsx**: Replace with your actual projects
- **Contact.jsx**: Update social media links (currently placeholders)

### Styling
The website uses TailwindCSS for styling. You can customize:

- Colors: Update the color scheme in component classes
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts
- Animations: Customize hover effects and transitions

### Adding Real Projects
In `Projects.jsx`, replace the placeholder projects with your actual projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    status: "Completed", // or "In Progress", "Planning Phase"
    // Add more fields as needed
  },
  // ... more projects
];
```

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Note**: This is a template portfolio. Remember to replace placeholder content with your actual information, projects, and social media links.