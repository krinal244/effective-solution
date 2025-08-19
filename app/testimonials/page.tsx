"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, Menu, X, Star, Quote } from "lucide-react"
import { useState } from "react"

export default function TestimonialsPage() {
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
              <a href="/testimonials" className="text-accent font-medium">
                Testimonials
              </a>
              <a href="/contact" className="text-foreground hover:text-accent transition-colors">
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

      {/* Mobile sidebar (shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
          <aside className="absolute right-0 top-0 h-full w-11/12 max-w-xs bg-card shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif font-bold text-lg">Menu</h2>
                <p className="text-sm text-muted-foreground">Effective Solution</p>
              </div>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-muted/50">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="text-foreground">Home</a>
              <a href="/about" onClick={() => setIsMenuOpen(false)} className="text-foreground">About</a>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-foreground">Services</a>
              <a href="/testimonials" onClick={() => setIsMenuOpen(false)} className="text-foreground">Testimonials</a>
              <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-foreground">Contact</a>
            </nav>

            <div className="mt-6 space-y-3">
              <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(false)} className="w-full">Get Quote</Button>
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
            </div>
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
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight mb-6 hero-title-mask">
              What Our
              <span className="gradient-text"> Clients Say</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed hero-description-mask max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the businesses and professionals who trust Effective Solution
              for their IT infrastructure and hosting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "BRIM",
                role: "Director",
                company: "BRIM Solutions",
                content:
                  "Excellent service and uptime. My website has never run smoother, and their support team is always quick to respond. The migration process was seamless, and we've seen a 40% improvement in loading speeds.",
                avatar: "/avatar-1.png",
                rating: 5,
                industry: "Technology Solutions",
              },
              {
                name: "HCP Interior Design",
                role: "Director",
                company: "HCP Interior Design",
                content:
                  "Fast, secure, and reliable hosting. I moved from another provider and immediately noticed the difference in speed. Our client portfolio site now loads instantly, and we've had zero downtime in 8 months.",
                avatar: "/interior-designer-headshot.png",
                rating: 5,
                industry: "Interior Design",
              },
              {
                name: "Show My Parking",
                role: "Director",
                company: "Show My Parking",
                content:
                  "Very satisfied with the performance and support. The setup was easy, and everything works exactly as promised. Their managed hosting service has saved us countless hours of technical maintenance.",
                avatar: "/parking-director-headshot.png",
                rating: 5,
                industry: "Parking Solutions",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in-up border-0 shadow-lg slide-mask hover:shadow-xl transition-all duration-300 group"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-accent">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 fade-in-up reveal-mask">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-6">More Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Tech Innovators Ltd",
                role: "CTO",
                content:
                  "Effective Solution's cloud hosting has been a game-changer for our startup. Scalable, reliable, and cost-effective.",
                avatar: "/professional-cto-headshot.png",
                industry: "Software Development",
              },
              {
                name: "Green Energy Corp",
                role: "IT Manager",
                content:
                  "Their managed hosting service freed up our team to focus on core business. Excellent proactive monitoring and support.",
                avatar: "/female-it-manager-headshot.png",
                industry: "Renewable Energy",
              },
              {
                name: "Digital Marketing Pro",
                role: "Founder",
                content:
                  "Outstanding performance and uptime. Our client campaigns run smoothly thanks to their reliable infrastructure.",
                avatar: "/professional-male-founder-headshot.png",
                industry: "Digital Marketing",
              },
              {
                name: "E-commerce Solutions",
                role: "Operations Director",
                content:
                  "Seamless integration and excellent customer service. Our online store has never been more stable and fast.",
                avatar: "/professional-female-operations-director.png",
                industry: "E-commerce",
              },
              {
                name: "Healthcare Systems",
                role: "IT Director",
                content:
                  "Security and compliance are top-notch. Perfect for our healthcare data requirements with HIPAA compliance.",
                avatar: "/placeholder-hp8z5.png",
                industry: "Healthcare",
              },
              {
                name: "Educational Institute",
                role: "Technology Coordinator",
                content:
                  "Reliable hosting for our learning management system. Students and faculty love the improved performance.",
                avatar: "/placeholder-ldxfr.png",
                industry: "Education",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="fade-in-up border-0 shadow-lg slide-mask hover:shadow-xl transition-all duration-300"
                style={{ "--stagger": index } as React.CSSProperties}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-accent">{testimonial.role}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-primary text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/abstract-network-pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto fade-in-up reveal-mask">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-6 text-white">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              Experience the same level of service and reliability that our clients rave about. Start your journey with
              Effective Solution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
                Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
              >
                Contact Sales
              </Button>
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
