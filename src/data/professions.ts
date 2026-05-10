import { Cpu, Code, Megaphone, Scale, PenTool, BarChart3, Briefcase } from "lucide-react";

export type Profession = {
  id: string;
  name: string;
  icon: any;
  skills: string[];
  bullets: string[];
  actionVerbs: string[];
  projects: { title: string; description: string; technologies: string }[];
};

export const professions: Record<string, Profession> = {
  "ai-ml": {
    id: "ai-ml",
    name: "AI/ML Student",
    icon: Cpu,
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "SQL", "Pandas", "NumPy", "Data Visualization", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
    bullets: [
      "Developed a machine learning model to predict X with Y% accuracy using Z.",
      "Processed and cleaned a dataset of X records to improve model training time by Y%.",
      "Implemented a neural network architecture for image classification tasks.",
      "Evaluated model performance using precision, recall, and F1-score metrics.",
      "Collaborated with cross-functional teams to integrate AI solutions into the main application."
    ],
    actionVerbs: ["Developed", "Trained", "Optimized", "Analyzed", "Implemented", "Evaluated", "Designed", "Processed", "Deployed", "Researched"],
    projects: [
      {
        title: "Predictive Analytics Dashboard",
        description: "Built a web dashboard to visualize predictions from a random forest model.",
        technologies: "Python, Scikit-Learn, Streamlit, Pandas"
      },
      {
        title: "Image Classification Tool",
        description: "Created a deep learning application to classify objects in real-time.",
        technologies: "PyTorch, OpenCV, Flask"
      }
    ]
  },
  "software-engineering": {
    id: "software-engineering",
    name: "Software Engineering",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Git", "REST APIs", "SQL", "MongoDB", "Docker", "AWS", "Java"],
    bullets: [
      "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
      "Designed RESTful APIs using Node.js and Express to serve frontend clients.",
      "Optimized database queries to reduce load times by X%.",
      "Participated in agile ceremonies including sprint planning and daily standups.",
      "Wrote unit and integration tests achieving X% code coverage."
    ],
    actionVerbs: ["Developed", "Built", "Engineered", "Architected", "Refactored", "Optimized", "Integrated", "Tested", "Deployed", "Collaborated"],
    projects: [
      {
        title: "E-Commerce Web App",
        description: "Full-stack e-commerce application with user authentication and payment processing.",
        technologies: "React, Node.js, MongoDB, Stripe"
      },
      {
        title: "Task Management API",
        description: "RESTful API for managing tasks and projects with role-based access control.",
        technologies: "TypeScript, Express, PostgreSQL"
      }
    ]
  },

  "law-internship": {
    id: "law-internship",
    name: "Law Internship",
    icon: Scale,
    skills: ["Legal Research", "Contract Drafting", "Case Analysis", "LexisNexis", "Westlaw", "Client Communication", "Document Review", "Litigation Support", "Memo Writing"],
    bullets: [
      "Conducted comprehensive legal research using Westlaw to support pending litigation.",
      "Drafted and reviewed legal memoranda and briefs for senior partners.",
      "Assisted in the preparation of discovery materials and exhibit binders.",
      "Communicated with clients to gather necessary case information and provide updates.",
      "Analyzed contracts to identify potential liabilities and compliance issues."
    ],
    actionVerbs: ["Researched", "Drafted", "Analyzed", "Reviewed", "Assisted", "Communicated", "Prepared", "Negotiated", "Summarized", "Investigated"],
    projects: [
      {
        title: "Mock Trial Preparation",
        description: "Compiled research and drafted opening statements for a university mock trial competition.",
        technologies: "Westlaw, Legal Writing"
      },
      {
        title: "Contract Analysis Report",
        description: "Reviewed 50+ vendor agreements to summarize key terms and termination clauses.",
        technologies: "Document Review, LexisNexis"
      }
    ]
  },
  
  "finance-analyst": {
  id: "finance-analyst",
  name: "Finance Analyst",
  icon: BarChart3,
  skills: [
    "Financial Modeling",
    "Excel",
    "Data Analysis",
    "Forecasting",
    "Budgeting",
    "SQL",
    "Power BI",
    "Market Research"
  ],
  bullets: [
    "Analyzed financial statements to identify trends and support strategic decision-making.",
    "Built forecasting models to improve budgeting accuracy and operational planning.",
    "Prepared financial reports and dashboards for senior stakeholders.",
    "Conducted market research and competitor analysis to evaluate investment opportunities.",
    "Collaborated with cross-functional teams to optimize financial processes."
  ],
  actionVerbs: [
    "Analyzed",
    "Forecasted",
    "Evaluated",
    "Optimized",
    "Prepared",
    "Managed",
    "Researched"
  ],
  projects: [
    {
      title: "Financial Dashboard",
      description: "Built a financial analytics dashboard to track revenue trends and expense patterns.",
      technologies: "Excel, Power BI, SQL"
    },
    {
      title: "Investment Research Report",
      description: "Conducted comparative analysis of market sectors and presented investment insights.",
      technologies: "Market Research, Financial Analysis"
    }
  ]
},

"professional": {
  id: "professional",
  name: "Professional Resume",
  icon: Briefcase,
  skills: [
    "Communication",
    "Leadership",
    "Project Management",
    "Operations",
    "Problem Solving",
    "Team Collaboration",
    "Microsoft Office",
    "Strategic Planning"
  ],
  bullets: [
    "Managed daily operational responsibilities while coordinating with cross-functional teams.",
    "Improved workflow efficiency through process optimization and structured reporting.",
    "Collaborated with stakeholders to achieve organizational objectives and project goals.",
    "Prepared reports, presentations, and documentation for internal business operations.",
    "Demonstrated strong communication and organizational skills in fast-paced environments."
  ],
  actionVerbs: [
    "Managed",
    "Coordinated",
    "Improved",
    "Executed",
    "Led",
    "Organized",
    "Supported"
  ],
  projects: [
    {
      title: "Operations Improvement Initiative",
      description: "Streamlined internal workflows to improve efficiency and reduce manual effort.",
      technologies: "Excel, Documentation, Reporting"
    },
    {
      title: "Business Process Analysis",
      description: "Analyzed existing business operations and proposed workflow improvements.",
      technologies: "Operations, Analysis"
    }
  ]
}

};

export const professionList = Object.values(professions);
