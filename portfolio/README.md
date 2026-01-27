# Mutti Ullah - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features a dynamic blog system, project showcase, skills overview, and contact section.

## 🌟 Features

- ✨ **Modern Design**: Beautiful gradient backgrounds and smooth animations with Framer Motion
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Dark/Light Mode**: Theme switching with Bootstrap integration
- 📝 **Blog System**: Dynamic blog with search, filtering, and tagging
  - Featured articles showcase
  - Full-text search across titles and descriptions
  - Tag-based filtering
  - Related articles recommendations
  - SEO optimized with dynamic meta tags
  - Social sharing buttons
- 💼 **Portfolio Showcase**: Display projects, experience, and skills
- 📧 **Contact Form**: Integrated contact form with email functionality
- 🚀 **Performance Optimized**: Static generation, image optimization, and code splitting
- 📊 **Analytics**: Google Analytics integration
- ♿ **Accessible**: WCAG compliant markup and interactions

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/        # Contact form API endpoint
│   ├── blogs/
│   │   ├── page.tsx        # Blogs listing page
│   │   ├── [slug]/
│   │   │   └── page.tsx    # Individual blog post
│   │   └── *.module.css
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Homepage with sections
│   └── globals.css
│
├── components/
│   ├── sections/           # Page sections (Hero, About, Skills, etc.)
│   ├── blog/               # Blog-specific components
│   ├── AnimationVariants.ts
│   └── ThemeInit.ts
│
└── data/
    ├── blogs.ts            # Blog posts data
    ├── projects.ts
    ├── experiences.ts
    ├── skills.ts
    ├── personalInfo.ts
    └── socialLinks.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mutti-dev/my-ready-portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Configuration

Update `.env.local` with your settings:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_BASE_URL=https://your-domain.com
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=your_email@gmail.com
```

### Development

```bash
# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel deploy
```

## 📝 Blog Management

### Adding Blog Posts

1. Open `src/data/blogs.ts`
2. Add a new blog object:

```typescript
{
  id: 6,
  title: "Your Article Title",
  slug: "your-article-slug",
  description: "Brief description",
  content: `
# Your Article

Full markdown-style content here...
  `,
  tags: ["React", "Next.js"],
  date: "2024-12-20",
  author: "Your Name",
  readTime: 5,
  featured: false
}
```

3. Post automatically available at `/blogs/your-article-slug`

### Blog Features
- **Search**: Full-text search across titles and descriptions
- **Filtering**: Filter by tags
- **Featured Posts**: Highlighted articles on the blog listing
- **Related Articles**: Automatic suggestions based on tags
- **Social Sharing**: Share to Twitter and LinkedIn
- **SEO**: Dynamic meta tags and Open Graph support

See [BLOG_DOCUMENTATION.md](./BLOG_DOCUMENTATION.md) for detailed blog documentation.

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS, CSS Modules, Bootstrap
- **Animations**: Framer Motion
- **Icons**: React Icons
- **UI Components**: React Bootstrap
- **Email**: Nodemailer
- **Analytics**: Google Analytics
- **Deployment**: Vercel

## 🎨 Customization

### Update Personal Information

Edit `src/data/personalInfo.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ...
};
```

### Update Projects

Edit `src/data/projects.ts` to showcase your projects.

### Update Skills

Edit `src/data/skills.ts` to display your technical skills.

### Update Social Links

Edit `src/data/socialLinks.ts` to add your social media profiles.

### Modify Styles

- Global styles: `src/app/globals.css`
- Component styles: `src/components/**/*.module.css`
- Color scheme: Update CSS variables or modify module files

## 📊 Performance

- ⚡ **Optimized Images**: Next.js Image component
- 🔧 **Code Splitting**: Automatic route-based splitting
- 📦 **Static Generation**: Pre-rendered pages for fast delivery
- 💾 **Caching**: Vercel edge caching for optimal performance
- 📈 **Web Vitals**: Optimized for Core Web Vitals

## 🔐 Security

- ✅ HTTPS enforced
- ✅ Content Security Policy headers
- ✅ CSRF protection on forms
- ✅ Input validation on contact form
- ✅ Environment variables for sensitive data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

Built by **Mutti Ullah** - Full-Stack Developer

- 🌐 Portfolio: [my-ready-portfolio.vercel.app](https://my-ready-portfolio.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/mutti-ullah](https://linkedin.com/in/mutti-ullah)
- 🐙 GitHub: [github.com/mutti-dev](https://github.com/mutti-dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the project and submit pull requests.

## 📞 Support

For questions or support, please open an issue on GitHub or reach out via the contact form on the portfolio.

---

**⭐ If you found this helpful, please consider giving it a star!**
