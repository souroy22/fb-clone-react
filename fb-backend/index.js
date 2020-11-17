import express from 'express';
const app = express();
const port = 8000;
import home from '../fb-clone/src/App';

app.use('/', home);

app.listen(port, function(err){
    if(err){
        console.log(err, "Error");
    }
    console.log("Server is running on port:", port);
});

