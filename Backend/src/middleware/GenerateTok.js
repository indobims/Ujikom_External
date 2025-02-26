import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    // Add any other data you want to include in the token payload
  };

  const secretKey = process.env.JWT_SECRET || 'rahasia'; // Menggunakan environment variable JWT_SECRET atau fallback ke 'rahasia'
  const options = {
    expiresIn: '60s', // Set the expiration time of the token
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export default generateToken;
