import { createTheme } from '@vanilla-extract/css'
import { vars } from '../contract.css'

export const brandATheme = createTheme(vars, {
    color: {
        background: '#ffffff',
        text: '#111111',
        primary: '#ff4d00',
    },
})