import express from 'express';
import cors from 'cors';
import MongoDBConnection from './MongoConnect.js';
import carRouter from './routes/car.js';
import CategoryRouter from './routes/Categories.js';
import AuthRoutes from './routes/userAuth.js';


const db = MongoDBConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/car', carRouter);
app.use('/category', CategoryRouter);
app.use('/auth', AuthRoutes);


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Connected to MongoDB');
});

