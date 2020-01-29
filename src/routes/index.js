import express from 'express';
import health from './health';
import excuse from './excuse';

const router = express.Router();
health(router);
excuse(router);

export default router;
