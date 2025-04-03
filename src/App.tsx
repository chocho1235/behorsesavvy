import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, ChevronLeft, GraduationCap as Graduation, Award, BookOpen, ShoppingBag, ArrowLeft, 
  Star, Users, Calendar, Clock, CheckCircle2, Trophy, MessageCircle, Video, FileText, Laptop, Users as Horse, 
  Search, Quote, ZoomIn, ZoomOut, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [mobileView, setMobileView] = useState<'selection' | 'behorsesavvy' | 'pennyclub'>('selection');
  const [desktopFocus, setDesktopFocus] = useState<'none' | 'behorsesavvy' | 'pennyclub'>('none');

  const ImageCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        if (!isZoomed) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }, 5000);
      return () => clearInterval(timer);
    }, [images.length, isZoomed]);

    const handlePrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const toggleZoom = () => {
      setIsZoomed(!isZoomed);
    };

    return (
      <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={`w-full h-full transition-all duration-300 ${
                isZoomed 
                  ? 'object-cover cursor-zoom-out' 
                  : 'object-contain cursor-zoom-in'
              }`}
              onClick={toggleZoom}
              animate={{
                scale: isZoomed ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            {isZoomed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                onClick={toggleZoom}
              >
                <X size={24} />
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        {!isZoomed && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={toggleZoom}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <ZoomIn size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const BeHorseSavvyContent = () => {
    return (
      <div className="space-y-12 sm:space-y-16 py-8 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#1a1a1a] to-black">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B68D40] mb-8 sm:mb-12">Why Choose Our Online Platform?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Video, title: "HD Video Lessons", desc: "Crystal clear instruction with multiple camera angles" },
              { icon: Clock, title: "Learn at Your Pace", desc: "Access content 24/7, study when it suits you" },
              { icon: FileText, title: "Detailed Resources", desc: "Comprehensive study materials and guides" },
              { icon: MessageCircle, title: "Expert Support", desc: "Direct access to experienced instructors" },
              { icon: Laptop, title: "Multi-device Access", desc: "Learn on any device, anywhere" },
              { icon: CheckCircle2, title: "Track Progress", desc: "Monitor your development with assessments" }
            ].map((item, i) => (
              <div key={i} className="group bg-black/50 p-6 sm:p-8 rounded-xl border border-[#B68D40]/20 hover:border-[#B68D40] transition-all duration-500 hover:transform hover:scale-105">
                <item.icon className="text-[#B68D40] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500" size={28} />
                <h3 className="text-[#B68D40] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm sm:text-base group-hover:text-white transition-colors duration-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B68D40] mb-8 sm:mb-12">Course Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Beginner Fundamentals",
                desc: "Master the basics of horsemanship",
                lessons: 12,
                duration: "6 weeks"
              },
              {
                title: "Advanced Techniques",
                desc: "Refine your skills and expertise",
                lessons: 18,
                duration: "8 weeks"
              },
              {
                title: "Competition Preparation",
                desc: "Get ready for show success",
                lessons: 15,
                duration: "10 weeks"
              },
              {
                title: "Horse Care & Management",
                desc: "Essential knowledge for every equestrian",
                lessons: 20,
                duration: "12 weeks"
              }
            ].map((course, i) => (
              <div key={i} className="group bg-black/50 p-6 sm:p-8 rounded-xl border border-[#B68D40]/20 hover:border-[#B68D40] transition-all duration-500">
                <h3 className="text-[#B68D40] text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">{course.title}</h3>
                <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 group-hover:text-white transition-colors duration-500">{course.desc}</p>
                <div className="flex justify-between items-center text-white/50 text-sm sm:text-base group-hover:text-white/80 transition-colors duration-500">
                  <span className="flex items-center"><BookOpen className="mr-2" size={16} />{course.lessons} lessons</span>
                  <span className="flex items-center"><Clock className="mr-2" size={16} />{course.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B68D40] mb-8 sm:mb-12"
          >
            Student Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Emily Parker",
                role: "Online Student",
                quote: "The BeHorseSavvy platform has revolutionized how I learn about horsemanship. The video lessons are incredibly detailed, and being able to learn at my own pace has made all the difference. The support from instructors is outstanding."
              },
              {
                name: "David Miller",
                role: "Competition Rider",
                quote: "The competition preparation course gave me the edge I needed. The detailed breakdown of techniques and strategy has significantly improved my performance. The ability to review lessons multiple times is invaluable."
              },
              {
                name: "Sophie Williams",
                role: "Horse Owner",
                quote: "The horse care and management course has been eye-opening. I've learned so much about proper care techniques and preventative health measures. The course has made me a more confident and knowledgeable horse owner."
              },
              {
                name: "Alex Thompson",
                role: "Beginner Rider",
                quote: "Starting from zero knowledge, this platform made learning about horses accessible and enjoyable. The structured approach and supportive community have helped me progress faster than I expected."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-black/50 p-6 sm:p-8 rounded-xl border border-[#B68D40]/20 hover:border-[#B68D40] transition-all duration-500"
              >
                <div>
                  <Quote className="text-[#B68D40] mb-3 sm:mb-4 opacity-50" size={24} />
                  <motion.p 
                    className={`text-white/90 italic text-sm sm:text-base mb-3 sm:mb-4 group-hover:text-white transition-colors duration-500`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <div className="border-t border-[#B68D40]/10 pt-3 sm:pt-4 mt-3 sm:mt-4">
                    <h4 className="text-white text-sm sm:text-base font-semibold">{testimonial.name}</h4>
                    <p className="text-[#B68D40] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B68D40] mb-8 sm:mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Horsemanship Basics",
                date: "Start Anytime",
                level: "Beginner Friendly",
                price: "£299"
              },
              {
                title: "Show Jumping Mastery",
                date: "New Content Weekly",
                level: "Intermediate & Advanced",
                price: "£399"
              },
              {
                title: "Horse Care Essentials",
                date: "Lifetime Access",
                level: "All Levels",
                price: "£249"
              },
              {
                title: "Competition Strategy",
                date: "Monthly Updates",
                level: "Advanced",
                price: "£449"
              }
            ].map((course, i) => (
              <div key={i} className="group bg-black/50 p-6 sm:p-8 rounded-xl border border-[#B68D40]/20 hover:border-[#B68D40] transition-all duration-500">
                <h3 className="text-[#B68D40] text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                  {course.title}
                </h3>
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <p className="text-white/70 text-sm sm:text-base group-hover:text-white transition-colors duration-500">
                    {course.date}
                  </p>
                  <p className="text-white/50 text-sm sm:text-base group-hover:text-white/70 transition-colors duration-500">
                    {course.level}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#B68D40] text-lg sm:text-xl font-semibold">{course.price}</span>
                  <button className="bg-[#B68D40] text-black px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-[#9A7835] transition-all duration-300 transform group-hover:translate-x-2">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const PennyClubContent = () => {
    const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([]);
    
    const images = [
      {
        src: "https://i.ibb.co/Z1x90Y2H/22c1b149-ff83-46ac-8fcc-80295910e301.jpg",
        alt: "Challenge Awards Achievement - Bronze and Introduction to Horse Care certificates"
      },
      {
        src: "https://i.ibb.co/8gysTTkX/bc058fb6-e384-4dc8-a9af-5a51772857a0.jpg",
        alt: "Horse Riding Lesson"
      },
      {
        src: "https://i.ibb.co/pvFg8ddc/372ed90b-45bf-4897-9821-453bfbb0cee0.jpg",
        alt: "Dressage Training"
      },
      {
        src: "https://images.unsplash.com/photo-1594768816441-1dd241ffaa67",
        alt: "Show Jumping Training"
      }
    ];

    const toggleTestimonial = (index: number) => {
      setExpandedTestimonials(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    };

    return (
      <div className="space-y-12 sm:space-y-16 py-8 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#001845] to-[#00205B]">
        <section className="max-w-6xl mx-auto">
          <ImageCarousel images={images} />
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Horse, title: "Private Lessons", desc: "One-on-one instruction tailored to your needs" },
              { icon: Users, title: "Group Training", desc: "Learn alongside fellow enthusiasts" },
              { icon: Trophy, title: "Show Preparation", desc: "Get ready for competitions" },
              { icon: Star, title: "Specialised Clinics", desc: "Focus on specific disciplines" },
              { icon: Calendar, title: "Regular Events", desc: "Join our community activities" },
              { icon: CheckCircle2, title: "Assessment Days", desc: "Track your progress" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 p-6 sm:p-8 rounded-xl border border-white/20 hover:border-[#C8102E] transition-all duration-500 hover:transform hover:scale-105">
                <item.icon className="text-[#C8102E] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500" size={28} />
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm sm:text-base group-hover:text-white transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Thompson",
                role: "Amateur Show Jumper",
                quote: "The training at The Penny Club has transformed my riding. The attention to detail and personalised coaching has helped me achieve competition success I never thought possible. The instructors' dedication to each student's progress is truly remarkable, and the facilities are top-notch. I've seen incredible improvement in both my technique and my horse's performance."
              },
              {
                name: "Julie Taylor",
                role: "",
                quote: "Penny is the most enthusiastic trainer I've ever met, putting her heart and soul into everything she does. She's incredibly encouraging and works brilliantly with riders of all levels. She helped me tackle numerous challenges with my Welsh Section D, always keeping things fun and lighthearted even on difficult days. Beyond training, she organizes themed show jumping competitions for charity, creating a wonderful community atmosphere. When I faced health challenges and cancer treatment, Penny supported me not just as a trainer but as a friend, helping me return to riding. Her dedication to both her students and charitable causes makes her truly special."
              },
              {
                name: "Emma Roberts",
                role: "Youth Competitor",
                quote: "Starting my equestrian journey at The Penny Club was the best decision. The supportive environment and expert guidance have given me the confidence to compete at higher levels. The coaches' ability to break down complex movements into understandable steps has been invaluable."
              },
              {
                name: "Michael Chen",
                role: "Adult Learner",
                quote: "As a beginner, I was nervous about starting riding lessons, but the instructors here made me feel completely at ease. Their patience and expertise are unmatched. The progressive learning approach has helped me build confidence and skills at a comfortable pace."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/5 p-6 sm:p-8 rounded-xl border border-white/20 hover:border-[#C8102E] transition-all duration-500"
              >
                <div>
                  <Quote className="text-[#C8102E] mb-3 sm:mb-4 opacity-50" size={24} />
                  <motion.p 
                    className={`text-white/90 italic text-sm sm:text-base mb-3 sm:mb-4 group-hover:text-white transition-colors duration-500 ${!expandedTestimonials.includes(i) ? 'line-clamp-3' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  {testimonial.quote.length > 200 && (
                    <motion.button
                      onClick={() => toggleTestimonial(i)}
                      className="relative z-10 pointer-events-auto text-[#C8102E] hover:text-[#A00D24] transition-colors duration-300 text-sm font-medium mb-3 sm:mb-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedTestimonials.includes(i) ? 'Show Less' : 'View More'}
                    </motion.button>
                  )}
                  <div className="border-t border-white/10 pt-3 sm:pt-4 mt-3 sm:mt-4">
                    <h4 className="text-white text-sm sm:text-base font-semibold">{testimonial.name}</h4>
                    <p className="text-[#C8102E] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Summer Training Camp",
                date: "July 15-20, 2024",
                spots: "Limited spots available",
                price: "£499"
              },
              {
                title: "Show Jumping Clinic",
                date: "August 5-6, 2024",
                spots: "Intermediate & Advanced",
                price: "£199"
              },
              {
                title: "Dressage Workshop",
                date: "August 12, 2024",
                spots: "All levels welcome",
                price: "£150"
              },
              {
                title: "Cross Country Training",
                date: "August 19-20, 2024",
                spots: "Advanced riders only",
                price: "£250"
              }
            ].map((event, i) => (
              <div key={i} className="group bg-white/5 p-6 sm:p-8 rounded-xl border border-white/20 hover:border-[#C8102E] transition-all duration-500">
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-500">
                  {event.title}
                </h3>
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <p className="text-white/70 text-sm sm:text-base group-hover:text-white transition-colors duration-500">
                    {event.date}
                  </p>
                  <p className="text-white/50 text-sm sm:text-base group-hover:text-white/70 transition-colors duration-500">
                    {event.spots}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#C8102E] text-lg sm:text-xl font-semibold">{event.price}</span>
                  <button className="bg-[#C8102E] text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-[#A00D24] transition-all duration-300 transform group-hover:translate-x-2">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const MobileView = () => {
    if (mobileView === 'behorsesavvy') {
      return (
        <div className="lg:hidden min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a]">
          <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-lg p-4 sm:p-6 border-b border-[#B68D40]/20">
            <button 
              onClick={() => setMobileView('selection')}
              className="flex items-center text-[#B68D40] mb-4 sm:mb-6 hover:text-[#9A7835] transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </button>
            <div>
              <img 
                src="https://i.ibb.co/W4Y1CckC/485100798-1131021162370244-5394707563202930473-n-1.jpg" 
                alt="BeHorseSavvy Logo" 
                className="h-12 sm:h-16 w-auto mb-4 sm:mb-6"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#B68D40]">
              Online Learning Platform
            </h1>
          </div>

          <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            <div className="bg-black/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-[#B68D40]/20">
              <h3 className="text-[#B68D40] font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">Digital Courses</h3>
              <p className="text-white/70 text-sm sm:text-base">Access comprehensive equestrian education anytime, anywhere</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-[#B68D40] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#9A7835] transition-all duration-300 w-full shadow-lg hover:shadow-xl"
              >
                Start Learning
                <ChevronRight className="ml-2" size={18} />
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-black/50 text-[#B68D40] border-2 border-[#B68D40] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-black/70 transition-all duration-300 w-full"
              >
                Find Out More
                <ChevronRight className="ml-2" size={18} />
              </a>
            </div>
          </div>

          <BeHorseSavvyContent />
        </div>
      );
    }

    if (mobileView === 'pennyclub') {
      return (
        <div className="lg:hidden min-h-screen bg-gradient-to-br from-[#00205B] via-[#00205B] to-[#001845]">
          <div className="sticky top-0 z-10 bg-[#00205B]/90 backdrop-blur-lg p-4 sm:p-6 border-b border-white/10">
            <button 
              onClick={() => setMobileView('selection')}
              className="flex items-center text-white mb-4 sm:mb-6 hover:text-white/80 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </button>
            <div className="text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Penny Club</h2>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Expert Equestrian<br />Training & Coaching
              </h1>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center">
                    <Award className="text-[#C8102E] mr-3" size={24} />
                    <span className="text-white text-sm sm:text-base font-medium">SSADL & NCPA Panel Member</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center">
                    <Graduation className="text-[#C8102E] mr-3" size={24} />
                    <span className="text-white text-sm sm:text-base font-medium">BHS Accredited Coach</span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center">
                    <Award className="text-[#C8102E] mr-3" size={24} />
                    <span className="text-white text-sm sm:text-base font-medium">BSPS Course Builder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-[#C8102E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#A00D24] transition-all duration-300 w-full shadow-lg hover:shadow-xl"
              >
                Book an Event
                <ChevronRight className="ml-2" size={18} />
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-white text-[#00205B] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 w-full shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="mr-2" size={18} />
                View Our Merchandise
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center bg-[#00205B] text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#001845] transition-all duration-300 w-full"
              >
                Find Out More
                <ChevronRight className="ml-2" size={18} />
              </a>
            </div>
          </div>

          <PennyClubContent />
        </div>
      );
    }

    return (
      <div className="lg:hidden min-h-screen">
        <div 
          className="w-full h-[50vh] p-4 sm:p-6 bg-gradient-to-br from-black via-black to-[#1a1a1a] flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setMobileView('behorsesavvy')}
        >
          <img 
            src="https://i.ibb.co/W4Y1CckC/485100798-1131021162370244-5394707563202930473-n-1.jpg" 
            alt="BeHorseSavvy Logo" 
            className="h-20 sm:h-24 w-auto mb-3 sm:mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-[#B68D40] text-center">
            Online Learning Platform
          </h2>
        </div>

        <div 
          className="w-full h-[50vh] p-4 sm:p-6 bg-gradient-to-br from-[#00205B] via-[#00205B] to-[#001845] flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setMobileView('pennyclub')}
        >
          <Award className="text-[#C8102E] mb-3 sm:mb-4" size={40} />
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            The Penny Club
          </h2>
        </div>
      </div>
    );
  };

  const DesktopView = () => (
    <div className="hidden lg:block">
      <div className="flex flex-row min-h-screen">
        <div className={`relative overflow-y-auto bg-gradient-to-br from-black via-black to-[#1a1a1a] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_50%,rgba(182,141,64,0.1),transparent_50%)] transition-all duration-700 ${
          desktopFocus === 'behorsesavvy' ? 'w-full' : desktopFocus === 'pennyclub' ? 'w-0 opacity-0' : 'w-1/2'
        }`}>
          <button
            onClick={() => setDesktopFocus(desktopFocus === 'behorsesavvy' ? 'none' : 'behorsesavvy')}
            className="absolute top-4 right-4 z-20 bg-[#B68D40] text-black p-3 rounded-full hover:bg-[#9A7835] transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Search size={24} className={`transition-transform duration-300 ${desktopFocus === 'behorsesavvy' ? 'rotate-90' : 'rotate-0'}`} />
          </button>
          <div className="relative h-screen flex flex-col justify-between p-8 sm:p-12 transition-all duration-700">
            <div>
              <img 
                src="https://i.ibb.co/W4Y1CckC/485100798-1131021162370244-5394707563202930473-n-1.jpg" 
                alt="BeHorseSavvy Logo" 
                className="h-24 sm:h-32 w-auto mb-6 sm:mb-8"
              />
            </div>
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#B68D40]">
                Online Learning Platform
              </h1>
              <div className="bg-black/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-[#B68D40]/20 hover:border-[#B68D40] transition-all duration-500">
                <BookOpen className="text-[#B68D40] mb-3 sm:mb-4" size={28} />
                <h3 className="text-[#B68D40] font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">Digital Courses</h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Access comprehensive equestrian education anytime, anywhere
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-[#B68D40] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#9A7835] transition-all duration-300 transform hover:translate-x-2 w-full shadow-lg hover:shadow-xl"
                >
                  Start Learning
                  <ChevronRight className="ml-2" size={18} />
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-black/50 text-[#B68D40] border-2 border-[#B68D40] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-black/70 transition-all duration-300 transform hover:translate-x-2 w-full"
                >
                  Find Out More
                  <ChevronRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700">
            <BeHorseSavvyContent />
          </div>
        </div>

        <div className={`relative overflow-y-auto bg-gradient-to-br from-[#00205B] via-[#00205B] to-[#001845] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_70%_50%,rgba(200,16,46,0.1),transparent_50%)] transition-all duration-700 ${
          desktopFocus === 'pennyclub' ? 'w-full' : desktopFocus === 'behorsesavvy' ? 'w-0 opacity-0' : 'w-1/2'
        }`}>
          <button
            onClick={() => setDesktopFocus(desktopFocus === 'pennyclub' ? 'none' : 'pennyclub')}
            className="absolute top-4 left-4 z-20 bg-[#C8102E] text-white p-3 rounded-full hover:bg-[#A00D24] transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Search size={24} className={`transition-transform duration-300 ${desktopFocus === 'pennyclub' ? 'rotate-90' : 'rotate-0'}`} />
          </button>
          <div className="relative h-screen flex flex-col justify-between p-8 sm:p-12 transition-all duration-700">
            <div className="text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">The Penny Club</h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Expert Equestrian<br />Training & Coaching
                </h1>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20 hover:border-[#C8102E] transition-all duration-500">
                    <div className="flex items-center">
                      <Award className="text-[#C8102E] mr-3" size={24} />
                      <span className="text-white text-sm sm:text-base font-medium">SSADL & NCPA Panel Member</span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20 hover:border-[#C8102E] transition-all duration-500">
                    <div className="flex items-center">
                      <Graduation className="text-[#C8102E] mr-3" size={24} />
                      <span className="text-white text-sm sm:text-base font-medium">BHS Accredited Coach</span>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm border border-white/20 hover:border-[#C8102E] transition-all duration-500">
                    <div className="flex items-center">
                      <Award className="text-[#C8102E] mr-3" size={24} />
                      <span className="text-white text-sm sm:text-base font-medium">BSPS Course Builder</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-[#C8102E] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#A00D24] transition-all duration-300 transform hover:translate-x-2 w-full shadow-lg hover:shadow-xl"
                >
                  Book an Event
                  <ChevronRight className="ml-2" size={18} />
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-white text-[#00205B] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2 w-full shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  View Our Merchandise
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center bg-[#00205B] text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover:bg-[#001845] transition-all duration-300 transform hover:translate-x-2 w-full"
                >
                  Find Out More
                  <ChevronRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700">
            <PennyClubContent />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
}

export default App;