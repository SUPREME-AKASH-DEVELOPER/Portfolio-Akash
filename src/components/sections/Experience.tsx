import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

const experiences = [
  {
    company: "Hack Summit 2025 at Plaksha University",
    position: "Team Lead - Team Black Falcon",
    duration: "March 2025",
    description: [
      "Led Team Black Falcon to 1st place in the AI for Robotics track at Hack Summit 2025",
      "Built an AI-driven robotics solution aimed at solving real-world problems with efficiency and scalability",
      "Developed the FOD Detection Drone System that achieved 92% accuracy in identifying small objects",
      "Won a ₹12,000 cash prize, exclusive merchandise, and invaluable experience in a high-stakes environment",
      "Collaborated with teammates Harsh Panday and Anjali Aggarwal to create innovative solutions in AI and robotics"
    ]
  },
  {
    company: "AI for Impact APAC Hackathon 2024 by Google Cloud",
    position: "Foreman - Team Knight Owls",
    duration: "February 2024",
    description: [
      "Served as Foreman of Team Knight Owls in the Google Cloud AI for Impact APAC Hackathon",
      "Developed MedVision, a cloud-based AI platform that assists healthcare workers globally",
      "Utilized Google Cloud services including Vertex AI, AutoML, and BigQuery ML",
      "Collaborated with teammates on creating accessible and impactful diagnostic tools",
      "Gained practical experience with Google Cloud AI tools and techniques through workshops and mentorship"
    ]
  },
  {
    company: "MetaCrafters",
    position: "Blockchain Development Intern",
    duration: "June 2024 - September 2024",
    description: [
      "Completed an intensive internship focused on Web3 and Blockchain development at Chandigarh University in collaboration with Metacrafters",
      "Worked on hands-on projects in courses such as JS PROOF, ETH PROOF, ETH + AVAX PROOF, and AVAX/Poly PROOF",
      "Developed decentralized applications (dApps) and smart contracts on Ethereum, gaining expertise in blockchain security and reliability",
      "Gained hands-on experience with Ethereum, Polygon, and Avalanche ecosystems",
      "Earned a $175 scholarship (around ₹14,000 INR) for outstanding performance"
    ]
  },
  {
    company: "Bharat Intern",
    position: "Data Science Intern",
    duration: "January 2024 - February 2024",
    description: [
      "Successfully completed a Data Science internship at Bharat Intern",
      "Gained hands-on experience in data analysis, machine learning, and real-world problem-solving",
      "Worked on projects focused on data visualization and statistical analysis",
      "Received Certificate of Excellence for exceptional performance",
      "Built a strong foundation in data science principles and methodologies"
    ]
  },
  {
    company: "GDG CU",
    position: "GenAI Study Jams Participant",
    duration: "January 2024",
    description: [
      "Secured 4th place in the Generative AI Study Jams organized by Google Developer Groups (GDG CU)",
      "Successfully completed 15 advanced hands-on activities, including mastering Vertex AI, Streamlit, Cloud Vision API, and Google Cloud Functions",
      "Explored key concepts in Prompt Design, AI App Development, and Cloud Networking to gain practical expertise",
      "Received an Elite Certificate of Achievement recognizing dedication and understanding of cutting-edge AI technologies",
      "Developed skills in Generative AI and Google Cloud Computing through practical application"
    ]
  },
  {
    company: "Hacktoberfest 2024",
    position: "Open Source Contributor",
    duration: "October 2024",
    description: [
      "Completed four accepted pull requests (PRs) during Hacktoberfest 2024",
      "Contributed to multiple open-source projects including a Python calculator, to-do list application, and weather comparator",
      "Developed a custom button component in JavaScript for an open-source UI library",
      "Created CRUD operations scripts for efficient data management",
      "Earned multiple badges on Holopin for open-source contributions and community participation"
    ]
  },
];

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container relative z-10 py-16">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-12 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">05.</span> Experience
        </h2>
        
        <div className={cn(
          "flex flex-col md:flex-row gap-8 max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-300",
          isInView && "opacity-100 translate-y-0"
        )}>
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-none mb-6 md:mb-0 md:min-w-[140px]">
            {experiences.map((experience, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-4 py-3 text-sm font-mono whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all",
                  activeTab === i
                    ? "text-teal border-teal bg-gradient-to-r from-teal/10 to-transparent dark:from-teal/20 dark:to-transparent"
                    : "text-slate border-lightest-navy/20 hover:text-teal hover:border-teal/40 hover:bg-light-navy/5"
                )}
              >
                {experience.company.split(' ')[0]}
              </button>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-light-navy/10 to-navy/5 dark:from-light-navy/30 dark:to-navy/20 rounded-lg p-6 flex-1 backdrop-blur-sm border border-teal/10 hover:border-teal/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <div>
              <h3 className="text-lightest-slate font-bold text-xl">
                {experiences[activeTab].position}{" "}
                <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-slate font-mono text-sm mb-4">{experiences[activeTab].duration}</p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((point, i) => (
                  <li key={i} className="flex text-slate group">
                    <span className="text-teal mr-2 mt-1 transform group-hover:rotate-90 transition-transform duration-300">▹</span>
                    <span className="group-hover:text-lightest-slate transition-colors duration-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
