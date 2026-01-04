# 🧊 The 3D Sudoku Cube

> 🚧 **WORK IN PROGRESS**: This project is currently under active development as part of a Bachelor's Thesis.

**The 3D Sudoku Cube** is a full-stack, browser-based 3D logic puzzle game inspired by Sudoku but applied to a cubic topology. It challenges players to solve a 3x3x3 cube where every face, edge, and corner must satisfy strict graph theory constraints simultaneously.

## 📖 Overview

The project demonstrates advanced full-stack engineering, combining high-performance 3D rendering in the browser with a robust C# backend for algorithmic generation and state management.

Unlike standard Sudoku, this puzzle introduces spatial dependencies:
1.  **Faces:** Adhere to standard Sudoku rules (1-9 unique).
2.  **Vertices & Edges:** Adhere to specific summation constraints.

## 🧩 Game Rules

To solve the cube, the player must fill the empty cells with numbers **1-9** following these rules:

* **The Face Rule (Sudoku):** Each of the 6 faces must contain unique numbers from 1 to 9.
* **The Edge Rule:** Any pair of cells meeting at an **Edge** (cross) must sum to **12**.
* **The Corner Rule:** The triplet of cells meeting at a **Corner** (vertex) must sum to **12**.
* **Global Consistency:** All rules must apply simultaneously across the entire 3D structure.

## 🏗️ Tech Stack

### Frontend (Client-Side)
* **Language:** TypeScript
* **Framework:** React
* **3D Engine:** Three.js via **React Three Fiber (R3F)**
* **State Management:** React Context & LocalStorage
* **Hosting:** Vercel

### Backend (Server-Side)
* **Language:** C#
* **Framework:** ASP.NET Core 8 Web API
* **Algorithm:** Custom **Backtracking Algorithm** with "Divide & Conquer" heuristic.
* **Hosting:** Microsoft Azure App Service

### Database & Assets
* **Database:** Azure SQL (Relational Data Model).
* **3D Assets:** **Blender** (Custom models with an Anchor System for dynamic instantiation).

## ⚡ Key Features

* **Procedural Level Generation:** A prioritized backtracking algorithm (C#) generates valid, unique puzzles in milliseconds.
* **Seeded Randomness:** Uses the current server date as a seed, ensuring a unified "Daily Challenge" for all users globally.
* **Interactive 3D Interface:** Fully rotatable cube with raycasting for cell selection and real-time validation feedback.
* **Hybrid Persistence:** Immediate state saving via LocalStorage (for crash recovery) and permanent history tracking via Azure SQL.

## 📐 Architecture

The application follows a **3-Tier Architecture**:

1.  **Presentation Layer (React):** Renders the 3D view and handles user input.
2.  **Logic Layer (.NET API):** Validates game logic, generates daily seeds, and handles authentication.
3.  **Data Layer (Azure SQL):** Stores persistent user data and leaderboards.

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* .NET SDK 8.0
* SQL Server

### Setup
1.  **Backend:** Configure `appsettings.json` with your SQL connection string, run migrations, and start the .NET API.
2.  **Frontend:** Install dependencies (`npm install`) and start the React development server (`npm run dev`).

## 🗺️ Roadmap

- [ ] Finalize Backtracking Algorithm logic.
- [ ] Complete Blender asset integration.
- [ ] Implement API Endpoints (Auth, Score, Seed).
- [ ] Deploy to Azure (Backend) and Vercel (Frontend).


---
*Created by [Your Name]*
