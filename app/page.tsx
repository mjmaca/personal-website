"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, MapPin, ExternalLink, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEmailClick = () => {
    window.location.href =
      "mailto:macamichaelgeorge@gmail.com?subject=Let's work together&body=Hi Michael, I'd like to discuss a project opportunity with you."
  }

  const handleGithubClick = () => {
    window.open("https://github.com/mjmaca", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-serif">MG</div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-colors ${
                      activeSection === item.id ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span className="text-muted-foreground">Hello! I Am </span>
                <span className="text-accent">Michael George Maca</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-6">
                A Frontend Developer who <span className="text-primary">Crafts Digital</span>{" "}
                <span className="text-accent">Experiences</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Qualified and professional frontend developer with four years of experience. Strong creative and
                analytical skills with an eye for detail and team collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("experience")}
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <img
                      src="/professional-developer-avatar.png"
                      alt="Michael George Maca"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold animate-pulse">
                  Available for hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              I'm a <span className="text-primary">Frontend Developer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Currently working as a Fullstack Web Developer at OHMYHOME, creating meaningful and delightful digital
              products that create an equilibrium between user needs and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Calamba, Laguna</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>macamichaelgeorge@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-accent" />
                  <span>github.com/mjmaca</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold">BS Computer Engineering</h4>
                <p className="text-muted-foreground">Laguna College of Business and Arts</p>
                <p className="text-sm text-accent">2015 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center mb-12">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React JS",
              "Next JS",
              "Node JS",
              "Express JS",
              "WordPress",
              "PHP/Laravel",
              "Progressive Web App",
              "FlutterFlow",
              "MySQL",
              "PostgreSQL",
              "NoSQL",
              "API Integration",
              "Git",
              "Bootstrap",
              "Ant Design",
              "MUI",
              "Tailwind CSS",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="p-3 text-center justify-center bg-card border-border hover:border-accent transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center mb-12">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="space-y-8">
            {/* Current Role */}
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Fullstack Web Developer</h3>
                    <p className="text-accent font-medium">OHMYHOME</p>
                  </div>
                  <Badge variant="outline" className="border-accent text-accent w-fit">
                    Oct 2024 - Present
                  </Badge>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Improving system performance and code maintainability</li>
                  <li>• Efficient collaboration with designers, backend teams, and project managers</li>
                  <li>• Delivering high-quality, functional applications that meet user requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Previous Full-time Roles */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <p className="text-primary font-medium">Primetop</p>
                  </div>
                  <Badge variant="secondary">Jan 2023 - July 2024</Badge>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Created software solutions for clients, including inventory and construction systems</li>
                  <li>• Translated UX designs into functional user interfaces</li>
                  <li>• Responsible for various React JS development tasks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <p className="text-primary font-medium">Lead Tech Industrial Solutions Corporation</p>
                  </div>
                  <Badge variant="secondary">Aug 2022 - Apr 2023</Badge>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Developed software to track production items and monitor manufacturing processes</li>
                  <li>• Maintained company website and internal systems</li>
                  <li>• Implemented monitoring solutions for industrial equipment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Project-Based Work Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold font-serif mb-6 text-center">
                Project-Based <span className="text-primary">Experience</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">WordPress Developer</h4>
                        <p className="text-primary font-medium">Samuel Digital</p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        May 2021 - Aug 2021
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      Developed website for flooring construction agency to generate more leads
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        WordPress
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        GeneratePress
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">React JS Developer</h4>
                        <p className="text-primary font-medium">Primetop</p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        Dec 2020 - Apr 2021
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      Developed web app for remote construction project management
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Firebase
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Node.js
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">Web Developer</h4>
                        <p className="text-primary font-medium">PEOPLED</p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        Sep 2021 - Nov 2021
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      Built recruitment agency website for HR and talent solutions
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        HTML/CSS
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        JavaScript
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">WordPress Developer</h4>
                        <p className="text-primary font-medium">SOPA</p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        Sep 2021 - Nov 2021
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      Developed loyalty and data-focused marketing platform for Southeast Asia
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        WordPress
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Elementor
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">WordPress Developer</h4>
                        <p className="text-primary font-medium">Criqle</p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        Jan 2022 - Mar 2022
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      Developed SaaS platform for assisted senior care living across different US states
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        WordPress
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Elementor
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-center mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">💪</span>
                    </div>
                    <p className="text-sm font-medium">Gym Management App</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gym Session Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  Mobile application built with FlutterFlow that allows gym owners to track client sessions, manage
                  memberships, and monitor workout progress in real-time.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">FlutterFlow</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Mobile</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-accent hover:text-accent-foreground hover:bg-accent"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/construction-management-webapp.png"
                    alt="Construction Management System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Construction Management System</h3>
                <p className="text-muted-foreground mb-4">
                  Web application for managing construction projects remotely, providing clear auditing visibility for
                  schedule and budget constraints.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-accent hover:text-accent-foreground hover:bg-accent"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/inventory-dashboard.png"
                    alt="Inventory Management System"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inventory Management System</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive inventory tracking solution with real-time updates and analytics for business
                  operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Express</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-accent hover:text-accent-foreground hover:bg-accent"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm currently looking to join a cross-functional team that values improving people's lives through
            accessible design and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEmailClick}>
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={handleGithubClick}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">macamichaelgeorge@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Calamba, Laguna</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm">github.com/mjmaca</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Michael George Maca. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
