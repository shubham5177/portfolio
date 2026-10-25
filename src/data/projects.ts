export type Project = {
  slug: string;
  name: string;
  tagline: string;
  categories: string[];
  languages: string[];
  technologies: string[];
  repository: string;
  problem: string;
  solution: string;
  features: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "edupath",
    name: "EduPath — Adaptive Career Intelligence",
    tagline: "An AI-powered career coach that helps learners plan and track their path toward a target role.",
    categories: ["AI", "Multi-agent systems", "Career guidance"],
    languages: ["Python"],
    technologies: ["Streamlit", "LangGraph", "Groq", "Pydantic", "SQLite", "Plotly"],
    repository: "https://github.com/shubham5177/Edupath",
    problem:
      "Students and job seekers often struggle to identify the skills they lack, select suitable learning resources, and determine whether they are ready for a target job.",
    solution:
      "EduPath analyzes a learner's existing skills and experience, identifies skill gaps, and generates a personalized learning roadmap that can adapt as the learner makes progress.",
    features: [
      "Skill-gap analysis",
      "Personalized study plans",
      "Practice tasks",
      "Interview preparation",
      "Career guidance",
      "Progress tracking",
    ],
    outcome: "Help learners follow a structured, personalized path toward their career goals.",
  },
  {
    slug: "ai-exam-proctoring-system",
    name: "AI-Based Exam Proctoring System",
    tagline: "A computer-vision monitoring tool that helps invigilators review potential exam incidents.",
    categories: ["Artificial intelligence", "Computer vision", "Web development"],
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    technologies: ["Flask", "YOLOv8", "OpenCV", "MediaPipe", "Bootstrap", "Chart.js", "SQLite"],
    repository: "https://github.com/shubham5177/Exam-Proctor-System",
    problem:
      "Manually monitoring every student during an examination is difficult, and suspicious activities can be missed in large classrooms.",
    solution:
      "The system uses camera-based monitoring to detect and track students, flag potentially suspicious behaviour, record evidence, and help invigilators review incidents.",
    features: [
      "Person tracking",
      "Head-pose estimation",
      "Mobile-phone detection",
      "Incident history",
      "Monitoring dashboard",
      "PDF reports",
    ],
    outcome:
      "Assist invigilators with examination monitoring while leaving final decisions to human reviewers.",
  },
  {
    slug: "ibvap",
    name: "IBVAP — Intelligent Video Analytics Platform",
    tagline: "Video analytics for detecting and reviewing people, vehicles, and configured security events.",
    categories: ["AI", "Computer vision", "Security analytics"],
    languages: ["Python", "HTML", "CSS", "JavaScript"],
    technologies: ["Flask", "YOLOv8", "OpenCV", "ByteTrack", "SQLite"],
    repository: "https://github.com/shubham5177/IBVAP",
    problem:
      "Security personnel may find it difficult to continuously monitor CCTV footage, identify people or vehicles of interest, and respond quickly to restricted-zone intrusions.",
    solution:
      "IBVAP analyzes webcam, CCTV, or recorded video, detects people and vehicles, tracks movement, and generates alerts when configured security rules are triggered.",
    features: [
      "Person and vehicle detection",
      "Object tracking",
      "Virtual fences",
      "Restricted-zone alerts",
      "Night-movement analysis",
      "Loitering detection",
      "Alert history",
    ],
    outcome:
      "Reduce manual monitoring effort and help security staff identify events that require attention.",
  },
];
