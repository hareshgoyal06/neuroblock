# 🧩 Block-Based BCI Coding Platform

An intuitive **block-based coding platform for Brain-Computer Interfaces (BCIs)** inspired by Scratch.  
This project lowers the barrier to entry for BCI development, allowing anyone—even with minimal technical knowledge—to create real-time BCI applications through a visual, drag-and-drop interface.  

[![Watch the Demo](https://img.youtube.com/vi/j6_oXbUtO08/0.jpg)](https://www.youtube.com/watch?v=j6_oXbUtO08)

---

## 🚀 Overview
Building BCI applications traditionally involves **complex code, steep learning curves, and poor documentation**. Our platform addresses these challenges by making BCI development **accessible, beginner-friendly, and interactive**.  

Users can assemble custom blocks that represent JavaScript functions and workflows, then run their creations with **real-time EEG data**.

---

## ✨ Key Features
- **Block-Based Coding Interface**: Built on [Google Blockly](https://developers.google.com/blockly), providing a drag-and-drop environment where blocks map to functional code.
- **BCI Data Handling**: Real-time transmission of EEG signals between backend and frontend.
- **Flask Backend**: Manages EEG device communication, data processing, and REST API endpoints for the frontend.
- **Beginner-Friendly Prototyping**: Rapidly build, test, and run BCI applications without writing complex code.

---

## 🛠 How It Works
1. **Design Your App**  
   Use drag-and-drop blocks to define the flow of your BCI app.  
   
2. **Real-Time Integration**  
   - EEG data is streamed from the device via [BrainFlow](https://brainflow.org/).  
   - Flask processes this data into features (e.g., Alpha, Beta, Gamma band powers).  
   - Data is sent to the frontend via RESTful APIs.  

3. **Execution**  
   Run your app inside the platform and see EEG data-driven interactions in action.

---

## 🧪 Technologies Used
- **[Google Blockly](https://developers.google.com/blockly)** – Visual programming blocks.  
- **[Flask](https://flask.palletsprojects.com/)** – Lightweight Python backend for real-time APIs.  
- **[BrainFlow](https://brainflow.org/)** – EEG data collection & processing (supports devices like the Ganglion board).  

---

## 🧠 EEG Data Flow
1. **Device Connection**  
   Connects to EEG device with parameters (e.g., serial port, board ID).  

2. **Data Collection**  
   EEG device streams continuous signals at a defined sampling rate.  

3. **Data Processing**  
   Extracts **band power features** (Alpha, Beta, Gamma, etc.) to interpret brainwave activity.  

4. **Frontend Integration**  
   Processed features are transmitted via RESTful APIs for real-time app behavior updates.  

---

## 🌍 Why This Project Matters
- **Accessibility**: Makes BCI development possible for beginners and non-programmers.  
- **Rapid Prototyping**: Create and test BCI apps quickly with modular block logic.  
- **Democratization of BCI**: Encourages wider exploration of neuroscience + programming.  

Traditional BCI development = complex code + sparse docs.  
Our solution = **visual coding + real-time data → beginner-friendly innovation**.  

---

## 📺 Demo Video
▶️ [Watch the YouTube Demo](https://www.youtube.com/watch?v=j6_oXbUtO08)

---

## 📌 Future Work
- Expand block library (more signal processing & visualization options).  
- Add device-agnostic support beyond Ganglion.  
- Enable cloud-based data storage and sharing of block-based BCI projects.  

---

## 🧑‍💻 Contributors
Built with passion for neuroscience + coding accessibility.  
PRs and ideas welcome!  

---

**Team Members:**  
[Daniel Morgan](https://github.com/dmrgn) • [Haresh Goyal](https://github.com/hareshgoyal06) • [Jaedon Visva](https://github.com/jaedonvisva)

---
