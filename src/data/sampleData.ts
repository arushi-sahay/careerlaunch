import { ResumeData } from "@/lib/resume-schema";

export const sampleData: Record<string, ResumeData> = {
  "ai-ml": {
    fullName: "Alex Chen",
    email: "alex.chen@example.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com/in/alexchen",
    portfolio: "https://github.com/alexchen",
    education: [
      {
        id: "edu-1",
        institution: "University of Technology",
        degree: "B.S. Computer Science, Specialization in AI",
        startDate: "Sep 2020",
        endDate: "May 2024",
        gpa: "3.8/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "Python" },
      { id: "sk-2", name: "PyTorch" },
      { id: "sk-3", name: "Scikit-Learn" },
      { id: "sk-4", name: "SQL" },
      { id: "sk-5", name: "Machine Learning" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Predictive Analytics Dashboard",
        description: "Built a web dashboard to visualize predictions from a random forest model. Processed and cleaned a dataset of 100K records to improve model training time by 20%.",
        technologies: "Python, Scikit-Learn, Streamlit",
        link: "https://github.com/alexchen/dashboard"
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "DataMinds Tech",
        position: "Data Science Intern",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        description: "Developed a machine learning model to predict customer churn with 85% accuracy. Collaborated with cross-functional teams to integrate AI solutions into the main application."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "Dec 2023"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "1st Place in University Hackathon 2023 (AI Track)"
      }
    ]
  },
  "software-engineering": {
    fullName: "Jordan Taylor",
    email: "jordan.t@example.com",
    phone: "(555) 987-6543",
    linkedin: "https://linkedin.com/in/jordantaylor",
    portfolio: "https://jordantaylor.dev",
    education: [
      {
        id: "edu-1",
        institution: "State University",
        degree: "B.S. Software Engineering",
        startDate: "Sep 2019",
        endDate: "May 2023",
        gpa: "3.9/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "JavaScript" },
      { id: "sk-2", name: "TypeScript" },
      { id: "sk-3", name: "React" },
      { id: "sk-4", name: "Node.js" },
      { id: "sk-5", name: "PostgreSQL" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Task Management API",
        description: "RESTful API for managing tasks and projects with role-based access control. Wrote unit and integration tests achieving 90% code coverage.",
        technologies: "TypeScript, Express, PostgreSQL",
        link: "https://github.com/jordantaylor/task-api"
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "TechNova Solutions",
        position: "Frontend Developer Intern",
        startDate: "May 2022",
        endDate: "Aug 2022",
        description: "Developed and maintained responsive user interfaces using React and Tailwind CSS. Optimized database queries to reduce load times by 15%."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "Jan 2024"
      }
    ],
    achievements: [
      {
        id: "ach-1",
        description: "Dean's List 2020-2023"
      }
    ]
  },

  "law-internship": {
    fullName: "Jamie Lee",
    email: "jamie.lee@example.com",
    phone: "(555) 345-6789",
    linkedin: "https://linkedin.com/in/jamielee",
    portfolio: "",
    education: [
      {
        id: "edu-1",
        institution: "State Law School",
        degree: "Juris Doctor (J.D.)",
        startDate: "Aug 2022",
        endDate: "May 2025",
        gpa: "3.6/4.0"
      }
    ],
    skills: [
      { id: "sk-1", name: "Legal Research" },
      { id: "sk-2", name: "Contract Drafting" },
      { id: "sk-3", name: "Case Analysis" },
      { id: "sk-4", name: "Westlaw" }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Mock Trial Competition",
        description: "Compiled research and drafted opening statements. Analyzed contracts to identify potential liabilities.",
        technologies: "Westlaw, Legal Writing",
        link: ""
      }
    ],
    experience: [
      {
        id: "exp-1",
        company: "Smith & Associates Law Firm",
        position: "Legal Summer Intern",
        startDate: "May 2023",
        endDate: "Aug 2023",
        description: "Conducted comprehensive legal research using Westlaw to support pending litigation. Drafted and reviewed legal memoranda and briefs for senior partners."
      }
    ],
    certifications: [],
    achievements: [
      {
        id: "ach-1",
        description: "Moot Court Finalist 2023"
      }
    ]
  },
  
  "finance-analyst": {
  fullName: "Ethan Brooks",
  email: "ethan.brooks@example.com",
  phone: "(555) 222-7890",
  linkedin: "https://linkedin.com/in/ethanbrooks",
  portfolio: "",
  education: [
    {
      id: "edu-1",
      institution: "Metropolitan Business University",
      degree: "B.S. Finance",
      startDate: "Sep 2020",
      endDate: "May 2024",
      gpa: "3.8/4.0"
    }
  ],
  skills: [
    { id: "sk-1", name: "Financial Modeling" },
    { id: "sk-2", name: "Excel" },
    { id: "sk-3", name: "SQL" },
    { id: "sk-4", name: "Power BI" },
    { id: "sk-5", name: "Market Analysis" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Equity Research Analysis",
      description: "Analyzed public company financial statements and prepared investment recommendation reports.",
      technologies: "Excel, Financial Analysis",
      link: ""
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "NorthBridge Capital",
      position: "Finance Analyst Intern",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      description: "Built forecasting models and assisted in preparing financial reports for quarterly business reviews."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Bloomberg Market Concepts",
      issuer: "Bloomberg",
      date: "Jan 2024"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      description: "Finalist - National Finance Case Competition"
    }
  ]
},

"professional": {
  fullName: "Michael Carter",
  email: "michael.carter@example.com",
  phone: "(555) 678-1122",
  linkedin: "https://linkedin.com/in/michaelcarter",
  portfolio: "",
  education: [
    {
      id: "edu-1",
      institution: "Central State University",
      degree: "B.B.A. Business Administration",
      startDate: "Sep 2019",
      endDate: "May 2023",
      gpa: "3.7/4.0"
    }
  ],
  skills: [
    { id: "sk-1", name: "Project Coordination" },
    { id: "sk-2", name: "Operations Management" },
    { id: "sk-3", name: "Microsoft Excel" },
    { id: "sk-4", name: "Communication" },
    { id: "sk-5", name: "Reporting" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Operations Workflow Optimization",
      description: "Analyzed internal operational workflows and proposed efficiency improvements for reporting processes.",
      technologies: "Excel, Operations Analysis",
      link: ""
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Vertex Solutions",
      position: "Operations Intern",
      startDate: "May 2022",
      endDate: "Aug 2022",
      description: "Supported operational reporting and coordinated cross-functional administrative tasks."
    }
  ],
  certifications: [],
  achievements: [
    {
      id: "ach-1",
      description: "Employee Excellence Recognition Award"
    }
  ]
}
};
