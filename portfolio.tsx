import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import {
  Brain,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Building,
  GraduationCap,
  Award,
  Download,
  Zap,
  Cloud,
  Code,
  Target,
  Trophy,
  Star,
  ChevronRight,
  Sparkles,
  ChevronLeft,
  Database,
  Smartphone,
  Globe,
  Calendar,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "R", level: 80, icon: "📊" },
      { name: "SQL", level: 90, icon: "🗃️" },
      { name: "JavaScript", level: 75, icon: "🟨" },
    ],
    "AI/ML & Data Science": [
      { name: "Machine Learning", level: 95, icon: "🤖" },
      { name: "NLP", level: 90, icon: "💬" },
      { name: "Data Analysis", level: 88, icon: "📈" },
      { name: "spaCy", level: 85, icon: "🔤" },
      { name: "Scikit-learn", level: 90, icon: "🧠" },
    ],
    "Cloud & Tools": [
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Flask", level: 85, icon: "🌶️" },
      { name: "Git", level: 90, icon: "📝" },
      { name: "GitHub", level: 88, icon: "🐙" },
    ],
  }

  const projects = [
    {
      title: "NLP-Based Question Paper Generator",
      description:
        "An intelligent system that automates academic question paper generation using advanced NLP techniques and Bloom's Taxonomy principles.",
      features: [
        "PDF/Text syllabus extraction",
        "Unit-wise content splitting",
        "spaCy NLP topic extraction",
        "Bloom's Taxonomy question generation",
      ],
      tech: ["Python", "spaCy", "Flask", "NLP"],
      github: "#",
      demo: "#",
      status: "Completed",
      gradient: "from-blue-500 to-purple-600",
      image: "NLP.png",
      icon: Brain,
    },
    {
      title: "Diabetic Prediction Model",
      description:
        "Award-winning ML model that predicts diabetic risk using medical and lifestyle parameters with high accuracy.",
      features: [
        "Medical parameter analysis",
        "Lifestyle factor integration",
        "Risk prediction algorithm",
        "Flask web interface",
      ],
      tech: ["Scikit-learn", "Flask", "Python", "ML"],
      github: "#",
      demo: "#",
      status: "🏆 1st Prize Winner",
      gradient: "from-green-500 to-teal-600",
      image: "diet.png",
      icon: Trophy,
    },
    {
      title: "AI Symptom Checker & Diet Planner",
      description:
        "Comprehensive health assistant that detects health issues via text/voice and provides personalized diet recommendations.",
      features: [
        "Voice recognition integration",
        "NLP symptom analysis",
        "Personalized diet planning",
        "Mental health detection",
      ],
      tech: ["NLP", "Voice Recognition", "ML", "Python"],
      github: "#",
      demo: "#",
      status: "In Progress",
      gradient: "from-orange-500 to-red-600",
      image: "ai_symtes.png",
      icon: Smartphone,
    },
    {
      title: "Flood Monitoring & Alerting System",
      description:
        "IoT-based solution for real-time flood detection and alerting with predictive analytics and remote monitoring capabilities.",
      features: [
        "Water level and flow sensors",
        "Real-time data monitoring dashboard",
        "Automated flood alerts via SMS/email",
        "Resource optimization algorithms",
      ],
      tech: ["Python", "IoT", "MongoDB", "React", "Flask"],
      github: "#",
      demo: "#",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-600",
      image: "Flood alerting system.png",
      icon: Building,
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Secure and transparent voting platform using blockchain technology to ensure election integrity and voter privacy.",
      features: ["Blockchain security", "Anonymous voting", "Real-time vote counting", "Audit trail system"],
      tech: ["Blockchain", "Solidity", "Web3", "React"],
      github: "#",
      demo: "#",
      status: "Research Phase",
      gradient: "from-purple-500 to-pink-600",
      image: "voting system.png",
      icon: Database,
    },
    {
      title: "AI-Powered Code Review Assistant",
      description:
        "Intelligent code review tool that analyzes code quality, suggests improvements, and detects potential bugs using ML.",
      features: [
        "Code quality analysis",
        "Bug detection algorithms",
        "Performance optimization tips",
        "Multi-language support",
      ],
      tech: ["Python", "AST", "ML", "GitHub API"],
      github: "#",
      demo: "#",
      status: "Beta Testing",
      gradient: "from-indigo-500 to-purple-600",
      image: "code review.png",
      icon: Code,
    },
    {
      title: "Smart Agriculture Monitoring",
      description:
        "IoT and AI-based agricultural monitoring system for crop health analysis, weather prediction, and yield optimization.",
      features: [
        "Crop health monitoring",
        "Weather prediction models",
        "Yield optimization algorithms",
        "Farmer mobile app",
      ],
      tech: ["Python", "IoT", "Computer Vision", "Flutter"],
      github: "#",
      demo: "#",
      status: "Pilot Testing",
      gradient: "from-green-500 to-emerald-600",
      image: "smart system.png",
      icon: Globe,
    },
  ]

  const certifications = [
    { name: "AWS Academy Graduate – Cloud Foundations", issuer: "AWS", icon: "☁️" },
    { name: "Google Virtual Internship – AI & ML", issuer: "Google", icon: "🔍" },
    { name: "Accenture Developer & Tech Consultant Program", issuer: "Accenture", icon: "💼" },
    { name: "AWS AI-ML Virtual Internship", issuer: "AWS", icon: "🤖" },
  ]

  const achievements = [
    { title: "Coding Fest Winner", description: "1st Prize for Diabetic Prediction Model at CBIT", icon: Trophy },
    { title: "AI Innovation", description: "Developed innovative NLP-based educational tool", icon: Brain },
    { title: "Technical Leadership", description: "Designed cross-department technical quiz", icon: Target },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a href="#" className="mr-6 flex items-center space-x-2 group">
              <div className="relative">
                <Brain className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <span className="font-bold text-white text-xl">Irfan Shaik</span>
            </a>
          </div>
          <nav className="flex flex-1 justify-center items-center space-x-8 text-sm font-medium">
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Contact"
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-all duration-300 hover:text-purple-300 relative ${
                  isMounted && activeSection === item.toLowerCase() ? "text-purple-300" : "text-white/80"
                }`}
              >
                {item}
                {isMounted && activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>
          {/* Resume button removed */}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container py-24 md:py-32 relative">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="profile.png"
                  alt="Irfan Shaik - AI & ML Engineer"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-purple-400/30 shadow-2xl group-hover:border-purple-400/50 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Irfan Shaik
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent blur-2xl opacity-30">
                  Irfan Shaik
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-xl text-purple-300 flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 animate-pulse" />
                  <span>AI & ML Engineer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <span>Data Science Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 animate-pulse" />
                  <span>Tech Innovator</span>
                </div>
              </div>
              <p className="text-lg text-white/70 max-w-[700px] leading-relaxed">
                Motivated B.Tech student specializing in AI/ML from CBIT, with proven experience in designing
                intelligent solutions. Passionate about applying AI to transform education, healthcare, and beyond.
              </p>
            </div>

            <div className="flex items-center space-x-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10"
              asChild
            >
              <a href="/portfolio/irfan_Resume.pdf" download="irfan_Resume.pdf">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/60 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-white/60 text-lg">Passionate about creating intelligent solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed text-lg">
                I'm a passionate AI & ML engineer with a strong foundation in machine learning, natural language
                processing, and full-stack development. Currently pursuing B.Tech in AI/ML from CBIT, I've already made
                significant contributions to the field through innovative projects and award-winning solutions.
              </p>
              <p className="text-white/70 leading-relaxed">
                My expertise spans across Python, machine learning algorithms, NLP frameworks like spaCy, and cloud
                technologies. I'm particularly interested in applying AI to solve real-world problems in education,
                healthcare, and government sectors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Education</p>
                    <p className="text-white/60 text-sm">B.Tech AI/ML, CBIT</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="text-white font-medium">Achievements</p>
                    <p className="text-white/60 text-sm">Multiple Certifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <img
                  src="placeholder.png"
                  alt="Irfan working on AI projects"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  AI Enthusiast
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse animation-delay-2000">
                  Creativity & Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-white/60 text-lg">Cutting-edge technologies and frameworks I work with</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <Card
                key={category}
                className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group"
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    {category === "Programming Languages" && <Code className="h-5 w-5 text-purple-400" />}
                    {category === "AI/ML & Data Science" && <Brain className="h-5 w-5 text-blue-400" />}
                    {category === "Cloud & Tools" && <Cloud className="h-5 w-5 text-green-400" />}
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white/90 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-purple-300 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 200 + index * 100}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Horizontal Scroll */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-white/60 text-lg">Innovative AI solutions solving real-world problems</p>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollLeft}
                className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-white/60 text-sm">Scroll to explore more projects</span>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollRight}
                className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "NLP.png"}
                      alt={project.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Project Icon */}
                    <div className="absolute top-4 left-4 p-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <project.icon className="h-5 w-5 text-white" />
                    </div>

                    <Badge
                      variant="secondary"
                      className={`absolute top-4 right-4 bg-gradient-to-r ${project.gradient} text-white border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white group-hover:text-purple-200 transition-colors text-lg">
                        {project.title}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/60 hover:text-purple-300 h-8 w-8"
                          asChild
                        >
                          <a href={project.github}>
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/60 hover:text-purple-300 h-8 w-8"
                          asChild
                        >
                          <a href={project.demo}>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-white/70 leading-relaxed text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-white/90 font-medium flex items-center text-sm">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-white/60 text-xs flex items-center">
                            <ChevronRight className="h-3 w-3 mr-2 text-purple-400 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-white/40 text-xs">+{project.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-purple-400/30 text-purple-300 px-2 py-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">Showing {projects.length} projects • More coming soon</p>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="container py-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-white/60 text-sm">{cert.issuer}</p>
                        </div>
                        <Award className="h-5 w-5 text-yellow-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <achievement.icon className="h-6 w-6 text-green-400 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-green-300 transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Education Journey
            </h3>
            <p className="text-white/60 text-lg">Academic foundation in AI/ML and Computer Science</p>
          </div>

          <div className="space-y-8">
            {/* B.Tech Education */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          B.Tech in Artificial Intelligence and Machine Learning
                        </h4>
                        <p className="text-purple-300 text-lg font-medium">
                          Chaitanya Bharathi Institute of Technology (CBIT), Proddatur
                        </p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                          2022 – 2026 (Expected)
                        </Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h5 className="text-white font-semibold mb-3 flex items-center">
                          <Brain className="h-4 w-4 mr-2 text-blue-400" />
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {["Machine Learning", "Data Science", "NLP", "AI Ethics"].map((course) => (
                            <Badge key={course} variant="outline" className="border-blue-400/30 text-blue-300">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-white font-semibold mb-3 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          Key Projects
                        </h5>
                        <ul className="space-y-1">
                          {[
                            "Diabetic Prediction System",
                            "NLP-Based Question Paper Generator",
                            "AI Mental Health Chatbot",
                          ].map((project, idx) => (
                            <li key={idx} className="text-white/70 text-sm flex items-center">
                              <ChevronRight className="h-3 w-3 mr-2 text-purple-400" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intermediate Education */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          Intermediate – M.P.C (Mathematics, Physics, Chemistry)
                        </h4>
                        <p className="text-green-300 font-medium">Sri Chaitanya Junior College, Kadapa</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 mt-2 lg:mt-0">
                        2020 – 2022
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Education */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Secondary School Certificate (10th Class)</h4>
                        <p className="text-orange-300 font-medium">Pushpagiri Residential Public School, Proddatur</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 mt-2 lg:mt-0">
                        2019 – 2020
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Highlights */}
          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-300 mb-2">4</div>
                <p className="text-white/70">Years of Study</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-300 mb-2">AI/ML</div>
                <p className="text-white/70">Specialization</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
                <div className="text-3xl font-bold text-green-300 mb-2">2026</div>
                <p className="text-white/70">Expected Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-20 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-white/60 text-lg">Building expertise through hands-on industry experience</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block"></div>

            <div className="space-y-12">
              {/* AWS Experience */}
              <div className="relative group">
                <div className="flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                            AI/ML Virtual Intern
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">AWS</span>
                              </div>
                              <span className="text-orange-300 font-semibold text-lg">Amazon Web Services (AWS)</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-white/60">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>Remote</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>June 2023 – August 2023</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 mt-4 lg:mt-0">
                          3 Months
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Built and deployed ML models using AWS SageMaker and Lambda",
                            "Worked with Amazon Rekognition for image classification tasks",
                            "Completed end-to-end ML pipeline on cloud platforms",
                          ].map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 group/item">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 group-hover:item:scale-150 transition-transform duration-300"></div>
                              <span className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {["AWS SageMaker", "Lambda", "Amazon Rekognition", "ML Pipeline", "Cloud Computing"].map(
                            (tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-orange-400/30 text-orange-300 hover:bg-orange-400/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Google Experience */}
              <div className="relative group">
                <div className="flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            AI/ML Virtual Intern
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">G</span>
                              </div>
                              <span className="text-blue-300 font-semibold text-lg">
                                Google (via TensorFlow & Qwiklabs)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-white/60">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>Remote</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>May 2023 – July 2023</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white border-0 mt-4 lg:mt-0">
                          3 Months
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-green-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Trained supervised and unsupervised models using TensorFlow",
                            "Implemented real-world ML workflows on Google Colab",
                            "Developed projects focusing on classification and clustering techniques",
                          ].map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 group/item">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:item:scale-150 transition-transform duration-300"></div>
                              <span className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {[
                            "TensorFlow",
                            "Google Colab",
                            "Supervised Learning",
                            "Unsupervised Learning",
                            "Classification",
                            "Clustering",
                          ].map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-blue-400/30 text-blue-300 hover:bg-blue-400/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bluestock Fintech Experience */}
              <div className="relative group">
                <div className="flex items-start space-x-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardContent className="p-8 relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            Team Lead & Backend Developer
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">BF</span>
                              </div>
                              <span className="text-purple-300 font-semibold text-lg">
                                Bluestock Fintech (Startup India Registered)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-white/60">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>Remote</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>April 2025 – June 2025</span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mt-4 lg:mt-0">
                          3 Months
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-white font-semibold flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-pink-400" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "Led a team to design and develop fintech solutions",
                            "Managed sprints and backend/API development",
                            "Gained hands-on experience in agile workflows, version control, and software architecture",
                          ].map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3 group/item">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 group-hover:item:scale-150 transition-transform duration-300"></div>
                              <span className="text-white/80 leading-relaxed group-hover/item:text-white transition-colors">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {[
                            "Agile",
                            "Backend Development",
                            "API Design",
                            "Version Control",
                            "Software Architecture",
                          ].map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Experience Summary */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-300 mb-2 group-hover:scale-110 transition-transform">
                  1+
                </div>
                <p className="text-white/70">Year Experience</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform">
                  2
                </div>
                <p className="text-white/70">Major Companies</p>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform">
                  AI&ML
                </div>
                <p className="text-white/70">Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Let's Build the Future Together
          </h2>
          <p className="text-white/70 mb-12 text-lg leading-relaxed">
            Ready to collaborate on innovative AI solutions? Let's connect and create something amazing!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:shaikirfanahamed87@email.com">
                <Mail className="h-5 w-5 mr-2" />
                shaikirfanahamed87@email.com
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-purple-300 hover:bg-purple-400/10 transform hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/shaikIrfan87">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-blue-300 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/shaikirfan87">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-sm text-white/60">
              © 2025 Irfan Shaik. Crafted with passion for AI innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
