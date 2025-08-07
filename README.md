
# Executive Analytics Dashboard

A modern, responsive Executive Dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides comprehensive business metrics and KPIs for executive-level decision making.

## 🚀 Features

- **Executive Command Center**: High-level business performance indicators
- **Strategic Business Metrics**: Revenue, growth, and operational efficiency metrics  
- **Real-time Performance Monitoring**: Live data updates and trend analysis
- **B2C & B2B Views**: Switch between consumer and business customer analytics
- **Interactive Visualizations**: Charts, graphs, and performance indicators
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with purple/blue gradient design system

## 📊 Dashboard Sections

### Executive Priority Metrics
- Revenue & Growth Performance
- Operational Efficiency 
- Customer Acquisition & Retention
- Sales & Conversion Performance
- Platform & Channel Performance

### Operational Metrics  
- Traffic & User Engagement
- E-commerce Performance
- Engagement & Retention

### Analytical Insights
- Revenue & Attribution Analysis
- Budget & Forecasting
- Audience Insights
- Creative Performance
- Detailed Attribution

## 🛠 Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Responsive chart library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Dashboard.git
cd Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000/Dashboard/`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── ExecutiveMetrics.tsx  # Main executive dashboard
│   └── theme-provider.tsx    # Dark theme provider
├── pages/
│   └── Index.tsx        # Main dashboard page
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/
│   └── use-toast.ts     # Toast notifications
└── main.tsx             # App entry point
```

## 🎨 Design System

The dashboard uses a sophisticated dark theme with:
- **Primary Colors**: Purple gradients (#6D28D9, #4F46E5)
- **Background**: Deep space gradient (#0A0B14, #1A0B2E)
- **Text**: Light purple/white for excellent readability
- **Accent Colors**: Emerald for positive metrics, Red for negative
- **Glass Morphism**: Backdrop blur effects for modern UI

## 📱 Responsive Breakpoints

- **Mobile**: 640px and below
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px and above
- **Large Desktop**: 1440px and above

## 🚀 Deployment

### Deploy to Replit

1. Fork this repository on GitHub
2. Import to Replit from GitHub
3. The app will automatically deploy and be accessible via Replit's hosting

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. All data is currently mock data for demonstration purposes.

### Customization
- Update metric values in `ExecutiveMetrics.tsx`
- Modify color scheme in `tailwind.config.js`
- Add new metric sections by extending the `metricSections` array

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using modern React ecosystem
- UI components powered by Radix UI
- Icons by Lucide React
- Charts by Recharts

---

**Live Demo**: [View Dashboard](https://yourusername.github.io/Dashboard/)
