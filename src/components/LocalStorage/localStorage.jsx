export const getContacts = () => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  };
  
  export const saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
};