/*/////////////////////////////////////////////
// Kontaktliste - Semesterprojekt - MobAnw   //
// Fachbereich Medien FH-Kiel - 4. Semester  //
// Beschreibung : Charterstellung            //
// Ersteller 1 : Sven Krumbeck | 931087 		 //
// Ersteller 2 : Sven Möller   | 918958 		 //
// Stand : 17.06.2019 						           //
// Version : 0.1							               //
/////////////////////////////////////////////*/

// ---------------------------------------------------------------------------------------------------- Array mit Kontaktobjekten

var contact_deleted = false;
var contact_make_new = false;
var contact_edit = false;

var contactsArray = [
{
  name: 'Mary Margaret Blanchard',
  phone: '555-1234',
  email: 'snowwhite@ouatmail.com',
  address: '945 N. Storybrook Ln',
  image: 'http://www.starwarshelmets.com/2012/Sideshow_weathered3PO04.jpg',
  isActive: true },

{
  name: 'David Nolan',
  phone: '555-9876',
  email: 'princecharming@ouatmail.com',
  address: '945 N. Storybrook Ln',
  image: 'http://cdn.playbuzz.com/cdn/e6516fc7-27c5-4798-8097-3553691017a2/5cab9b6e-6a4c-4bda-90fe-c8af89826b03.jpg',
  isActive: false },

{
  name: 'Emma Swan',
  phone: '555-2345',
  email: 'thesavior@ouatmail.com',
  address: '693 N. Storybrook Ln',
  image: 'https://a.wattpad.com/cover/4106257-368-k161010.jpg',
  isActive: false },

{
  name: 'Regina Mills',
  phone: '555-6667',
  email: 'evilqueen@ouatmail.com',
  address: '1313 E. Mayor St',
  image: 'https://s-media-cache-ak0.pinimg.com/originals/11/d3/e9/11d3e91be6df715f88d543374c039e1d.jpg',
  isActive: false },

{
  name: 'Mr. Gold',
  phone: '555-4653',
  email: 'rumplestiltskin@ouatmail.com',
  address: '101 N. Main St',
  image: 'https://captainawkwarddotcom.files.wordpress.com/2014/02/darth-vader-original_0.jpg',
  isActive: false }];



// ===================================================================================================== Kontaktliste anzeigen (rechts)
var ContactList = React.createClass({ displayName: "ContactList",
  getInitialState: function () {
    return {
      person: contactsArray[0] };

  },
  handleClick: function (contact) {
    this.setState({ person: contact });
  },
  // ----------------------------------------------------------------- Funktion: Neuen Kontakt erzeugen
  newContact: function () {

    contact_make_new = true;

    contactsArray[0].name = 'Sven Krumbeck';
    this.setState({contactsArray: contactsArray}); // State aktualisieren
    console.log('Neuen Kontakt erstellt');
  },
  // ----------------------------------------------------------------- Funktion: Kontakte bearbeiten
  editContacts: function () {

      contact_edit = !contact_edit;

      //contactsArray[index].name = 'Sven Krumbeck';
      console.log('Kontakte bearbeiten aktiv');
      this.setState({contactsArray: contactsArray}); // State aktualisieren
    },
  // ----------------------------------------------------------------- Funktion: Kontakt löschen
  deleteContact: function (contactName) {
    contact_edit = false;
    let index;
    // Durch das bisherige Array gehen und den übergebenen Namen suchen
    for (let i = 0; i < contactsArray.length; i++) 
    {
      // Wnn der name gefunden wurde den Index auslesen
      if (contactsArray[i].name == contactName) 
      {
        index = i;
        break;
      }
    }
    // Element mit dem gefundenen Index löschen
    contactsArray.splice(index, 1);
    console.log(contactName);
    console.log(contactsArray.length);
    contactsArray[0].isActive = true;
    //this.setState({ person: contactsArray[0] });
    //this.setState({contactsArray: contactsArray});  // State aktualisieren
    
    console.log('Kontakt gelöscht');
    //console.log({ person: contactsArray[0] });
    contact_deleted = true;
  },
  
 // ----------------------------------------------------------------- Elemente darstellen
  render: function () 
  {
    return (
      React.createElement("div", { className: "app" },
      React.createElement("div", { className: "left" },
      React.createElement("h2", null, "Kontakte "),                                                                               // Überschrift für Kontaktliste
      React.createElement("button", { className: "newContact",  onClick: this.newContact.bind()}, "newContact"),                  // Button um neuen Kontakt zu erstellen
      React.createElement("button", { className: "editContacts",  onClick: this.editContacts.bind()}, "editContacts"),            // Button um Kontakte zu bearbeiten
      React.createElement("div", { className: "contacts-container" },
      contactsArray.map(function (c) {
        //console.log(c);
        var imageStyles = {
          backgroundImage: 'url(' + c.image + ')' };

        var contactStyles = {
          backgroundColor: c === this.state.person ? '#46733E' : '' };
        // Ausgewählten Kontakt mitteilen
        return (
          React.createElement
          (
            "div", { className: "contact", onClick: this.handleClick.bind(this, c), style: contactStyles },                       // Mitteilen, welcher Kontakt gewählt wurde
            React.createElement("span", { className: "image", style: imageStyles }),                                              // Kontaktbild in der Liste
            React.createElement("span", { className: "name" }, c.name),                                                           // Name des Kontaktes in der Liste
            React.createElement("button", { className: "deleteContact",  onClick: this.deleteContact.bind(this, c.name)}, "deleteContact")    // Button um den jeweiligen kontakt zu löschen
          ));
      }, this))),

      // Rechte Spalte erzeugen
      React.createElement("div", { className: "right" },
      // Kontaktinformationen darstellen
      React.createElement(ContactInfo, { person: this.state.person }))));
  } 
});

  
// ===================================================================================================== Kontaktinfo anzeigen (rechts)
var ContactInfo = React.createClass({ displayName: "ContactInfo",
      // ----------------------------------------------------------------- Funktion: Kontakt speichern
      saveContact: function (contactName) {

        contact_edit = false;
    
          let index;
          // Durch das bisherige Array gehen und den übergebenen Namen suchen
          for (let i = 0; i < contactsArray.length; i++) 
          {
            // Wenn der name gefunden wurde den Index auslesen
            if (contactsArray[i].name == contactName) 
            {
              index = i;
              break;
            }
          }
          console.log("value of input field : "+this.state.inputfield);
          contactsArray[index].name = this.state.inputfield;
          console.log('Kontakt erfolgreich bearbeitet');
          this.setState({contactsArray: contactsArray}); // State aktualisieren
      },
      // ----------------------------------------------------------------- Funktion: Bearbeiten beenden
      cancelSave: function () {
        contact_edit = false;
        this.setState({contactsArray: contactsArray}); // State aktualisieren
      },
      updateInputValue: function (evt){
        //console.log("input field updated with "+evt.target.value);
        this.state={inputfield: evt.target.value};
      },
  render: function () {
    // Wenn ein Kontakt gelöscht wurde, einen Hinweis anzeigen
    if(  contact_deleted == true)
    {
      contact_deleted = false;
      var styles = {
        backgroundImage: 'url(' + this.props.person.image + ')' };
  
      return (
        // Bestätigung für das Löschen
        React.createElement("h2", null, "Kontakt gelöscht "));
    }
    else if (contact_edit == true)
    {
      var styles = {
        backgroundImage: 'url(' + this.props.person.image + ')' };
  
      return (
        // Oberer Bereich
        React.createElement("div", { className: "contact-info" },
        React.createElement("header", null, "Bearbeiten aktiv",
        React.createElement("div", { className: "image", style: styles })),
  
        // Unterer Bereich
        React.createElement("section", null,
        React.createElement("input", { className: "input_name", placeholder: "Bitte Namen eingeben", value: this.props.person.name, autoFocus: true, onChange: this.updateInputValue.bind(this.props.person.name)}, this.props.person.name),
        React.createElement("input", { className: "input_phone", placeholder: "Bitte Telefonnummer eingeben", value: this.props.person.phone, onChange: this.updateInputValue.bind(this)}, this.props.person.phone),
        React.createElement("input", { className: "input_email", placeholder: "Bitte eine Emailadresse eingeben", value: this.props.person.email, onChange: this.updateInputValue.bind(this)}, this.props.person.email),
        React.createElement("input", { className: "input_address", placeholder: "Adresse eingeben", value: this.props.person.address, onChange: this.updateInputValue.bind(this)}, this.props.person.address),
        React.createElement("input", { className: "input_image", placeholder: "Bildadresse eingeben", value: this.props.person.image, onChange: this.updateInputValue.bind(this)}, this.props.person.image),
        React.createElement("button", { className: "cancelSave",  onClick: this.cancelSave.bind()}, "cancelSave"),
        React.createElement("button", { className: "saveContact",  onClick: this.saveContact.bind(this, this.props.person.name)}, "saveContact"))));
    }
    // Wenn keine Kontakt gelöscht wurde, jedoch ein Kontakt gewählt worden ist, diese Daten anzeigen
    else
    {
      var styles = {
        backgroundImage: 'url(' + this.props.person.image + ')' };
  
      return (
        // Oberer Bereich
        React.createElement("div", { className: "contact-info" },
        React.createElement("header", null,
        React.createElement("div", { className: "image", style: styles }),
        React.createElement("h3", { className: "name" }, this.props.person.name)),
  
        // Unterer Bereich
        React.createElement("section", null,
        React.createElement("p", { className: "phone" }, "Phone: ", this.props.person.phone),
        React.createElement("p", { className: "email" }, "Email: ", this.props.person.email),
        React.createElement("p", { className: "address" }, "Address: ", this.props.person.address))));
    }
  }});

React.render(
React.createElement(ContactList, null),
document.body);

