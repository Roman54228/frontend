# InterviewAI Frontend

A modern React + TypeScript application with Tailwind CSS v4, featuring a comprehensive UI component library and an AI-powered interview preparation platform.

## Features

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** with custom design system
- **Radix UI** components for accessibility
- **Lucide React** for icons
- **Responsive design** with mobile-first approach
- **Modern UI components** including:
  - Sidebar with collapsible functionality
  - Background gradient animations
  - Navigation menus
  - Buttons, inputs, tooltips, and more
  - Dark/light theme support

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**

### Installing Node.js

If you don't have Node.js installed, you can install it using one of these methods:

#### Option 1: Using Homebrew (macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### Option 2: Using Node Version Manager (nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc

# Install and use Node.js
nvm install 18
nvm use 18
```

#### Option 3: Download from Official Website
Visit [nodejs.org](https://nodejs.org/) and download the LTS version for your operating system.

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd /Users/r.filonov/Desktop/front
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   Or if you prefer yarn:
   ```bash
   yarn install
   ```

   Or if you prefer pnpm:
   ```bash
   pnpm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── sidebar.tsx
│       ├── navigation-menu.tsx
│       ├── popover.tsx
│       ├── tooltip.tsx
│       ├── sheet.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       └── background-gradient-animation.tsx
├── hooks/
│   └── use-mobile.ts       # Custom hooks
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## Key Components

### App.tsx
The main showcase component demonstrating:
- Sidebar navigation with collapsible functionality
- Hero section with animated background
- Features section
- Testimonials
- Pricing plans
- Responsive design

### UI Components
- **Button**: Multiple variants and sizes
- **Sidebar**: Collapsible sidebar with mobile support
- **BackgroundGradientAnimation**: Interactive gradient background
- **NavigationMenu**: Accessible navigation components
- **Popover**: Modal-like components
- **Tooltip**: Contextual help text

### Styling
- **Tailwind CSS v4** with custom configuration
- **CSS Variables** for theming
- **Custom animations** for gradient effects
- **Responsive design** patterns

## Customization

### Colors and Theming
The application uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... other color variables */
}
```

### Adding New Components
1. Create your component in `src/components/ui/`
2. Follow the existing patterns for styling and accessibility
3. Export from the appropriate index files
4. Use the `cn` utility for class merging

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style
2. Use TypeScript for type safety
3. Ensure components are accessible
4. Test on multiple screen sizes
5. Use semantic HTML elements

## License

This project is for demonstration purposes.


