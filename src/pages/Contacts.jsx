import { Container, Card } from '@mui/material';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

const Contacts = () => {
  return (
    <Container
      component="main"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ p: 4, maxWidth: 1024 }}>
        <h1> My Contacts </h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Card>
    </Container>
  );
};

export default Contacts;