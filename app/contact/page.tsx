"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Zap, ArrowRight, Menu, X, MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .reveal-mask, .slide-mask",
    )
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div> */}
              <div className="w-25 h-12 rounded-lg flex items-center justify-center">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </div>
              <div>
                <h1 className="font-serif font-bold text-xl text-foreground">Effective Solution</h1>
                <p className="text-xs text-muted-foreground">One Touch IT Solution</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="/#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="/testimonials" className="text-foreground hover:text-accent transition-colors">
                Testimonials
              </a>
              <a href="/contact" className="text-accent font-medium">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Get Quote
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 float-animation hero-badge-mask">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight mb-6 hero-title-mask">
              Let's Build Something
              <span className="gradient-text"> Amazing Together</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed hero-description-mask max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge IT solutions? Our team of experts is here to help you
              every step of the way. Get in touch today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      {/* <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div className="fade-in-left reveal-mask">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="font-serif font-bold text-2xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="dedicated-hosting">Dedicated Hosting</option>
                        <option value="cloud-hosting">Cloud Hosting</option>
                        <option value="vps-hosting">VPS Hosting</option>
                        <option value="managed-hosting">Managed Hosting</option>
                        <option value="shared-hosting">Shared Hosting</option>
                        <option value="colocation">Colocation</option>
                        <option value="consultation">IT Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div> */}

            {/* Contact Information */}
            {/* <div className="fade-in-right reveal-mask">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif font-bold text-2xl mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We're here to help you succeed. Whether you need technical support, want to discuss a new project,
                    or have questions about our services, our team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Visit Our Office",
                      content: "S-1 Akash Complex, Satellite, Ahmedabad Gujarat, India",
                      color: "bg-blue-500/10 text-blue-600",
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+91 84697 09902",
                      color: "bg-green-500/10 text-green-600",
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "info@effectivesolution.in",
                      color: "bg-purple-500/10 text-purple-600",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM IST\nSaturday: 10:00 AM - 4:00 PM IST",
                      color: "bg-orange-500/10 text-orange-600",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3">Need Immediate Support?</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent technical issues or emergencies, our support team is available 24/7.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Emergency Support <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          {/* </div>
        </div>
      </section> */} 
      {/* Map Section */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 fade-in-up reveal-mask">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-4">Find Us</h2>
            <p className="text-muted-foreground">Located in the heart of Ahmedabad's technology district</p>
          </div>

          <div className="fade-in-up reveal-mask">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-96 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would be embedded here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    S-1 Akash Complex, Satellite, Ahmedabad Gujarat, India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

   

      {/* Contact Info Flex Box */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <div className="flex-1 bg-card rounded-xl shadow-lg p-6 flex items-center gap-4 fade-in-up reveal-mask animate transition-all duration-700">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                <p className="text-foreground text-sm">S-1 Akash Complex, Satellite, Ahmedabad Gujarat, India.</p>
              </div>
            </div>
            <div className="flex-1 bg-card rounded-xl shadow-lg p-6 flex items-center gap-4 fade-in-up reveal-mask animate transition-all duration-700" style={{ animationDelay: "0.2s" } as React.CSSProperties}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                <p className="text-foreground text-sm">+91 84697 09902</p>
              </div>
            </div>
            <div className="flex-1 bg-card rounded-xl shadow-lg p-6 flex items-center gap-4 fade-in-up reveal-mask animate transition-all duration-700" style={{ animationDelay: "0.4s" } as React.CSSProperties}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <p className="text-foreground text-sm">info@effectivesolution.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                {/* <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div> */}
                <div className="w-25 h-12 rounded-lg flex items-center justify-center">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl">Effective Solution</h3>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                We provide reliable, secure, and high-performance hosting solutions tailored for businesses, developers,
                and creators.
              </p>
            </div>

            <div className="fade-in-up">
              <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/#services" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in-up">
              <h4 className="font-serif font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {["Dedicated Hosting", "Cloud Hosting", "VPS Hosting", "Managed Hosting"].map((service, index) => (
                  <li key={index}>
                    <a href="/#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in-up">
              <h4 className="font-serif font-bold text-lg mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <p className="text-primary-foreground/80">S-1 Akash Complex, Satellite, Ahmedabad Gujarat, India.</p>
                <p className="text-primary-foreground/80">+91 84697 09902</p>
                <p className="text-primary-foreground/80">Email - info@effectivesolution.in</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="text-primary-foreground/60">All Rights Reserved © 2025 EFFECTIVE SOLUTION.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
