import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, GraduationCap, School, Trophy, Award } from "lucide-react";
import { useInView } from "framer-motion";

const educationData = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Engineering (B.E.) - Information Technology",
    duration: "2022 - 2026",
    cgpa: "",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-600",
    additionalDetails: [
      "Major in Information Technology",
      "Active participant in technical clubs and hackathons",
      "Consistent academic performer with strong focus on emerging technologies",
      "Core courses include Data Structures, Software Engineering, Cloud Computing, and Artificial Intelligence"
    ]
  },
  {
    institution: "Kendriya Vidyalaya AFS Avadi Chennai",
    degree: "10th Standard - CBSE",
    duration: "2018 - 2020",
    icon: School,
    color: "from-purple-500 to-indigo-600",
    additionalDetails: [
      "Active in school's sports and cultural activities",
      "Participated in regional and school-level competitions",
      "Developed strong foundational skills in mathematics and science"
    ]
  },
  {
    institution: "Kendriya Vidyalaya AFS Avadi Chennai",
    degree: "12th Standard - CBSE",
    duration: "2020 - 2022",
    icon: School,
    color: "from-amber-500 to-orange-600",
    additionalDetails: [
      "Participated in varsity basketball and football teams",
      "Demonstrated leadership skills through team sports",
      "Engaged in extracurricular activities focused on innovation and creativity"
    ]
  },
  {
    institution: "Joint Entrance Examination (JEE)",
    degree: "Engineering Entrance Exam",
    duration: "July 2022",
    score: "71.9490896 Percentile",
    icon: Award,
    color: "from-green-500 to-emerald-600"
  }
];

export function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="education" className="section-padding relative" ref={sectionRef}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-12 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">04.</span> Education
        </h2>
        
        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-400 before:to-transparent">
          {educationData.map((item, index) => (
            <div key={index} className={cn(
              "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 opacity-0 translate-y-10 transition-all duration-700",
              `delay-${index * 200 + 300}`,
              isInView && "opacity-100 translate-y-0"
            )}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-odd:md:translate-x-[175%] group-even:md:-translate-x-[175%] shadow-md text-slate-200">
                <item.icon className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-0.5">
                <Card className={cn(
                  "overflow-hidden border-none shadow-2xl transform transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1",
                  "bg-gradient-to-br from-navy/80 to-light-navy/50 backdrop-blur-md"
                )}>
                  <div className={cn(
                    "h-2 w-full bg-gradient-to-r", 
                    item.color
                  )}></div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-lightest-slate tracking-tight">{item.institution}</h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-teal/20 text-teal">
                        {item.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg text-lightest-slate/90 font-medium">{item.degree}</p>
                    
                    {item.cgpa && (
                      <p className="flex items-center mt-2 text-slate">
                        <Medal className="w-4 h-4 mr-2 text-teal" />
                        <span>CGPA: {item.cgpa}</span>
                      </p>
                    )}

                    {item.score && (
                      <p className="flex items-center mt-2 text-slate">
                        <Trophy className="w-4 h-4 mr-2 text-teal" />
                        <span>Score: {item.score}</span>
                      </p>
                    )}
                    
                    {item.additionalDetails && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-lightest-slate">Additional Details:</p>
                        <ul className="mt-1 space-y-1">
                          {item.additionalDetails.map((detail, i) => (
                            <li key={i} className="text-sm text-slate flex">
                              <span className="text-teal mr-2">▹</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
