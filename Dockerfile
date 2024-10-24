FROM node:18-alpine
WORKDIR /app
COPY ./backend ./backend
COPY ./frontend ./frontend
WORKDIR /app/backend
RUN npm install
WORKDIR /app/frontend
RUN npm install
EXPOSE 5000
EXPOSE 3000
CMD ["sh", "-c", "node ../backend/index.js & cd ../frontend && npm run dev"]
