# Campaign Analytics Dashboard

> **Last Updated**: January 23, 2025 - Project has been updated with latest changes and improvements.
> **Deployment Status**: Ready for GitHub Pages deployment

A modern, responsive analytics dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides comprehensive campaign performance metrics and analytics visualization.

## 🌐 Live Demo

Visit the live application: [Campaign Analytics Dashboard](https://Yup0103.github.io/Dashboard/)

## Features

- **Campaign Performance Overview**
  - Real-time metrics display (Clicks, Total Spend, Impressions)
  - Interactive area charts for trend visualization
  - Date range selection for custom time periods

- **Geographic Distribution**
  - Region-wise performance breakdown
  - Dynamic metric filtering (CTR, CPC, CPM)
  - Visual progress indicators
  - Country-specific performance tracking

- **Interactive Components**
  - Responsive data tables
  - Dynamic metric toggles
  - Real-time data updates
  - Performance trend indicators

- **AI-Powered Features**
  - Smart recommendations for campaign optimization
  - AI Assistant for data analysis
  - Automated workflow management
  - B2B-specific analytics

## 🚀 Deployment

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

#### Prerequisites

1. **GitHub Repository**: Ensure your code is in a GitHub repository
2. **GitHub Pages Enabled**: Enable GitHub Pages in your repository settings

#### Automatic Deployment (Recommended)

1. **Push to Main Branch**: The application will automatically deploy when you push to the `main` or `master` branch
2. **GitHub Actions**: The workflow will build and deploy your application automatically
3. **Access Your App**: Visit `https://Yup0103.github.io/Dashboard/`

#### Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

#### Configuration

1. **Update Repository Name**: Replace `Yup0103` in `package.json` with your actual GitHub username
2. **Repository Settings**: 
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"
   - Ensure the repository is public

## Running Locally

### Prerequisites

1. **Node.js Installation**
   - Install Node.js (v16 or higher)
   - Recommended: Use [nvm](https://github.com/nvm-sh/nvm) for Node.js version management
   ```bash
   # Using nvm
   nvm install 16
   nvm use 16
   ```

2. **Package Manager**
   - The project uses npm by default
   - You can also use yarn if preferred

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Yup0103/Dashboard.git
   cd Dashboard
   ```

2. **Install Dependencies**
   ```bash
   # Using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start Development Server**
   ```bash
   # Using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Access the Application**
   - Open your browser and navigate to [http://localhost:5173](http://localhost:5173)
   - The app should hot-reload as you make changes

### Troubleshooting

1. **Port Conflicts**
   - If port 5173 is in use, Vite will automatically try the next available port
   - You can manually change the port in `vite.config.ts`

2. **Dependencies Issues**
   - If you encounter dependency conflicts:
     ```bash
     # Clear npm cache
     npm cache clean --force
     
     # Remove node_modules and reinstall
     rm -rf node_modules
     npm install
     ```

3. **TypeScript Errors**
   - Run type checking separately:
     ```bash
     npm run typecheck
     ```

4. **Development Environment**
   - Ensure your IDE has TypeScript and React extensions installed
   - Recommended VSCode extensions:
     - ESLint
     - Prettier
     - TypeScript + JavaScript
     - Tailwind CSS IntelliSense

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- React Simple Maps
- Lucide Icons
- Recharts
- React Router DOM
- Vite

## Project Structure

```
src/
  ├── components/           # React components
  │   ├── ui/              # Reusable UI components
  │   ├── AnalyticsDashboard.tsx
  │   ├── RegionDistribution.tsx
  │   ├── MapComponent.tsx
  │   └── ...
  ├── pages/               # Page components
  ├── styles/              # Global styles
  └── App.tsx             # Root component
```

## Component Documentation

### AnalyticsDashboard
Main dashboard component that displays overall campaign performance metrics.

### RegionDistribution
Displays geographic distribution of campaign performance with:
- Country-wise breakdown
- Metric selection (CTR, CPC, CPM)
- Performance change indicators

### MapComponent
Interactive map visualization showing:
- Regional performance heatmap
- Country-specific highlights
- Performance indicators

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern analytics dashboards
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Map visualization powered by [react-simple-maps](https://www.react-simple-maps.io/)
