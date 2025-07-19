# GestureGalaxy

GestureGalaxy is a full-stack web application that uses **hand gesture learning** to enable interactions. Built with **React** (frontend), **Node.js/Express** (backend), and **MongoDB Atlas** (cloud database), it delivers a modern experience for learning and testing gestures.


## Live Preview
[GestureGalaxy](https://gesture-galaxy.vercel.app/signup)


## Features

- Secure backend API with Express
- MongoDB Atlas integration for user data
- Responsive and modern UI using React
- Real-time data flow between frontend and backend


## Technologies Used

### Frontend
- React.js
- React Hooks
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose


## Folder Structure
```
GestureGalaxy/
├── learning-app/                   # Frontend - React app
│   ├── public/                     # Images or Fonts
│   ├── src/
│   │   ├── components/             # Reusable UI components & Route-based pages
│   │   └── App.jsx                 # Main app logic and routing
│   ├── .env                        # API keys & environment variables
│   └── package.json                # React project config
│ 
├── backend/                        # Backend - Node.js + Express
│   ├── controllers/                # Route handlers / logic
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # API endpoints
│   ├── .env                        # MongoDB URI & secrets
│   ├── server.js                   # App entry point
│   └── package.json                # Backend dependencies
│ 
├── README.md                       # Project overview
└── .gitignore
```

Refer to the structure shown above for both `client` and `server` side organization.


## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account

### Clone & Run

```bash
git clone https://github.com/VandanKambodi/GestureGalaxy
cd GestureGalaxy

# Setup Backend
cd backend
npm install
node server.js

# Setup Frontend
cd learning-app
npm install
npm run dev
```

## Future Improvements
- Add gesture training module
- Integrate ML models for gesture prediction
- Improve performance on low-end devices

## Contributing
- Feel free to fork this repo and open a PR!

## License
This project is licensed under the MIT License.

