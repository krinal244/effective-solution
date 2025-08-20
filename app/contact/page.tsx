"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Zap, ArrowRight, Menu, X, MapPin, Phone, Mail, Clock, Send, MessageSquare, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
    if (res.ok) {
      setStatus("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("Error sending message.")
    }
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-max">
              <div className="w-25 h-12 rounded-lg flex items-center justify-center">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl text-foreground">Effective Solution</h1>
                <p className="text-xs text-muted-foreground">One Touch IT Solution</p>
              </div>
            </div>
            <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/testimonials" className="text-foreground hover:text-accent transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar (shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <aside className="absolute right-0 top-0 h-full w-11/12 max-w-xs bg-card shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif font-bold text-lg">Effective Solution</h2>
                {/* <p className="text-sm text-muted-foreground">Effective Solution</p> */}
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-muted/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                About
              </Link>
              <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                Services
              </Link>
              <Link href="/testimonials" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                Testimonials
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-foreground">
                Contact
              </Link>
            </nav>

            {/* <div className="mt-6 space-y-3">
              <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(false)} className="w-full">
                Get Quote
              </Button>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Button>
            </div> */}
          </aside>
        </div>
      )}

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

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row max-w-4xl mx-auto bg-card rounded-xl shadow-xl overflow-hidden">
              {/* Left Image */}
              <div className="md:w-1/2 w-full h-64 md:h-auto">
                <img src="/contact-office-modern.png" alt="Contact Image" className="w-full h-full object-cover" />
              </div>
              {/* Right Contact Info & Form */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                <h2 className="font-serif font-bold text-3xl mb-6 text-foreground">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50 focus:outline-none focus:ring-2 focus:ring-accent text-base text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50 focus:outline-none focus:ring-2 focus:ring-accent text-base text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50 focus:outline-none focus:ring-2 focus:ring-accent text-base resize-none min-h-[120px] max-h-[120px] overflow-y-auto text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium text-base hover:bg-accent/90 transition-colors w-full md:w-auto"
                  >
                    Contact Us
                  </button>
                  {status && <p className="text-sm mt-2 text-muted-foreground">{status}</p>}
                </form>
                <div className="mt-8 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Contact:</strong> info@effectivesolution.in
                  </p>
                  <p>
                    <strong className="text-foreground">Based in:</strong> Gujarat, India
                  </p>
                </div>
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
                {["Dedicated Hosting", "Cloud Hosting", "Shared Hosting", "VPS Hosting", "Managed Hosting", "Colocation"].map((service, index) => (
                  <li key={index}>
                    <a href="https://effectivehosting.in/" className="text-primary-foreground/80 hover:text-accent transition-colors">
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
                {/* <p className="text-primary-foreground/80">+91 84697 09902</p> */}
                <p className="text-primary-foreground/80">Email - info@effectivesolution.in</p>
                {/* WhatsApp button positioned at bottom right */}
                
                <div className="mt-4 md:mt-0">
                  <a
                    href="https://wa.me/9824453231?text=Hello%20Effective%20Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 group w-fit"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageCircle size={20} className="group-hover:animate-pulse" />
                    <span className="font-medium">Chat on WhatsApp</span>
                  </a>
                </div>
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
