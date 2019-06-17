var contactsArray = [
{
  name: 'Mary Margaret Blanchard',
  phone: '555-1234',
  email: 'snowwhite@ouatmail.com',
  address: '945 N. Storybrook Ln',
  image: 'http://assets.wornon.tv/uploads/2012/03/s01e05-marys-brown-coat-over-teal-skirt-yellow-flatsb.jpg',
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
  image: 'http://happynicetimepeoplecom.c.presscdn.com/wp-content/uploads/2014/09/Boardwalk-Empire-maybe.jpg',
  isActive: false }];



var ContactList = React.createClass({ displayName: "ContactList",
  getInitialState: function () {
    return {
      person: contactsArray[0] };

  },
  handleClick: function (contact) {
    this.setState({ person: contact });
  },
  newContact: function () {
    console.log('Hey ich habe geklickt');
    contactsArray[0].name = 'Sven Krumbeck';
  },
  render: function () {
    return (
      React.createElement("div", { className: "app" },
      React.createElement("div", { className: "left" },
      React.createElement("h2", null, "Contacts"),
      React.createElement("button", { className: "newContact",  onClick: this.newContact.bind()}, "newContact"),
      React.createElement("div", { className: "contacts-container" },
      contactsArray.map(function (c) {
        console.log(c);
        var imageStyles = {
          backgroundImage: 'url(' + c.image + ')' };

        var contactStyles = {
          backgroundColor: c === this.state.person ? '#46733E' : '' };

        return (
          React.createElement("div", { className: "contact", onClick: this.handleClick.bind(this, c), style: contactStyles },
          React.createElement("span", { className: "image", style: imageStyles }),
          React.createElement("span", { className: "name" }, c.name)));


      }, this))),


      React.createElement("div", { className: "right" },
      React.createElement(ContactInfo, { person: this.state.person }))));



  } });


var ContactInfo = React.createClass({ displayName: "ContactInfo",
  render: function () {
    var styles = {
      backgroundImage: 'url(' + this.props.person.image + ')' };

    return (
      React.createElement("div", { className: "contact-info" },
      React.createElement("header", null,
      React.createElement("div", { className: "image", style: styles }),
      React.createElement("h3", { className: "name" }, this.props.person.name)),

      React.createElement("section", null,
      React.createElement("p", { className: "phone" }, "Phone: ", this.props.person.phone),
      React.createElement("p", { className: "email" }, "Email: ", this.props.person.email),
      React.createElement("p", { className: "address" }, "Address: ", this.props.person.address))));



  } });


React.render(
React.createElement(ContactList, null),
document.body);
