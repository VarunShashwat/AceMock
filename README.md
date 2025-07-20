# 🎯 MockAce — Train Today, Ace Tomorrow

**Ace your interviews with AI!**  
MockAce is a full-stack, AI-powered mock interview platform built using **React**, **Google Gemini AI**, **Firebase**, and **Clerk**. It helps users prepare for interviews through personalized, intelligent sessions and real-time feedback.

## 🚀 Features

- 🔐 **Login & Registration** 
- 🧠 **Custom Interview Creation** — Select your domain, questions, and preferred AI settings
- 🤖 **AI-Powered Feedback** — Get answer analysis and improvement tips via **Google Gemini AI**
- 🔊 **Text-to-Speech Feedback** — Listen to your feedback to understand better
- 🗃️ **Real-Time Database** — Store your progress securely using **Firebase**
- 💎 **Beautiful UI** — Clean and responsive interface designed with **Shadcn/UI**

- ## 🧰 Tech Stack

| Tech            | Purpose                                 |
|-----------------|-----------------------------------------|
| **React**       | Frontend UI framework                   |
| **Firebase**    | Backend + Realtime database             |
| **Google Gemini AI** | AI feedback and analysis         |
| **Clerk**       | Authentication & user session management |
| **Shadcn/UI**   | UI component library                    |
| **TailwindCSS** | Utility-first CSS for styling           |

# 🖼️ Demo

## 📷 Screenshots
| HOME
<img width="1602" height="900" alt="Home" src="https://github.com/user-attachments/assets/386c69b4-9e86-46be-85ed-05e32608bce1" />
<img width="1896" height="892" alt="Screenshot 2025-07-21 005800" src="https://github.com/user-attachments/assets/ba75527b-171e-401a-a0bb-c78d72eaf6ba" />


<img width="1898" height="885" alt="2" src="https://github.com/user-attachments/assets/44335274-8c15-426e-8e05-8a4b92997491" />



| DASHBOARD

<img width="1387" height="743" alt="Dashboard" src="https://github.com/user-attachments/assets/b0bf36dc-7b10-4f81-b67a-2ca6ea0961b9" />

|INTERVIEW PAGE

<img width="860" height="903" alt="Start" src="https://github.com/user-attachments/assets/27719a0e-5bb4-4d5c-ba0b-1924c83ec418" />

|FEEDBACK 

<img width="856" height="917" alt="Feedback" src="https://github.com/user-attachments/assets/ea78b448-1094-4f3f-853a-bbb01f289d4b" />

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/VarunShashwat/mockace.git
cd mockace

pnpm install
```
### 2.Create a .env.local file and include:
```
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_CLERK_SECRET_KEY=your_key
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_id
VITE_GEMINI_API_KEY=your_key
pnpm  run dev
