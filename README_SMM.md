# SMM Panel - Social Media Marketing Dashboard

A complete SMM (Social Media Marketing) panel built with React for managing social media services, orders, and payments.

![SMM Panel Login](https://github.com/user-attachments/assets/2fbc1fa6-dddc-4a0a-abf4-1e8a9d63f988)

## 🚀 Features

### ✅ Core Features Implemented

- **User Authentication System**
  - JWT-based login/logout
  - Session persistence with localStorage
  - Protected routes and user state management

- **Dashboard Overview**
  - Real-time statistics (Total Orders, Pending, Completed, Balance)
  - Quick action buttons for common tasks
  - Recent orders table with status indicators

- **Service Catalog**
  - Comprehensive SMM services (Instagram, YouTube, Facebook, Twitter)
  - Category filtering system
  - Service ratings and pricing information
  - Order placement interface

- **Order Management**
  - Complete order tracking system
  - Status filtering (All, Pending, In Progress, Completed, Cancelled)
  - Detailed order information (Start count, Remains, Actions)
  - Order history with status badges

- **Wallet & Balance System**
  - Real-time balance display
  - Multiple payment methods (PayPal, Stripe, Crypto, Bank Transfer)
  - Transaction history tracking
  - Fund management interface

### 🎨 User Interface

- Modern, responsive design with gradient backgrounds
- Professional navigation with user menu
- Color-coded status indicators
- Clean card-based layouts
- Mobile-friendly responsive design

## 📱 Screenshots

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/12a5b50c-ae12-4e6f-a87a-adc50ef63191)

### Service Catalog
![Services](https://github.com/user-attachments/assets/deba001f-c925-443f-bde4-9d46ae8ded5f)

### Order Management
![Orders](https://github.com/user-attachments/assets/dd69df30-e608-4330-adfc-bd22e7ae8fca)

### Wallet & Balance
![Wallet](https://github.com/user-attachments/assets/1d2631aa-d756-40f8-92a4-5cd9e501f046)

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Parcel 2.7.0
- **Styling**: CSS3 with custom properties and flexbox/grid
- **Authentication**: JWT (localStorage for demo)
- **State Management**: React Hooks (useState, useEffect)
- **Development**: ES6+, JSX

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VisaScoreai/edu.git
   cd edu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:1234`

### Demo Login

Use any email and password combination to login (this is a frontend-only demo).

Example:
- Email: `admin@smmPanel.com`
- Password: `password123`

## 📦 Build & Deploy

### Development Build
```bash
npm start
```

### Production Build
```bash
npm run build
```

### GitHub Pages Deploy
```bash
# Update package.json homepage field first
npm run deploy
```

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Login.jsx          # Authentication component
│   ├── Navigation.jsx     # Main navigation bar
│   ├── Dashboard.jsx      # Dashboard overview
│   ├── Services.jsx       # Service catalog
│   ├── Orders.jsx         # Order management
│   └── Wallet.jsx         # Wallet & balance
├── images/               # Image assets
├── App.jsx              # Main application component
├── index.js             # Application entry point
├── index.html           # HTML template
└── styles.css           # Global styles
```

## 🎯 Available Services

The SMM panel includes services for major social media platforms:

### Instagram
- Followers (High quality)
- Likes (Real engagement)

### YouTube
- Views (Real traffic)
- Subscribers (Active users)

### Facebook
- Page Likes (Real users)

### Twitter
- Followers (Active accounts)

## 💳 Payment Methods

- PayPal integration ready
- Stripe credit card processing
- Cryptocurrency support
- Bank transfer options

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_endpoint
REACT_APP_STRIPE_KEY=your_stripe_key
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### Customization

The application is designed to be easily customizable:

- **Colors**: Update CSS custom properties in `styles.css`
- **Services**: Modify the services array in `Services.jsx`
- **Branding**: Update navigation logo and titles
- **Features**: Add new components and routes as needed

## 🚀 Future Enhancements

### Backend Integration
- REST API for user management
- Database integration (MongoDB/PostgreSQL)
- Real payment gateway integration
- Order processing automation

### Additional Features
- Admin panel for service management
- Reseller API endpoints
- Rate limiting and anti-fraud measures
- Email notifications
- Advanced analytics and reporting
- Multi-language support

### Security Features
- CAPTCHA integration
- Two-factor authentication
- API rate limiting
- Advanced fraud detection

## 🐳 Docker Support

### Docker Setup (Future)
```dockerfile
# Dockerfile example for production deployment
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@smmPanel.com or create an issue in this repository.

## 🔗 Links

- [Live Demo](https://visascoreai.github.io/edu/)
- [Documentation](https://github.com/VisaScoreai/edu/wiki)
- [API Documentation](https://github.com/VisaScoreai/edu/blob/main/API.md)

---

Made with ❤️ by [VisaScoreai](https://github.com/VisaScoreai)