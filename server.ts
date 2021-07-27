import express, { Express } from 'express';
import routes from './routes';
import cors from 'cors'
import swaggerUi  from 'swagger-ui-express';
import swaggerDocument  from './swagger.json';

 const app: Express = express();

 app.use(cors())

 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())

app.use('/api', routes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))