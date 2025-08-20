"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Zap, ArrowRight, Menu, X, Award, Target, Heart, MessageCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
              <Building className="w-4 h-4 mr-2" />
              About Effective Solution
            </Badge>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight mb-6 hero-title-mask">
              Empowering Businesses Through
              <span className="gradient-text"> Technology Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed hero-description-mask max-w-3xl mx-auto">
              Since our inception, Effective Solution has been at the forefront of digital transformation, helping
              businesses of all sizes navigate the complex world of technology with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-6">Building Digital Futures Since Day One</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Effective Solution was founded with a simple yet powerful vision: to make cutting-edge technology
                accessible to businesses of all sizes. What started as a small team of passionate IT professionals has
                grown into a trusted partner for hundreds of companies worldwide.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and an obsession
                with customer success. We've evolved from a local IT service provider to a comprehensive technology
                solutions company, always staying ahead of industry trends and emerging technologies.
              </p>
              {/* <Button size="lg" className="bg-accent hover:bg-accent/90">
                Learn More About Our Journey <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
            </div>
            <div>
              <img src="/modern-office-collaboration.png" alt="Our Team" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Foundation
            </Badge>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6">Mission, Vision & Values</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To empower businesses with innovative, reliable, and scalable IT solutions that drive growth, enhance efficiency, and create competitive advantages in the digital marketplace.",
                color: "bg-blue-500/10 text-blue-600",
              },
              {
                icon: Award,
                title: "Our Vision",
                description:
                  "To be the leading technology partner that transforms how businesses operate, innovate, and succeed in an increasingly connected world through cutting-edge solutions and exceptional service.",
                color: "bg-green-500/10 text-green-600",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Integrity, innovation, excellence, and customer-centricity guide everything we do. We believe in building lasting partnerships based on trust, transparency, and mutual success.",
                color: "bg-purple-500/10 text-purple-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="fade-in-up border-0 shadow-lg slide-mask hover:shadow-xl transition-all duration-300"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6">Meet Our Experts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of technology professionals brings decades of combined experience and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Chief Technology Officer",
                image: "/indian-male-cto.png",
                expertise: "Cloud Architecture, DevOps",
              },
              {
                name: "Priya Sharma",
                role: "Lead Security Engineer",
                image: "/placeholder-c123.png",
                expertise: "Cybersecurity, Compliance",
              },
              {
                name: "Amit Patel",
                role: "Infrastructure Manager",
                image: "/indian-male-infrastructure-manager.png",
                expertise: "Server Management, Networking",
              },
              {
                name: "Sneha Gupta",
                role: "Customer Success Lead",
                image: "/indian-female-customer-success-manager.png",
                expertise: "Client Relations, Support",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="fade-in-up border-0 shadow-lg slide-mask hover:shadow-xl transition-all duration-300 group"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-serif font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
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
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3 group"
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
