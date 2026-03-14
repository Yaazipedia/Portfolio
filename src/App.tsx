// /mnt/data/App.tsx
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import heroImg from "./assets/hero.png";
import aboutImg from "./assets/about.jpeg";
import fplImg from "./assets/projects/fpl.png";
import chronicImg from "./assets/img/chronickidney.png";
import stegImg from "./assets/img/stegno.png";
import meetsmartImg from "./assets/projects/meetsmart.png";
import project990Logo from "./assets/img/project990.jpeg";
import zsLogo from "./assets/img/zs.png";
import LTILogo from "./assets/img/LTI.png";
import gatxLogo from "./assets/img/gatx.jpeg";

// Skill Logos
import pythonLogo from "./assets/img/python.png";
import sqlLogo from "./assets/img/sql.png";
import sparkLogo from "./assets/img/pyspark.png";
import scalaLogo from "./assets/img/scala.png";
import pytorchLogo from "./assets/img/pytorch.png";
import sklearnLogo from "./assets/img/sklearn.png";
import pandasLogo from "./assets/img/pandas.jpeg";
import tfLogo from "./assets/img/tf.png";
import xgbLogo from "./assets/img/xg.png";
import rfLogo from "./assets/img/randomf.png";
import rlLogo from "./assets/img/rl.jpeg";
import tsLogo from "./assets/img/timese.png";
import mlLogo from "./assets/img/agentic ai.jpeg";
import feLogo from "./assets/img/fe.jpeg";
import dbtLogo from "./assets/img/dt.png";
import deltaLogo from "./assets/img/delta.png";
import kafkaLogo from "./assets/img/kafka.png";
import dlLogo from "./assets/img/dl.png";
import awsLogo from "./assets/img/aws.png";
import azureLogo from "./assets/img/azure.png";
import snowflakeLogo from "./assets/img/snowflake.png";
import gcpLogo from "./assets/img/gcp.png";
import palantirLogo from "./assets/img/palantir.png";
import mongodbLogo from "./assets/img/mongodb.png";
import airflowLogo from "./assets/img/airflow.png";
import gitLogo from "./assets/img/git.png";
import cicdLogo from "./assets/img/cicd.png";
import jenkinsLogo from "./assets/img/jenkins.png";
import jiraLogo from "./assets/img/jira.jpeg";
import powerbiLogo from "./assets/img/powerbi.jpeg";
import gephiLogo from "./assets/img/gephi.png";
import tableauLogo from "./assets/img/tableau.png";
import streamlitLogo from "./assets/img/streamlit.png";
import scanpyLogo from "./assets/img/scanpy.png";
import gnnLogo from "./assets/img/gnn.png";
import pycisLogo from "./assets/img/pycistopic.jpeg";

import lindsayRef from "./assets/img/lindsay.png";
import nareshRef from "./assets/img/naresh.png";
import kritikaRef from "./assets/img/kritika.png";
import ecardRef from "./assets/img/ecard.png";

// Cert Images
import performanceCert from "./assets/img/performance.jpg";
import aiCert from "./assets/img/datacamp.png";
import mlCert from "./assets/img/Machine Learning using Python.jpeg";
import mckinseyCert from "./assets/img/mckinsey.png";
import "./App.css";

function Navbar({ activeSection }: { activeSection: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certs" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Say Hi", href: "#contact" },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-brand">Yashwi Passary</div>

        {/* Hamburger Button */}
        <button
          className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Regular Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`nav-menu-mobile ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links-mobile">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    activeSection === item.href.slice(1) ? "active" : ""
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function SudokuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [grid, setGrid] = useState<(number | null)[][]>([
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ]);
  const [selectedCell, setSelectedCell] = useState<[number, number] | null>(
    null,
  );
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isOpen) {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    } else {
      setTimer(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell([row, col]);
  };

  const handleNumberInput = (num: number | null) => {
    if (selectedCell) {
      const [r, c] = selectedCell;
      const newGrid = [...grid];
      newGrid[r][c] = num;
      setGrid(newGrid);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="sudoku-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <span className="dice">🎲</span>
            <h2>Sudoku Challenge</h2>
          </div>
          <p className="modal-subtitle">Can you beat Yashwi's coffee time?</p>
        </div>

        <div className="modal-timer">{formatTime(timer)}</div>

        <div className="sudoku-grid">
          {grid.map((row, rIdx) => (
            <div key={rIdx} className="grid-row">
              {row.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  className={`grid-cell ${
                    selectedCell?.[0] === rIdx && selectedCell?.[1] === cIdx
                      ? "selected"
                      : ""
                  } ${(rIdx + 1) % 3 === 0 && rIdx < 8 ? "thick-bottom" : ""} ${
                    (cIdx + 1) % 3 === 0 && cIdx < 8 ? "thick-right" : ""
                  }`}
                  onClick={() => handleCellClick(rIdx, cIdx)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumberInput(num)}>
              {num}
            </button>
          ))}
          <button className="clear-btn" onClick={() => handleNumberInput(null)}>
            ✕
          </button>
        </div>

        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function AnimatedCounter({ target, suffix = "", decimals = 0 }: { 
  target: number; suffix?: string; decimals?: number 
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setValue(parseFloat((target * ease).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}
interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  shortDesc: string;
  overview: string;
  contributions: string[];
  tags: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    id: "project990",
    role: "Data Scientist",
    company: "Project 990",
    duration: "August 2025 – Present",
    type: "Part Time",
    shortDesc:
      "At Project 990, I am developing machine learning and NLP solutions to improve nonprofit data quality and classification. My work focuses on building scalable systems for entity resolution and mission-based organization classification. By combining transformer models, large language models, and similarity-based matching techniques, I help automate the identification of duplicate organizations and improve the accuracy of mapping nonprofit mission statements to UN Sustainable Development Goals (SDGs).",
    overview:
      "ML and NLP solutions to improve nonprofit data quality at scale using IRS 990 filings.",
    contributions: [
      "Developed a FASTLLM-based classifier to automatically map nonprofit mission statements to UN Sustainable Development Goals (SDGs), enabling scalable categorization of organisations by social impact area",
      "Evaluated and compared transformer models to determine the most effective approach for matching mission statements to predefined SDG labels, improving classification accuracy",
      "Built an automated entity matching pipeline to resolve 100k+ duplicate organizational records across nonprofit datasets",
      "Applied TF-IDF, cosine similarity, phonetic matching, and geographical features to improve entity resolution accuracy",
      "Designed a top-5 candidate matching system for each organisation record, enabling efficient identification of highly similar entities",
      "Increased entity matching precision by 60%, significantly improving dataset reliability and reducing duplicate records in the nonprofit database",
    ],
    tags: ["Python", "Transformers", "LLMs", "NLP", "Entity Resolution"],
    logo: project990Logo,
  },
  {
    id: "gatx",
    role: "Data Science Intern",
    company: "GATX Corporation",
    duration: "June – December 2025",
    type: "Internship",
    shortDesc:
      "At GATX Corporation, I worked on data visualization and analytics initiatives supporting the Wells Fargo acquisition integration. My role focused on building business intelligence dashboards and modernizing reporting infrastructure by migrating legacy Cognos reports to Power BI. I also explored the use of large language models to enhance reporting workflows by generating dynamic summaries for financial stakeholders.",
    overview:
      "Analytics supporting M&A integration — consolidating and modernizing reporting infrastructure.",
    contributions: [
      "Prioritized and migrated 4 critical Shop Portal reports, reducing manual reporting effort by 30% during post-merger operations",
      "Designed and developed Power BI dashboards aligned with new M&A reporting requirements, ensuring consistency across legacy and acquired data sources",
      "Optimized SQL queries and data models, improving report load times by 40%",
      "Built dynamic, user-driven dashboards with filters and drill-downs, enhancing usability for business stakeholders",
      "Supported the testing and validation phase, performing data reconciliation and UAT to ensure accuracy and business sign-off",
      "Automated report delivery through Power BI subscriptions, improving reporting reliability and timeliness",
      "Built prototypes using LLMs to generate contextual report summaries for finance teams",
      "Enabled faster decision-making for business stakeholders through improved reporting workflows",
    ],
    tags: ["Power BI", "Cognos", "LLMs", "DAX", "SQL"],
    logo: gatxLogo,
  },
  {
    id: "zs",
    role: "Senior Data Engineer",
    company: "ZS Associates",
    duration: "May 2022 – August 2024",
    type: "Full Time",
    shortDesc:
      "At ZS Associates, I worked as a Senior Data Engineer supporting healthcare and pharmaceutical clients including AbbVie, Janssen, and Gilead. My work focused on designing scalable cloud-based data pipelines and analytics platforms for healthcare data. I developed distributed ETL workflows, built patient experience analytics dashboards, and collaborated with cross-functional teams to deliver HIPAA-compliant data solutions for large-scale healthcare analytics initiatives.",
    overview:
      "HIPAA-compliant cloud data pipelines and analytics platforms for AbbVie, Janssen, and Gilead.",
    contributions: [
      "Architected Spark-based ETL pipelines on AWS (Airflow, Athena, Glue, RDS) and Palantir Foundry with MDM components, SCD-based historical tracking, pivoting logic, and automated validation, improving pipeline efficiency by 35% across client patient programs",
      "Real-time patient experience dashboards for pharmaceutical brand teams",
      "Designed a multi-tab real-time Tableau suite integrating Salesforce CRM and CSV clinical feeds to track patient experience KPIs like enrollment, service opt-ins, continuation and discontinuation trends, cutting report generation time by 40% across the APAC market",
      "Azure + Delta Lake pipelines for incremental loads and time-travel queries",
      "Mentored junior engineers and built reusable internal pipeline templates",
      "Developed an automated SMS patient adherence pipeline driving 30% opt-in growth across 100K+ active patients, maintained HIPAA-compliant delivery across all concurrent Agile projects with 100% on-time completion, earning the Best Performance Award",
    ],
    tags: ["Spark", "Databricks", "Azure", "Delta Lake", "HIPAA"],
    logo: zsLogo,
  },
  {
    id: "ltimindtree",
    role: "Data Engineer",
    company: "LTI Mindtree",
    duration: "July 2020 – April 2022",
    type: "Full Time",
    shortDesc:
      "At LTI Mindtree, I worked as a Data Engineer supporting large-scale financial data platforms for S&P Global. My role focused on building distributed data pipelines capable of processing massive streaming datasets. I optimized cloud-based data ingestion and migration workflows using Spark, Databricks, and Azure DevOps, improving performance and reliability of enterprise data infrastructure.",
    overview:
      "Large-scale financial platforms for S&P Global — 2B+ records/day, zero-downtime deployments.",
    contributions: [
      "Automated ETL processing 2B+ daily records to handle large streaming datasets, cutting manual effort by 60%",
      "Improved data ingestion and processing speed by 87% through optimized Spark pipelines",
      "Led data migration to cloud environments using Databricks and Azure DevOps",
      "Reduced system downtime by 30% through optimized pipeline orchestration",
      "Improved query performance by 45% through data architecture improvements",
      "Supported product analytics teams by delivering scalable and reliable datasets for decision-making",
      "Built distributed pipelines for S&P Global processing 2B+ records daily — Scala/PySpark transformation jobs, Azure CI/CD workflows, and 40% latency improvements across data ingestion.",
    ],
    tags: ["Spark", "Scala", "PySpark", "Azure DevOps", "ETL"],
    logo: LTILogo,
  },
];

interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  github: string;
  color?: string;
}

const projects: Project[] = [
  {
    id: "fpl",
    title: "Fantasy Premier League Optimization using Machine Learning",
    tags: ["Random Forest", "XGBoost"],
    image: fplImg,
    github: "https://github.com/Yaazipedia/Fantasy-Premier-League-Optimization-Using-Machine-Learning",
  },
  {
    id: "meetsmart",
    title: "MeetSmart: AI-Powered Meeting Companion",
    tags: ["Python", "FastAPI", "Whisper", "NLTK"],
    image: meetsmartImg,
    github: "https://github.com/Yaazipedia/-MeetSmart-AI-Powered-Meeting-Companion",
  },
  {
    id: "kidney",
    title:
      "Early Detection of Chronic Kidney Disease: Cloud-Native ML Pipeline",
    tags: ["Snowflake", "Snowpark", "XGBoost", "Streamlit"],
    image: chronicImg,
    github: "https://github.com/Yaazipedia/Cloud-Based-Machine-Learning-for-Early-Detection-of-Chronic-Kidney-Disease",
  },
  {
    id: "stego",
    title: "Image Steganography: Secure Data Hiding Web App",
    tags: ["Python", "Flask", "PIL", "Heroku"],
    image: stegImg,
    github: "https://github.com/Yaazipedia/Image-Steganography-WebApp",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div
        className="project-image-wrapper"
        style={{ backgroundColor: project.color }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        ) : (
          <div className="project-placeholder">
            {project.id === "kidney" && (
              <span className="placeholder-icon">🌱</span>
            )}
            {project.id === "stego" && (
              <span className="placeholder-icon">🔐</span>
            )}
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "PROGRAMMING & LIBRARIES",
    skills: [
      { name: "Python", icon: pythonLogo },
      { name: "SQL", icon: sqlLogo },
      { name: "Spark", icon: sparkLogo },
      { name: "Scala", icon: scalaLogo },
      { name: "PyTorch", icon: pytorchLogo },
      { name: "Scikit-learn", icon: sklearnLogo },
      { name: "Pandas", icon: pandasLogo },
      { name: "TensorFlow", icon: tfLogo },
    ],
  },
  {
    id: "ml-ai",
    title: "ML & AI",
    skills: [
      { name: "XGBoost", icon: xgbLogo },
      { name: "Random Forest", icon: rfLogo },
      { name: "Deep Learning", icon: dlLogo },
      { name: "Feature Engineering", icon: feLogo },
      { name: "LLMs", icon: "💬" },
      { name: "RAG", icon: "🔍" },
      { name: "Agentic AI", icon: mlLogo },
      { name: "Time Series", icon: tsLogo },
      { name: "Reinforcement Learning", icon: rlLogo },
    ],
  },
  {
    id: "cloud-data",
    title: "CLOUD & DATA PLATFORMS",
    skills: [
      { name: "AWS", icon: awsLogo },
      { name: "Azure", icon: azureLogo },
      { name: "Snowflake", icon: snowflakeLogo },
      { name: "GCP", icon: gcpLogo },
      { name: "Palantir Foundry", icon: palantirLogo },
      { name: "DBT", icon: dbtLogo },
      { name: "MongoDB", icon: mongodbLogo },
      { name: "Kafka", icon: kafkaLogo },
      { name: "Delta Lake", icon: deltaLogo },
    ],
  },
  {
    id: "devops-viz",
    title: "ETL, DEVOPS & VISUALIZATION",
    skills: [
      { name: "Airflow", icon: airflowLogo },
      { name: "Git", icon: gitLogo },
      { name: "CI/CD", icon: cicdLogo },
      { name: "Jenkins", icon: jenkinsLogo },
      { name: "Azure DevOps", icon: azureLogo },
      { name: "JIRA", icon: jiraLogo },
      { name: "Streamlit", icon: streamlitLogo },
      { name: "Tableau", icon: tableauLogo },
      { name: "Power BI", icon: powerbiLogo },
      { name: "Gephi", icon: gephiLogo },
    ],
  },
  {
    id: "bio-research",
    title: "BIOINFORMATICS & RESEARCH",
    skills: [
      { name: "GNNs", icon: gnnLogo },
      { name: "NetworkX", icon: "🕸️" },
      { name: "Scanpy", icon: scanpyLogo },
      { name: "pycisTopic", icon: pycisLogo },
    ],
  },
];

function SkillTag({ skill }: { skill: Skill }) {
  return (
    <div className="skill-tag">
      {skill.icon.length > 4 ? (
        <img src={skill.icon} alt={skill.name} className="skill-logo" />
      ) : (
        <span className="skill-icon">{skill.icon}</span>
      )}
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

interface Education {
  id: string;
  university: string;
  degree: string;
  duration: string;
  gpa: string;
}

const educationData: Education[] = [
  {
    id: "iu",
    university: "Indiana University — Bloomington",
    degree: "Master's in Data Science",
    duration: "2024 – 2026",
    gpa: "3.8",
  },
  {
    id: "nsec",
    university: "Netaji Subhash Engineering College",
    degree: "B.Tech in Computer Science",
    duration: "2016 – 2020",
    gpa: "3.6",
  },
];

function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="edu-card">
      <div className="edu-gpa-bg">{edu.gpa}</div>
      <div className="edu-content">
        <h3 className="edu-university">{edu.university}</h3>
        <p className="edu-degree">{edu.degree}</p>
        <div className="edu-footer">
          <span className="edu-year-pill">{edu.duration}</span>
        </div>
      </div>
    </div>
  );
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificatesData: Certificate[] = [
  {
    id: "best-perf",
    title: "Best Performance in Digital Products Solution",
    issuer: "ZS Associates",
    date: "Aug 2024",
    image: performanceCert,
  },
  {
    id: "ai-engineer",
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "Feb 2026",
    image: aiCert, // Using as placeholder
  },
  {
    id: "ms-ml",
    title: "Microsoft Certified: Machine Learning",
    issuer: "Ardent Computech",
    date: "July 2019",
    image: mlCert, // Using as placeholder
  },
  {
    id: "mckinsey",
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "July 2025",
    image: mckinseyCert, // Using as placeholder
  },
];

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <div className="cert-card">
      <div className="cert-image-wrapper">
        <img src={cert.image} alt={cert.title} />
      </div>
      <div className="cert-info">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-meta">
          {cert.issuer} · {cert.date}
        </p>
      </div>
    </div>
  );
}

interface Testimonial {
  id: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "lindsay",
    image: lindsayRef,
  },
  {
    id: "naresh",
    image: nareshRef,
  },
  {
    id: "ecard1",
    image: ecardRef, // Placeholder
  },
  {
    id: "ecard2",
    image: kritikaRef, // Placeholder
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="testimonial-card image-based">
      <img
        src={t.image}
        alt="Testimonial screenshot"
        className="testimonial-screenshot"
      />
    </div>
  );
}

function ExperienceModal({
  exp,
  onClose,
}: {
  exp: Experience | null;
  onClose: () => void;
}) {
  if (!exp) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="exp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="exp-modal-close" onClick={onClose}>
          ✕
        </button>
        <header className="exp-modal-header">
          <h2 className="exp-modal-role">{exp.role}</h2>
          <div className="exp-modal-company">{exp.company}</div>
          <div className="exp-modal-meta">
            {exp.duration} · {exp.type}
          </div>
        </header>

        <div className="exp-modal-body">
          <section className="exp-modal-section">
            <h3>OVERVIEW</h3>
            <p>{exp.overview}</p>
          </section>

          <section className="exp-modal-section">
            <h3>KEY CONTRIBUTIONS</h3>
            <ul className="exp-contributions">
              {exp.contributions.map((con, i) => (
                <li key={i}>
                  <span className="arrow">→</span>
                  <p>{con}</p>
                </li>
              ))}
            </ul>
          </section>

          <footer className="exp-modal-tags">
            {exp.tags.map((tag) => (
              <span key={tag} className="exp-tag">
                {tag}
              </span>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSudokuOpen, setIsSudokuOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(
    experiences[0].id,
  );

  // ===== NEW: roles + rotating state =====
  const roles = [
    "Data Scientist",
    "Data Engineer",
    "ML Engineer",
    "Data Analyst",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // rotate every 2s; adjust as desired

    return () => clearInterval(interval);
  }, []); // empty deps to run once on mount
  // ===== END NEW =====

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "certs",
      "testimonials",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of viewer
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-content">
      <ScrollProgress />
      <Navbar activeSection={activeSection} />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-left">
            <div className="availability-pill">
              <span className="availability-dot"></span>
              <span className="availability-text">
                Open to work · Open to Relocation
              </span>
            </div>
            <h1 className="hero-name">Yashwi Passary</h1>

            {/* ===== UPDATED: rotating role ===== */}
            <motion.h2
              key={roles[roleIndex]}
              className="hero-role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.h2>
            {/* ===== end rotating role ===== */}

            <p className="hero-tagline">
              Most data problems aren't data problems. I find the real ones and solve those.
            </p>

            <div className="hero-buttons">
              <a href="mailto:ypassary.masters@gmail.com" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><path d="m22 2-10 11"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/yashwipassary/ " className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="btn-icon"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="/Yashwi_Passary_Resume.pdf" download className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter target={4} suffix="+" />
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter target={2} suffix="B+" />
                </span>
                <span className="stat-label">Records Processed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter target={3.8} decimals={1} />
                </span>
                <span className="stat-label">GPA at IU</span>
              </div>
            </div>
            {/* <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2B+</span>
                <span className="stat-label">Records Processed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3.8</span>
                <span className="stat-label">GPA at IU</span>
              </div>
            </div>
          </div> */}

          <div className="hero-right">
            <div className="image-container">
              <img src={heroImg} alt="Yashwi Passary" className="hero-image" />
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content single-column">
            <div className="about-text centered">
              <span className="section-label">WHO AM I</span>
              <h2 className="section-title">A little about me</h2>

              <div className="bio-paras">
                <p>
                  I'm a Data Scientist and Engineer who's spent 4+ years turning
                  messy, large-scale data into systems that actually work and
                  insights that actually matter. My journey started at
                  LTIMindtree automating ETL pipelines processing 2B+ records,
                  then grew into senior roles at ZS Associates building
                  real-time healthcare dashboards for AbbVie, Janssen, and
                  Gilead.
                </p>

                <p>
                  Most recently at GATX I led Power BI dashboard development for
                  a major M&A initiative and built an entity matching pipeline
                  resolving 100k+ duplicate records at 88% accuracy. Now
                  finishing my Master's in Data Science at Indiana University
                  (GPA 3.8), I'm most excited about ML in healthcare,
                  LLM-powered workflows, and graph-based modeling.
                </p>
              </div>

              <p className="about-status">
                → Currently open to Data Scientist, ML Engineer and Senior Data
                Engineer roles.
              </p>
            </div>

            <div className="about-image full-width">
              <div className="portrait-container">
                <img src={aboutImg} alt="Professional portrait" />
              </div>
            </div>

            <div className="about-callout">
              <div
                className="callout-card"
                onClick={() => setIsSudokuOpen(true)}
              >
                <div className="callout-left">
                  <span className="callout-icon">🎲</span>
                  <div className="callout-content">
                    <h3>I can solve a sudoku before you finish your coffee</h3>
                    <p>CLICK TO CHALLENGE ME → PLAY NOW</p>
                  </div>
                </div>
                <div className="callout-right">
                  <div className="arrow-btn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="experience-container">
            <span className="section-label">WHERE I'VE BEEN</span>
            <h2 className="section-title italic">My work journey</h2>

            <div className="timeline">
              <div className="timeline-line"></div>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`timeline-item ${expandedId === exp.id ? "expanded" : ""}`}
                >
                  <div className="timeline-dot-container">
                    <div className="timeline-dot"></div>
                  </div>
                  <div
                    className="exp-card"
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                  >
                    <div className="exp-card-header">
                      <div className="exp-card-left">
                        <div className="exp-logo">
                          <img src={exp.logo} alt={exp.company} />
                        </div>
                        <div className="exp-title-group">
                          <h3>{exp.role}</h3>
                          <span className="exp-company-small">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <div className="exp-card-right">
                        <span className="exp-date">
                          {exp.duration.split("–")[0]} –{" "}
                          {exp.duration.split("–")[1]?.split("·")[0]}
                        </span>
                        <button
                          className={`exp-toggle-btn ${expandedId === exp.id ? "close" : ""}`}
                        >
                          {expandedId === exp.id ? "Close" : "Details"}
                        </button>
                      </div>
                    </div>

                    {expandedId === exp.id && (
                      <div className="exp-card-expanded">
                        <p className="exp-short-desc">{exp.shortDesc}</p>
                        <button
                          className="view-detail-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedExp(exp);
                          }}
                        >
                          View in detail →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="projects-container">
            <span className="section-label">THINGS I'VE BUILT</span>
            <h2 className="section-title italic">Projects I'm proud of</h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="skills-container">
            <span className="section-label">WHAT I WORK WITH</span>
            <h2 className="section-title italic">My toolkit</h2>

            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div key={category.id} className="skill-category">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-skills">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="education-container">
            <span className="section-label">WHERE I STUDIED</span>
            <h2 className="section-title italic">My academic path</h2>

            <div className="education-grid">
              {educationData.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>
          </div>
        </section>

        <section id="certs" className="certs-section">
          <div className="certs-container">
            <span className="section-label">WHAT I'VE EARNED</span>
            <h2 className="section-title italic">Badges & recognition</h2>

            <div className="certs-grid">
              {certificatesData.map((cert) => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-header-content">
            <span className="section-label">KIND WORDS</span>
            <h2 className="section-title italic">What people say</h2>
          </div>

          <div className="testimonials-scroller-container">
            <div className="testimonials-marquee">
              {[...testimonialsData, ...testimonialsData].map((t, i) => (
                <TestimonialCard key={`${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-container">
            <div className="contact-bg-circle circle-1"></div>
            <div className="contact-bg-circle circle-2"></div>

            <div className="contact-content">
              <h2 className="contact-title italic">Let's talk</h2>
              <p className="contact-status">
                Open to work · Open to relocation · Always up for a good
                conversation
              </p>

              <div className="contact-links">
                <a
                  href="mailto:ypassary.masters@gmail.com"
                  className="contact-pill"
                >
                  <span className="pill-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-10 11" />
                      <path d="m22 2-7 20-4-9-9-4Z" />
                    </svg>
                  </span>
                  ypassary.masters@gmail.com
                </a>
                <a href="tel:+18127785805" className="contact-pill">
                  <span className="pill-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  +1 812-778-5805
                </a>
                <a
                  href="https://www.linkedin.com/in/yashwipassary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                >
                  <span className="pill-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yaazipedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                >
                  <span className="pill-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <footer className="footer-credits">
            <p>© 2025 Yashwi Passary · Data Guru</p>
          </footer>
        </section>

        <SudokuModal
          isOpen={isSudokuOpen}
          onClose={() => setIsSudokuOpen(false)}
        />
        <ExperienceModal
          exp={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      </main>
    </div>
  );
}

export default App;