
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { Send, Mail, PhoneCall, MapPin, Laptop, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export function Contact() {
  const { toast } = useToast();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Add your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Add your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'akashlakhwan2329@gmail.com',
        },
        'YOUR_PUBLIC_KEY' // Add your EmailJS public key
      );

      if (response.status === 200) {
        setFormStatus('success');
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });
        
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="section-padding relative pt-0" ref={sectionRef}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">06.</span> Contact
        </h2>
        
        <div className="flex flex-col items-center mb-8">
          <h3 className={cn(
            "text-4xl font-bold text-center bg-gradient-to-r from-teal via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 opacity-0 translate-y-10 transition-all duration-700 delay-200",
            isInView && "opacity-100 translate-y-0"
          )}>
            Get In Touch
          </h3>
          
          <p className={cn(
            "text-slate text-center max-w-xl mb-8 opacity-0 translate-y-10 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-10 opacity-0 translate-y-10 transition-all duration-700 delay-400",
          isInView && "opacity-100 translate-y-0"
        )}>
          <div className="bg-gradient-to-br from-light-navy/30 to-navy/20 backdrop-blur-md rounded-lg p-8 border border-white/5 hover:border-teal/20 transition-all duration-300 h-full">
            <h3 className="text-xl font-bold text-lightest-slate mb-6 flex items-center">
              <span className="bg-teal/20 text-teal p-3 rounded-lg mr-3">
                <MapPin className="w-5 h-5" />
              </span>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mr-4">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lightest-slate font-medium">Phone</h4>
                  <p className="text-slate">+91 7206357472</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lightest-slate font-medium">Email</h4>
                  <p className="text-slate">Primary: akashlakhwan2329@gmail.com</p>
                  <p className="text-slate">Secondary: badalakki11@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lightest-slate font-medium">Location</h4>
                  <p className="text-slate">Mohali, Punjab, India - 140413</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mr-4">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lightest-slate font-medium">Available For</h4>
                  <p className="text-slate">Freelance, Full-time opportunities, Collaborations</p>
                </div>
              </div>
            </div>
            
            <Button
              className="bg-teal hover:bg-teal/90 text-white font-medium py-6 px-8 rounded-lg w-full mt-8 group"
              size="lg"
              asChild
            >
              <a href="mailto:akashlakhwan2329@gmail.com" className="flex items-center justify-center">
                Drop Me an Email
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-navy/30 to-light-navy/20 backdrop-blur-md rounded-lg p-8 border border-white/5 hover:border-teal/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-lightest-slate mb-6 flex items-center">
              <span className="bg-teal/20 text-teal p-3 rounded-lg mr-3">
                <Send className="w-5 h-5" />
              </span>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lightest-slate mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-navy/20 text-lightest-slate focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lightest-slate mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-navy/20 text-lightest-slate focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-lightest-slate mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-navy/20 text-lightest-slate focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lightest-slate mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-navy/20 text-lightest-slate focus:border-teal focus:ring-1 focus:ring-teal focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className={cn(
                  "bg-teal hover:bg-teal/90 text-white font-medium py-6 px-8 rounded-lg w-full",
                  "flex items-center justify-center transition-all duration-300",
                  formStatus === 'sending' && "opacity-70 cursor-not-allowed"
                )}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
              
              {formStatus === 'success' && (
                <div className="flex items-start p-4 rounded-lg bg-green-500/20 text-green-500 mt-4">
                  <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Your message was sent successfully!</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="flex items-start p-4 rounded-lg bg-red-500/20 text-red-500 mt-4">
                  <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Failed to send message. Please try again or email me directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
