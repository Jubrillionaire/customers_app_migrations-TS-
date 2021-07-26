import express, { Express } from 'express';
import routes from './routes';
import cors from 'cors'

 const app: Express = express();

 app.use(cors())



app.use(express.json())

app.use('/api', routes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))