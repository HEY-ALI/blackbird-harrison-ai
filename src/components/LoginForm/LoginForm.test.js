import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './index'; 
import { validatePassword } from './index';
import emailValidator from 'email-validator';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

describe('Password Validation', () => {
  test('valid passwords should pass', () => {
    expect(validatePassword('Abcd123!')).toBe(true);
    expect(validatePassword('SecureP@ssw0rd')).toBe(true);
  });

  test('invalid passwords should fail', () => {
    expect(validatePassword('weak')).toBe(false);
    expect(validatePassword('noupper123!')).toBe(false);
    expect(validatePassword('NoSpecial123')).toBe(false);
    expect(validatePassword('Short!')).toBe(false);
  });
});

describe('Email Validation', () => {
  test('valid email should pass', () => {
    expect(emailValidator.validate('valid@example.com')).toBe(true);
  });

  test('invalid email should fail', () => {
    expect(emailValidator.validate('invalid@example.c')).toBe(false);
  });
});
