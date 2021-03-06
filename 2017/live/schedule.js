//Location can be: “Field”, “Uni”, “Other”
//Days can be: “fri”, “sat”, “sun”
//start can be: [TIME][PERIOD]  ie “12:00AM”, “12:45PM”
//duration is duration in hours. ie 1 hour would be “1:00”

var schedule = [
{

// food

  title: "Dinner",
  caption: "",
  time: {day: "fri", start: "7:00PM", duration: "2:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

// {
//   title: "Soylent!",
//   caption: "",
//   time: {day: "fri", start: "11:30PM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Main timeline",
// },

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sat", start: "2:30AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline",
},

{
  title: "Breakfast",
  caption: "",
  time: {day: "sat", start: "9:00AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sat", start: "1:30PM", duration: "1:30"},
  location: "Chandler",
  event_type: "Main timeline"
},

{
  title: "Dinner",
  caption: "",
  time: {day: "sat", start: "6:00PM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

// {
//   title: "Monster!",
//   caption: "",
//   time: {day: "sat", start: "8:00PM", duration: "2:00"},
//   location: "Chandler",
//   event_type: "Main timeline"
// },

{
  title: "Midnight Snack",
  caption: "",
  time: {day: "sat", start: "11:00PM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline"
},

// {
//   title: "Coffee and Pastries!",
//   caption: "",
//   time: {day: "sun", start: "7:00AM", duration: "4:00"},
//   location: "Red Door Cafe",
//   event_type: "Main timeline"
// },

{
  title: "Breakfast",
  caption: "",
  time: {day: "sun", start: "8:00AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline",
},

{
  title: "Lunch",
  caption: "",
  time: {day: "sun", start: "11:30AM", duration: "1:00"},
  location: "Chandler",
  event_type: "Main timeline",
},

// workshops

// {
//   title: "Using the MEAN Stack For Your Hack",
//   caption: "Microsoft",
//   time: {day: "sat", start: "12:00AM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Workshops"
// },
//
// {
//   title: "Build a Chatbot in 15 Minutes",
//   caption: "Prompt",
//   time: {day: "sat", start: "1:00AM", duration: "0:30"},
//   location: "Winnett",
//   event_type: "Workshops"
// },
//
// {
//   title: "Intro to Game Dev with Unity",
//   caption: "Microsoft",
//   time: {day: "sat", start: "1:30AM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Workshops"
// },
//
// {
//   title: "Venture Capital: From Idea to Startup",
//   caption: "KPCB",
//   time: {day: "sat", start: "3:00PM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Workshops"
// },
//
// {
//   title: "Algorithmic Trading 101 with Quantiacs",
//   caption: "From 0 to system: How to write a trading algorithm",
//   time: {day: "sat", start: "4:30PM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Workshops"
// },
//
// {
//   title: "Join the Mentor Army",
//   caption: "Hacker Fund",
//   time: {day: "sat", start: "7:00PM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "Workshops"
// },

// Events

{
  title: "Registration",
  caption: "",
  time: {day: "fri", start: "7:00PM", duration: "2:00"},
  location: "Winnett",
  event_type: "events"
},

{
  title: "Opening Ceremony",
  caption: "",
  time: {day: "fri", start: "9:30PM", duration: "1:30"},
  location: "Brown Gym",
  event_type: "events",
},

{
  title: "Team-Building Mixer",
  caption: "",
  time: {day: "fri", start: "11:00PM", duration: "1:00"},
  location: "Winnett",
  event_type: "events"
},

{
  title: "Hacking Begins!",
  caption: "",
  time: {day:"fri", start:"11:30PM", duration:"0:30"},
  location: "",
  event_type: "events",
  offset: 1
},

{
  title: "Cold Brew",
  caption: "",
  time: {day:"sat", start:"12:00AM", duration:"2:00"},
  location: "Winnett",
  event_type: "events",
},

{
  title: "5-Hour Energy",
  caption: "",
  time: {day:"sat", start:"7:00PM", duration:"3:00"},
  location: "Winnett",
  event_type: "events",
},

// {
//   title: "Cup Stacking with Swift",
//   caption: "",
//   time: {day:"sat", start:"10:00PM", duration:"1:00"},
//   location: "Winnett",
//   event_type: "events",
// },
//
// {
//   title: "Watermelon Eating Contest",
//   caption: "",
//   time: {day: "sat", start: "12:30PM", duration: "1:00"},
//   location: "Avery Courtyard",
//   event_type: "events"
// },
//
// {
//   title: "Life-size Jenga",
//   caption: "",
//   time: {day: "sat", start: "2:00PM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "events"
// },
//
// {
//   title: "Minesweeper Tournament",
//   caption: "",
//   time: {day: "sat", start: "5:30PM", duration: "1:30"},
//   location: "Winnett",
//   event_type: "events"
// },
//
// {
//   title: "Anime Watching Party",
//   caption: "",
//   time: {day: "sat", start: "8:00PM", duration: "2:00"},
//   location: "Winnett",
//   event_type: "events"
// },
//
// {
//   title: "Powerade Contest?",
//   caption: "",
//   time: {day: "sat", start: "11:15PM", duration: "0:45"},
//   location: "Chandler",
//   event_type: "events"
// },
//
// {
//   title: "Bubble Wraaap *pop*",
//   caption: "",
//   time: {day: "sun", start: "1:00AM", duration: "1:00"},
//   location: "Winnett",
//   event_type: "events"
// },

{
  title: "Project Expo",
  caption: "",
  time: {day: "sun", start: "12:30PM", duration: "2:00"},
  location: "Chandler, Winnett",
  event_type: "events",
},

{
  title: "Closing Ceremony",
  caption: "",
  time: {day: "sun", start: "3:00PM", duration: "1:30"},
  location: "Beckman Auditorium",
  event_type: "events",
},

{
  title: "Buses Leave",
  caption: "",
  time: {day: "sun", start: "4:30PM", duration: "0:30"},
  location: "",
  event_type: "events",
},

]
