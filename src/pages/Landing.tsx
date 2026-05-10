import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { professionList } from "@/data/professions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, FileText, Zap } from "lucide-react";

export default function Landing() {
  useEffect(() => {
    document.title = "CareerLaunch | ATS-Friendly Resume Builder";
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background no-print">
      
      {/* Navbar */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>CareerLaunch</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link href="/templates">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 font-serif">
                Build an <span className="text-primary">ATS-Friendly</span><br />Resume in Minutes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                A calm, premium tool designed specifically for students, freshers, and internship applicants. Stand out to recruiters and pass the automated screens.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-8 text-base rounded-full" asChild>
                  <Link href="/templates">
                    Create Your Resume <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Free forever, no signup required
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professions Grid */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">Tailored for Your Field</h2>
              <p className="text-muted-foreground">Select your profession to get smart suggestions, relevant action verbs, and tailored project ideas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionList.map((prof, i) => (
                <motion.div
                  key={prof.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/builder/${prof.id}`}>
                    <div className="bg-card hover:border-primary/50 border border-border rounded-2xl p-6 transition-all hover:shadow-md cursor-pointer group h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <prof.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{prof.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">Get custom bullet points and skills designed specifically for {prof.name.toLowerCase()} roles.</p>
                      <div className="text-primary font-medium text-sm flex items-center">
                        Start Building <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 font-serif">How It Works</h2>
              <p className="text-muted-foreground">Three simple steps to a professional, interview-ready resume.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-3">Choose Your Path</h3>
                <p className="text-muted-foreground">Select your targeted profession to unlock smart suggestions and tailored content.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-3">Fill & Preview</h3>
                <p className="text-muted-foreground">Add your details or use our one-click sample data. Watch your resume update in real-time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-3">Download PDF</h3>
                <p className="text-muted-foreground">Export your ATS-friendly resume as a perfect PDF, ready to send to recruiters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-serif">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg">What does ATS-friendly mean?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ATS (Applicant Tracking System) software reads your resume before a human does. Our templates are designed with clean formatting, standard headings, and no complex graphics, ensuring parsing robots can read your information perfectly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">Is my data saved anywhere?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. CareerLaunch is completely client-side. Your data never leaves your browser. It is not saved to any database, ensuring 100% privacy and security.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">Can I change templates later?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! You can seamlessly switch between our Minimal Modern, Professional Corporate, and Student Fresher templates at any time without losing your data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-lg">Is it completely free?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, 100% free. No paywalls, no watermarks, no sign-ups required.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <Sparkles className="w-4 h-4 text-primary" /> CareerLaunch
          </div>
          <p className="text-sm">Built for students and freshers. No data collection, ever.</p>
        </div>
      </footer>
    </div>
  );
}
