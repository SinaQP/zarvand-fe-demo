import { createTheme } from '@mui/material/styles';

let mainTheme = createTheme({
    palette: {
        success:{
            main:'#1CA421'
        },
        error:{
            main:'#E05D5D'
        },
        info: {
            main:'#0F3BDE'
        }
    },
    typography: {
        fontFamily: ['Vazir', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'].join(','),
        htmlFontSize: 10,
    },
    components: {
        MuiButton: {
            styleOverrides: { sizeSmall: { width: '8.8rem' }, sizeMedium: { width: '15rem' }, sizeLarge: { width: '20rem' } },
        },
    },
    spacing: (factor: any) => `${factor}rem`,
});

export default mainTheme;
