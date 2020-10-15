# Med Cab API Documentation
This file outlines the endpoints for the Med Cab API Built for Lambda School's Build Week project.
<br/><br>

# Seed Data
### Users:
```json
Users: [
  {
    "id": 1,
    "firstName": "Cheech",
    "lastname": "Marin",
    "username": "pedro",
    "email": "stoner_cheech@hightimes.com",
    "currentCity": "Los Angeles",
    "state_abbreviation": "CA"
  },
  {
    "id": 2,
    "firstName": "Tommy",
    "lastname": "Chong",
    "username": "man",
    "email": "stoner_chong@hightimes.com",
    "currentCity": "Los Angeles",
    "state_abbreviation": "CA"
  },
  {
    "id": 3,
    "firstName": "Calvin",
    "lastname": "Broadus Jr.",
    "username": "snoopdogg420",
    "email": "snoop-dogg@hightimes.com",
    "currentCity": "Long Beach",
    "state_abbreviation": "CA"
  },
  {
    "id": 4,
    "firstName": "Willie",
    "lastname": "Nelson",
    "username": "wnelson",
    "email": "me@willienelson.com",
    "currentCity": "Abott",
    "state_abbreviation": "TX"
  }
]
```
### States:
The endpoint will return an array with a list of states with `name` and `abbreviation`

```json
"States": [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {...}
]
```
<br><br>

---
# **Auth Routes**
| Table     | Method    | Endpoint              | Description                   |
|---        |---        |---                    |---                            |
| `users`   | POST      |`/api/auth/register`   | Register a new user           |
| `users`   | POST      |`/api/auth/login`      | Logs in a registered user     |
<br><br>

# **Register:** `/api//auth/register/`
### **Request Type:** `POST`
### **Request Body:**
| Name                  | Type      | Required          | Description                       |
|---                    |---        |---                |---                                |
|`firstName`            | string    | No                |                                   |
|`lastName`             | string    | No                |                                   |
|`username`             | string    | Yes               |_Must Be Unique_                   |
|`email`                | string    | Yes               |                                   |
|`password`             | string    | Yes               |                                   |
|`currentCity`          | string    | No                |                                   |
|`state_abbreviation`   | string    | Yes               |_2 Letter State Abbreviation_      |
<br>

### **Code Example**:
```json
{
	"firstName": "Seth",
	"lastName":"Rogan",
	"username": "srogan",
	"password": "password",
	"email": "seth@test.com",
	"currentCity": "New York",
	"state_abbreviation": "NY"
}
```

### **Response**
`201:`
>User created successfully. Returns a message as well as the new id, username and email. The User will need to login to the application with the credentials.

`400:`
>Invalid request parameters. You must provide all required fields.

`500:`
>Internal Server Error. This error signifies an issue that you probably can't fix. You wll need to contact the site administrator.
---
<br><br>

# **Login:** `/api/auth/login/`
### **Request Type:** `POST`
### **Request Body:**
| Name                  | Type      | Required          | Description                       |
|---                    |---        |---                |---                                |
| `username`            | string    | Yes               |                                   |
| `password`            | string    | Yes               |                                   |
<br>

### **Code Example**:
```json
{
    "username": "srogan",
    "password": "password"
}
```

### **Response**
`200:`
> User logged in successfully. This returns a message that the user has logged in successfully, the object containing the users information and a JSON Web Token.

`401:`
>Invalid request parameters. You must provide the correct username and password.

`500:`
>Internal Server Error. This error signifies an issue that you probably can't fix. You wll need to contact the site administrator.

<br><br>

----------

# **User Routes**
| Table     | Method    | Endpoint              | Description                       |
|---        |---        |---                    |---                                |
| `users`   | GET       |`/api/users/`          | Returns a list of users           |
| `users`   | PUT       |`/api/users/:id`       | Updates a user with specified ID  |
<br><br>

# **Get a list of users:** `/api/users/`
### **Request Type:** GET
### **Request Headers:**
| Name                  | Type      | Required          | Description                       |
|---                    |---        |---                |---                                |
|`Content-Type`         | string    | Yes               | application/JSON                  |
|`authorization`        | string    | Yes               | JSON Web Token                    |

### **Response**
`200:`
> Returns an array of users

`400:`
> Restricted access. You must provide a valid JWT to retrieve a list of users

`404:`
> No users were found.

`500:`
>Internal Server Error. This error signifies an issue that you probably can't fix. You wll need to contact the site administrator.

<br><br>

# **Update User:** `/api/users/:id`
### **Request Type:** `PUT`
### **Request Headers:**

| Name                  | Type      | Required          | Description                       |
|---                    |---        |---                |---                                |
|`Content-Type`         | string    | Yes               | application/JSON                  |
|`authorization`        | string    | Yes               | JSON Web Token                    |

<br>

### **Request Body:**
The required can be updated but can not be updated to be null. Trying to update a user to be `null` will result in a 400 bad request error. To authenticate a user, the body _must_ include the required fields.
| Name                  | Type      | Required          | Description                       |
|---                    |---        |---                |---                                |
|`username`             | string    | Yes               |                                   |
|`email`                | string    | Yes               |                                   |
|`password`             | string    | Yes               |                                   |
|`state_abbreviation`   | string    | Yes               |_2 Letter State Abbreviation_      |
|`firstName`            | string    | No                |                                   |
|`lastName`             | string    | No                |                                   |
|`currentCity`          | string    | No                |                                   |

<br><br>

### **Code Example**
```json
{
	"username": "srogan", // REQUIRED
	"email": "seth@test.com", // REQUIRED
	"password": "password", // REQUIRED
	"state_abbreviation": "IL", // REQUIRED
	"currentCity": "Chicago"

}
```

### **Response**
`201:`
> The user was updated successfully

`400:`
> Restricted access. You must be logged in and the JSON Web Token must be signed by the current logged in user. If you're looking to update the user with the `id` of 5, that user must be authenticated.

`404:`
> User is not found or you are not authorized to update the user. You can only update the user that matches the user inside of the decoded JWT.

`500:`
>Internal Server Error. This error signifies an issue that you probably can't fix. You wll need to contact the site administrator.

<br><br>

----------

# **State Routes**

| Table     | Method    | Endpoint              | Description                                   |
|---        |---        |---                    |---                                            |
| `states`  | GET       |`/api/states/`         | Returns a list of states with abbreviations   |

### **Response**
`200:`
> Returns a list of states with abbreviations

`500:`
>Internal Server Error. This error signifies an issue that you probably can't fix. You wll need to contact the site administrator.
