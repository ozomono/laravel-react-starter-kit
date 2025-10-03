# Pull Request Template

Thank you for contributing to React Laravel Starter Kit! Please fill out this template to help us review your pull request.

## Description

### Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring
- [ ] Test improvements

### What does this PR do?
A clear and concise description of what this pull request accomplishes.

### Why is this change needed?
Explain the motivation for this change. Link to any related issues.

### How was this tested?
Describe the tests that you ran to verify your changes:
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing (if applicable)

## Related Issues

- Fixes #(issue number)
- Closes #(issue number)
- Related to #(issue number)

## Changes Made

### Backend Changes
- [ ] New API endpoints
- [ ] Database migrations
- [ ] Configuration changes
- [ ] Middleware updates
- [ ] Authentication changes
- [ ] Other: _______________

### Frontend Changes
- [ ] New components
- [ ] UI/UX improvements
- [ ] State management updates
- [ ] Routing changes
- [ ] Styling updates
- [ ] Other: _______________

### Documentation
- [ ] README updated
- [ ] API documentation updated
- [ ] Code comments added
- [ ] CHANGELOG updated
- [ ] Other: _______________

## Code Quality

### Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

### Code Style
- [ ] PHP code follows PSR-12 standards
- [ ] TypeScript/JavaScript code follows ESLint rules
- [ ] CSS follows project conventions
- [ ] Commits follow conventional commit format

## Testing

### Backend Testing
```bash
cd backend
composer test
# Results: [PASS/FAIL] - X tests, Y assertions
```

### Frontend Testing
```bash
cd frontend
npm test
# Results: [PASS/FAIL] - X tests
```

### Manual Testing Steps
1. [ ] Step 1
2. [ ] Step 2
3. [ ] Step 3

## Screenshots/Videos

### Before
<!-- Add screenshots of the current state -->

### After
<!-- Add screenshots of the new state -->

### UI Changes
<!-- If applicable, add screenshots of UI changes -->

## Performance Impact

### Before
- Load time: X seconds
- Bundle size: X MB
- Memory usage: X MB

### After
- Load time: X seconds
- Bundle size: X MB
- Memory usage: X MB

## Breaking Changes

### If this is a breaking change:
- [ ] I have updated the CHANGELOG.md
- [ ] I have added migration notes
- [ ] I have updated the documentation
- [ ] I have notified stakeholders

### Migration Guide
If applicable, provide steps to migrate from the old behavior to the new behavior:

1. Step 1
2. Step 2
3. Step 3

## Security Considerations

- [ ] No sensitive data is exposed
- [ ] Input validation is implemented
- [ ] Authentication/authorization is properly handled
- [ ] CSRF protection is maintained
- [ ] SQL injection prevention is in place
- [ ] XSS prevention is implemented

## Deployment Notes

### Environment Variables
List any new environment variables that need to be set:
```env
NEW_VARIABLE=value
```

### Database Changes
- [ ] No database changes
- [ ] New migrations included
- [ ] Seed data updated
- [ ] Backward compatibility maintained

### Dependencies
- [ ] No new dependencies added
- [ ] New dependencies documented
- [ ] Dependency versions updated
- [ ] Security vulnerabilities addressed

## Review Checklist

### For Reviewers
- [ ] Code is clean and follows project standards
- [ ] Tests are comprehensive and pass
- [ ] Documentation is updated
- [ ] Performance impact is acceptable
- [ ] Security implications are considered
- [ ] Breaking changes are properly documented

### For Author
- [ ] All CI checks pass
- [ ] PR is ready for review
- [ ] All requested changes have been addressed
- [ ] PR description is complete and accurate

## Additional Notes

Any additional information that reviewers should know:

## Questions for Reviewers

If you have specific questions or areas you'd like reviewers to focus on:

1. Question 1
2. Question 2
3. Question 3

---

**Thank you for your contribution!** 🎉

Please ensure all checklist items are completed before requesting review.
