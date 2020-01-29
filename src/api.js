import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import enforce from 'express-sslify';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';

const api = express();
api.set('port', process.env.PORT || 8080);
api.enable('trust proxy');
api.use(helmet());

if (process.env.NODE_ENV === 'production') {
    api.use(enforce.HTTPS({ trustProtoHeader: true }));
}

api.use(cors({ maxAge: 1728000 }));
api.use(compress());
api.use(methodOverride());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.use(routes);
api.use((req, res, next) => (req.route ? next() : next(new Error('Invalid request.'))));

export default api;
