import fs from 'fs'
import path from 'path'

const logFilePath = path.resolve('logs', 'errors.log')

if (!fs.existsSync(path.dirname(logFilePath))) {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true })
}

export const logErrorToFile = (error) => {
    const errorMessage = `
        [${new Date().toISOString()}] - Error: ${error.message}
        Cause: ${error.cause || 'N/A'}
        Stack Trace: ${error.stack || 'N/A'}
    `
    
    fs.appendFile(logFilePath, errorMessage + '\n', (err) => {
        if (err) {
            console.error('Failed to write error to log file:', err)
        }
    })
}
