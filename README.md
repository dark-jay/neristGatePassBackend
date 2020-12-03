# neristGatePassBackend
Its a Back end system to provide API service to access and modify the database.

## Documentation
**API endpoints**

Total main endpoints:

**1. http://localhost:3000/api/users**

**2. http://localhost:3000/api/auth**

**3. http://localhost:3000/api/faculties**

**4. http://localhost:3000/api/staffs**

**5. http://localhost:3000/api/students**

**6. http://localhost:3000/api/studententry**

**7. http://localhost:3000/api/facultyentry**

**8. http://localhost:3000/api/staffentry**

Note: In any respond of the api call, it may return multiple things as
json object to debug the api call in case of error, so consider only the
necessary properties of the responded json and ignore rest of the
properties as needed. But in all the scenarios, respond will definitely
have the status code.

Notation:

* At the end of URL, any text preceding after a colon is the parameter.
e.g. In case of following URL:
<u>http://localhost:3000/api/students/:rollNo</u>
<br>Resulting URL will be:
<u>http://localhost:3000/api/students/d18cs215</u>

* If any JSON example contains property name inside square bracket \[\],then that property is a array value.

**Instruction**: To create the Json Web Token (JWT) for user login
password, the server has to provide a local password to create the JWT, and as a best practice of coding one should not hardcode any password, so you have to give the password as environment variable. On windows machine follow the given instructions:

* Open Command Prompt and type the following command
* **setx neristGatePass\_jwtPrivateKey yourPassword**
* Restart the Command Prompt

On Linux machine:
* Open Terminal and type the following command
* **export neristGatePass\_jwtPrivateKey=yourPassword**
* Restart the Terminal

After that, follow the below instruction to run the server:

* Open Command Prompt/Terminal and run
* **mongod**
* Open separate Command Prompt/Terminal and navigate to project Dir and run 
* **node index.js**

**1. http://localhost:3000/api/users**
---

This endpoint is use to get the current user of the system and also to
sign up into the database (e.g. the Guard will be a user).

    **GET**:
```code
        Use : To get the current user name and email-Id
        
        URL : <u>http://localhost:3000/api/users/me</u>
        
        Respond : JSON object.
        
        JSON properties: { “name”, “email” }
        
        Authentication : Not required
        
        Authorization : Not required
```

**POST**:

Use : To register the user in the database

URL : <u>http://localhost:3000/api/users</u>

Input Payload : JSON object

JSON properties: { “name”, “email”, “password” }

Respond : <u>status code</u> and the <u>token</u> as json format.

Token structure: { “x-auth-token” }

Authentication : Not required

Authorization : Not required

Note : The responded token has to be saved in the client side for future
api call, whenever the user have to call api for writing into the DB

then this api has to be send along with the payload as <u>Header</u> and

the structure of the header name is given above as token.

**2. http://localhost:3000/api/auth**
---

This endpoint is use to login as the user to read or write into the DB
(e.g. the Guard will be a user).

**POST**:

Use : To Login the user (e.g. user could be Guard)

URL : <u>http://localhost:3000/api/auth</u>

Input Payload : JSON object

JSON properties: { “email”, “password” }

Respond : <u>status code</u> and the <u>token</u> as json format.

Token property: { “x-auth-token” }

Authentication : Not required

Authorization : Not required

Note : The responded token has to be saved in the client side for future
api call, whenever the user have to call api for writing into the DB

then this api has to be send along with the payload as <u>Header</u> and

the structure of the header name is given above as token.

**3. http://localhost:3000/api/faculties**
---

This endpoint is use to read/write faculty member info in the DB.

**GET**:

Use : To get all faculty detail

URL : <u>http://localhost:3000/api/faculties</u>

Respond : JSON object.

JSON properties: { “name”, “phone” }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual faculty detail

URL : <u>http://localhost:3000/api/faculties/:phone</u>

Respond : Status code and JSON object.

JSON properties: { “name”, “phone” }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add new faculty member in the DB

URL : <u>http://localhost:3000/api/faculties</u>

Input Payload : JSON object

JSON properties: { “name”, “phone” }

Respond : status code

Authentication : Not Required

Authorization : Not Required

**PUT**:

Use : To update faculty member in the DB

URL : <u>http://localhost:3000/api/faculties/:phone</u> Input Payload :
JSON object

JSON properties: { “name”, “phone” }

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**DELETE**:

Use : To delete faculty member from the DB URL :
<u>http://localhost:3000/api/faculties/:phone</u> Input Payload : None

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**4. http://localhost:3000/api/staffs**
---

This endpoint is use to read/write staff member info in the DB. **GET**:

Use : To get all staff detail

URL : <u>http://localhost:3000/api/staffs</u>

Respond : JSON object.

JSON properties: { “name”, “phone” }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual staff detail

URL : <u>http://localhost:3000/api/staffs/:phone</u> Respond : Status
code and JSON object.

JSON properties: { “name”, “phone” }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add new staff member in the DB URL :
<u>http://localhost:3000/api/staffs</u> Input Payload : JSON object

JSON properties: { “name”, “phone” }

Respond : status code

Authentication : Not Required

Authorization : Not Required

**PUT**:

Use : To update staff member in the DB URL :
<u>http://localhost:3000/api/staffs/:phone</u> Input Payload : JSON
object

JSON properties: { “name”, “phone” }

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**DELETE**:

Use : To delete staff member from the DB URL :
<u>http://localhost:3000/api/staffs/:phone</u> Input Payload : None

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**5. http://localhost:3000/api/students**
---

This endpoint is use to read/write student info in the DB.

**GET**:

Use : To get all students detail

URL : <u>http://localhost:3000/api/students</u>

Respond : JSON object.

JSON properties: { “name”, “rollNo”, “regNo”, “phone” }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual student detail

URL : <u>http://localhost:3000/api/students/:rollNo</u>

Respond : Status code and JSON object.

JSON properties: { “name”, “rollNo”, “regNo”, “phone” }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add new student in the DB

URL : <u>http://localhost:3000/api/students</u>

Input Payload : JSON object

JSON properties: { “name”, “rollNo”, “regNo”, “phone” }

Respond : status code

Authentication : Not Required

Authorization : Not Required

**PUT**:

Use : To update student in the DB

URL : <u>http://localhost:3000/api/students/:rollNo</u>

Input Payload : JSON object

JSON properties: { “name”, “rollNo”, “regNo”, “phone” }

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**DELETE**:

Use : To delete student from the DB

URL : <u>http://localhost:3000/api/students/:rollNo</u>

Input Payload : None

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Required

**6. http://localhost:3000/api/studententry**
---

This endpoint is use to read/write student in/out info in the DB.

**GET**:

Use : To get all students entry/exit detail

URL : <u>http://localhost:3000/api/studententry</u>

Respond : JSON object.

JSON properties: { \[{ “name”, “rollNo”, \[“entries”\] }\] }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual student entry/exit detail

URL : <u>http://localhost:3000/api/studententry/:rollNo</u> Respond :
Status code and JSON object.

JSON properties: { “name”, “rollNo”, \[“entries”\] }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add student entry/exit info in the DB

URL : <u>http://localhost:3000/api/studententry/:rollNo</u>

Input Payload : JSON object

JSON properties: { “date”, “mode”, “gateNo” }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: “in”/”out”

gateNo can be among any of the these number: 1/2/3

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Not Required

**7. http://localhost:3000/api/facultyentry**
---

This endpoint is use to read/write faculty in/out info in the DB.

**GET**:

Use : To get all faculty member entry/exit detail

URL : <u>http://localhost:3000/api/facultyentry</u>

Respond : JSON object.

JSON properties: { \[{ “name”, “phone”, \[“entries”\] }\] }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual faculty member entry/exit detail URL :
<u>http://localhost:3000/api/facultyentry/:phone</u>

Respond : Status code and JSON object.

JSON properties: { “name”, “phone”, \[“entries”\] }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add faculty entry/exit info in the DB

URL : <u>http://localhost:3000/api/facultyentry/:phone</u>

Input Payload : JSON object

JSON properties: { “date”, “mode”, “gateNo” }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: “in”/”out”

gateNo can be among any of the these number: 1/2/3

Input Header : Token as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Not Required

**8. http://localhost:3000/api/staffentry**

This endpoint is use to read/write staff member in/out info in the DB.
**GET**:

Use : To get all staff member entry/exit detail

URL : <u>http://localhost:3000/api/staffentry</u>

Respond : JSON object.

JSON properties: { \[{ “name”, “phone”, \[“entries”\] }\] }

Authentication : Not required

Authorization : Not required

**GET**:

Use : To get individual staff member entry/exit detail

URL : <u>http://localhost:3000/api/staffentry/:phone</u>

Respond : Status code and JSON object.

JSON properties: { “name”, “phone”, \[“entries”\] }

Authentication : Not required

Authorization : Not required

**POST**:

Use : To add staff entry/exit info in the DB

URL : <u>http://localhost:3000/api/staffentry/:phone</u> Input Payload :
JSON object

JSON properties: { “date”, “mode”, “gateNo” }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: “in”/”out”

gateNo can be among any of the these number: 1/2/3 Input Header : Token
as key value pair

Token property: { “x-auth-token” }

Respond : status code

Authentication : Required

Authorization : Not Required
