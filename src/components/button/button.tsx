import { ComponentProps } from 'react';

import { buttonVariants, type ButtonVariants } from './button-variants';

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button {...props} className={buttonVariants({ size, variant })} />;
};
