# Job Application Website Template

This project is a reusable starter template for job application websites. The UI is deliberately split into content, style, and section components so you can personalize it for each opportunity with minimal effort.

## Folder structure

- src/components: shared UI building blocks
- src/sections: page sections such as the hero, services, highlights, and contact
- src/data: content and copy for the site
- src/config: branding and theme settings
- src/types: TypeScript types for content models
- public: static assets such as logos and favicons

## Customize the content

Update the content in src/data/content.ts:

- personalInfo for your name, title, location, tagline, and intro
- companyProfile for the target company summary
- skills for the interactive keyword cards
- cvHighlights for resume-style highlights
- serviceItems for the services section
- contactInfo for your contact details and links

## Change the colors and branding

Edit src/config/theme.ts to update:

- colors.background, colors.surface, colors.primary, colors.secondary, colors.accent
- branding.logoPath and branding.faviconPath
- fonts.sans if you want a different font stack

## Replace images and logos

Place replacement assets in public/ and update the references in src/config/theme.ts or the section components.

## What to provide to customize it for a specific company

To make the template feel tailored instead of generic, prepare the following before editing the site:

### 1. Company and role details
- Company name
- Job title
- Link to the job description
- Company website URL

### 2. Your personal background
- Your name
- Current role or professional title
- Location
- A short summary of your experience
- 3–5 strengths or keywords that match the role

### 3. Company-specific messaging
- What makes you a good fit for this company
- Any relevant achievements, projects, or experience
- A short explanation of why you want to work there

### 4. Branding and style references
- Company logo or brand mark
- Website or screenshot of the company homepage
- Preferred colors, if known
- Preferred font style or visual feel (e.g. minimal, bold, corporate, creative)

### 5. Contact and portfolio details
- Email address
- Phone number (optional)
- LinkedIn, GitHub, or portfolio links

## Good prompt to use with AI

Use a prompt like this when generating or rewriting the content. The goal is to create a new, customized copy and layout based on this template, while adapting the content and styling to the requirements you provide.

```text
Create a new customized job application landing page for [Company Name] for the role of [Job Title].

Start from this React + TypeScript + Vite template, but create a new tailored version based on the requirements provided. Use the existing structure as a foundation, then adapt the copy, sections, and styling to fit this specific company and role.

Please:
1. Rewrite the hero section so it clearly introduces me for this role.
2. Rewrite the company profile section to reflect [Company Name]'s mission, values, and fit with my background.
3. Update the skills and highlights to match the job description.
4. Make the copy sound tailored to [Company Name], not generic.
5. Adjust the visual style to match the company’s branding as closely as possible.
6. Keep the page concise and easy to read.
7. Preserve the overall template structure, but change the content and styling according to the requirements provided.

My details:
- Name: [Your name]
- Current role: [Your role]
- Location: [City, Country]
- Target role: [Job title]
- Target company: [Company Name]
- Job description: [paste the job description]
- My background: [short summary of experience]
- My strengths: [3–5 bullet points]
- Preferred tone: [formal / warm / innovative / minimal]

Company reference:
- Website: [URL]
- Brand colors: [if known]
- Font style: [if known]
- Style reference: [screenshot, homepage, or description]
```

## Naming the new GitHub repository

When creating a new repository for a specific application, give it a company-specific name that clearly reflects the target company.

Recommended format:
- job-application-[company-name]

Example:
- job-application-spotify
- job-application-apple
- job-application-airbnb

Use lowercase letters and hyphens for the repository name.

## Add new sections

1. Create a new section component in src/sections
2. Import it into src/App.tsx
3. Keep the content in src/data/content.ts where possible

## Deploy to Vercel

1. Push the repository to GitHub
2. Import the repo in Vercel
3. Use the default Vite settings
4. Deploy

## Development

```bash
npm install
npm run dev
```

