# REST API with Node Express MongoDB

REST API with database using Node Express and MongoDB using MVC architecture. Create, find, read, update and delete operations are performed in this project connecting database with the help of MongoDB Atlas and MongoDBCompass.

## Important Command Lines
`npm i express mongoose dotenv nodemon cors body-parser uuid`

`npm start`

## API Routes
GET: router.get("/", getAllUsers)

GET: router.get("/:id", getOneUser)

POST: router.post("/", createUser)

PATCH: router.patch("/:id",updateUser)

DELETE: router.delete("/:id",deleteUser)

### getAllUsers
    const getAllUsers = async (req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(500).send(error.message);
    }
    };

### getOneUser
    const getOneUser = async (req, res)=>{
    try{
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch(error) {
        res.status(500).send(error.message);
    }
    };

### createUser
    const createUser = async (req, res)=>{
    try{
        console.log(req.body);
        const newUser = new User({
            id:uuidv4(),
            name: req.body.name,
            age:Number(req.body.age)
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).send(error.message);
    }
    };
    
### updateUser
    const updateUser = async (req, res)=>{
    try{
        const user = await User.findOne({id: req.params.id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).json(user);
    } catch(error){
        res.status(500).send(error.message);
    }
    };
    
### deleteUser
    const deleteUser = async (req, res)=>{
    try{
        await User.deleteOne({id:req.params.id});
        res.status(200).json({message: "User is deleted"});
    } catch (error) {
        res.status(500).send(error.message);
    }
    };
