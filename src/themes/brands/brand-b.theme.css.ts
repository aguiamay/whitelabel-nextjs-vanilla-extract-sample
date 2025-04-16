import { createTheme } from '@vanilla-extract/css'
import { vars } from '../contract.css'

export const brandBTheme = createTheme(vars, {
    color: {
        background: '#f0f0ff',
        text: '#222222',
        primary: '#0055ff',
    },
})