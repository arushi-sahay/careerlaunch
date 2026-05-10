import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "wouter";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResumeForm } from "@/hooks/useResumeForm";
import { professions } from "@/data/professions";
import { SmartSuggestions } from "@/components/SmartSuggestions";
import { ResumeScore } from "@/components/ResumeScore";
import { MinimalModern } from "@/components/ResumeTemplates/MinimalModern";
import { ProfessionalCorporate } from "@/components/ResumeTemplates/ProfessionalCorporate";
import { StudentFresher } from "@/components/ResumeTemplates/StudentFresher";
import { ArrowLeft, FileDown, LayoutTemplate, Lightbulb, Trash2, Wand2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Builder() {
  const { profession: professionId } = useParams();
  const profession = professionId ? professions[professionId] : null;
  const { theme, setTheme } = useTheme();

  const { form, formData, score, loadSampleData, setValue } = useResumeForm(professionId || "software-engineering");
  const [activeTemplate, setActiveTemplate] = useState<"minimal" | "corporate" | "fresher">("minimal");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const closeSuggestions = useCallback(() => setShowSuggestions(false), []);
  const toggleSuggestions = useCallback(() => setShowSuggestions(prev => !prev), []);

  useEffect(() => {
    document.title = `Builder | CareerLaunch`;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSuggestions();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSuggestions]);

  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({ control: form.control, name: "education" });
  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control: form.control, name: "experience" });
  const { fields: projFields, append: appendProj, remove: removeProj } = useFieldArray({ control: form.control, name: "projects" });
  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control: form.control, name: "skills" });
  const { fields: certFields, append: appendCert, remove: removeCert } = useFieldArray({ control: form.control, name: "certifications" });
  const { fields: achFields, append: appendAch, remove: removeAch } = useFieldArray({ control: form.control, name: "achievements" });

  if (!profession) {
    return <div className="p-10 text-center">Profession not found. <Link href="/templates" className="text-primary underline">Go back</Link></div>;
  }

  const handlePrint = () => {
    window.print();
  };

  const handleAddSkillFromSuggestion = (skill: string) => {
    // Only add if it doesn't exist
    if (!formData.skills.some(s => s.name.toLowerCase() === skill.toLowerCase())) {
      appendSkill({ id: crypto.randomUUID(), name: skill });
    }
  };

  const handleAddBulletFromSuggestion = (bullet: string) => {
    // For simplicity, we just add a new experience block if none exist, or append to the first one's description
    if (expFields.length === 0) {
      appendExp({ id: crypto.randomUUID(), company: "Company Name", position: "Role", startDate: "Start", endDate: "End", description: "• " + bullet });
    } else {
      const currentDesc = form.getValues(`experience.0.description`);
      form.setValue(`experience.0.description`, currentDesc ? `${currentDesc}\n• ${bullet}` : `• ${bullet}`);
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      {/* Navbar (no-print) */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <Link href="/templates"><ArrowLeft className="mr-2 w-4 h-4" /> Back</Link>
            </Button>
            <div className="font-semibold text-lg flex items-center gap-2 border-l pl-4 border-border ml-2">
              <profession.icon className="w-5 h-5 text-primary" />
              {profession.name} Resume
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={loadSampleData} className="hidden sm:flex">
              <Wand2 className="mr-2 w-4 h-4" /> Fill Sample Data
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button onClick={handlePrint} size="sm">
              <FileDown className="mr-2 w-4 h-4" /> Export PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Editor Panel (no-print) */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col border-r border-border bg-muted/20 no-print h-[calc(100vh-64px)]">
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            
            <div className="mb-6">
              <ResumeScore score={score} />
            </div>

            <Form {...form}>
              <form className="space-y-8">
                
                {/* Personal Info */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm space-y-4">
                  <h2 className="text-lg font-semibold border-b border-border pb-2">Personal Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem className="col-span-full">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input {...field} placeholder="John Doe" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input {...field} type="email" placeholder="john@example.com" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl><Input {...field} placeholder="(555) 123-4567" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="linkedin" render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn URL</FormLabel>
                        <FormControl><Input {...field} placeholder="https://linkedin.com/in/johndoe" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="portfolio" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio/GitHub URL</FormLabel>
                        <FormControl><Input {...field} placeholder="https://github.com/johndoe" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                {/* Education */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <h2 className="text-lg font-semibold">Education</h2>
                    <Button type="button" variant="outline" size="sm" onClick={() => appendEdu({ id: crypto.randomUUID(), institution: "", degree: "", startDate: "", endDate: "", gpa: "" })}>Add Education</Button>
                  </div>
                  {eduFields.map((field, index) => (
                    <div key={field.id} className="relative p-4 border border-border rounded-lg bg-muted/30 space-y-3">
                      <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:bg-destructive/10" onClick={() => removeEdu(index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <FormField control={form.control} name={`education.${index}.institution`} render={({ field }) => (
                        <FormItem><FormLabel>Institution</FormLabel><FormControl><Input {...field} placeholder="University Name" /></FormControl></FormItem>
                      )} />
                      <FormField control={form.control} name={`education.${index}.degree`} render={({ field }) => (
                        <FormItem><FormLabel>Degree & Major</FormLabel><FormControl><Input {...field} placeholder="B.S. Computer Science" /></FormControl></FormItem>
                      )} />
                      <div className="grid grid-cols-3 gap-3">
                        <FormField control={form.control} name={`education.${index}.startDate`} render={({ field }) => (
                          <FormItem><FormLabel>Start</FormLabel><FormControl><Input {...field} placeholder="Aug 2020" /></FormControl></FormItem>
                        )} />
                        <FormField control={form.control} name={`education.${index}.endDate`} render={({ field }) => (
                          <FormItem><FormLabel>End</FormLabel><FormControl><Input {...field} placeholder="May 2024" /></FormControl></FormItem>
                        )} />
                        <FormField control={form.control} name={`education.${index}.gpa`} render={({ field }) => (
                          <FormItem><FormLabel>GPA (Optional)</FormLabel><FormControl><Input {...field} placeholder="3.8/4.0" /></FormControl></FormItem>
                        )} />
                      </div>
                    </div>
                  ))}
                  {eduFields.length === 0 && <p className="text-sm text-muted-foreground italic text-center py-4">No education added yet.</p>}
                </div>

                {/* Experience */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <h2 className="text-lg font-semibold">Experience</h2>
                    <Button type="button" variant="outline" size="sm" onClick={() => appendExp({ id: crypto.randomUUID(), company: "", position: "", startDate: "", endDate: "", description: "" })}>Add Experience</Button>
                  </div>
                  {expFields.map((field, index) => (
                    <div key={field.id} className="relative p-4 border border-border rounded-lg bg-muted/30 space-y-3">
                      <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:bg-destructive/10" onClick={() => removeExp(index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <FormField control={form.control} name={`experience.${index}.position`} render={({ field }) => (
                          <FormItem><FormLabel>Job Title</FormLabel><FormControl><Input {...field} placeholder="Software Engineer Intern" /></FormControl></FormItem>
                        )} />
                        <FormField control={form.control} name={`experience.${index}.company`} render={({ field }) => (
                          <FormItem><FormLabel>Company</FormLabel><FormControl><Input {...field} placeholder="Tech Corp" /></FormControl></FormItem>
                        )} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <FormField control={form.control} name={`experience.${index}.startDate`} render={({ field }) => (
                          <FormItem><FormLabel>Start</FormLabel><FormControl><Input {...field} placeholder="Jun 2023" /></FormControl></FormItem>
                        )} />
                        <FormField control={form.control} name={`experience.${index}.endDate`} render={({ field }) => (
                          <FormItem><FormLabel>End</FormLabel><FormControl><Input {...field} placeholder="Present" /></FormControl></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name={`experience.${index}.description`} render={({ field }) => (
                        <FormItem><FormLabel>Description & Achievements</FormLabel><FormControl><Textarea {...field} className="min-h-[100px]" placeholder="• Developed X using Y&#10;• Improved Z by 20%" /></FormControl></FormItem>
                      )} />
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <h2 className="text-lg font-semibold">Projects</h2>
                    <Button type="button" variant="outline" size="sm" onClick={() => appendProj({ id: crypto.randomUUID(), title: "", description: "", technologies: "", link: "" })}>Add Project</Button>
                  </div>
                  {projFields.map((field, index) => (
                    <div key={field.id} className="relative p-4 border border-border rounded-lg bg-muted/30 space-y-3">
                      <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:bg-destructive/10" onClick={() => removeProj(index)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <FormField control={form.control} name={`projects.${index}.title`} render={({ field }) => (
                          <FormItem><FormLabel>Project Title</FormLabel><FormControl><Input {...field} placeholder="E-commerce App" /></FormControl></FormItem>
                        )} />
                        <FormField control={form.control} name={`projects.${index}.technologies`} render={({ field }) => (
                          <FormItem><FormLabel>Technologies</FormLabel><FormControl><Input {...field} placeholder="React, Node.js" /></FormControl></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name={`projects.${index}.link`} render={({ field }) => (
                        <FormItem><FormLabel>Project Link (Optional)</FormLabel><FormControl><Input {...field} placeholder="https://github.com/..." /></FormControl></FormItem>
                      )} />
                      <FormField control={form.control} name={`projects.${index}.description`} render={({ field }) => (
                        <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} placeholder="Built a full-stack app that..." /></FormControl></FormItem>
                      )} />
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="bg-card p-5 rounded-xl border border-border shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <h2 className="text-lg font-semibold">Skills</h2>
                    <Button type="button" variant="outline" size="sm" onClick={() => appendSkill({ id: crypto.randomUUID(), name: "" })}>Add Skill</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-1 bg-muted rounded-md p-1 pl-2">
                        <FormField control={form.control} name={`skills.${index}.name`} render={({ field: inputField }) => (
                          <input {...inputField} className="bg-transparent border-none text-sm w-24 focus:outline-none" placeholder="Skill" />
                        )} />
                        <Button type="button" variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-destructive" onClick={() => removeSkill(index)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            </Form>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-full lg:w-[55%] xl:w-[60%] bg-muted/40 relative flex flex-col h-[calc(100vh-64px)] print:h-auto print:w-full print:bg-white print:p-0 overflow-hidden">

          {/* Template Switcher (no-print) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background/80 backdrop-blur border border-border shadow-sm p-1 rounded-full no-print flex items-center">
            <LayoutTemplate className="w-4 h-4 text-muted-foreground ml-3 mr-2" />
            <Tabs value={activeTemplate} onValueChange={(v: any) => setActiveTemplate(v)} className="w-[300px]">
              <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
                <TabsTrigger value="minimal" className="rounded-full text-xs">Minimal</TabsTrigger>
                <TabsTrigger value="corporate" className="rounded-full text-xs">Corporate</TabsTrigger>
                <TabsTrigger value="fresher" className="rounded-full text-xs">Fresher</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Suggestions Toggle Button (no-print) */}
          <Button
            variant={showSuggestions ? "default" : "outline"}
            size="sm"
            onClick={toggleSuggestions}
            data-testid="button-toggle-suggestions"
            className="absolute top-4 right-4 z-20 no-print gap-2 shadow-sm"
            aria-expanded={showSuggestions}
            aria-controls="suggestions-panel"
          >
            <Lightbulb className="w-4 h-4" />
            <span className="hidden sm:inline">Suggestions</span>
          </Button>

          {/* Backdrop — click to close (no-print) */}
          {showSuggestions && (
            <div
              className="absolute inset-0 z-20 bg-black/20 no-print"
              onClick={closeSuggestions}
              aria-hidden="true"
            />
          )}

          {/* Slide-over Suggestions Panel (no-print) */}
          <div
            id="suggestions-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Smart Suggestions"
            className={[
              "absolute inset-y-0 right-0 z-30 no-print",
              "w-full sm:w-[340px]",
              "border-l border-border shadow-2xl",
              "flex flex-col",
              "transition-transform duration-300 ease-in-out",
              showSuggestions ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
          >
            <SmartSuggestions
              profession={profession}
              onAddSkill={handleAddSkillFromSuggestion}
              onAddBullet={handleAddBulletFromSuggestion}
              onClose={closeSuggestions}
            />
          </div>

          {/* Resume Rendering Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 pb-20 custom-scrollbar flex justify-center items-start print:p-0 print:overflow-visible print:block print:m-0">
            <div className="origin-top w-full max-w-[794px] print:transform-none print:w-full print:max-w-none transition-all">
              <div className="print-only hidden"></div>
              <div className="shadow-2xl print:shadow-none bg-white">
                {activeTemplate === "minimal" && <MinimalModern data={formData} />}
                {activeTemplate === "corporate" && <ProfessionalCorporate data={formData} />}
                {activeTemplate === "fresher" && <StudentFresher data={formData} />}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
