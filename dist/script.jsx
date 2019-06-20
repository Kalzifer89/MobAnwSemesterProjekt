/*/////////////////////////////////////////////
// Kontaktliste - Semesterprojekt - MobAnw   //
// Fachbereich Medien FH-Kiel - 4. Semester  //
// Beschreibung : Charterstellung            //
// Ersteller 1 : Sven Krumbeck | 931087 		 //
// Ersteller 2 : Sven Möller   | 918958 		 //
// Stand : 20.06.2019 						           //
// Version : 0.4							               //
/////////////////////////////////////////////*/

//Status für den aktuellen Bearbeitungsmodus

var contact_new = false;
var contact_edit = false;
var contact_deleted = false;


// Globale Funktion für die Warnhinweise
function message(message)
{
  alert(message);
}


class App extends React.Component {

  // Konstructor erstellen
  constructor(props)
  {
     super(props);

     // ============================================================================================== Beispiel-Array mit Objekten 
     this.state = {
       contacts: [
        {
          name: 'C3PO, Goldenrod',
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
        },

        {
          name: 'Sven Möller',
          age: '33',
          phone: '0151 41902178',
          email: 'sv3n.moeller@gmail.com',
          address: 'Wellingdorf',
          image: './img/avatar/avatar_sven.jpg',
          isActive: false
        },

        {
          name: 'Sven Krumbeck',
          age: '29',
          phone: '0162 2005938',
          email: 'sven.krumbeck@gmail.com',
          address: 'Ravensberg',
          image: 'https://www.piratenfraktion-sh.de/wp-content/uploads/2012/05/sven_krumbeck_piratensh_testcbartjez.com_dsc6991-1.jpg',
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
    /*
    // Test um alle gleichzeitig zu aktualisieren
   updateInputs(event)
   {
    this.setState({ name: document.getElementById("txt_name").value });
    this.setState({ age: document.getElementById("txt_age").value });
    this.setState({ phone: document.getElementById("txt_phone").value });
    this.setState({ email: document.getElementById("txt_email").value });
    this.setState({ address: document.getElementById("txt_address").value });
    this.setState({ image: document.getElementById("txt_image").value });
   }*/

    // ============================================================================================== StateController für die Überwachung der Eingabfelder
    updateName(event)
    {
      this.setState({ name: event.target.value });
    }


    updateAge(event)
    {
      this.setState({ age: event.target.value });
    }


    updatePhone(event)
    {
      this.setState({ phone: event.target.value});
    }


    updateMail(event)
    {
      this.setState({ email: event.target.value });
    }


    updateAddress(event)
    {
      this.setState({ address: event.target.value });
    }


    updateImage(event)
    {
      this.setState({ image: event.target.value });
    }


    addKontakt()
    {
      contact_new = true;
      this.setState({contact_new: contact_new});
    }

    // ============================================================================================== StateController - Neuen Kontakt speichern
    saveNewKontakt()
    {
      // Mailadresse für spätere Verarbeitung als String speichern
      var mailaddress = document.getElementById("txt_email").value.toString();

      // Handling der Fehlernachrichten, prüfen, ob jeweils ein Inhalt in den Textfeldern steht
      if(document.getElementById("txt_name").value === '' || document.getElementById("txt_name").value === ' ')
      {
        message("Bitte einen Namen eingeben");
        return;
      }
      else if(document.getElementById("txt_age").value === '' || document.getElementById("txt_age").value === ' ')
      {
        message("Bitte ein Alter angeben");
        return;
      }
      else if(document.getElementById("txt_phone").value === '' || document.getElementById("txt_phone").value === ' ')
      {
        message("Bitte eine Telefonnummer angeben");
        return;
      }
      else if(document.getElementById("txt_email").value === '' || document.getElementById("txt_email").value === ' ')
      {
        message("Bitte die Emailadresse eingeben");
        return;
      }
      else if (mailaddress.search("@") === -1 || mailaddress.search(".") === -1) // Nachsehen ob eine potenziell korrekte Mailadresse eingegeben wurde
      {
        message("Bitte eine Korrekte Mailadresse eingeben");
        return;
      }
      else if(document.getElementById("txt_address").value === '' || document.getElementById("txt_address").value === ' ')
      {
        message("Bitte einen Adresse eingeben");
        return;
      }
      else
      {
        // Prüfen ob eine Bildadresse angegeben worden ist, wenn nicht, nutze ein Platzhalter-Bild
        if (document.getElementById("txt_image").value === '' || document.getElementById("txt_image").value === ' ' || document.getElementById("txt_image").length < 1 )
        {
          var contactimage = 'https://www.firstvolunteerinsurance.com/wp-content/uploads/2018/01/Employee-Placeholder-Image.jpg';
        }
        else
        {
          var contactimage = this.state.image;
        }

          var newContacts = this.state.contacts.concat({name: this.state.name, age: this.state.age, phone: this.state.phone, email: this.state.email, address: this.state.address, image: contactimage, isActive: this.state.isActive});

          //Kontaktliste erneuern und über Änderungen benachrichtigen
          this.setState({contacts: newContacts});
          contact_new = false;
          message("Neuer Kontakt "+ this.state.name + " erfolgreich erstellt");
      }
    }

    // ============================================================================================== StateController - Kontakt bearbeiten
    saveKontakt(email)
    {
      // Mailadresse für spätere Verarbeitung als String speichern
      var mailaddress = document.getElementById("txt_email").value.toString();

      // Handling der Fehlernachrichten: Prüfen, ob jeweils ein Inhalt in den Textfeldern steht
      if(document.getElementById("txt_name").value === '' || document.getElementById("txt_name").value === ' ')
      {
        message("Bitte einen Namen eingeben");
        return;
      }
      else if(document.getElementById("txt_age").value === '' || document.getElementById("txt_age").value === ' ')
      {
        message("Bitte ein Alter angeben");
        return;
      }
      else if(document.getElementById("txt_phone").value === '' || document.getElementById("txt_phone").value === ' ')
      {
        message("Bitte eine Telefonnummer angeben");
        return;
      }
      else if(document.getElementById("txt_email").value === '' || document.getElementById("txt_email").value === ' ')
      {
        message("Bitte die Emailadresse eingeben");
        return;
      }
      else if (mailaddress.search("@") === -1 || mailaddress.search(".") === -1) // Nachsehen ob eine potenziell korrekte Mailadresse eingegeben wurde
      {
        message("Bitte eine Korrekte Mailadresse eingeben");
        return;
      }
      else if(document.getElementById("txt_address").value === '' || document.getElementById("txt_address").value === ' ')
      {
        message("Bitte einen Adresse eingeben");
        return;
      }
      else
      {
        // Prüfen ob eine Bildadresse angegeben worden ist, wenn nicht, nutze ein Platzhalter-Bild
        if (document.getElementById("txt_image").value === '' || document.getElementById("txt_image").value === ' ' || document.getElementById("txt_image").length < 1 )
        {
          var contactimage = 'https://www.firstvolunteerinsurance.com/wp-content/uploads/2018/01/Employee-Placeholder-Image.jpg';
        }
        else
        {
          var contactimage = document.getElementById("txt_image").value;
        }

        // Die ID des aktuell gewählten Kontakts suchen
        var contact_to_save_id = this.state.contacts.findIndex(value => value.email === email);
        // Den aktuell zum Bearbeiten ausgewählten Kontakt in einer variable speichern
        var contact_to_save = this.state.contacts[contact_to_save_id];

        // Die einzelnen Einabefelder auslesen und in das Objekt im Kontaktarray speichern
        contact_to_save.name = document.getElementById("txt_name").value;
        contact_to_save.age = document.getElementById("txt_age").value;
        contact_to_save.phone = document.getElementById("txt_phone").value;
        contact_to_save.email = document.getElementById("txt_email").value;
        contact_to_save.address = document.getElementById("txt_address").value;
        contact_to_save.image = contactimage;

        // Die aktualisierten Daten dem ausgewählten Objekt zuweisen
        const contact_to_update = Object.assign({}, this.state.contacts[contact_to_save_id]);

        // Nur in dem ausgewählten Kontakt die Daten aktualisieren
        this.setState({contacts:[
          this.state.contacts.slice(0, contact_to_save_id),
          contact_to_update,
          this.state.contacts.slice(contact_to_save_id + 1)
        ]});

        // Die Kontaktliste aktualisieren
        this.setState({contacts: this.state.contacts});
        contact_edit = false;
        message("Kontakt erfolgreich bearbeitet");
      }
    }


    // ============================================================================================== StateController - Button: Kontakt bearbeiten
    editKontakt(email)
    {
      contact_edit = true;
      this.setState({contact_edit: contact_edit});
      var choosenContact = this.state.contacts.filter(value => value.email == email);
      this.setState({contact_to_edit: choosenContact});
    }


    // ============================================================================================== StateController - Button: Kontakt löschen
    delKontakt(email)
    {
      var contacts_not_to_delete = this.state.contacts.filter(value => value.email != email);
      var contact_to_delete = this.state.contacts.filter(value => value.email === email);
      message(contact_to_delete[0].name + " wurde erfolgreich gelöscht.")
      this.setState({contacts: contacts_not_to_delete});
      contact_deleted = true;
    }


    // ============================================================================================== StateController - Button: Ausgewählten Kontakt anzeigen
    showKontakt(email)
    {
      var choosenContact = this.state.contacts.filter(value => value.email == email);
      this.setState({contact_to_show: choosenContact});
    }


    // ============================================================================================== StateController - Button: Aktion abbrechen (Neuer Kontakt oder Bearbeiten)
    cancel()
    {
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
      <div class="header">
        <img src="./img/header.png" class="headerimage"></img>
      </div>
      <div class="flex-container">
      <div class="left">
        <h1>Kontakte</h1>

        <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>
            {this.state.contacts.map((item, index) => {
              return (
                
                <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                <table>
                  <tr>
                  <td>{<img src={item.image} class="contactpicture"></img>}</td>
                <td class="adress">
                  <span class="contactName">{item.name}({item.age})</span>
                {<br></br>}
                  <span class="contactInfo">
                  {item.email}</span>
                {<br></br>}</td>
                <td>
                  {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                  {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                  </td>
                  </tr>
                  </table>
                </div>);
            })}
          </div>
          
          <div class="right">
            <h2>Neuen Kontakt erstellen</h2>

            <label>Name: <input id = "txt_name" onChange={this.updateName.bind(this)} type="text"/></label>
            {<br></br>}
            <label>Alter: <input id = "txt_age" onChange={this.updateAge.bind(this)} type="number" min="1"/></label>
            {<br></br>}
            <label>Telefon: <input id = "txt_phone" onChange={this.updatePhone.bind(this)} type="text"/></label>
            {<br></br>}
            <label>E-Mail-Adresse: <input id = "txt_email" onChange={this.updateMail.bind(this)} type="email" /></label>
            {<br></br>}
            <label>Adresse: <input id = "txt_address" onChange={this.updateAddress.bind(this)} type="text"/></label>
            {<br></br>}
            <label>Bild: <input id = "txt_image" onChange={this.updateImage.bind(this)} type="text"/></label>
            {<br></br>}

            <button onClick={this.saveNewKontakt.bind(this)} class="buttonSave">Speichern</button>
            <button onClick={this.cancel.bind(this)} class="buttonCancel">Abbrechen</button>
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
      <div class="header">
        <img src="./img/header.png" class="headerimage"></img>
      </div>
      <div class="flex-container">
      <div class="left">
        <h1>Kontakte</h1>

        <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>
            {this.state.contacts.map((item, index) => {
              return (
                <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                <table>
                  <tr>
                  <td>{<img src={item.image} class="contactpicture"></img>}</td>
                <td class="adress">
                  <span class="contactName">{item.name}({item.age})</span>
                {<br></br>}
                  <span class="contactInfo">
                  {item.email}</span>
                {<br></br>}</td>
                <td>
                  {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                  {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                  </td>
                  </tr>
                  </table>
                </div>);
            })}
          </div>
        <div class="right">
          <h2>Kontakt bearbeiten</h2>

          <label>Name: <input id = "txt_name" onChange={this.updateName.bind(this)} type="text" defaultValue={this.state.contact_to_edit[0].name}/></label>
          {<br></br>}
          <label>Alter: <input id = "txt_age" onChange={this.updateAge.bind(this)} type="number" min="1" defaultValue={this.state.contact_to_edit[0].age}/></label>
          {<br></br>}
          <label>Telefon: <input id = "txt_phone" onChange={this.updatePhone.bind(this)} type="text" defaultValue={this.state.contact_to_edit[0].phone}/></label>
          {<br></br>}
          <label>E-Mail-Adresse: <input id = "txt_email" onChange={this.updateMail.bind(this)} type="email"  defaultValue={this.state.contact_to_edit[0].email}/></label>
          {<br></br>}
          <label>Adresse: <input id = "txt_address" onChange={this.updateAddress.bind(this)} type="text" defaultValue={this.state.contact_to_edit[0].address}/></label>
          {<br></br>}
          <label>Bild: <input id = "txt_image" onChange={this.updateImage.bind(this)} type="text" defaultValue={this.state.contact_to_edit[0].image}/></label>
          {<br></br>}

          <button onClick={this.saveKontakt.bind(this, this.state.contact_to_edit[0].email)} class="buttonSave">Speichern</button>
          <button onClick={this.cancel.bind(this)} class="buttonCancel">Abbrechen</button>
          </div>
      </div>
      </React.Fragment>
      );
    }
    else if(contact_deleted == true)
    {
      contact_deleted = false;
      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="header">
        <img src="./img/header.png" class="headerimage"></img>
      </div>
      <div class="flex-container">
      <div class="left">
        <h1>Kontakte</h1>

        <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>
            {this.state.contacts.map((item, index) => {
              return (
                <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact">
                <table>
                  <tr>
                  <td>{<img src={item.image} class="contactpicture"></img>}</td>
                <td class="adress">
                  <span class="contactName">{item.name}({item.age})</span>
                {<br></br>}
                  <span class="contactInfo">
                  {item.email}</span>
                {<br></br>}</td>
                <td>
                  {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                  {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                  </td>
                  </tr>
                  </table>
                </div>);
            })}
          </div>
        <div class="right">
            <h2>Kontakt wurde gelöscht</h2>
          </div>
      </div>
      </React.Fragment>
      );
    }
    else
    {
      // ============================================================================================== Bereich: Kontakte darstellen und rendern
      // Unter div class right wird jeweil das Array geprüft und wenn eines mit Inhalt vorhanden ist ausgegeben,
      // hierbei wird unterschieden, ob ein Kontakt ausgewählt wurde oder einfach die Liste ausgegben werden soll
      return (
        //Fragment Anzeigen um Abzugrenzen
      <React.Fragment>
      <div class="header">
        <img src="./img/header.png" class="headerimage"></img>
      </div>
      <div class="flex-container">
        <div class="left">
          <h1>Kontakte</h1>

          <button onClick={this.addKontakt.bind(this)} class="newContact">Kontakt hinzufügen</button>
              {this.state.contacts.map((item, index) => {
                var contactStyles = {
                  color: item === this.state.contact_to_show ? '#46733E' : ''
                }
                return (
                  <div onClick={this.showKontakt.bind(this, item.email)} key={index} class="contact" style={contactStyles}>
                  <table>
                    <tr>
                    <td>{<img src={item.image} class="contactpicture"></img>}</td>
                  <td class="adress">
                    <span class="contactName">{item.name}({item.age})</span>
                  {<br></br>}
                    <span class="contactInfo">
                    {item.email}</span>
                  {<br></br>}</td>
                  <td>
                    {<button onClick={this.editKontakt.bind(this, item.email)} class="button" ><img src="./img/writing.png"/></button>}
                    {<button onClick={this.delKontakt.bind(this, item.email)} class="button" ><img src="./img/rubbish-bin.png" /></button>}
                    </td>
                    </tr>
                    </table>
                  </div>);
              })}
          </div>
          <div class="right">
              <div class="mittig">{Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <img class="contactpicture_right" src={this.state.contact_to_show[0].image}></img> : <img class="contactpicture_right" src={this.state.contacts[0].image}></img>}</div>
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><h2>{this.state.contact_to_show[0].name}</h2></div> : <div><h2>{this.state.contacts[0].name}</h2></div>}
              <hr />
              <div>Kontaktinformtionen</div>
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><img src="./img/circular-line-with-word-age-in-the-center.png" class="icon"></img> {this.state.contact_to_show[0].age}</div> : <div><img src="./img/circular-line-with-word-age-in-the-center.png" class="icon"></img> {this.state.contacts[0].age}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><img src="./img/phone-receiver.png" class="icon"></img> {this.state.contact_to_show[0].phone}</div> : <div><img src="./img/phone-receiver.png" class="icon"></img>  {this.state.contacts[0].phone}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><img src="./img/close-envelope.png" class="icon"></img> {this.state.contact_to_show[0].email}</div> : <div><img src="./img/close-envelope.png" class="icon"></img> {this.state.contacts[0].email}</div>}
              {Array.isArray(this.state.contact_to_show) && this.state.contact_to_show[0] ? <div><img src="./img/address.png" class="icon"></img> {this.state.contact_to_show[0].address}</div> : <div><img src="./img/address.png" class="icon"></img> {this.state.contacts[0].address}</div>}
          </div>
      </div>
      <div class="bottom">
        made with ♡ by Sven Krumbeck & Sven Möller
      </div>
      </React.Fragment>
      );
    }
    }
  }


//Classe Aufrufen und HTML Element ändern
ReactDOM.render(
 <App />,
 document.getElementById('root')
);
