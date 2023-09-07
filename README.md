# Nailstore3

Introduction : Welcome to the Nail Salon Website! This MERN (MongoDB, Express.js, React.js, Node.js) stack application is designed to help a friend showcase their services, manage appointments, and provide a seamless experience for their clients.
A cool feature of this app is that you are able to see the home page without logging in. In order to login , you have to create an account. Once you do that, you will login and the message " Hello userName" will apprear. The login and signup button will dissapear if loggged in.

What are all these packages  for?
    cors: giving the front/back end permission to talk to each other
    cors = cross-origin request sharing
    dotenv: allow us to access environment variables (the varaibles in .env)
    express: creating a server
    mongoose: connecting to your mongoDB database
    jsonwebtoken: creating JSON web tokens to store in cookies so we can keep a user logged in

Technologies used :React for front end . Express for backend. Mongodb for database. third party -dummy API to generate a list of users in order to test the login and signup page

Unsolved Probelms : None 

Future Enhancements : Need to add more style. Need to add to the servies page.
  Retrieve scheduling data from API. Steps: Create an endpoint for the front end to call data.Call (Ex.square) Api to retrieve availability schedule & busy times. Return scheduling data to the front-end. Get booking link from (ex.Square). Create an endpoint for the front end to call booking link. Return booking link to the front end. 
  Need to create booking app to search availablity 

