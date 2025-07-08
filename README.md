# Blogging Platform

A full-featured MERN stack blogging platform that allows users to register, create, edit, and delete blog posts. The platform supports rich text editing, authentication, authorization, and a responsive UI.

## Live
https://imaginative-raindrop-adc973.netlify.app/

## Features

- User authentication (register/login)
- Create, edit, and delete blog posts
- Rich text editor for formatting
- Responsive and mobile-friendly UI
- Dark/light theme support
- Clean and minimalistic design
- Public and private blog handling
- Commenting system (optional/future feature)

## Tech Stack

- React
- Node.js
- Express.js
- MongoDB
- JWT (Authentication)
- Bcrypt (Password hashing)
- Redux Toolkit (State management)
- React Router
- Tailwind CSS
- Toast notifications

## Folder Structure

client/<br>
├── public/<br>
├── src/<br>
│ ├── components/<br>
│ ├── pages/<br>
│ ├── redux/<br>
│ ├── App.jsx<br>
│ └── main.jsx<br><br><br>
server/<br>
├── controllers/<br>
├── models/<br>
├── routes/<br>
├── middleware/<br>
└── index.js<br>


## Installation

1. **Clone the repository**

```bash
git clone https://github.com/nist-kishan/React_Blog.git
cd React_Blog

cd client
npm install

cd ../server
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm run dev

Open in browser: http://localhost:5173```
