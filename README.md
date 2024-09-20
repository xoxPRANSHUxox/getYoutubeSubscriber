
# get-youtubesub-subscribers

Get_Youtube_Subscribers

This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

API Endpoints

1. "/ " -> This default route will render the "index.html file" when the app launches. http://localhost:3000/

![Screenshot (426)](https://github.com/user-attachments/assets/86f1e870-2587-41d8-8b2c-ba412ee1a26f)

2. "/subscribers " -> This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers
   ![Screenshot (428)](https://github.com/user-attachments/assets/01cea703-f395-4366-8d3d-cbb9652aa863)
3. "/subscribers/names " -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names
   ![Screenshot (429)](https://github.com/user-attachments/assets/15c99f8c-c320-4876-875b-5d06b190395f)
4. "/subscribers/:id " -> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id
   ![Screenshot (430)](https://github.com/user-attachments/assets/9da668d2-3833-4ba0-b3bd-770bb8294595)

#Application folder Structure

[models/userModel.js] -> Schema for data. 

[index.js] -> To connect and start the server.

[createDatabase.js] -> To create database on MongoDB.

[data.js] -> Data that has to be connnected to a database.

[src/index.html] -> The home page for the application.

#Deployment

Web Deployment : https://getyoutubesubscriber.vercel.app/

#Dependencies
Following dependencie are needed to run this application:

express

mongoose

nodemon
