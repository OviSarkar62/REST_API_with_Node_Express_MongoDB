# REST API with Node Express MongoDB

## API Routes
GET: router.get("/", getAllUsers)

GET: router.get("/:id", getOneUser)

POST: router.post("/", createUser)

PATCH: router.patch("/:id",updateUser)

DELETE: router.delete("/:id",deleteUser)

## getAllUsers
     const getAllUsers = async (req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(500).send(error.message);
    }
    };
