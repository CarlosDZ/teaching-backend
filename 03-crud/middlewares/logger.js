import fs from 'fs';
import path from 'path';
// Middleware para loggear peticiones
// Export permite importarlo en otros ficheros

const logger = (req, res, next) => {
    const log_dir = './logs';
    const this_moment = new Date()

    const string = `[${this_moment.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `
    console.log(string);

    const file = path.join(log_dir, this_moment.toISOString().split('T')[0]+".log")
    
    if (!fs.existsSync(log_dir)) {
        fs.mkdirSync(log_dir);
    }


    fs.appendFile(file, 
        string + '\n',
        (error) => {
            if (error) {
                console.log(error);
            }
        }
    );
    next();
}

export default logger;