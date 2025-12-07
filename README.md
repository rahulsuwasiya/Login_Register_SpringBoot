# 🔐 React JS Login & Register with Spring Boot REST API

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/)  
[![Spring Boot](https://img.shields.io/badge/SpringBoot-3.2.0-brightgreen?logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)  
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **full-stack authentication system** built with **React JS** and **Spring Boot**, featuring a **separated business logic layer** so it can be reused for **React Native** apps in the future.

---

## 🚀 Features

- ✅ **User Registration** with validation  
- ✅ **User Login** with proper error handling  
- ✅ **Backend REST API** with Spring Boot  
- ✅ **Reusable Business Logic Layer** in React for future use  
- ✅ **Protected Routes** for authenticated users  
- ✅ **Navigation** between Login and Register pages  
- ✅ **Alert & Error Handling** for user feedback  

---

## ⚙️ Tech Stack

- **Frontend:** React JS, React Router DOM  
- **Backend:** Spring Boot, Spring Security (optional)  
- **Communication:** Fetch / Axios for API calls  
- **Business Logic:** Separated layer in `common/usecases` for reusability  

---
## 🎨 Screenshots / Demo

**Login Page**  
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/ba05647e-03ee-4a47-9db1-7126eacb7e48" />


**Register Page**  
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/a9d8ed2f-029b-4a8a-bb9e-dfab9174723e" />


**Home Screen (Protected)**
<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/402c1cd4-856e-4541-8382-b0adda6cbe54" />

---

## 🛠 Installation

### Backend (Spring Boot)

1. Clone the repository:

```bash
git clone <repo-url>
cd backend

Default API URL: http://localhost:8081/api/auth

---

## 🗂 Project Structure

```text
project-root/
│
├─ backend/                     # Spring Boot backend
│  ├─ src/main/java/com/...      # Controllers, Services, Repositories
│  └─ src/main/resources/        # Application resources
│
├─ common/                       # Independent business logic layer (reusable for React, React Native, etc.)
│  ├─ repositories/
│  │  └─ AuthRepository.js
│  ├─ services/
│  │  └─ apiClient.js
│  └─ usecases/
│     └─ useCases.js
│
├─ frontend/                     # React JS frontend
│  ├─ src/
│  │  ├─ assets/                # Screenshots & images
│  │  │  ├─ login.png
│  │  │  ├─ register.png
│  │  │  └─ home.png
│  │  ├─ screens/
│  │  │  ├─ Login.jsx
│  │  │  ├─ Register.jsx
│  │  │  └─ HomeScreen.jsx
│  │  ├─ App.jsx
│  │  └─ index.jsx
│  └─ package.json
│
└─ README.md




