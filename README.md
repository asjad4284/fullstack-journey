# Job Alert SaaS - Frontend

A modern React + Vite + Tailwind CSS frontend for a job alert SaaS application.

## Features

- 🔔 **Job Alerts**: Create and manage custom job search alerts with keywords, locations, and salary ranges
- 🔗 **Integrations**: Connect to multiple job boards (LinkedIn, Indeed, GitHub Jobs)
- 📜 **History**: Track notification history and job matches
- ⚙️ **Settings**: Customize notification preferences and alert behavior
- 📊 **Dashboard**: Get an overview of your active alerts and recent matches

## Tech Stack

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components for each route
├── context/          # React Context for state management
├── hooks/            # Custom React hooks
├── utils/            # Utility functions and API helpers
├── mockData.js       # Mock data for development
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Getting Started

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:5173`
3. Login with any email and password (mock authentication)
4. Explore the dashboard and create job alerts

## Available Routes

- `/auth` - Authentication page
- `/` - Dashboard
- `/alerts` - Job alerts management
- `/integrations` - Integration setup
- `/history` - Notification history
- `/settings` - User settings

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:3000/api
```

## License

MIT
