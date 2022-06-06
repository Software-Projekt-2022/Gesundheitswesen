import express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import expertRoutes from './routes/expert.js'
import categoryRoutes from './routes/category.js'


const app = express();


app.use(bodyParser.json( { limit: "30mb", extended: true } ));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true } ));
app.use(cors());


app.use('/expert', expertRoutes)
app.use('/category', categoryRoutes)

/**
 * Hardcoded external source, will be replaced soon
 */
const CONNECTION_URL = "mongodb+srv://Blue:Blue@cluster0.2z1m4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


const swaggerDocument = YAML.load('./swagger-cc.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//mongoose.set('useFindAndModify', false);