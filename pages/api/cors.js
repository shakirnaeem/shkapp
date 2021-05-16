import middleWare from '../../lib/init-middleware'

// Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )

export default async function requestHandler(req, res) {
  // Run cors
  await middleWare(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}