import { createThemeContract } from '@vanilla-extract/css'

export const vars = createThemeContract({
    color: {
        background: null,
        text: null,
        primary: null,
    },
})