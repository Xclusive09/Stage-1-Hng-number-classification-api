# 📌 Number Classification API

## 🚀 Introduction
The **Number Classification API** is a simple RESTful API that takes a number as input and returns its mathematical properties, such as:
- Prime check
- Perfect number check
- Armstrong number check
- Even/Odd classification
- Digit sum
- Fun fact (fetched from the Numbers API)

## 📡 Live Demo
> https://stage-1-hng-number-classification-r1enzp08g.vercel.app/api/classify-number

## 🛠️ Features
✅ Check if a number is **Prime**  
✅ Check if a number is **Perfect**  
✅ Check if a number is **Armstrong**  
✅ Determine if a number is **Even or Odd**  
✅ Calculate **Digit Sum**  
✅ Retrieve a **Fun Fact** about the number  
✅ Supports **CORS** for external client access  

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Xclusive09/Stage-1-Hng-number-classification-api
cd Stage-1-Hng-number-classification-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the root directory and specify the **PORT** (optional):
```
PORT=5000
```

### 4️⃣ Start the Server
```sh
npm start
```

The server will run on `http://localhost:5000` (or the port defined in `.env`).

## 📌 API Endpoint
### **1️⃣ Classify a Number**
#### **Request:**
```http
GET /api/classify-number?number={value}
```
#### **Example:**
```http
GET /api/classify-number?number=371
```

#### **Response:**
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## 🛠 Built With
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Axios** - HTTP client for API requests
- **CORS** - Middleware for cross-origin requests

## 🚀 Deployment
You can deploy this API using services like:
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)
- [Heroku](https://www.heroku.com/)
- [Railway](https://railway.app/)