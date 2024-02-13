import React, { useState } from 'react';
import {
  ListItemAvatar,
  Avatar,
  Link,
  Chip,
  ListItemText,
  Box,
  Button,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, deleteContact } from '../../redux/contacts/operations';
import stringAvatar from 'utils/avatarCreator';
import { getContacts } from '../../redux/contacts/selectors';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => getContacts(state).items);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEdit = () => {
    const isNameUnique = contacts.every(contact => contact.id === id || contact.name !== editedName);

    if (!isNameUnique) {
      alert('This contact name already exists.');
      return;
    }

    dispatch(editContact({ id: id, name: editedName, number: editedNumber }));
    setIsEditing(false);
  };

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      {isEditing ? (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              value={editedName}
              onChange={e => setEditedName(e.target.value)}
            />
            <TextField
              label="Number"
              value={editedNumber}
              onChange={e => setEditedNumber(e.target.value)}
            />
            <Button variant="outlined" onClick={() => setIsEditing(false)}>
              Close
            </Button>
            <Button variant="contained" onClick={handleEdit}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'space-between',
            }}
          >
            <ListItemAvatar>
              <Avatar {...stringAvatar(name)} />
            </ListItemAvatar>
            <ListItemText>{name}</ListItemText>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Link href={`tel:${number}`}>{number}</Link>
            <Chip
              label="Edit"
              icon={<EditIcon />}
              onClick={() => setIsEditing(true)}
            ></Chip>
            <Chip
              label="Delete"
              icon={<DeleteIcon />}
              onClick={handleDelete}
            ></Chip>
          </Box>
        </>
      )}
    </>
  );
}

export default ContactsItem;
