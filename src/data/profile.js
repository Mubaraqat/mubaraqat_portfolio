// ─────────────────────────────────────────────────────────────
// Everything you'll want to edit lives in this one file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Yemi Mubaraqat Onifade",
  shortName: "Yemi Mubaraqat Onifade",
  role: "Data Scientist",
  headline: "I turn data into insights through analysis, visualisation, and machine learning.",
  location: "Nigeria",
  email: "yemimubaraqat@gmail.com",
  github: "Mubaraqat", // GitHub username: projects are pulled from here
  githubUrl: "https://github.com/Mubaraqat",
  linkedinUrl: "https://linkedin.com/in/yemi-onifade",
  cvFile: "/Yemi_Onifade_Data_Scientist_CV.pdf", // file lives in /public
  summary: [
    "I'm a data scientist with a background in Medical Laboratory Science. Years of working with clinical records taught me to care about accuracy, validation and clear documentation before any model gets trained.",
    "Today I work in Python, SQL, Power BI and Scikit-learn: cleaning messy data, exploring it, building predictive models and packaging the results into interactive dashboards.",
  ],
  highlights: [
    "Built end-to-end data science projects with Python and Streamlit.",
    "Applied machine learning techniques including SMOTE and GridSearchCV.",
    "Analysed healthcare and public health data to uncover meaningful insights.",
  ],
};

// Concise skills: four categories. Levels are self-assessed, so edit the numbers to what's honest.
// Set showLevels to false to show plain chips without percentages.
export const showLevels = true;

export const skillCategories = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      { name: "Excel", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "Matplotlib / Plotly", level: 80 },
      { name: "Streamlit", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Classification", level: 85 },
      { name: "Regression", level: 85 },
      { name: "Model Evaluation", level: 85 },
    ],
  },
  {
    title: "Research & Healthcare",
    skills: [
      { name: "Biomedical Research", level: 85 },
      { name: "Infectious Disease Research", level: 85 },
      { name: "Epidemiology", level: 85 },
      { name: "Laboratory Quality Control", level: 90 },
    ],
  },
];

// Optional polish for specific GitHub repos (key = exact repo name).
// Anything not listed here still appears, using its GitHub description.
export const repoOverrides = {};

// Repos to leave out of the grid: your profile README repo, and the two that get their own showcase cards.
export const hiddenRepos = ["Mubaraqat", "SanTrack-Admin-Dashboard", "Diabetes-Prediction-Model"];

// Projects with a live app get a large preview card.
// To use a real screenshot, save it as public/previews/<id>.png (16:10 works best): it replaces the illustration automatically.
export const liveProjects = [
  {
    id: "santrack",
    title: "SanTrack: Sanitation Tracking Dashboard",
    description:
      "Web dashboard for a sanitation tracking application. Pandas analysis surfaces sanitation trends from inspection data, and interactive Plotly charts present them so decisions can be data-driven.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    liveUrl: "https://santrack-app-dashboard-nl7b8ptrwnc2ln4ywpamkv.streamlit.app/",
    githubUrl: "https://github.com/Mubaraqat/SanTrack-Admin-Dashboard",
  },
  {
    id: "diabetes",
    title: "Diabetes Risk Prediction Model",
    description:
      "Classifies patients as diabetic or non-diabetic from eight clinical measurements. Scaling, SMOTE and GridSearchCV lifted recall from 69% to 76%, cutting missed diabetic cases from 17 to 13 on the test set.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "Streamlit"],
    liveUrl: "https://diabetes-prediction-model-wdapp2yij3byvlmtjch4aox.streamlit.app/",
    githubUrl: "https://github.com/Mubaraqat/Diabetes-Prediction-Model",
  },
];

export const experience = [
  {
    role: "Medical Laboratory Scientist Intern / Chief Intern",
    org: "Lagos University Teaching Hospital (LUTH), Lagos",
    period: "2024 – 2025",
    points: [
      "Managed and documented operational information, supporting accurate data recording across clinical departments.",
      "Applied quality-control procedures to keep records and results accurate, reliable and consistent.",
      "Coordinated intern schedules across departments and organised professional development activities.",
    ],
  },
  {
    role: "Laboratory Intern, CENTRAL-NTDs (ANDI)",
    org: "Lagos University Teaching Hospital, Lagos",
    period: "Research experience",
    points: [
      "Managed documentation and quality-control records for 1,700+ malaria slides and dried blood spot samples from multiple states.",
      "Used Excel formulas and functions to organise, validate and analyse laboratory records, and flagged inconsistencies for correction.",
    ],
  },
  {
    role: "Undergraduate Research Project",
    org: "University of Ibadan",
    period: "Research project",
    points: [
      "Investigated parasitic contamination of fresh fruits retailed at major markets in Ibadan.",
      "Contributed to data collection, laboratory analysis, interpretation and scientific reporting.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Medical Laboratory Science (B.MLS)",
  school: "University of Ibadan, College of Medicine, Nigeria",
};

export const training = {
  title: "Data Science & Engineering Fellowship",
  org: "Tech4Dev, Women Techsters Fellowship",
  period: "2025 – 2026",
  topics: "Excel, Python, SQL, data analysis, visualization, machine learning, Power BI, statistics and dashboard development.",
};

export const certifications = [
  { name: "Google Advanced Data Analytics", issuer: "Google", year: "2026" },
  {Data Analysis Full Bootcamp", issuer: "Udemy", year: "2026" },
  { name: "Excel Basics for Data Analysis", issuer: "IBM", year: "2024" },
  { name: "Bioinformatics for Biologists", issuer: "FutureLearn", year: "2023" },
];

export const publication = {
  citation:
    "Makanjuola, O. B., Onifade, Y. M., & Dada-Adegbola, H. O. (2025). Factors associated with parasitic contamination of fresh fruits retailed at major markets in Ibadan, Nigeria: A public health concern.",
  journal: "African Journal of Clinical and Experimental Microbiology, 26(4), 341–351.",
};
