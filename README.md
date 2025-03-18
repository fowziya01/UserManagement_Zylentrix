# User Management API
This  is a simple RESTful API built using **Node.js, Express and MongoDB** for managing users.

## Features
- Create new user
- Retrieve all users
- Retrieve a single user by ID
- Update user details
- Delete a user 

### **Setup Instructions**

### **1. Clone the repository**
```sh 
git clone https://github.com/fowziya01/UserManagement_Zylentrix.git

###  **2. Install dependencies**

npm install


###  **3. Environment Variables**

PORT = 6060

MONGO_URL="mongodb://127.0.0.1:27017/UserZyln?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8"

### ** 4. Start server**

npm start

By default,the API  runs on http://localhost:6060



API Endpoints

1.Create a User

Method: POST

URL:/api/create

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
