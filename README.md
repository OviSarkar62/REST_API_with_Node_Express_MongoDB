# REST API with Node Express MongoDB

REST API with database using Node Express and MongoDB using MVC architecture. Create, find, read, update and delete operations are performed in this project connecting database with the help of MongoDB Atlas and MongoDBCompass.

## Important Command Lines
`npm i express mongoose dotenv nodemon cors body-parser uuid`

`npm start`

## Database Connection
In the server side folder create .env file and put this code inside it.

`DB_URL = mongodb+srv://<user>:<pass>@cluster0.l17quyr.mongodb.net/database`

## API Routes
GET: router.get("/", getAllUsers)

GET: router.get("/:id", getOneUser)

POST: router.post("/", createUser)

PATCH: router.patch("/:id",updateUser)

DELETE: router.delete("/:id",deleteUser)
