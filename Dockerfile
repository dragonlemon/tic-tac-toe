# 使用 Node.js 官方映像
FROM node:18-alpine

# 設置工作目錄
WORKDIR /app

# 複製前端和後端代碼
COPY ./backend ./backend
COPY ./frontend ./frontend

# 安裝後端依賴
WORKDIR /app/backend
RUN npm install

# 安裝前端依賴
WORKDIR /app/frontend
RUN npm install

# 開放端口
EXPOSE 5000
EXPOSE 3000

# 開啟後端和前端
CMD ["sh", "-c", "node ../backend/index.js & cd ../frontend && npm run dev"]
