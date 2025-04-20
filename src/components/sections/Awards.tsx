import { Trophy, Award, Star, BookOpen, Code, Rocket, PresentationIcon } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

const awards = [
  {
    title: "Hack Summit 2025 - 1st Place",
    organization: "AI for Robotics Track, Plaksha University",
    date: "2025",
    description: "Led Team Black Falcon to victory, building an AI-driven robotics solution. Won ₹12,000 cash prize among 73 participating teams.",
    icon: Trophy,
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "$175 Scholarship",
    organization: "MetaCrafters Internship - Web3 & Blockchain",
    date: "2024",
    description: "Received scholarship (approx. ₹14,000 INR) for outstanding performance in Web3 and Blockchain development courses in the Chandigarh Program.",
    icon: Award,
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    title: "4th Place in GenAI Study Jams",
    organization: "Google Developer Groups (GDG CU)",
    date: "2024",
    description: "Ranked 4th in the Generative AI Study Jams, mastering Vertex AI, Streamlit, Cloud Vision API, and Google Cloud Functions.",
    icon: Star,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Certificate of Excellence",
    organization: "Bharat Intern - Data Science",
    date: "2024",
    description: "Awarded Certificate of Excellence for exceptional performance during Data Science Internship at Bharat Intern.",
    icon: BookOpen,
    gradient: "from-purple-500 to-pink-500"
  }
];

const achievements = [
  {
    title: "AI for Impact APAC Hackathon",
    organization: "Google Cloud & Hack2skill",
    date: "2024",
    description: "Participated as Foreman of Team Knight Owls, developing MedVision, an AI-driven healthcare platform using Google Cloud services.",
    icon: Rocket,
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "Hacktoberfest 2024 Contributor",
    organization: "DigitalOcean & Appwrite",
    date: "2024",
    description: "Completed four accepted pull requests (PRs) including contributions to open-source projects.",
    icon: Code,
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "Technical Presentation Winner",
    organization: "Chandigarh University Tech Fest",
    date: "2023",
    description: "Won first prize in technical presentation for innovative project proposal on AI-driven agricultural solutions.",
    icon: PresentationIcon,
    gradient: "from-green-400 to-emerald-500"
  }
];

export function Awards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section id="awards" className="section-padding relative overflow-hidden pb-8" ref={sectionRef}>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">05.</span> Awards & Achievements
        </h2>
        
        <div className={cn(
          "opacity-0 translate-y-10 transition-all duration-700 delay-300",
          isInView && "opacity-100 translate-y-0"
        )}>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[...awards, ...achievements].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-gradient-to-br from-light-navy/10 to-navy/5 dark:from-light-navy/30 dark:to-navy/20 rounded-lg p-6 hover:shadow-xl transition-all duration-500 border border-transparent group",
                  "hover:border-white/10",
                  "transform hover:-translate-y-2"
                )}
              >
                <div className="flex">
                  <div className={cn(
                    "mr-4 min-w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r",
                    item.gradient
                  )}>
                    <item.icon size={24} className="text-navy transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lightest-slate font-bold text-xl">{item.title}</h3>
                      <p className="text-slate text-sm">{item.date}</p>
                    </div>
                    <p className="text-teal font-mono text-sm mb-2">{item.organization}</p>
                    <p className="text-slate">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
