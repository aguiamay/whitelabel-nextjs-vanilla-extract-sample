import { style } from '@vanilla-extract/css'
import { vars } from '@/themes/contract.css'

export const box = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  padding: '24px',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: 'bold',
})