# SPENDWISE.

An open‑source Budget Tracking System built with a **Node.js/Express + MongoDB** backend and a **React + Vite + Tailwind CSS** frontend. This project is created to improve and learn react and js.# SPENDWISE - Budget Tracker

A modern, intuitive budget tracking application built with React.js and Tailwind CSS. Track your income, expenses, and manage your finances with ease.

![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **💰 Financial Overview Dashboard**
  - Real-time balance tracking
  - Income and expense summary
  - Visual charts and statistics

- **📊 Transaction Management**
  - Add, edit, and delete transactions
  - Categorize income and expenses
  - View transaction history

- **🎯 Budget Planning**
  - Set budget limits for different categories
  - Track spending against budgets
  - Visual progress indicators

- **📈 Reports & Analytics**
  - Monthly and yearly reports
  - Spending patterns analysis
  - Category-wise breakdowns

- **🔐 User Authentication**
  - Secure login and signup
  - Password protection
  - Social login integration (Google, GitHub)

- **🎨 Modern UI/UX**
  - Responsive design for all devices
  - Beautiful gradients and animations
  - Intuitive navigation

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Koju-r28/SPENDWISE.git
   cd SPENDWISE
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
spendwise/
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/         
│   │   ├── component/       
│   │   │   └── navbar.jsx
│   │   ├── context/        
│   │   │   └── AuthProvider.jsx
│   │   ├── page/            
│   │   │   ├── home.jsx    
│   │   │   └── login.jsx    
│   │   ├── App.jsx          
│   │   ├── App.css          
│   │   ├── index.css        
│   │   └── main.jsx         
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js   
│   ├── postcss.config.js    
│   └── vite.config.js       
└── backend/                 # (To be implemented)
```

## 🎯 Usage

### Login
1. Navigate to `/login`
2. Enter your credentials or sign up for a new account
3. Use social login options for quick access

### Dashboard
- View your total balance, income, and expenses at a glance
- See recent transactions
- Monitor budget progress for different categories

### Add Transaction
1. Click "Add Transaction" button
2. Enter amount and select category
3. Choose between income or expense
4. Save the transaction

### Manage Budgets
1. Go to Budget Overview section
2. Set spending limits for each category
3. Track your progress with visual indicators

## 📸 Screenshots

### Login Page
Beautiful gradient-based login page with social authentication options.

### Dashboard
Comprehensive overview of your financial status with interactive cards and charts.

### Budget Overview
Track spending against budgets with intuitive progress bars.

## 🔧 Configuration

### Tailwind CSS Setup

The project uses Tailwind CSS via CDN for development. For production:

1. **Install Tailwind dependencies**
   ```bash
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

2. **Configure `tailwind.config.js`**
   ```javascript
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Add Tailwind directives to `index.css`**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 🚧 Roadmap

- [ ] Backend API integration
- [ ] Database setup (MongoDB)
- [ ] User authentication with JWT
- [ ] Data visualization with charts
- [ ] Export reports as PDF
- [ ] Mobile app (React Native)
- [ ] Dark mode support
- [ ] Multi-currency support
- [ ] Recurring transactions
- [ ] Budget alerts and notifications


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

- **Ritu Koju**

## 🙏 Acknowledgments

- Tailwind CSS for the amazing utility-first framework
- React team for the excellent documentation
- All contributors who help improve this project

## 💡 Support

If you like this project, please give it a ⭐ on GitHub!

---

Made with ❤️ by [Ritu Koju]


