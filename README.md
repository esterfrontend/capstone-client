# ACTÚO CONTRA EL BULLYING: 

"Actúo contra el bullying" is a web application that helps schools take action against cases of bullying. Students, teachers or external people can anonymously report an incident. The school will be notified, and a professional will be assigned to study and take measures along with the school.

## Deployed Application:

**Built using MERN: Mongo, Express, React and Node.**

To install all the dependencies used in the project, run the command:

```
npm install
```




## Application Routes:

#### State:
✅ Finished  
🔵 Almost finished  
🟠 Working  
❌ To do  

#### Protected:
✅ Public  
❌ Private  


# FRONT Application Routes:

|          URL path          |        Description        |  Protected  |
| :------------------------: | :-----------------------: | :---------: |
|  /                         |  Home                     |     ✅      |
|  /nuevo-caso               |  Create new case          |     ✅      |
|  /colegios                 |  Affiliated schools       |     ✅      |
|  /colegios/:id             |  One school               |     ✅      |
|  /profesionales            |  Professionals            |     ✅      |
|  /profesionales/:id        |  One professional         |     ✅      |
|  /inicio-sesion            |  Login                    |     ❌      |
|  /registro                 |  Signup                   |     ❌      |
|  /mi-perfil                |  Profile                  |     ❌      |
|  /mis-casos                |  Cases                    |     ❌      |
|  /mis-casos/:id            |  One case                 |     ❌      |
|  /como-funciona            |  How it works (optional)  |     ✅      |


# API Routes

### Cases
| URL path                   | HTTP Method     | Response              | Action                  |
| :------------------------: | :-------------: | :-------------------: | :---------------------: | 
| /api/cases                 | GET             | [cases]               |  Get cases related to one school or professional  |
| /api/cases/getOne/:id      | GET             | {case}                |  Get one case           |
| /api/cases/create          | POST            | {createdCase}         |  Create a new case      |
  
  
### Schools  
| URL path                   | HTTP Method     | Response              | Action                  |
| :------------------------: | :-------------: | :-------------------: | :---------------------: | 
| /api/schools               | GET             | [schools]             |  Get all schools        |
| /api/schools/getOne/:id    | GET             | {school}              |  Get one school         |
  

### Professionals  
| URL path                   | HTTP Method     | Response              | Action                  |
| :------------------------: | :-------------: | :-------------------: | :---------------------: |
| /api/professionals         | GET             | [professionals]       |  Get all professionals  |
| /api/professionals/getOne/:id| GET           | {professional}        |  Get one professional   |


## Auth routes
| URL path                   | HTTP Method     | Response              | Action                  |
| :-------------------------:| :-------------: | :--------------------:| :----------------------:|
| /api/auth/getLoggedUser    | GET             | {loggedUser}          | Get Logged User         |
| /api/auth/signup           | POST            | {createdUser}         | Create a new user       |
| /api/auth/login            | POST            | {authToken}           | Log user in             |