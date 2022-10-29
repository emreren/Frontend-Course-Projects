import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('app test', () => {
  beforeEach(() => render(<App />));

  test('Header render', () => {
    const headerTitle = screen.getByText('Emoji Search');
    expect(headerTitle).toBeInTheDocument;
  });

  test('Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edilmesi', () => {
    const items = screen.getAllByText('Click to copy emoji');
    expect(items.length).toEqual(20);
  });

  test('Emoji sayfasının başarılı bir şekilde filitrelenmesi', () => {
    const emoji = '100';
    const input = screen.getByRole('textbox');
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });

  test('Emoji Copy render', () => {
    const copytext = screen.getAllByText('Click to copy emoji');
    userEvent.click(copytext);
    const input = screen.getByRole('textbox');
    userEvent.paste(input, copytext)
    expect(input.length === 1);
  });
});