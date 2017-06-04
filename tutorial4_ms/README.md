
# tutorial4_ms 6/4/2017

## MongoDB

Document Oriented
  Here is what a Post and User document might look like
- User Document  
```
{
  "ID": 0,
  "username": "sedouard",
  "created_at": "2015:02:14:01:00:00:00"
}
```
- Post Document
```
{
  "ID": 0,
  "created_by": "ObjectID(ref User)",
  "created_at": "2015:02:14:01:00:00:00",
  "created_at": "2015:02:14:01:00:00:00",
  "text": "this is a new chirp"
}
```
MongoDB
- Popular open source Document Oriented Database
- Fully managed on Azure via Mongolab
- Drivers available in virtually every development language
MongoDB Binaries
- The following binaries are installed onto your machine
  - mongod: The database process
  - mongo: The mongodb CLI
  - mongoimport: A data import utility
Mongoose ODM
- Node.js driver: npm install mongodb --save
- Object Data Mapper: npm install mongoose --save
Implementing the User Route Handlers
- Getting the user document for GET requests
- Creating a user document for POST requests






