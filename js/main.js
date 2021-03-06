// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      // isAdmin: false,
      // avatar: null, //"thor.png"
      isLoggedIn: true,
      settings: {}
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

videotitle: "video title goes here",
vidsource: "",
videodescription: "ivdeo descriptopm here",

    showDetails: false
  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data')
    this.getUserData();
  },

  methods: {
    getUserData() {
      // fetch call and get the user from the DBß
    const url = './includes/index.php?getUser=1';

    fetch (url) // get data from the DB
    .then(res => res.json()) // translate JSON from DB to plain object
    .then(data => { //use the plain data object (the user)
      console.log(data); //log it to the console (testing)

      //put our DB data into vue
      this.user.settings = data[0];
    })
    .catch((error) => console.error(error))
    },

    setUserPrefs() {
      // this is the preferences control, hit the API when ready (or use a component)
      console.log('set user prefs here');
    },

    userLogin() {
      // call the login route, and/or load the login component
      console.log('do login / layout on click');

      // this is a ternary statement -> shorthand for if/else
      // the expression evaluates to true or false - 
      // if its true, set the value equal to the left of the colon
      // if its false, set the value equal to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    showMovieDetails({name, vidsource, description}) {
      //console.log('show these details: ', movie);

      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

      // make the movie details show up
      this.showMovieDetails = true;
    }
  }
});
