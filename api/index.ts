import express from "express"
const morgan = require("morgan");

const app = express();
const list: string[] = [];
const PORT: number = 3001;

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.post("/", (req,res)=>{
    console.log(req.body)
    const item:string = req.body.item
    console.log(item)
    list.push(item);
    res.status(200).send("all good");
})

app.get("/", (req, res)=>{
    res.status(200).json(list);
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})