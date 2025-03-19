# User Management API
This is a RESTful API built using **Node.js, Express and MongoDB** for managing users.The API follows a proper MVC(Model-view-controller) pattern, ensuring modularity and maintainability.

## Features
- Create new user
- Retrieve all users
- Retrieve a single user by ID
- Update user details
- Delete a user 

### **Setup Instructions**

1. Clone the repository
```sh 
git clone https://github.com/fowziya01/UserManagement_Zylentrix.git


2. Install dependencies

npm install

3. Environment Variables

PORT = 6060

MONGO_URL="mongodb://127.0.0.1:27017/UserZyln?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8"

4. Start server

npm start

By default,the API  runs on http://localhost:6060

**API Endpoints**
---------------------------------------------------------------------------------------------------------------
METHOD                          ENDPOINT                        DESCRIPTION
---------------------------------------------------------------------------------------------------------------
POST                            /api/create                     Create a new User
GET                             /api/users                      Retrieve All Users
GET                             /api/users/:id                  Retrieve a Single User by ID
PUT                             /api/users/:id                  Update a user by ID
DELETE                          /api/users/:id                  Delete a user by ID
----------------------------------------------------------------------------------------------------------------

**Sample requests/responses**

1.Create a User

Method: POST

URL: http://localhost:6060/api/create

Body:(JSON)

{
    "name":"Bob",
    "email":"bob@gmail.com",
    "age":37
}

Response:

{
    "msg": "User created successfully",
    "user": {
        "name": "Bob",
        "email": "bob@gmail.com",
        "age": 37,
        "_id": "67d9b0eb27ce61e19ea323d7",
        "__v": 0 }
}

2.Retrieve All Users – Returns a list of users.

Method: GET

URL: http://localhost:6060/api/users

Response:

{
    "msg": "All users list",
    "users": [
        {
            "_id": "67d9904927ce61e19ea323d3",
            "name": "Fowzi",
            "email": "fowzy123@gmail.com",
            "age": 32,
            "__v": 0
        },
        {
            "_id": "67d9b0cb27ce61e19ea323d5",
            "name": "Alice",
            "email": "alice@gmail.com",
            "age": 28,
            "__v": 0
        },
        {
            "_id": "67d9b0eb27ce61e19ea323d7",
            "name": "Bob",
            "email": "bob@gmail.com",
            "age": 37,
            "__v": 0
        },
        {
            "_id": "67daa0e2910e38666c574fbb",
            "name": "Charlie",
            "email": "charlie@gmail.com",
            "age": 40,
            "__v": 0
        }
    ]
}

3. Retrieve a Single User – Fetches a user by ID.

Method: GET

URL: http://localhost:6060/api/users/67d9904927ce61e19ea323d3

Response:

{
    "_id": "67d9904927ce61e19ea323d3",
    "name": "Fowzi",
    "email": "fowzy123@gmail.com",
    "age": 32,
    "__v": 0
}

4.Update a User – Updates user details using an ID. 

Method: PUT

URL: http://localhost:6060/api/users/67d9904927ce61e19ea323d3

Body:(JSON)
{
    "name":"Fowziya Begam"
}

Response:
{
    "msg": "User updated",
    "updatedUser": {
        "_id": "67d9904927ce61e19ea323d3",
        "name": "Fowziya Begam",
        "email": "fowzy123@gmail.com",
        "age": 32,
        "__v": 0 }
}


5. Delete a User – Removes a user from the database using an ID.

Method: DELETE

URL: http://localhost:6060/api/users/67d9b0eb27ce61e19ea323d7

Response:
{
    "msg": "User deleted",
    "deletedUser": {
        "_id": "67d9b0eb27ce61e19ea323d7",
        "name": "Bob",
        "email": "bob@gmail.com",
        "age": 37,
        "__v": 0}
    }

***Error Handling***

Invalid input (POST with missing fields):

{
    "email":"hello@gmail.com",
    "age":40
}

response:
{
    "msg": "All fields are required"
}


User not found(GET/PUT/DELETE with invalid Id) show error message in fetching, updating and deleting users.


{
    "msg": "Error in deleting user",
    "error": {
        "stringValue": "\"67d9b0eb27ce61e19ea323\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "67d9b0eb27ce61e19ea323",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"67d9b0eb27ce61e19ea323\" (type string) at path \"_id\" for model \"User\""}
}

if user already deleted

{
    "msg": "User not found"
}


## **Technologies Used**
Node.js
Express.js
MongoDB
Mongoose

## **Future Improvements**
Add bcrypt for password hashing and security
Add JWT authentication
Add testing with jest

Author
Fowziya Begam
Project Repository:
GitHub:

