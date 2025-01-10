import { afterEach, describe, expect, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { Button, ButtonColorTypes, ButtonVariantType, Icon } from '.';

interface checkValidButtonProps {
  variant?: ButtonVariantType
  color?: ButtonColorTypes
  button: HTMLElement
}

function checkValidButton({ variant = 'normal', color = 'primary', button }: checkValidButtonProps) {
  if (!button) throw Error("Error: The button doesn't exist in the DOM");

  expect(button.classList.contains('button')).toBe(true);
  expect(button.classList.contains(`${variant}-btn`)).toBe(true);
  expect(button.classList.contains(`${variant}-btn--${color}`)).toBe(true);
}

describe('Button Component', () => {
  const variants: ButtonVariantType[] = ['normal', 'outlined', 'text'];
  const colors: ButtonColorTypes[] = ['primary', 'neutral', 'success', 'warning', 'danger'];
  const textProp = 'Click Me';

  afterEach(cleanup);

  it('displays the button text in uppercase', () => {
    render(<Button>{textProp}</Button>);
    const $button__small = screen.getByRole('button').querySelector('small');
    expect($button__small?.innerText).toBe(textProp.toUpperCase());
  });

  it('renders default class and normal variant when no props are passed', () => {
    render(<Button>{textProp}</Button>);
    const $button = screen.getByRole('button');
    checkValidButton({ variant: 'normal', color: 'primary', button: $button });
  });

  it('applies normal variant if the variant prop is invalid', () => {
    const variant = 'invalid prop' as ButtonVariantType;
    render(<Button variant={variant}>{textProp}</Button>);
    const $button = screen.getByRole('button');
    expect($button.classList.contains(`normal-btn`)).toBe(true);
  });

  it('applies primary color if the color prop is invalid', () => {
    const color = 'invalid color' as ButtonColorTypes;
    render(<Button color={color}>{textProp}</Button>);
    const $button = screen.getByRole('button');
    expect($button.classList.contains(`normal-btn--primary`)).toBe(true);
  });

  it.each(variants)('tests %s button variant with all colors', (variant) => {
    colors.forEach(color => {
      cleanup();
      render(<Button variant={variant} color={color}>{textProp}</Button>);
      const $button = screen.getByRole('button');
      try {
        checkValidButton({ variant, color, button: $button });
      } catch (error) {
        throw new Error(
          `Failed to validate the ${variant} button with color ${color}. Error: ${(error as Error).message}`
        );
      }
    });
  });

  it('renders icons in the button', () => {
    render(<Button startIcon={<Icon />} endIcon={<Icon />}>{textProp}</Button>);
    const $icons = screen.getByRole('button').querySelectorAll('svg');
    if ($icons.length !== 2) {
      throw new Error('Expected 2 icons to be rendered in the button, but found none or fewer.');
    }
    $icons.forEach(icon => {
      expect(icon).toBeInTheDocument()
    });
  });
});
