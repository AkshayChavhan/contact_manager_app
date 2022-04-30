import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() { 

  const contacts = [
    {
      id : "1" ,
      name : "Dipesh",
      email : "abc@gmail.com",
    },
    {
      id : "2" ,
      name : "Ganesh",
      email : "efg@gmail.com",
    }
  ]
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts ={ contacts } />
    </div>
    
  );
}

export default App;
