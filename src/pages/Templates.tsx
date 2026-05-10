import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { professionList } from "@/data/professions";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function Templates() {
  useEffect(() => {
    document.title = "Choose Template & Profession | CareerLaunch";
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background no-print">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span>CareerLaunch</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Home</Link>
          </Button>
        </div>
      </nav>

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4 font-serif">What's your profession?</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your field to unlock smart suggestions, tailored bullet points, and customized skills for your resume builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionList.map((prof) => (
            <Link href={`/builder/${prof.id}`} key={prof.id}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <prof.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{prof.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Tailored for entry-level and internship positions in this field.</p>
                <div className="mt-auto flex items-center text-primary font-medium">
                  Select <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
