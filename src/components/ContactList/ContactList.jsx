import PropTypes from 'prop-types';

import { Contacts } from '../Contacts/Contacts';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contacts
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func,
};
