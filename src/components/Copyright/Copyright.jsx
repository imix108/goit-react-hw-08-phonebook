import { Typography } from '@mui/material';

const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <a
        color="inherit"
        href="https://github.com/imix108"
        style={{ marginRight: '4px', color: 'inherit' }}
      >
        
      </a>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;