/*/////////////////////////////////////////////
// Kontaktliste - Semesterprojekt - MobAnw   //
// Fachbereich Medien FH-Kiel - 4. Semester  //
// Beschreibung : Charterstellung            //
// Ersteller 1 : Sven Krumbeck | 931087 		 //
// Ersteller 2 : Sven Möller   | 918958 		 //
// Stand : 17.06.2019 						           //
// Version : 0.1							               //
/////////////////////////////////////////////*/

var contact_deleted = false;
var contact_new = false;
var contact_edit = false;

class App extends React.Component {

  constructor(props) {
    //Default Werte eistellen
     super(props);
     this.state = {
       contacts: [
        {
          name: '3PO, Goldenrod',
          age: 45,
          phone: '1234-5678',
          email: 'c3po@rebelalliance.com',
          address: 'Tatooine',
          image: 'http://www.starwarshelmets.com/2012/Sideshow_weathered3PO04.jpg',
          isActive: true
        },

        {
          name: 'Obi-Wan Kenobi',
          age: 56,
          phone: '555-9876',
          email: 'obi.wan@jediorder.com',
          address: 'Stewjon',
          image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png',
          isActive: false
        },

        {
          name: 'Luke Skywalker',
          age: 34,
          phone: '555-2345',
          email: 'skywalker@ebelalliance.com',
          address: 'Polis Massa',
          image: 'http://3.bp.blogspot.com/_wrWQciYjEFU/TLGRKKbz-aI/AAAAAAAAAEQ/3kxzNSS9gXQ/s1600/LukeSkywalker.jpg',
          isActive: false
        },

        {
          name: 'Princess Leia',
          age: 58,
          phone: '106384',
          email: 'organa@imperialsenate.com',
          address: 'Alderaan',
          image: 'https://timedotcom.files.wordpress.com/2016/12/carrie-fisher-movies-2.jpg',
          isActive: false
        },

        {
          name: 'Jar Jar Bings',
          age: 55,
          phone: '405-7331',
          email: 'jarje@gunganarmy.com',
          address: 'Naboo',
          image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg',
          isActive: false
        },

        {
          name: 'Dark Vader',
          age: 50,
          phone: '1337',
          email: 'darth.vader@darkside.com',
          address: 'Tatooine',
          image: 'https://captainawkwarddotcom.files.wordpress.com/2014/02/darth-vader-original_0.jpg',
          isActive: false
        }
       ],
        contact_to_edit: '',
        contact_to_show: '',
        contact_new: false,
        contact_edit: false,
        contact_deleted: false
     };
   }


     //Update Funktionen für die ezeinen Elemente erzeugen
     updateName(event) {
       this.setState({ name: event.target.value });
     }

     updateAge(event) {
       this.setState({ age: event.target.value });
     }

     updatePhone(event){
       this.setState({ phone: event.target.value});
     }

     updateMail(event) {
       this.setState({ email: event.target.value });
     }

     updateAddress(event) {
      this.setState({ address: event.target.value });
    }

    updateImage(event) {
      this.setState({ image: event.target.value });
    }

     addKontakt() {
      contact_new = true;
       this.setState({contact_new: contact_new});
     }

     saveKontakt() {
      contact_new = false;
      contact_edit = false;
      var newContacts = this.state.contacts.concat({name: this.state.name, age: this.state.age, phone: this.state.phone, email: this.state.email, address: this.state.address, image: this.state.image, isActive: this.state.isActive});
      this.setState({contacts: newContacts});
    }

     editKontakt(email){
      contact_edit = true;
      this.setState({contact_edit: contact_edit});
      var choosenContact = this.state.contacts.filter(value => value.email == email);
      this.setState({contact_to_edit: choosenContact});
    }

     delKontakt(email) {
      contact_deleted = true;
      this.setState({contact_deleted: contact_deleted});
      var newContacts = this.state.contacts.filter(value => value.email != email);
      this.setState({contacts: newContacts});
     }

     showKontakt(email) {
      var choosenContact = this.state.contacts.filter(value => value.email == email);
      //this.setState({ contacts: choosenContact });
      this.setState({contact_to_show: choosenContact});
     }

     cancel(event){
        contact_edit = false;
        contact_new = false;
        this.setState({contact_new: contact_new});
        this.setState({contact_edit: contact_new});
     }


//HTML Ausgeben um Formular Anzeigen
  render() {
    // ============================================================================================== Bereich: Neuen Kontakt hinzufügen
    if(contact_new == true)
    {
      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="flex-container">
      <div class="left">
        <h1>Kontakte</h1>

        <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>

          <ul>
            {this.state.contacts.map((item, index) => {
              return (
                <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                <table>
                  <tr>
                  <td>{<img src={item.image} class="contactpicture"></img>}</td>
                <td class="adress">{<br></br>}
                  {item.name}({item.age})
                {<br></br>}
                  {item.phone}
                {<br></br>}
                  {item.address}
                {<br></br>}
                  {item.email}
                {<br></br>}</td>
                <td>
                  {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                  {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                  </td>
                  </tr>
                  </table>
                </div>);
            })}
          </ul>
        </div>
          <div class="right">
            <h2>Neuen Kontakt erstellen</h2>

            <label>Name: <input onChange={this.updateName.bind(this)} type="text"/></label>
            {<br></br>}
            <label>Alter: <input onChange={this.updateAge.bind(this)} type="number" min="1"/></label>
            {<br></br>}
            <label>Telefon: <input onChange={this.updatePhone.bind(this)} type="text"/></label>
            {<br></br>}
            <label>E-Mail-Adresse: <input onChange={this.updateMail.bind(this)} type="mail"/></label>
            {<br></br>}
            <label>Adresse: <input onChange={this.updateAddress.bind(this)} type="text"/></label>
            {<br></br>}
            <label>Bild: <input onChange={this.updateImage.bind(this)} type="text"/></label>
            {<br></br>}

            <button onClick={this.saveKontakt.bind(this)}>Speichern</button>
            <button onClick={this.cancel.bind(this)}>Abbrechen</button>
          </div>
      </div>
      </React.Fragment>
      );
    }
    // ============================================================================================== Bereich: Kontakt bearbeiten
    if(contact_edit == true)
    {

      //console.log(this.state.contacts.name);
      //console.log(this.state.contact_to_edit[0].name);

      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="flex-container">
      <div class="left">
        <h1>Kontakte</h1>

        <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>

          <ul>
            {this.state.contacts.map((item, index) => {
              return (
                <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                <table>
                  <tr>
                  <td>{<img src={item.image} class="contactpicture"></img>}</td>
                <td class="adress">{<br></br>}
                  {item.name}({item.age})
                {<br></br>}
                  {item.phone}
                {<br></br>}
                  {item.address}
                {<br></br>}
                  {item.email}
                {<br></br>}</td>
                <td>
                  {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                  {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                  </td>
                  </tr>
                  </table>
                </div>);
            })}
          </ul>
        </div>
        <div class="right">
          <h2>Kontakt bearbeiten</h2>

          <label>Name: <input onChange={this.updateName.bind(this)} type="text" defaultValue={this.state.contact_to_edit[0].name}/></label>
          {<br></br>}

          <label>Alter: <input onChange={this.updateAge.bind(this)} type="number" min="1" defaultValue={this.state.contacts[0].age}/></label>
          {<br></br>}
          <label>Telefon: <input onChange={this.updatePhone.bind(this)} type="text" defaultValue={this.state.contacts[0].phone}/></label>
          {<br></br>}
          <label>E-Mail-Adresse: <input onChange={this.updateMail.bind(this)} type="mail"  defaultValue={this.state.contacts[0].email}/></label>
          {<br></br>}
          <label>Adresse: <input onChange={this.updateAddress.bind(this)} type="text" defaultValue={this.state.contacts[0].address}/></label>
          {<br></br>}
          <label>Bild: <input onChange={this.updateImage.bind(this)} type="text" defaultValue={this.state.contacts[0].image}/></label>
          {<br></br>}

          <button onClick={this.saveKontakt.bind(this)}>Speichern</button>
          <button onClick={this.cancel.bind(this)}>Abbrechen</button>
          </div>
      </div>
      </React.Fragment>

      );

    }
    // ============================================================================================== Bereich: Wenn ein Kontakt gelöscht wurde
    else if(contact_deleted == true)
    {
      contact_deleted = false;
      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="flex-container">
        <div class="left">
          <h1>Kontakte</h1>

          <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>

            <ul>
              {this.state.contacts.map((item, index) => {
                return (
                  <div onClick={this.showKontakt.bind(this, item.email)}>
                  <li  class="contact">
                  <table>
                    <tr>
                    <td>{<img src={item.image} class="contactpicture"></img>}</td>
                  <td class="adress">{<br></br>}
                    {item.name}({item.age})
                  {<br></br>}
                    {item.phone}
                  {<br></br>}
                    {item.address}
                  {<br></br>}
                    {item.email}
                  {<br></br>}</td>
                  <td>
                    {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                    {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                    </td>
                    </tr>
                    </table>
                  </li></div>);
              })}
            </ul>
          </div>
          <div class="right">
              <h2>Kontakt erfolgreich gelöscht</h2>
          </div>
      </div>
      </React.Fragment>
      );

    }
    else
    {
      //console.log(this.state.contact_to_show[0]);
      // ============================================================================================== Bereich: Kontakte darstellen und rendern
      // Unter div class right wird jeweil das Array geprüft und wenn eines mit Inhalt vorhanden ist ausgegeben,
      // hierbei wird unterschieden, ob ein Kontakt ausgewählt wurde oder einfach die Liste ausgegben werden soll
      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="flex-container">
        <div class="left">
          <h1>Kontakte</h1>

          <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>

            <ul>
              {this.state.contacts.map((item, index) => {
                return (
                  <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                  <table>
                    <tr>
                    <td>{<img src={item.image} class="contactpicture"></img>}</td>
                  <td class="adress">{<br></br>}
                    {item.name}({item.age})
                  {<br></br>}
                    {item.phone}
                  {<br></br>}
                    {item.address}
                  {<br></br>}
                    {item.email}
                  {<br></br>}</td>
                  <td>
                    {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                    {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                    </td>
                    </tr>
                    </table>
                  </div>);
              })}
            </ul>
          </div>
          <div class="right">
              <div class="mittig">{Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <img class="contactpicture_right" src={this.state.contact_to_show[0].image}></img> : <img class="contactpicture_right" src={this.state.contacts[0].image}></img>}</div>
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><h2>{this.state.contact_to_show[0].name}</h2></div> : <div><h2>{this.state.contacts[0].name}</h2></div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><u>Alter:</u><br /> {this.state.contact_to_show[0].age}</div> : <div><u>Alter:</u><br /> {this.state.contacts[0].age}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><u>Telefon:</u><br /> {this.state.contact_to_show[0].phone}</div> : <div><u>Telefon:</u><br /> {this.state.contacts[0].phone}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><u>Email:</u><br /> {this.state.contact_to_show[0].email}</div> : <div><u>Email:</u><br /> {this.state.contacts[0].email}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><u>Adresse:</u><br /> {this.state.contact_to_show[0].address}</div> : <div><u>Adresse:</u><br /> {this.state.contacts[0].address}</div>}
          </div>
      </div>
      </React.Fragment>
      );
    }
    }
  }


//Classe Aufrufn und HTML Element ändern
ReactDOM.render(
 <App />,
 document.getElementById('root')
);
