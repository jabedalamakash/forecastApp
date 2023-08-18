/** @type {import('next').NextConfig} */

// require(".env").config();

const nextConfig = {
    reactStrictMode: true,
    images : {
      domains : ['openweathermap.org']
    }
}


module.exports =nextConfig 


// // https://openweathermap.org/
// reactStrictMode: true,
// images : {
//   domains : ['media.geeksforgeeks.org']
// }