import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
    margin: 15,
    padding: 15,
    fontFamily: 'system-ui, sans-serif',
});

globalStyle('a', {
    color: 'inherit',
});

globalStyle('header img', {
    width: '100px',
    height: 'auto'
});