# GitHub Pages Deployment Guide

This guide will help you deploy your Campaign Analytics Dashboard to GitHub Pages.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Git Repository**: Your project should be in a GitHub repository
3. **Public Repository**: GitHub Pages requires the repository to be public (unless you have GitHub Pro)

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Create a GitHub Repository** (if you haven't already):
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `Dashboard`
   - Make it public
   - Don't initialize with README (since you already have one)

2. **Push Your Code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Dashboard.git
   git push -u origin main
   ```

### 2. Update Configuration

1. **Update package.json**:
   Replace `yourusername` with your actual GitHub username in the `homepage` field:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/Dashboard"
   }
   ```

2. **Update README.md**:
   Replace all instances of `yourusername` with your actual GitHub username.

### 3. Enable GitHub Pages

1. **Go to Repository Settings**:
   - Navigate to your repository on GitHub
   - Click on "Settings" tab

2. **Configure GitHub Pages**:
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - This will use the workflow we created

### 4. Deploy

#### Option A: Automatic Deployment (Recommended)

1. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor Deployment**:
   - Go to "Actions" tab in your repository
   - You should see the deployment workflow running
   - Wait for it to complete (usually 2-3 minutes)

3. **Access Your App**:
   - Once deployment is complete, visit: `https://YOUR_USERNAME.github.io/Dashboard/`

#### Option B: Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### 5. Verify Deployment

1. **Check the URL**: Visit `https://YOUR_USERNAME.github.io/Dashboard/`
2. **Test Navigation**: Make sure all pages work correctly
3. **Check Console**: Open browser dev tools to ensure no errors

## Troubleshooting

### Common Issues

1. **404 Errors**:
   - Make sure the repository name matches exactly
   - Check that the base path in `vite.config.ts` is correct
   - Ensure the repository is public

2. **Build Failures**:
   - Check the "Actions" tab for error details
   - Ensure all dependencies are properly installed
   - Verify TypeScript compilation passes

3. **Routing Issues**:
   - The app uses client-side routing, which should work with GitHub Pages
   - If you encounter routing issues, refresh the page

4. **Assets Not Loading**:
   - Check that the base path is correctly set in `vite.config.ts`
   - Ensure all asset paths are relative

### Performance Optimization

The build shows some warnings about large chunks. To optimize:

1. **Code Splitting**: Consider implementing dynamic imports
2. **Bundle Analysis**: Use tools like `rollup-plugin-visualizer` to analyze bundle size
3. **Tree Shaking**: Ensure unused code is being removed

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Add Custom Domain**:
   - Go to repository Settings > Pages
   - Add your custom domain in the "Custom domain" field
   - Update your DNS settings accordingly

2. **Update Configuration**:
   - Update the `homepage` in `package.json`
   - Update the base path in `vite.config.ts`

## Maintenance

### Updating the Deployment

1. **Make Changes**: Update your code locally
2. **Test Locally**: Run `npm run dev` to test changes
3. **Build**: Run `npm run build` to ensure it builds successfully
4. **Deploy**: Push to main branch for automatic deployment

### Monitoring

- **GitHub Actions**: Monitor deployment status in the Actions tab
- **Performance**: Use browser dev tools to monitor performance
- **Analytics**: Consider adding Google Analytics or similar

## Security Considerations

1. **Environment Variables**: Don't commit sensitive data
2. **API Keys**: Use environment variables for any API keys
3. **Dependencies**: Regularly update dependencies for security patches

## Support

If you encounter issues:

1. **Check GitHub Actions Logs**: Look for detailed error messages
2. **GitHub Pages Documentation**: [GitHub Pages Guide](https://pages.github.com/)
3. **Vite Documentation**: [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## Example URLs

- **Repository**: `https://github.com/YOUR_USERNAME/Dashboard`
- **Live Site**: `https://YOUR_USERNAME.github.io/Dashboard/`
- **Actions**: `https://github.com/YOUR_USERNAME/Dashboard/actions`

Remember to replace `YOUR_USERNAME` with your actual GitHub username throughout this guide.
