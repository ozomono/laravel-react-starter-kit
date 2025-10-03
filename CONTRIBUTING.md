# Contributing to React Laravel Starter Kit

Thank you for your interest in contributing to the React Laravel Starter Kit! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/react-laravel-starter-kit.git
   cd react-laravel-starter-kit
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/react-laravel-starter-kit.git
   ```

## Development Setup

### Prerequisites

- PHP 8.1+
- Composer
- Node.js 18+
- npm/yarn/pnpm

### Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Making Changes

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Backend tests
cd backend
php artisan test

# Frontend tests
cd frontend
npm test

# Linting
npm run lint
```

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add user profile management"
git commit -m "fix: resolve authentication issue"
git commit -m "docs: update API documentation"
```

**Commit Message Format:**
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## Pull Request Process

### 1. Keep Your Branch Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git checkout your-feature-branch
git rebase main
```

### 2. Push Your Changes

```bash
git push origin your-feature-branch
```

### 3. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Submit the PR

### 4. PR Requirements

- [ ] Code follows the project's coding standards
- [ ] Tests pass locally
- [ ] Documentation is updated
- [ ] No merge conflicts
- [ ] Clear description of changes
- [ ] Screenshots for UI changes

## Issue Guidelines

### Bug Reports

When reporting bugs, please include:

1. **Environment details**:
   - OS and version
   - PHP version
   - Node.js version
   - Browser (for frontend issues)

2. **Steps to reproduce**:
   - Clear, numbered steps
   - Expected vs actual behavior

3. **Additional context**:
   - Screenshots or error messages
   - Relevant code snippets

### Feature Requests

For feature requests, please:

1. Check existing issues first
2. Describe the feature clearly
3. Explain the use case
4. Consider implementation complexity

## Coding Standards

### PHP (Laravel Backend)

- Follow [PSR-12](https://www.php-fig.org/psr/psr-12/) coding standards
- Use meaningful variable and method names
- Add type hints where possible
- Write clear comments for complex logic

```php
// Good
public function getUserById(int $id): ?User
{
    return User::find($id);
}

// Bad
public function get($id)
{
    return User::find($id);
}
```

### TypeScript/JavaScript (React Frontend)

- Follow ESLint configuration
- Use TypeScript for type safety
- Use meaningful variable names
- Prefer functional components with hooks

```typescript
// Good
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return <div>{user.name}</div>;
};

// Bad
const UserProfile = (props) => {
  return <div>{props.user.name}</div>;
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Keep custom CSS minimal
- Use consistent spacing and colors
- Follow responsive design principles

## Testing

### Backend Testing

```bash
cd backend
php artisan test
php artisan test --coverage
```

### Frontend Testing

```bash
cd frontend
npm test
npm run test:coverage
```

### Writing Tests

- Write unit tests for business logic
- Write integration tests for API endpoints
- Write component tests for React components
- Aim for good test coverage

## Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Use PHPDoc for PHP methods
- Keep README.md updated
- Document API endpoints

### Commit Documentation

- Write clear commit messages
- Reference issues in commits
- Use conventional commit format

## Release Process

1. Update version numbers
2. Update CHANGELOG.md
3. Create release notes
4. Tag the release
5. Deploy to production

## Getting Help

- Check existing [Issues](https://github.com/your-username/react-laravel-starter-kit/issues)
- Join our [Discussions](https://github.com/your-username/react-laravel-starter-kit/discussions)
- Contact maintainers directly

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
