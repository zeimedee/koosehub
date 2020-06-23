import {createMuiTheme } from '@material-ui/core';
import { blue, purple, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette:{
        primary: blue,
        secondary: purple,
    },
    status:{
        danger: red,
    }
});

export default theme;