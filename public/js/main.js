import { Loader } from "https://cdn.skypack.dev/@googlemaps/js-api-loader";


// NAV MENU FOR MOBILE DEVICES
// Get nav menu DOM elements
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

// Show Nav Menu
if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

// Hide Nav Menu
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

// HIDE MENU ON CLICK
const navLink = document.querySelectorAll('.nav__link');
const hideMenu = () => {
  // Get all nav link DOM elements
  const navMenu = document.querySelector('#nav-menu');
  // Hides menu when clicking on a nav link.
  navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', hideMenu));

// Get Current year to show on footer
document.querySelector('#current-year').textContent = new Date().getFullYear();

// Character count for the message field in the contact form
// Select the message input and the message remaining element
document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.querySelector('#message');
  const messageRemaining = document.querySelector('#messageRemaining');
  // Change the message remaining element when the message input changes
  messageInput.addEventListener('input', function() {
    const remaining = 800 - this.value.length;
    messageRemaining.textContent = `${remaining} characters remaining`;
  });
});

// Tab based interface for Sign Up and login forms
document.addEventListener('DOMContentLoaded', () => {
  const discountCheck = document.querySelector('#discountCheck');
  const documentUpload = document.querySelector('#documentUpload');

  discountCheck.addEventListener('change', () => {
    documentUpload.classList.toggle('d-none', !discountCheck.checked);
  });
});



// CREATE MAP FOR ROUTES PAGE

const loader = new Loader({
  apiKey: "AIzaSyC8dYe9TWbxOWwDAa6Fl3VHzNb3V9Yfk08",
  version: "weekly"
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");
let map
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: {lat: 38.236640, lng: 21.734574}
  });


// ALTERNATIVE WAY OF MAP INITIATION
// function initMap() {
//   const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: {lat: 38.236640, lng: 21.734574}  // Centering the map
//   });

  // Coordinates for Zone A
  const zoneACoords = [
    {lat: 38.203589, lng: 21.70535},
    {lat: 38.195453, lng: 21.711229},
    {lat: 38.201937, lng: 21.72199},
    {lat: 38.202772, lng: 21.728835},
    {lat: 38.202839, lng: 21.735219},
    {lat: 38.201802, lng: 21.740669},
    {lat: 38.201035, lng: 21.748383},
    {lat: 38.202013, lng: 21.752321},
    {lat: 38.204643, lng: 21.755196},
    {lat: 38.203328, lng: 21.759595},
    {lat: 38.204955, lng: 21.763607},
    {lat: 38.207383, lng: 21.774776},
    {lat: 38.216538, lng: 21.771708},
    {lat: 38.227588, lng: 21.77439},
    {lat: 38.237811, lng: 21.774315},
    {lat: 38.244148, lng: 21.766772},
    {lat: 38.247417, lng: 21.757803},
    {lat: 38.249599, lng: 21.756462},
    {lat: 38.252051, lng: 21.756977},
    {lat: 38.258066, lng: 21.759595},
    {lat: 38.25773, lng: 21.778145},
    {lat: 38.277853, lng: 21.770431},
    {lat: 38.28337, lng: 21.775238},
    {lat: 38.287067, lng: 21.768908},
    {lat: 38.291046, lng: 21.771842},
    {lat: 38.292995, lng: 21.766896},
    {lat: 38.290227, lng: 21.763252},
    {lat: 38.281165, lng: 21.753982},
    {lat: 38.282614, lng: 21.747416},
    {lat: 38.269239, lng: 21.738962},
    {lat: 38.251008, lng: 21.735915},
    {lat: 38.243863, lng: 21.725958},
    {lat: 38.232066, lng: 21.724242},
    {lat: 38.230818, lng: 21.721109},
    {lat: 38.22593, lng: 21.719264},
    {lat: 38.223739, lng: 21.720251},
    {lat: 38.215276, lng: 21.717504},
    {lat: 38.210117, lng: 21.713599},
    {lat: 38.20462, lng: 21.708449},
    {lat: 38.203589, lng: 21.70535}  // Closing the loop
  ];

  // Create polygon for Zone A
  const zoneA = new google.maps.Polygon({
      paths: zoneACoords,
      strokeColor: 'RGB(15,157, 88, 0.8)',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'RGB(15,157, 88)',
      fillOpacity: 0.35
  });

  zoneA.setMap(map);

  // Coordinates for Zone B
  const zoneBCoords = [
    {lat: 38.15568, lng: 21.630396},
    {lat: 38.150415, lng: 21.633229},
    {lat: 38.153655, lng: 21.646189},
    {lat: 38.151799, lng: 21.656746},
    {lat: 38.170594, lng: 21.695971},
    {lat: 38.164959, lng: 21.714081},
    {lat: 38.163812, lng: 21.726441},
    {lat: 38.158244, lng: 21.727642},
    {lat: 38.158143, lng: 21.730604},
    {lat: 38.162058, lng: 21.733264},
    {lat: 38.181221, lng: 21.735968},
    {lat: 38.184088, lng: 21.744766},
    {lat: 38.181963, lng: 21.748928},
    {lat: 38.193567, lng: 21.7803},
    {lat: 38.203516, lng: 21.789183},
    {lat: 38.208473, lng: 21.79193},
    {lat: 38.216296, lng: 21.805662},
    {lat: 38.227658, lng: 21.794762},
    {lat: 38.249467, lng: 21.793518},
    {lat: 38.253275, lng: 21.797466},
    {lat: 38.251522, lng: 21.802272},
    {lat: 38.252534, lng: 21.804504},
    {lat: 38.254758, lng: 21.804761},
    {lat: 38.25715, lng: 21.801122},
    {lat: 38.25961, lng: 21.803997},
    {lat: 38.25897, lng: 21.809619},
    {lat: 38.260554, lng: 21.812065},
    {lat: 38.269382, lng: 21.807559},
    {lat: 38.271808, lng: 21.809962},
    {lat: 38.270056, lng: 21.837385},
    {lat: 38.273964, lng: 21.840947},
    {lat: 38.294883, lng: 21.827643},
    {lat: 38.298386, lng: 21.830218},
    {lat: 38.302293, lng: 21.822408},
    {lat: 38.301484, lng: 21.819489},
    {lat: 38.31812, lng: 21.817086},
    {lat: 38.319332, lng: 21.815369},
    {lat: 38.312328, lng: 21.800092},
    {lat: 38.310846, lng: 21.795542},
    {lat: 38.311857, lng: 21.792066},
    {lat: 38.308658, lng: 21.788032},
    {lat: 38.312665, lng: 21.780093},
    {lat: 38.306267, lng: 21.777518},
    {lat: 38.292995, lng: 21.766896},
    {lat: 38.291046, lng: 21.771842},
    {lat: 38.287067, lng: 21.768908},
    {lat: 38.28337, lng: 21.775238},
    {lat: 38.277853, lng: 21.770431},
    {lat: 38.25773, lng: 21.778145},
    {lat: 38.258066, lng: 21.759595},
    {lat: 38.252051, lng: 21.756977},
    {lat: 38.249599, lng: 21.756462},
    {lat: 38.247417, lng: 21.757803},
    {lat: 38.244148, lng: 21.766772},
    {lat: 38.237811, lng: 21.774315},
    {lat: 38.237811, lng: 21.774315},
    {lat: 38.227588, lng: 21.77439},
    {lat: 38.216538, lng: 21.771708},
    {lat: 38.207383, lng: 21.774776},
    {lat: 38.204955, lng: 21.763607},
    {lat: 38.203328, lng: 21.759595},
    {lat: 38.204643, lng: 21.755196},
    {lat: 38.202013, lng: 21.752321},
    {lat: 38.201035, lng: 21.748383},
    {lat: 38.201802, lng: 21.740669},
    {lat: 38.202839, lng: 21.735219},
    {lat: 38.202772, lng: 21.728835},
    {lat: 38.201937, lng: 21.72199},
    {lat: 38.195453, lng: 21.711229},
    {lat: 38.203589, lng: 21.70535},
    {lat: 38.187023, lng: 21.687739},
    {lat: 38.185741, lng: 21.679843},
    {lat: 38.182233, lng: 21.677354},
    {lat: 38.174946, lng: 21.676839},
    {lat: 38.167794, lng: 21.671689},
    {lat: 38.165567, lng: 21.664651},
    {lat: 38.165499, lng: 21.657956},
    {lat: 38.159426, lng: 21.64903},
    {lat: 38.155916, lng: 21.640618},
     {lat: 38.15568, lng: 21.630396}  // Closing the loop
  ];

  // Create polygon for Zone B
  const zoneB = new google.maps.Polygon({
      paths: zoneBCoords,
      strokeColor: 'RGB(249, 168, 37, 0.8)',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: 'RGB(249, 168, 37)',
      fillOpacity: 0.35
  });

  zoneB.setMap(map);

   // Add event listeners to zones/polygons
  //  Mouseover Events
  // MOUSEOVER & MOUSEOUT events commented out so that deactivateTickets FUNCTION CAN WORK
  //  google.maps.event.addListener(zoneA, 'mouseover', function() {
  //   modifyTicketSection('zone-b', true);
  // });

  // google.maps.event.addListener(zoneA, 'mouseout', function() {
  //   modifyTicketSection('zone-b', false);
  // });
  
// Mouseout events
  // google.maps.event.addListener(zoneB, 'mouseover', function() {
  //   modifyTicketSection('zone-a', true);
  // });

  // google.maps.event.addListener(zoneB, 'mouseout', function() {
  //   modifyTicketSection('zone-a', false);
  // });

// Add click event listeners to zones
google.maps.event.addListener(zoneA, 'click', function() {
  deactivateTickets('A');
  changeZoneOpacity('A', zoneA, zoneB);
});

google.maps.event.addListener(zoneB, 'click', function() {
  deactivateTickets('B');
  changeZoneOpacity('B', zoneA, zoneB);
});
// }
});

// Function to modify ticket sections
// HAD TO COMMENT OUT SO THAT deactivateTickets FUNCTION CAN WORK
// const modifyTicketSection = (zoneClass, isInactive) => {
//   const section = document.querySelector(`.tickets-section.${zoneClass}`);
//   if (isInactive) {
//     section.classList.add('inactive');
//   } else {
//     section.classList.remove('inactive');
//   }
// }

// Function to deactivate ticket sections
const deactivateTickets = zone => {
  const zoneATickets = document.querySelector('.tickets-section.zone-a');
  const zoneBTickets = document.querySelector('.tickets-section.zone-b');
  
  // Using ternary operators for better readability and consistency
  // Check Zone A
  if (zone === 'A') {
    // And toggle zone B status if it's inactive
    zoneBTickets.classList.contains('inactive')
      ? (zoneBTickets.classList.remove('inactive'), zoneATickets.classList.remove('inactive'))
      : (zoneBTickets.classList.add('inactive'), zoneATickets.classList.remove('inactive'));

      // Check Zone B
  } else if (zone === 'B') {
    // And  toggle zone A if it's  inactive
    zoneATickets.classList.contains('inactive')
      ? (zoneATickets.classList.remove('inactive'), zoneBTickets.classList.remove('inactive'))
      : (zoneATickets.classList.add('inactive'), zoneBTickets.classList.remove('inactive'));
  }
}

// Function to change zone opacity on click
const changeZoneOpacity = (zone, zoneA, zoneB) => {
  if (zone === 'A') {
    // Check if zone A is active
    const isActive = zoneA.get('fillOpacity') === 0.8; 
    zoneA.setOptions({ fillOpacity: isActive ? 0.35 : 0.8 });
    //Reset zone B opacity to default
    zoneB.setOptions({ fillOpacity: 0.35 }); 
  } else {
    // Check if zone B is active
    const isActive = zoneB.get('fillOpacity') === 0.8; 
    zoneB.setOptions({ fillOpacity: isActive ? 0.35 : 0.8 });
    //Reset zone A opacity to default
    zoneA.setOptions({ fillOpacity: 0.35 });
  }
};


// Tab based interface for Sign Up and login forms
document.addEventListener('DOMContentLoaded', () => {
  const signupTab = document.getElementById('signup-tab');
  const loginTab = document.getElementById('login-tab');
  const signupPane = document.getElementById('signup');
  const loginPane = document.getElementById('login');
// Add active class to the signup tab and pane by default
  signupTab.classList.add('active');
  signupPane.classList.add('show', 'active');
// Add event listeners to the tabs
  signupTab.addEventListener('click', () => {
      signupTab.classList.add('active');
      signupPane.classList.add('show', 'active');
// Remove active class from the login tab and pane
      loginTab.classList.remove('active');
      loginPane.classList.remove('show', 'active');
  });
// Add event listeners to the tabs
  loginTab.addEventListener('click', () => {
      loginTab.classList.add('active');
      loginPane.classList.add('show', 'active');
// Remove active class from the signup tab and pane
      signupTab.classList.remove('active');
      signupPane.classList.remove('show', 'active');
  });
});
