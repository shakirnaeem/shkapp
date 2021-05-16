import Cors from 'cors'
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default async function initMiddleware(req, res) {
    let middleware = Cors({
        methods: ['GET', 'POST', 'OPTIONS'],
    })
    const appCores = (req, res) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })

        return await appCores(req, res);    
}