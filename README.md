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

Note: In any respond of the api call, it may return multiple things as json object to debug the api call in case of error, so consider only the necessary properties of the responded json and ignore rest of the properties as needed. But in all the scenarios, respond will definitely have the status code.

Notation:

• At the end of URL, any text preceding after a colon is the parameter.

e.g. In case of following URL: http://localhost:3000/api/students/:rollNo

Resulting URL will be: http://localhost:3000/api/students/d18cs215

• If any JSON example contains property name inside square bracket [], then that property is a array value.

**Instruction** : To create the Json Web Token (JWT) for user login password, the server has to provide a local password to create the JWT, and as a best practice of coding one should not hardcode any password, so you have to give the password as environment variable. On windows machine follow the given instructions:

• Open Command Prompt and type the following command

• **setx neristGatePass\_jwtPrivateKey yourPassword**

• Restart the Command Prompt

On Linux machine:

• Open Terminal and type the following command

• **export neristGatePass\_jwtPrivateKey=yourPassword**

• Restart the Terminal

After that, follow the below instruction to run the server:

• Open Command Prompt/Terminal and run

• **mongod**

• Open separate Command Prompt/Terminal and navigate to project Dir and run • **node index.js**

**1. http://localhost:3000/api/users**

This endpoint is use to get the current user of the system and also to sign up into the database (e.g. the Guard will be a user).

**GET** :

Use : To get the current user name and email-Id

URL : http://localhost:3000/api/users/me

Respond : JSON object.

JSON properties: { &quot;name&quot;, &quot;email&quot; }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To register the user in the database

URL : http://localhost:3000/api/users

Input Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;email&quot;, &quot;password&quot; }

Respond : status code and the token as json format.

Token structure: { &quot;x-auth-token&quot; }

Authentication : Not required

Authorization : Not required

Note : The responded token has to be saved in the client side for future api call, whenever the user have to call api for writing into the DB

then this api has to be send along with the payload as Header and

the structure of the header name is given above as token.

**2. http://localhost:3000/api/auth**

This endpoint is use to login as the user to read or write into the DB (e.g. the Guard will be a user).

**POST** :

Use : To Login the user (e.g. user could be Guard)

URL : http://localhost:3000/api/auth

Input Payload : JSON object

JSON properties: { &quot;email&quot;, &quot;password&quot; }

Respond : status code and the token as json format.

Token property: { &quot;x-auth-token&quot; }

Authentication : Not required

Authorization : Not required

Note : The responded token has to be saved in the client side for future api call, whenever the user have to call api for writing into the DB

then this api has to be send along with the payload as Header and

the structure of the header name is given above as token.

**3. http://localhost:3000/api/faculties**

This endpoint is use to read/write faculty member info in the DB.

**GET** :

Use : To get all faculty detail

URL : http://localhost:3000/api/faculties

Respond : JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual faculty detail

URL : http://localhost:3000/api/faculties/:phone

Respond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add new faculty member in the DB

URL : http://localhost:3000/api/faculties

Input Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Respond : statuscode

Authentication : Not Required

Authorization : Not Required

**PUT** :

Use : To update faculty member in the DB

URL : http://localhost:3000/api/faculties/:phoneInput Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**DELETE** :

Use : To delete faculty member from the DB URL : http://localhost:3000/api/faculties/:phoneInput Payload : None

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**4. http://localhost:3000/api/staffs**

This endpoint is use to read/write staff member info in the DB. **GET** :

Use : To get all staff detail

URL : http://localhost:3000/api/staffs

Respond : JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual staff detail

URL : http://localhost:3000/api/staffs/:phoneRespond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add new staff member in the DB URL : http://localhost:3000/api/staffsInput Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Respond : statuscode

Authentication : Not Required

Authorization : Not Required

**PUT** :

Use : To update staff member in the DB URL : http://localhost:3000/api/staffs/:phoneInput Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;phone&quot; }

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**DELETE** :

Use : To delete staff member from the DB URL : http://localhost:3000/api/staffs/:phoneInput Payload : None

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**5. http://localhost:3000/api/students**

This endpoint is use to read/write student info in the DB.

**GET** :

Use : To get all students detail

URL : http://localhost:3000/api/students

Respond : JSON object.

JSON properties: { &quot;name&quot;, &quot;rollNo&quot;, &quot;regNo&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual student detail

URL : http://localhost:3000/api/students/:rollNo

Respond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;rollNo&quot;, &quot;regNo&quot;, &quot;phone&quot; }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add new student in the DB

URL : http://localhost:3000/api/students

Input Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;rollNo&quot;, &quot;regNo&quot;, &quot;phone&quot; }

Respond : statuscode

Authentication : Not Required

Authorization : Not Required

**PUT** :

Use : To update student in the DB

URL : http://localhost:3000/api/students/:rollNo

Input Payload : JSON object

JSON properties: { &quot;name&quot;, &quot;rollNo&quot;, &quot;regNo&quot;, &quot;phone&quot; }

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**DELETE** :

Use : To delete student from the DB

URL : http://localhost:3000/api/students/:rollNo

Input Payload : None

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Required

**6. http://localhost:3000/api/studententry**

This endpoint is use to read/write student in/out info in the DB.

**GET** :

Use : To get all students entry/exit detail

URL : http://localhost:3000/api/studententry

Respond : JSON object.

JSON properties: { [{ &quot;name&quot;, &quot;rollNo&quot;, [&quot;entries&quot;] }] }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual student entry/exit detail

URL : http://localhost:3000/api/studententry/:rollNoRespond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;rollNo&quot;, [&quot;entries&quot;] }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add student entry/exit info in the DB

URL : http://localhost:3000/api/studententry/:rollNo

Input Payload : JSON object

JSON properties: { &quot;date&quot;, &quot;mode&quot;, &quot;gateNo&quot; }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: &quot;in&quot;/&quot;out&quot;

gateNo can be among any of the these number: 1/2/3

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Not Required

**7. http://localhost:3000/api/facultyentry**

This endpoint is use to read/write faculty in/out info in the DB.

**GET** :

Use : To get all faculty member entry/exit detail

URL : http://localhost:3000/api/facultyentry

Respond : JSON object.

JSON properties: { [{ &quot;name&quot;, &quot;phone&quot;, [&quot;entries&quot;] }] }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual faculty member entry/exit detail URL : http://localhost:3000/api/facultyentry/:phone

Respond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot;, [&quot;entries&quot;] }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add faculty entry/exit info in the DB

URL : http://localhost:3000/api/facultyentry/:phone

Input Payload : JSON object

JSON properties: { &quot;date&quot;, &quot;mode&quot;, &quot;gateNo&quot; }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: &quot;in&quot;/&quot;out&quot;

gateNo can be among any of the these number: 1/2/3

Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Not Required

**8. http://localhost:3000/api/staffentry**

This endpoint is use to read/write staff member in/out info in the DB. **GET** :

Use : To get all staff member entry/exit detail

URL : http://localhost:3000/api/staffentry

Respond : JSON object.

JSON properties: { [{ &quot;name&quot;, &quot;phone&quot;, [&quot;entries&quot;] }] }

Authentication : Not required

Authorization : Not required

**GET** :

Use : To get individual staff member entry/exit detail

URL : http://localhost:3000/api/staffentry/:phone

Respond : Status code and JSON object.

JSON properties: { &quot;name&quot;, &quot;phone&quot;, [&quot;entries&quot;] }

Authentication : Not required

Authorization : Not required

**POST** :

Use : To add staff entry/exit info in the DB

URL : http://localhost:3000/api/staffentry/:phoneInput Payload : JSON object

JSON properties: { &quot;date&quot;, &quot;mode&quot;, &quot;gateNo&quot; }

Note: date is not mandatory and can accept ISO format

Mode can be only between these values: &quot;in&quot;/&quot;out&quot;

gateNo can be among any of the these number: 1/2/3 Input Header : Token as key value pair

Token property: { &quot;x-auth-token&quot; }

Respond : statuscode

Authentication : Required

Authorization : Not Required
