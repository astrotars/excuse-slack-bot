import 'dotenv/config';
import api from 'api';

api.listen(api.get('port'), (err) => {
    if (err) return console.error(err);
    console.info(`Server is running at port ${api.get('port')}`);
});

process.on('unhandledRejection', (reason) => {
    console.error(`Unhandled Rejection at: \n ${reason.stack || reason}`);
});

process.on('uncaughtException', (err) => {
    console.error(`Caught exception: ${err}`);
});
