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
  verificationNote?: string;
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
  {
    slug: "invisible-cloak",
    name: "Invisible Cloak — Real-Time Computer Vision",
    tagline: "A webcam-based visual effect that replaces a selected cloth color with the captured background.",
    categories: ["Computer vision", "Image processing", "Real-time video"],
    languages: ["Python"],
    technologies: ["OpenCV", "NumPy", "Webcam", "HSV color segmentation", "Masking", "Background replacement"],
    repository: "https://github.com/shubham5177/Invisible-Cloak",
    problem:
      "Creating an invisibility effect in live video can require complex image processing. This project demonstrates a simpler approach using color detection and background replacement.",
    solution:
      "Capture a clean background frame, detect the selected cloth color in each webcam frame using HSV color segmentation, and replace the detected region with the captured background.",
    features: [
      "Real-time webcam video processing",
      "Cloth-color detection in HSV color space",
      "Background capture and replacement",
      "Noise reduction with blur and morphological operations",
      "Live display of the visual effect",
    ],
    outcome:
      "Demonstrate fundamental computer vision, image segmentation, and video processing through a real-time visual effect. The illusion works best with a stationary camera, a relatively static background, suitable lighting, and a cloth color that contrasts with its surroundings; it is not actual invisibility.",
    verificationNote:
      "This summary describes the standard Invisible Cloak approach. Check the repository README and source code to confirm the exact implementation details.",
  },
  {
    slug: "smartattendance",
    name: "SmartAttendance — Face Recognition Attendance System",
    tagline: "A camera-based attendance system concept for recognizing registered individuals and recording attendance.",
    categories: ["Artificial intelligence", "Computer vision", "Attendance automation"],
    languages: ["Python (provisional)"],
    technologies: [
      "Camera input",
      "Face detection and recognition (implementation to verify)",
      "Attendance storage (format to verify)",
    ],
    repository: "https://github.com/shubham5177/SmartAttendance",
    problem:
      "Traditional attendance systems rely on manual roll calls or paper registers, which take time, can introduce recording errors, and may allow proxy attendance.",
    solution:
      "Use a camera and facial recognition to identify registered individuals and automatically record attendance, reducing the need for manual entry.",
    features: [
      "Face registration for students or employees",
      "Camera-based face detection and recognition",
      "Automatic attendance recording",
      "Attendance history and record management",
      "Reduced manual attendance entry",
    ],
    outcome:
      "Streamline attendance marking, reduce manual effort, and make attendance records easier to maintain.",
    verificationNote:
      "The repository's exact languages, recognition library, storage format, and feature set have not been verified. Confirm these details against the project README and source code.",
  },
  {
    slug: "hand-gesture",
    name: "Hand Gesture Recognition System",
    tagline: "A camera-based computer vision application for recognizing visual hand gestures.",
    categories: ["Computer vision", "Gesture recognition", "Human-computer interaction"],
    languages: ["Python (provisional)"],
    technologies: [
      "Camera input",
      "OpenCV (to verify)",
      "MediaPipe (to verify)",
      "Hand landmarks and gesture classification (to verify)",
    ],
    repository: "https://github.com/shubham5177/Hand-gesture",
    problem:
      "Traditional computer interaction relies on physical devices such as a mouse and keyboard, limiting touchless interaction without specialized software.",
    solution:
      "Use a camera to detect hand movements and recognize gestures, enabling a computer to interpret visual hand signals.",
    features: [
      "Real-time hand detection using a camera",
      "Recognition of hand poses and finger positions",
      "Visual feedback for detected gestures",
      "Foundation for gesture-based computer interaction",
    ],
    outcome:
      "Demonstrate real-time hand gesture recognition and provide a foundation for touchless computer interaction.",
    verificationNote:
      "The repository's source files and README have not been checked. The language, libraries, recognition method, and specific features listed here are provisional; confirm them against the implementation.",
  },
];
