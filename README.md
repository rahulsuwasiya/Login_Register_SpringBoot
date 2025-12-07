# 🔐 React JS Login & Register with Spring Boot REST API

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/)  
[![Spring Boot](https://img.shields.io/badge/SpringBoot-3.2.0-brightgreen?logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)  
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **full-stack authentication system** built with **React JS** and **Spring Boot**, featuring **separated business logic** so it can be reused for **React Native** apps in the future.

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
│  │  ├─ screens/
│  │  │  ├─ Login.jsx
│  │  │  ├─ Register.jsx
│  │  │  └─ HomeScreen.jsx
│  │  ├─ App.jsx
│  │  └─ index.jsx
│  └─ package.json
│
└─ README.md

---

## 🎨 Screenshots / Demo

**Login Page**  
![Login Page](./screenshots/login.png)

**Register Page**  
![Register Page](./screenshots/register.png)

**Home Screen (Protected)**  
![Home Screen](./screenshots/home.png)

---

## ⚙️ Tech Stack

- **Frontend:** React JS, React Router DOM  
- **Backend:** Spring Boot, Spring Security (optional)  
- **Communication:** Fetch / Axios for API calls  
- **Business Logic:** Separated layer in `common/usecases` for reusability  

---

## 🛠 Installation

### Backend (Spring Boot)

1. Clone the repository:

```bash
git clone <repo-url>
cd backend

Default API URL: http://localhost:8081/api/auth



