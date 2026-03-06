# Alexander Lake Portfolio

A polished, interview-ready portfolio for deployment on Render.

## Stack
- Frontend: React + Vite
- Backend: Node + Express
- Hosting: Render
- Domain: alexlake.xyz

## Deploy
### Frontend (Static Site)
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`

Environment variable:
- `VITE_API_BASE_URL=https://api.alexlake.xyz`

### Backend (Web Service)
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Environment variable:
- `CORS_ORIGIN=https://alexlake.xyz,https://www.alexlake.xyz`
