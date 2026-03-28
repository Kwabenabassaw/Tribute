import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Users, Church, BookOpen, ChevronDown, Quote, Clock, MapPin, UserCheck, Star, Home } from 'lucide-react';
import './index.css';
import img from './assets/flyer.jpg'



export default function App() {
  const [activeTribute, setActiveTribute] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Tribute Data
  const tributes = [
    {
      id: 'family',
      title: 'Tribute from the Family',
      subtitle: 'Asona Abusua',
      icon: <Home className="w-6 h-6 mb-2" />,
      content: [
        "Late Paul Kwabena Kankam and late Martha Dwomoh gave birth to Stephen Kankam on 4th August, 1964.",
        "Today, we gather with heavy hearts to honor and celebrate the life of our beloved brother, uncle, father and everything to this family.",
        "The Bible says; in 2 Timothy 4:7 “ I have fought the good fight, I have finished the good race, I have kept the faith.”",
        "Stephen Kankam (we used to call him KWAME Opoku by birth name).",
        "He started his education at M’teng R/C and even served at the catholic church as man servants. He then continued his education at Hwidiem SHS after the secondary education he then further to the tertiary level at Kumasi Polytechnic.",
        "After graduating from the tertiary education he went back to his father’s hometown to start a living, then he met his wife there and married her with their first child.",
        "KWAME Opoku travel to Gabon for two years and then came back home. He then travel to UK for some month for some business matters and came back home.",
        "After his journey he enrolled himself in Farming for his life time.",
        "Asona Abusua, we have lost a big pillar in our family. Wherever you call him, whether rain or shine he will come in our aid.",
        "Owuo ay3 yen ade! Your passion for God’s work lives in us. You may be gone from our sight but not from our heart.",
        "Damirifa Duei! Duei ne amanehunu!! Y3 ma wo nante yie!!!"
      ]
    },
    {
      id: 'widow',
      title: 'Tribute by the Widow',
      subtitle: 'Hagar Adusei',
      icon: <Heart className="w-6 h-6 mb-2" />,
      content: [
        "\"For I am convinced that neither death nor life… nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\" (Romans 8:38-39)",
        "Today, I stand here with a heart broken beyond words, to honor my beloved husband, Stephen Kankam. A man who loved and accepted my flaws. We first met at Swedru where you visited your late father every vacation and from that moment, I knew my life had been forever blessed. You were more than my husband—you were my best friend, my guide, my shelter, and my unwavering support in every joy and every trial. When I lost my parents, you were beside me. You fought for me and took my family as your own. Thank you for loving me the way you did.",
        "Together, we built a family filled with love and laughter, raising 4 beautiful children, 2 boys, 2 girls. I watched you love each of them with patience and devotion that inspired me every day. You taught them integrity, compassion, and faith—not just in words, but in every action you took.",
        "The pain of losing you feels unbearable. I miss your laughter that could light up a room, your wisdom that guided our family, and the gentle strength that made me feel safe every day. Yet even in this sorrow, I cling to the promises of God:",
        "“The Lord is close to the brokenhearted and saves those who are crushed in spirit.” (Psalm 34:18). And I know he will comfort me in this hard times.",
        "I remember the small moments that defined our love: your hand holding mine during life’s storms, your laughter echoing in our home, your quiet prayers for each of us at night. These memories, though bittersweet, will remain etched in my heart forever.",
        "Though you have left this world, your spirit lives on in every corner of our family—in the smile of each child, in the warmth of our home, in the faith and love you planted in our hearts. My beloved, rest now in the arms of our Lord, where there is no more pain, no more suffering, only peace.",
        "We will carry your legacy of love, faith, and strength with us every day. Until the day we meet again, I will cherish every memory, every smile, every word of encouragement you gave me. Thank you for loving me the way you did. Thank you for being my husband.",
        "Sleep well, my love. You finished strong. And I will love you always."
      ]
    },
    {
      id: 'children',
      title: 'Tribute to My Late Father',
      subtitle: 'From the Children',
      icon: <Users className="w-6 h-6 mb-2" />,
      content: [
        "Today, we gather with heavy hearts to honour and celebrate the life of our beloved father, Elder Stephen Kankam — a devoted servant of God, a loving father, and a true pillar in the house of the Lord.",
        "Daddy was not just an elder by title; he was an elder in character, faith, and dedication. He was always passionate about the things of God. He served with his whole heart. Many times, he was the first to arrive at church, making sure everything was in place and ready for worship. His joy was to see God’s house in order and God’s people blessed. Daddy worked faithfully to give us a better future, and his support gave us the courage to dream and to keep going even when life was hard.",
        "The Bible says in 2 Timothy 4:7: “I have fought the good fight, I have finished the race, I have kept the faith.” Today, we believe our father has indeed finished his race and kept his faith.",
        "Though we feel the pain of his absence, we are comforted by God’s promise in Revelation 14:13: “Blessed are the dead who die in the Lord… they will rest from their labour.” Death took him from us too soon, and we never had the chance to repay all the love and goodness he gave to us. Daddy, we miss you deeply. Every time we think of you, our hearts break and tears fall. We trust that our Daddy is now resting peacefully in the presence of the Lord he loved and served so faithfully.",
        "Daddy, thank you for your sacrifices. Thank you for your prayers. Thank you for showing us what true dedication to God looks like.",
        "Your passion for God’s work lives on in us. You may be gone from our sight, but never from our hearts. Rest well, Daddy. Until we meet again."
      ]
    },
    {
      id: 'church',
      title: 'A Faithful Servant of God',
      subtitle: 'Tribute by Church of God',
      icon: <Church className="w-6 h-6 mb-2" />,
      content: [
        "With heavy hearts but unwavering faith, we honor the life and legacy of Elder Stephen Kankam, a true soldier of Christ who has transitioned to glory. Though his departure brings sorrow, we find solace in the knowledge that he has completed his divine assignment and now rests in the presence of the Lord.",
        "Elder Stephen KANKAM was a pillar of faith, a shepherd to many, and a beacon of godly wisdom.",
        "His life was a testament to his deep love for God and His people. He served with diligence, humility, and an unshakable commitment to the gospel. His legacy echoes the words of Jesus in Matthew 25:21: \"Well done, good and faithful servant! You have been faithful over a few things; I will make you ruler over many things. Enter into the joy of your Lord.\"",
        "As we mourn his passing, we also celebrate a life well-lived—a life dedicated to building God’s kingdom and uplifting His people. Like Paul, he ran his race with endurance (Hebrews 12:1) and has now received the crown of righteousness, which the Lord has promised to those who love Him (2 Timothy 4:8).",
        "To his family, friends, and the Church, may God’s peace and comfort sustain us in this season of loss. His legacy of faith, integrity, and love will continue to inspire generations to come.",
        "\"Precious in the sight of the Lord is the death of His saints.\" – Psalm 116:15",
        "Rest in peace, faithful servant of God. Your labor was not in vain."
      ]
    }
  ];

  const mainService = [
    { time: "01", task: "Opening Prayer", person: "Elder George Antwi" },
    { time: "02", task: "Call to worship", person: "" },
    { time: "03", task: "Praises & Worship", person: "Praises team" },
    { time: "04", task: "Bible Reading", person: "" },
    { time: "05", task: "Biography", person: "Family" },
    { time: "06", task: "Tribute", person: "Widow, Children, Church" },
    { time: "07", task: "Offering", person: "" },
    { time: "08", task: "Solo", person: "" },
    { time: "09", task: "Sermon", person: "" },
    { time: "10", task: "Prayer for the bereaved family", person: "" },
    { time: "11", task: "Announcements", person: "" },
    { time: "12", task: "Closing Prayer", person: "" },
    { time: "13", task: "Benediction", person: "" }
  ];

  const graveSideService = [
    "Exhortation", "Committal", "Song", "Vote of thanks", "Benediction"
  ];

  const officiatingMinisters = [
    { role: "The Presiding Bishop", name: "Bishop Joseph Otteng Sam" },
    { role: "General Secretary", name: "Bishop Andrews Otchere" },
    { role: "Missions Director", name: "Bishop Nsiah Samuel" },
    { role: "Regional Bishop", name: "Bishop Williams Harrison" },
    { role: "District Overseer", name: "Bishop Michael Appau" },
    { role: "Atonsu Local", name: "Pastor Isaac Ofori" },
    { role: "Ahinsan Local", name: "Pastor Alfred Atta" },
    { role: "Onwi Local", name: "Pastor Appiah James" },
    { role: "Feyiase Local", name: "Pastor Philip Otoo" },
    { role: "Baworo Local", name: "Pastor Benard Awemor" },
    { role: "Gyaakye Local", name: "Sofomaame Georgina" }
  ];

  const handleTabChange = (index) => {
    if (activeTribute === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTribute(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#fbf8f1] font-sans text-gray-800 selection:bg-[#7a1f28] selection:text-white">
      {/* Inline Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-transition {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(-5px);
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        h1, h2, h3, .serif-text { font-family: 'Playfair Display', serif; }
        p, span, button, li { font-family: 'Lato', sans-serif; }
      `}} />

      {/* Hero Header Section */}
      <header className="bg-[#7a1f28] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="floral" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z" fill="none" stroke="#d4af37" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#floral)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <p className="text-[#d4af37] tracking-widest uppercase text-sm font-semibold mb-4">Celebration of a Well Spent Life</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide text-white drop-shadow-lg">
            Elder Stephen Kankam
          </h1>
          <p className="text-2xl md:text-3xl font-light text-[#fbf8f1] italic mb-6">
            A.K.A (Ofa Kwame)
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-[#d4af37] border-t border-b border-[#d4af37]/30 py-3 w-max mx-auto px-6">
            <span>Aged 61</span>
            <span>•</span>
            <span>Called to Glory</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Funeral Flyer / Poster Section */}
        <section id="flyer" className={`animate-on-scroll ${visibleSections['flyer'] ? 'is-visible' : ''}`}>
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 border border-gray-100 relative">
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7a1f28] via-[#d4af37] to-[#7a1f28]"></div>
            
            <div className="w-full md:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-md aspect-[3/4] bg-[#fbf8f1] rounded-xl overflow-hidden border-4 border-[#d4af37] shadow-2xl flex items-center justify-center group">
                 {/* Replace this placeholder src with your actual uploaded image URL once hosted */}
                 <img 
                   src={img}
                   alt="Funeral Poster Placeholder" 
                   className="object-cover w-full h-full absolute inset-0 opacity-49 transition-opacity duration-500 group-hover:opacity-70"
                   onError={(e) => { e.target.style.display = 'none'; }}
                 />
                 <div className="text-center p-6 z-10">
                   <BookOpen className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  
                 </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Quote className="w-12 h-12 text-[#d4af37]/40 mb-4 mx-auto md:mx-0" />
              <h2 className="text-3xl md:text-4xl text-[#7a1f28] mb-6 leading-tight serif-text">
                "I have fought the good fight, I have finished the race, I have kept the faith."
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Welcome to the digital memorial of Elder Stephen Kankam. Here, we gather the words of love, gratitude, and remembrance from those whose lives he touched most deeply. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#order-of-service" className="inline-flex items-center justify-center gap-2 bg-[#7a1f28] hover:bg-[#5a161d] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md">
                  View Program
                  <Clock className="w-4 h-4" />
                </a>
                <a href="#tributes" className="inline-flex items-center justify-center gap-2 bg-white border border-[#d4af37] text-[#7a1f28] hover:bg-[#fbf8f1] px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-sm">
                  Read Tributes
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Order of Service Section */}
        <section id="order-of-service" className={`animate-on-scroll ${visibleSections['order-of-service'] ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#7a1f28] mb-3 serif-text">Order of Service</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">A guiding outline of the celebration of life.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Service Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
              <div className="bg-[#7a1f28] text-white py-4 px-6 flex items-center justify-between">
                <h3 className="text-xl serif-text font-bold">Burial Service</h3>
                <Church className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {mainService.map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <span className="text-[#d4af37] font-bold mr-4 font-serif text-lg opacity-80 group-hover:opacity-100 transition-opacity">{item.time}.</span>
                      <div className="flex-1 border-b border-gray-100 pb-2 border-dashed group-hover:border-[#d4af37]/40 transition-colors">
                        <span className="text-gray-800 font-semibold">{item.task}</span>
                        {item.person && (
                          <span className="block text-sm text-gray-500 mt-1 italic">— {item.person}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Graveside Service Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-fit relative">
              <div className="bg-[#d4af37] text-white py-4 px-6 flex items-center justify-between">
                <h3 className="text-xl serif-text font-bold text-[#7a1f28]">At The Grave Side</h3>
                <MapPin className="w-5 h-5 text-[#7a1f28]" />
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {graveSideService.map((item, idx) => (
                    <li key={idx} className="flex items-center group">
                      <div className="w-2 h-2 rounded-full bg-[#7a1f28] mr-4 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                      <span className="text-gray-800 font-medium text-lg border-b border-transparent group-hover:border-[#d4af37]/40 pb-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tributes Section */}
        <section id="tributes" className={`scroll-mt-24 animate-on-scroll ${visibleSections['tributes'] ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#7a1f28] mb-3 serif-text">Words of Remembrance</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[600px]">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-1/3 bg-[#fdfaf5] border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-row md:flex-col overflow-x-auto md:overflow-visible no-scrollbar snap-x">
              {tributes.map((tribute, index) => (
                <button
                  key={tribute.id}
                  onClick={() => handleTabChange(index)}
                  className={`snap-center shrink-0 flex flex-col items-center md:items-start text-left p-4 md:p-6 mb-0 md:mb-4 rounded-xl transition-all duration-300 w-56 md:w-full mr-4 md:mr-0 group ${
                    activeTribute === index 
                      ? 'bg-[#7a1f28] text-white shadow-lg transform md:-translate-y-1 border border-[#7a1f28]' 
                      : 'bg-white text-gray-600 hover:bg-[#fbf8f1] border border-gray-100 hover:border-[#d4af37]/50 shadow-sm'
                  }`}
                >
                  <div className={`${activeTribute === index ? 'text-[#d4af37]' : 'text-[#7a1f28] group-hover:text-[#d4af37]'} transition-colors`}>
                    {tribute.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1 serif-text">{tribute.title}</h3>
                  <p className={`text-sm ${activeTribute === index ? 'text-gray-200' : 'text-gray-400'}`}>
                    {tribute.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Tribute Content Area */}
            <div className="w-full md:w-2/3 p-8 md:p-12 relative flex-1">
              {/* Gold decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className={`fade-transition h-full flex flex-col ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <h2 className="text-3xl md:text-4xl text-[#7a1f28] mb-2 serif-text">
                  {tributes[activeTribute].title}
                </h2>
                <p className="text-[#d4af37] font-semibold tracking-wide uppercase text-sm mb-8 border-b border-gray-100 pb-4">
                  {tributes[activeTribute].subtitle}
                </p>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl overflow-y-auto pr-4 pb-4 custom-scrollbar">
                  {tributes[activeTribute].content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {/* For Quotes, style differently */}
                      {paragraph.startsWith('"For I am') || paragraph.startsWith('“The Lord is close') || paragraph.startsWith('"Precious') || paragraph.startsWith('"Well done') ? (
                        <span className="italic font-semibold text-[#7a1f28] block border-l-4 border-[#d4af37] pl-4 my-6 py-1 bg-[#fbf8f1]/50 rounded-r-lg">
                          {paragraph}
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Officiating Ministers Section */}
        <section id="ministers" className={`animate-on-scroll ${visibleSections['ministers'] ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#7a1f28] mb-3 serif-text">Officiating Ministers</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officiatingMinisters.map((minister, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-[#d4af37]/30 transition-all group flex items-start gap-4">
                <div className="bg-[#fbf8f1] p-3 rounded-full text-[#7a1f28] group-hover:bg-[#7a1f28] group-hover:text-[#d4af37] transition-colors">
                  {idx < 5 ? <Star className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#7a1f28] transition-colors">
                    {minister.name}
                  </h4>
                  <p className="text-sm text-[#d4af37] font-medium uppercase tracking-wider mt-1">
                    {minister.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#7a1f28] text-center py-12 text-white/80 mt-10 border-t-4 border-[#d4af37]">
        <div className="max-w-4xl mx-auto px-6">
          <Church className="w-8 h-8 mx-auto mb-4 text-[#d4af37]" />
          <h3 className="text-2xl font-serif text-[#d4af37] mb-2">Elder Stephen Kankam</h3>
          <p className="mb-8 font-light italic">Forever in our hearts. Rest in perfect peace.</p>
          <div className="w-full max-w-md h-px bg-white/20 mx-auto mb-8"></div>
          <p className="text-sm uppercase tracking-widest text-[#d4af37] mb-2 font-bold">Funeral Arrangements</p>
          <p className="text-sm">Saturday, 28th March 2026 @ Mamponteng Asemenya</p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('app');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}