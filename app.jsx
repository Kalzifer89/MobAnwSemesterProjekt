class Htmlanzeigen extends React.Component {

  constructor(props) {
    //Defaukt Werte eistellen
     super(props);
     this.state = {
       contacts: [
        { name: 'Klaus', age: 32, email: 'klaus@example.com' },
        { name: 'Brigitte', age: 97, email: 'brigitte@example.com' },
        { name: 'Olaf', age: 16, email: 'olaf@example.com' }
       ]
     };
   }

     //Update Funktionen für die ezeinen Elemente erzeugen
     updateName(event) {
       this.setState({ name: event.target.value });
     }

     updateAge(event) {
       this.setState({ age: event.target.value });
     }

     updateMail(event) {
       this.setState({ mail: event.target.value });
     }

     addKontakt(event) {
     var newContacts = this.state.contacts.concat({name: this.state.name, age: this.state.age, email: this.state.mail});
     this.setState({contacts: newContacts});
     }

     delKontakt(email) {
      var newContacts = this.state.contacts.filter(value => value.email != email);
      this.setState({contacts: newContacts});
     }


//HTML Ausgeben um Formular Anzeigen
  render() {
    return (
      //Fragment Anzeigen um Abzugrenzen
    <React.Fragment>
    <h1>Kontakte</h1>
    <h2>Neuen Kontakt erstellen</h2>

    <label>Name: <input onChange={this.updateName.bind(this)} type="text"/></label>
    <label>Alter: <input onChange={this.updateAge.bind(this)} type="number" min="1"/></label>
    <label>E-Mail-Adresse: <input onChange={this.updateMail.bind(this)} type="email"/></label>
    <button onClick={this.addKontakt.bind(this)}>Kontakt hinzufügen</button>
    <h2>Alle Kontaktdaten</h2>
    <ul>

    {this.state.contacts.map((item, index) => {
      return (
        <li key={index}>
        {item.name}({item.age}),{item.email}{<button onClick={this.delKontakt.bind(this,item.email)}>Kontakt löschen</button>}
        </li>);
      })}

    </ul>
    </React.Fragment>
    );
  }
}

//Classe Aufrufn und HTML Element ändern
ReactDOM.render(
 <Htmlanzeigen />,
 document.getElementById('root')
);
