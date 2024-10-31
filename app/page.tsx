import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from 'profile.jpg'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">Arwindhraj KG</h1>
              <p className="text-xl text-muted-foreground">
                Artificial Intelligence Engineer with hands-on experience in
                developing AI-driven solutions for industrial applications and
                academic projects.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:arwindh64@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://github.com/Arwindhraj"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/arwindh-raj-0155b621a/"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src={profilePic}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-lg animate-slide-up">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Project Intern</h3>
                  <p className="text-muted-foreground">
                    Bi-metal Bearings Limited
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  DEC 2023 - FEB 2024
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Successfully implemented five Machine Vision Systems</li>
                <li>
                  Engineered a system to detect missing features in metal pieces
                  using OpenCV and Mitsubishi PLC
                </li>
                <li>
                  Developed an AI-driven Vision Inspection System for Surface
                  Defects
                </li>
                <li>Deployed both systems on the production line</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <ProjectCard
              title="Visgenix - Facial Attendance System"
              description="AI-based face detection and attendance logging system using Raspberry Pi and Firebase"
              tech={["Python", "OpenCV", "Firebase", "Qt"]}
            />
            <ProjectCard
              title="Pothole Detection using Jetson Nano"
              description="Real-time pothole detection system utilizing TensorRT-optimized object detection"
              tech={["Python", "TensorRT", "GPS", "Web Development"]}
            />
            <ProjectCard
              title="Attention Assist System for Drivers"
              description="Real-time driver drowsiness monitoring using Jetson Nano and MediaPipe"
              tech={["Python", "MediaPipe", "Computer Vision"]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory
              title="Programming Languages"
              skills={["C", "Python", "JavaScript"]}
            />
            <SkillCategory
              title="Operating Systems & Hardware"
              skills={["Linux", "Windows", "Jetson kits", "Raspberry Pi"]}
            />
            <SkillCategory
              title="Frameworks"
              skills={["PyTorch", "TensorFlow"]}
            />
            <SkillCategory
              title="Platform & Tools"
              skills={[
                "Azure",
                "GCP",
                "Git",
                "Docker",
                "VS Code",
                "Hugging Face",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-muted-foreground">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
