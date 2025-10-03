# React Laravel Starter Kit

A modern, full-stack starter kit combining React with Laravel, featuring authentication, user management, and a beautiful UI built with modern web technologies.

## 🚀 Features

- **Frontend**: React with TypeScript, Tailwind CSS, and modern tooling
- **Backend**: Laravel with Sanctum authentication and Fortify
- **Authentication**: Complete auth system with login, register, password reset
- **User Management**: CRUD operations for user management
- **API**: RESTful API with proper authentication and CORS
- **Database**: SQLite for development (easily configurable for production)
- **UI Components**: Modern, responsive design with dark mode support

## 📋 Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js 18 or higher
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-laravel-starter-kit
   ```

2. **Backend Setup**
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000/api

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
APP_NAME="React Laravel Starter"
APP_URL=http://localhost:8000
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database.sqlite
```

**Frontend (.env)**
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

### Default Login Credentials

- Email: `test@example.com`
- Password: `password123`

## 📁 Project Structure

```
react-laravel-starter-kit/
├── backend/                 # Laravel API
│   ├── app/
│   ├── config/
│   ├── database/
│   ├── routes/
│   └── ...
├── frontend/                # React Application
│   ├── app/
│   ├── public/
│   └── ...
├── .gitignore
├── README.md
└── ...
```

## 🔐 Authentication

The application uses Laravel Sanctum for API authentication with the following endpoints:

- `POST /api/login` - User login
- `POST /api/register` - User registration
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user
- `GET /api/users` - Get users list (authenticated)

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Modern Components**: Built with modern UI patterns
- **Form Validation**: Client and server-side validation
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages

## 🚀 Development

### Running in Development

1. **Start the backend server**
   ```bash
   cd backend
   php artisan serve
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

### Building for Production

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy the backend**
   ```bash
   cd backend
   composer install --optimize-autoloader --no-dev
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

## 🧪 Testing

```bash
# Backend tests
cd backend
php artisan test

# Frontend tests
cd frontend
npm test
```

## 📦 Docker Support

```bash
# Build and run with Docker
docker-compose up -d
```

## 🤝 Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-username/react-laravel-starter-kit/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🙏 Acknowledgments

- [Laravel](https://laravel.com/) - The PHP framework
- [React](https://reactjs.org/) - The frontend library
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Laravel Sanctum](https://laravel.com/sanctum) - API authentication
- [Laravel Fortify](https://laravel.com/fortify) - Authentication backend

## 📈 Roadmap

- [ ] Add more authentication features (2FA, social login)
- [ ] Implement role-based access control
- [ ] Add more UI components
- [ ] Improve testing coverage
- [ ] Add CI/CD pipeline
- [ ] Docker optimization
- [ ] Performance monitoring

---

**Happy coding! 🎉**