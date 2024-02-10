import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Hello there! I am your Phonebook:)
        </Typography>
        <Typography variant="body1" paragraph align="center">
      
        </Typography>
        <Typography variant="body1" paragraph>
         
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/registration"
        >
          Let's Start
        </Button>
      </Box>
    </Container>
  );
};

export default Home;