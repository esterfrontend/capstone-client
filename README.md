# ACTÚO CONTRA EL BULLYING: 

"Actúo contra el bullying" is a web application that helps schools take action against cases of bullying. Students, teachers or external people can anonymously report an incident. Each school choose a professional, who accompany, study and guide them in all cases. The school and psychologist will be notified bu email when a case is created.

## Deployed Application:

**Built using MERN: Mongo, Express, React and Node.**

1. To install all the dependencies used in the project, run the command:

```
npm install
```

2. Create a .env file in the root folder and add teh folowing environment varibales:
```bash
REACT_APP_GOOGLEMAPS_APIKEY
REACT_APP_GOOGLEMAPS_MAPID
```

3. Run the app:
```
npm start
```


# FRONT Application Routes:

|          URL path          |        Description        |  Protected  |
| :------------------------: | :-----------------------: | :---------: |
|  /                         |  Home                     |     ✅      |
|  /nuevo-caso               |  Create new case          |     ✅      |
|  /colegios                 |  Affiliated schools list  |     ✅      |
|  /psicologos               |  Professionals list       |     ✅      |
|  /inicio-sesion            |  Login                    |     ✅      |
|  /registro                 |  Signup                   |     ✅      |
|  /mi-perfil                |  Profile                  |     ❌      |
|  /mis-casos                |  Cases                    |     ❌      |
|  /mis-casos/:id            |  One case                 |     ❌      |
|  /psicologo-asociado       |  Related professional     |     ❌      |
|  /colegio-asociado         |  Related school           |     ❌      |
