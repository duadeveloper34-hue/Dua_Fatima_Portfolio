// app/components/Hero.js
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-surface text-primary font-medium text-sm">
                Creative Developer & Designer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Crafting Digital</span>
              <span className="block text-gradient">Experiences</span>
              <span className="block">That Inspire</span>
            </h1>
            
            <p className="text-lg text-text-muted mb-8 max-w-2xl">
              I create beautiful, functional digital experiences with a focus on 
              clean design, smooth interactions, and cutting-edge technology. 
              Welcome to my portfolio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark transition-colors duration-200"
              >
                View Projects
                <FiArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/Dua_Ali_CV_2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-surface transition-colors duration-200 font-medium"
              >
                <FiDownload className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
          
          {/* Hero Image - Apni Image Lagane ka Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative glass-effect rounded-3xl overflow-hidden border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                {/* Apni Image Yahan Lagayen */}
                <div className="aspect-square relative">
                  {/* Agar apke pas actual image hai */}
                  <Image
                    src="/duapic.jpg" // Apni image ka path dijiye
                    alt="Your Name - Portfolio"
                    fill
                    className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Ya agar image nahi hai to placeholder */}
                  {/* 
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-secondary rounded-3xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <span className="text-5xl font-bold text-background">AS</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-2">Your Name</h3>
                      <p className="text-primary font-medium">Full Stack Developer</p>
                    </div>
                  </div>
                  */}
                </div>
                
                {/* Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-background/90 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center p-y-7 p-x-6">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-text-muted">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">35+</div>
                      <div className="text-sm text-text-muted">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-text-muted">Years</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl font-bold text-primary">💻</span>
              </div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-lg font-bold text-accent">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}