import ContactForm  from './ContactForm/ContactForm ';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = () => {
    return (
      <div className="main-container">
        <div>
          <h2 className="title">Phonebook</h2>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter/>
          <ContactsList/>
        </div>
      </div>
    );
};

export default App;
