# ⚡ EV Intelligence System

> **Live Website:** https://indian-ev-lab.onrender.com

An AI-powered Electric Vehicle (EV) analytics and prediction platform that brings together machine-learning models, interactive Power BI dashboards, and a Gemini-powered EV Assistant in one web application.

---

## 📸 Website Screenshots
![img_1.png](img_1.png)![img_2.png](img_2.png)![img_3.png](img_3.png)![img_4.png](img_4.png)
![img_5.png](img_5.png)![img_6.png](img_6.png)
## 🌍 Overview

Electric mobility is growing, making it increasingly useful to understand EV usage, battery condition, driving-range concerns, energy consumption, and charging-infrastructure requirements.

The **EV Intelligence System** combines four EV-focused machine-learning modules, Power BI reports, and a conversational AI assistant in one web interface.

### Project Goals

- Apply machine learning to practical electric-vehicle use cases.
- Present EV-related data through interactive dashboards.
- Make model predictions accessible through a web interface.
- Provide an EV-focused conversational assistant using the Google Gemini API.
- Integrate data science and web development in a deployable Flask application.

---

## ✨ Key Features

- **Four machine-learning models** for range-anxiety risk, battery health, charging-station requirements, and energy consumption.
- **Interactive Power BI dashboards** embedded in the website.
- **Gemini-powered EV Assistant** for conversational EV-related help.
- **Flask backend** connecting web pages, prediction routes, and the assistant.
- **Web interface** built with HTML, CSS, and JavaScript.
- **Environment-based API configuration** to keep credentials out of frontend code.
- **Deployment on Render** at [indian-ev-lab.onrender.com](https://indian-ev-lab.onrender.com).

---

## 🤖 Machine Learning Models

The application contains these four model modules:

| Model | Purpose |
|---|---|
| **Range Anxiety Prediction** | Estimates range-anxiety risk using relevant EV usage, battery, estimated-range, and charging-related inputs supported by the model. |
| **Battery Health Prediction** | Predicts battery-health outcomes from the features accepted by the trained model. |
| **Charging Station Requirement Prediction** | Uses relevant EV usage or demand features to estimate charging-station requirements. |
| **Energy Consumption Prediction** | Predicts EV energy consumption from the inputs expected by the trained model. |

The precise inputs, targets, algorithms, and evaluation metrics depend on each model's implementation. Add verified dataset sources and measured results when they are ready; this README intentionally does not invent performance scores.

---

## 📊 Interactive Power BI Dashboards

The website includes embedded Power BI reports for exploring EV-related data and infrastructure.

| Dashboard | Purpose |
|---|---|
| **EV Usage** | Explore EV usage patterns and trends included in the report. |
| **Indian EV Charging Stations** | Explore charging-station information and infrastructure patterns available in the report. |
| **Vehicles & Stations** | View vehicle-related and charging-station insights together. |

Dashboard availability depends on the reports being published and their Power BI sharing/access settings being configured correctly.

---

## 💬 Gemini-Powered EV Assistant

The EV Assistant uses the **Google Gemini API** to respond to EV-related questions. Topics may include:

- Battery health and battery-related concepts.
- Charging methods and charging infrastructure.
- Driving range and range anxiety.
- Energy consumption and charging costs.
- EV adoption and infrastructure in India.
- Questions related to the project's EV analytics and prediction use cases.

The Flask backend receives a message from the chat interface, sends a request to the configured Gemini model, and returns the response to the frontend.

AI-generated answers can be inaccurate. Users should verify important information and follow vehicle-manufacturer guidance for vehicle-specific or safety-critical questions.

### API Key Configuration

Configure the Gemini API key as an environment variable on the hosting platform. The application may use a variable such as `GEMINI_API_KEY`; use the exact name expected by the code.

**Never place a real API key in frontend JavaScript or commit it to GitHub.**

---

## 🧰 Technology Stack

| Area | Technologies |
|---|---|
| Backend | Python, Flask |
| Frontend | HTML, CSS, JavaScript |
| Data analysis | Pandas, NumPy, Matplotlib, Seaborn, where used |
| Machine learning | Python ML libraries used by the model pipelines |
| Generative AI | Google Gemini API, `google-genai` |
| Environment configuration | Environment variables; `python-dotenv` if used |
| Dashboards | Microsoft Power BI |
| Production server | Gunicorn, where configured |
| Version control | Git, GitHub |
| Hosting | Render |

The exact dependency list should match the project's current `requirements.txt`.

---

## 🏗️ High-Level Architecture

```text
                 User's Browser
                       |
                       v
            HTML / CSS / JavaScript
                       |
                       v
                 Flask Backend
                 /            \
                v              v
       ML Prediction Routes   EV Assistant Route
                |              |
                v              v
       Trained Models      Google Gemini API

       Embedded Power BI Reports
                  |
                  v
          Dashboard Pages
```

The prediction routes call the relevant trained model and any required preprocessing steps. The assistant route communicates with Gemini. Power BI reports are embedded using their published report URLs.

---

## 📁 Example Project Structure

The tree below illustrates a common Flask layout. Your actual filenames may differ, so adjust this section to match the repository.

```text
EV-Intelligence-System/
├── app.py
├── requirements.txt
├── .env                  # Local secrets; do not commit
├── .gitignore
├── README.md
├── screenshots/          # Optional website screenshots
├── templates/            # HTML pages
├── static/
│   ├── css/
│   ├── js/
│   └── images/
└── models/                # Trained models and preprocessing files
```

Keep only the directories and files that actually exist in your project.

---

## 🚀 Run Locally

### Prerequisites

- Python compatible with the project's dependencies.
- Git.
- A Gemini API key to use the EV Assistant.
- Required trained model files and any other project assets.

### 1. Clone the repository

Replace the placeholder with the actual repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd EV-Intelligence-System
```

### 2. Create and activate a virtual environment

**Windows PowerShell:**

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**Windows Command Prompt:**

```bat
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS:**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure environment variables

If the project uses `python-dotenv`, create a `.env` file in the project root:

```dotenv
GEMINI_API_KEY=your_gemini_api_key_here
```

Use the variable name expected by your application. Do not use a real key in this README.

### 5. Start the application

If your Flask application object is named `app` in `app.py`:

```bash
python app.py
```

Open the local address shown in the terminal, commonly `http://127.0.0.1:5000/`.

For a Gunicorn deployment where the module and application names match:

```bash
gunicorn --workers 1 --bind 0.0.0.0:8000 app:app
```

Change `app:app` if your entry point uses different names.

---

## ☁️ Deployment

The project is deployed on Render:

**Live website:** https://indian-ev-lab.onrender.com

When deploying or updating the application, verify that:

1. `requirements.txt` contains all required dependencies.
2. The start command matches the Flask entry point, for example `gunicorn app:app`.
3. The Gemini API key is configured in the hosting provider's environment settings.
4. Trained model and preprocessing files are available to the deployed application.
5. File paths work in the hosted environment.
6. The EV Assistant handles API errors and timeouts appropriately.
7. Power BI reports have the correct publishing and access settings.

Free hosting services may impose memory, execution-time, sleep, or usage limits. Test each model route and the chatbot after deployment, not just the homepage.

---

## 🔐 Security Notes

- Never commit `.env`, API keys, passwords, or tokens.
- Keep the Gemini API key on the server, not in browser-side JavaScript.
- Validate inputs before passing them to models or external APIs.
- Handle missing or invalid inputs gracefully.
- Avoid returning raw stack traces or secret values to users.
- Review dataset licences and dashboard sharing settings before public release.

Example `.gitignore` entries:

```gitignore
.env
venv/
__pycache__/
*.py[cod]
```

---

## 🔮 Potential Future Improvements

- Add verified dataset sources, feature descriptions, and model evaluation metrics.
- Add automated tests for Flask routes and model predictions.
- Improve form validation and user-facing error messages.
- Add model explanations where supported by the model pipelines.
- Improve accessibility and responsive design.
- Monitor API usage, response times, and memory consumption.
- Add more screenshots and a short project demo video.

These are possible future improvements, not claims that the features are already implemented.

---

## 👩‍💻 Developers

This project was developed by:

<table>
  <thead>
    <tr>
      <th>Developer</th>
      <th>GitHub</th>
      <th>LinkedIn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Darshan Patil</strong></td>
      <td><a href="https://github.com/darshan1845">darshan1845</a></td>
      <td><a href="https://www.linkedin.com/in/darshanpatil1/">darshanpatil1</a></td>
    </tr>
    <tr>
      <td><strong>Chetna Patel</strong></td>
      <td><a href="https://github.com/Chetnapatel09">Chetnapatel09</a></td>
      <td><a href="https://www.linkedin.com/in/chetna-patel-3s/">chetna-patel-3s</a></td>
    </tr>
  </tbody>
</table>

---

## 🙌 Acknowledgements

- Google Gemini API for generative-AI capabilities.
- Microsoft Power BI for interactive analytics and dashboards.
- The Python and open-source ecosystem used to build the application.
- The creators and maintainers of the datasets used in the project.

Add exact dataset references and licences here when finalised.

---

## 📄 License

No licence has been specified yet. Add a licence file if you intend to define how others may use, modify, and distribute this project.

---

<p align="center">
  <strong>EV Intelligence System</strong><br>
  Data-driven insights for electric mobility.
</p>
