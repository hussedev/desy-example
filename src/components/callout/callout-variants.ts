import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof calloutVariants>;

export const calloutVariants = cva(['p-4', 'rounded-2xl', 'border', 'shadow-md'], {
  variants: {
    variant: {
      primary: ['bg-primary-200', 'border-primary-500', 'text-primary-900'],
      information: ['bg-information-200', 'border-information-500', 'text-information-900'],
      success: ['bg-success-200', 'border-success-500', 'text-success-900'],
      warning: ['bg-warning-200', 'border-warning-500', 'text-warning-900'],
      danger: ['bg-danger-200', 'border-danger-500', 'text-danger-900'],
      default: ['bg-slate-200', 'border-slate-500', 'text-slate-900'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
