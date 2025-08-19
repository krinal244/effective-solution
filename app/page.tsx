"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Database,
  Settings,
  Server,
  Cloud,
  Globe,
  Building,
  Zap,
  Users,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
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

    const handleScroll = () => {
      const scrolled = window.pageYOffset

      const layer1Elements = document.querySelectorAll(".depth-layer-1:not(.hero-layer)")
      const layer2Elements = document.querySelectorAll(".depth-layer-2:not(.hero-layer)")
      const layer3Elements = document.querySelectorAll(".depth-layer-3:not(.hero-layer)")

      layer1Elements.forEach((el) => {
        ;(el as HTMLElement).style.transform = `translateY(${scrolled * 0.2}px)`
      })

      layer2Elements.forEach((el) => {
        ;(el as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`
      })

      layer3Elements.forEach((el) => {
        ;(el as HTMLElement).style.transform = `translateY(${scrolled * 0.8}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center"> */}
                {/* <Zap className="w-6 h-6 text-accent-foreground" /> */}
                <div className="w-25 h-12 rounded-lg flex items-center justify-center">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </div>
              {/* </div> */}
              <div>
                <h1 className="font-serif font-bold text-xl text-foreground">Effective Solution</h1>
                <p className="text-xs text-muted-foreground">One Touch IT Solution</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
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
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-text-mask">
              <Badge variant="secondary" className="mb-6 float-animation hero-badge-mask">
                <Zap className="w-4 h-4 mr-2" />
                Premium IT Solutions
              </Badge>
              <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight mb-6 hero-title-mask">
                Your Trusted
                <span className="gradient-text"> IT Solution</span> Management
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed hero-description-mask">
                Effective Solution is a leading Information Technology (IT) company, specializing in innovative computer
                services and cutting-edge products. Our mission is to empower small, medium, and large enterprises to
                thrive in the digital era by delivering scalable, efficient, and secure IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-buttons-mask">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </div>
            </div>

            <div className="hero-image-mask">
              <div className="relative">
                <img
                  src="/modern-it-infrastructure.png"
                  alt="IT Infrastructure"
                  className="w-full h-auto rounded-2xl shadow-2xl hero-main-image"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border float-animation hero-card-mask">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">99.9% Uptime</p>
                      <p className="text-sm text-muted-foreground">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 depth-layer-1">
          <div className="absolute inset-0 bg-[url('/abstract-network-pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 fade-in-up reveal-mask">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6">
              Click Here for Effective Hosting Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of hosting solutions designed to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Dedicated Hosting",
                description:
                  "Enjoy full control and top tier performance with dedicated hosting. Ideal for high traffic websites and resource intensive applications.",
                features: ["Full Server Control", "High Performance", "24/7 Support"],
              },
              {
                icon: Users,
                title: "Shared Hosting",
                description:
                  "A budget-friendly option for small websites and beginners. Shared hosting places multiple websites on a single server, making it easy to manage.",
                features: ["Cost Effective", "Easy Management", "Perfect for Beginners"],
              },
              {
                icon: Settings,
                title: "Managed Hosting",
                description:
                  "Let the experts handle the technical side. Managed hosting gives you peace of mind with automatic updates, security patches, server monitoring, and full support.",
                features: ["Automatic Updates", "Security Monitoring", "Expert Support"],
              },
              {
                icon: Cloud,
                title: "Cloud Hosting",
                description:
                  "Scale effortlessly with cloud hosting. Powered by a network of virtual servers, this solution delivers high availability, flexibility, and performance.",
                features: ["High Availability", "Scalable Resources", "Flexible Pricing"],
              },
              {
                icon: Database,
                title: "VPS Hosting",
                description:
                  "Get the best of both worlds with Virtual Private Server (VPS) hosting. It offers the power and control of a dedicated server with the affordability of shared hosting.",
                features: ["Dedicated Resources", "Root Access", "Cost Effective"],
              },
              {
                icon: Building,
                title: "Colocation",
                description:
                  "House your own servers in a secure, high-performance data center. Colocation hosting provides robust physical infrastructure, redundant connectivity.",
                features: ["Secure Data Center", "Redundant Connectivity", "Physical Infrastructure"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="fade-in-up group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg slide-mask"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/5 rounded-full blur-xl depth-layer-2 float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl depth-layer-1 float-animation"
          style={{ animationDelay: "2s" } as React.CSSProperties}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 fade-in-up slide-mask">
            <Badge variant="secondary" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6">Why Choose Us</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "End-to-End Security",
                description:
                  "From endpoint protection to compliance consulting. Trusted by businesses for reliability and performance",
              },
              {
                icon: Database,
                title: "Cloud Services Management",
                description:
                  "Expert handling of Linux and Windows servers. Tailored to your industry and specific needs",
              },
              {
                icon: Settings,
                title: "Custom IT Solutions",
                description:
                  "Our expert team is available around the clock to help you with any issue, ensuring peace of mind and uninterrupted service.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center fade-in-up group reveal-mask"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-primary text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-network-pattern.png')] opacity-10 depth-layer-2"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl depth-layer-1 float-animation"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl depth-layer-3 float-animation"
            style={{ animationDelay: "3s" } as React.CSSProperties}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 fade-in-up slide-mask">
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6 text-white">Let The Numbers Speak</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Satisfied Clients us and continues" },
              { number: "650+", label: "Hosting's Served" },
              { number: "32+", label: "Websites Designed and Secured" },
              { number: "60+", label: "Managed Infrastructure Client" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center scale-in reveal-mask"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <div className="text-4xl lg:text-6xl font-serif font-bold mb-2 text-white">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 depth-layer-1">
          <div className="absolute top-20 right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl float-animation"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 fade-in-up reveal-mask">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "BRIM",
                role: "Director",
                content:
                  "Excellent service and uptime. My website has never run smoother, and their support team is always quick to respond.",
                avatar: "/avatar-1.png",
              },
              {
                name: "HCP Interior Design",
                role: "Director",
                content:
                  "Fast, secure, and reliable hosting. I moved from another provider and immediately noticed the difference in speed.",
                avatar: "/interior-designer-headshot.png",
              },
              {
                name: "Show My Parking",
                role: "Director",
                content:
                  "Very satisfied with the performance and support. The setup was easy, and everything works exactly as promised",
                avatar: "/parking-director-headshot.png",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in-up border-0 shadow-lg slide-mask"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 depth-layer-1">
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
                and creators. From shared and cloud hosting to dedicated servers and 24/7 support, we're here to help
                you succeed online.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "facebook", href: "#" },
                  { icon: "twitter", href: "#" },
                  { icon: "instagram", href: "#" },
                  { icon: "linkedin", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="fade-in-up">
              <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Contact Us"].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.toLowerCase()}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in-up">
              <h4 className="font-serif font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {["Dedicated Hosting", "Cloud Hosting", "VPS Hosting", "Managed Hosting"].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.toLowerCase()}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {service}
                    </Link>
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
