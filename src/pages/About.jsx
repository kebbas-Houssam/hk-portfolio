import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function About() {
    const experience = [
        {
            period: "May 2025 – Sept 2025",
            title: "R&D Intern Engineer",
            company: "LABRI - ESI Research Lab",
            location: "Sidi Bel Abbes, Algeria",
            description: "End-of-studies project focused on cyber threat detection using Deep Learning. Designed hybrid architecture for ransomware detection based on I/O trace behavioral analysis.",
            current: true
        },
        {
            period: "Sept 2023 – Oct 2023",
            title: "Intern",
            company: "Algérie Telecom",
            location: "Tlemcen, Algeria",
            description: "Developed problem-solving skills in telecommunications. Assisted staff with daily operations and gained industry experience.",
            current: false
        }
    ]

    const languages = [
        { name: "Python", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
        { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20" },
        { name: "Dart", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
        { name: "Java", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
        { name: "C++", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
        { name: "SQL", color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
    ]

    const aiTools = [
        "TensorFlow", "Keras", "Scikit-learn", "Pandas", "OpenCV", "YOLOv8", "PyTorch"
    ]

    const devTools = [
        "React", "Node.js", "Flutter", "Firebase", "Docker", "AWS", "Git", "NGINX"
    ]

    return (
        <div className="relative min-h-screen w-full bg-background-dark">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Desktop Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <span className="material-symbols-outlined text-[24px]">terminal</span>
                        </div>
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">MH.Kebbas</h2>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-slate-400 font-medium hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-white font-medium hover:text-primary transition-colors">About</Link>
                        <Link to="/projects" className="text-slate-400 font-medium hover:text-primary transition-colors">Projects</Link>
                        <Link to="/contact" className="text-slate-400 font-medium hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    <Link
                        to="/contact"
                        className="hidden md:flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all"
                    >
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                        Get in Touch
                    </Link>

                    <Link to="/" className="md:hidden text-white">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-28 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Hero Section */}
                    <section className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                        {/* Profile Card */}
                        <div className="md:col-span-1">
                            <div className="sticky top-28">
                                <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                                    <div className="relative mb-6">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-50 blur"></div>
                                        <img
                                            src="/myPhoto.jpg"
                                            alt="Mohammed Houssameddine Kebbas"
                                            className="relative w-full aspect-square object-cover rounded-2xl"
                                        />
                                        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-background-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs text-white font-medium">Available</span>
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-bold text-white mb-1">Mohammed H. Kebbas</h1>
                                    <p className="text-primary font-medium mb-3">AI Specialist & Full Stack Developer</p>

                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>Maghnia, Tlemcen, Algeria</span>
                                    </div>

                                    <div className="flex gap-3">
                                        <a href="https://github.com/kebbas-Houssam" target="_blank" rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 text-slate-300 hover:text-white transition-all">
                                            <FaGithub className="text-xl" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/kebbas-mohammed-houssameddine-031061320" target="_blank" rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 text-slate-300 hover:text-[#0A66C2] transition-all">
                                            <FaLinkedinIn className="text-xl" />
                                        </a>
                                        <a href="mailto:mh.kebbas@esi-sba.dz"
                                            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 text-slate-300 hover:text-primary transition-all">
                                            <HiOutlineMail className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bio Content */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Bio Section */}
                            <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                                <h3 className="text-slate-500 text-sm font-mono font-bold mb-4 flex items-center gap-2">
                                    <span className="text-primary">//</span> Hello World
                                </h3>

                                {/* Code Style Bio */}
                                <div className="bg-background-dark rounded-xl p-5 border border-white/5 mb-4">
                                    <div className="flex gap-1.5 mb-4 opacity-50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="font-mono text-sm leading-relaxed text-gray-300">
                                        <p className="mb-2"><span className="text-purple-500">const</span> <span className="text-blue-500">profile</span> = {'{'}</p>
                                        <p className="pl-4">mission: <span className="text-green-500">'Build intelligent AI solutions'</span>,</p>
                                        <p className="pl-4">passion: <span className="text-green-500">'Computer Vision & Edge AI'</span>,</p>
                                        <p className="pl-4">focus: <span className="text-green-500">'End-to-end ML pipelines'</span>,</p>
                                        <p className="pl-4">coffee: <span className="text-orange-400">true</span></p>
                                        <p>{'}'};</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    Application developer and AI specialist passionate about Computer Vision, Edge AI, and IoT.
                                    Specialized in the complete lifecycle of intelligent solutions: from ML model training to deploying
                                    robust mobile and backend applications, from user interfaces to server infrastructure.
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                                <h3 className="text-slate-500 text-sm font-mono font-bold mb-6 flex items-center gap-2">
                                    <span className="text-primary">//</span> Tech Stack
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Languages</p>
                                        <div className="flex flex-wrap gap-2">
                                            {languages.map((lang) => (
                                                <span key={lang.name} className={`px-4 py-2 rounded-lg ${lang.color} text-sm font-medium border`}>
                                                    {lang.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">AI & Machine Learning</p>
                                        <div className="flex flex-wrap gap-2">
                                            {aiTools.map((tool) => (
                                                <span key={tool} className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Web & Mobile Development</p>
                                        <div className="flex flex-wrap gap-2">
                                            {devTools.map((tool) => (
                                                <span key={tool} className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium border border-gray-700">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experience & Education */}
                    <section className="grid md:grid-cols-2 gap-8">
                        {/* Experience */}
                        <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                            <h3 className="text-slate-500 text-sm font-mono font-bold mb-6 flex items-center gap-2">
                                <span className="text-primary">//</span> git log --experience
                            </h3>

                            <div className="relative pl-4 space-y-8">
                                <div className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-gray-800"></div>

                                {experience.map((exp, index) => (
                                    <div key={index} className="relative pl-6 group">
                                        <div className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background-dark ${exp.current ? 'bg-primary' : 'bg-gray-600 group-hover:bg-primary'} z-10 transition-colors duration-300`}></div>
                                        <div>
                                            <span className={`text-xs font-mono ${exp.current ? 'text-primary' : 'text-gray-500'} mb-1 block`}>{exp.period}</span>
                                            <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                                            <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                                            <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="space-y-6">
                            <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                                <h3 className="text-slate-500 text-sm font-mono font-bold mb-6 flex items-center gap-2">
                                    <span className="text-primary">//</span> Education
                                </h3>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center size-14 bg-primary/20 rounded-xl shrink-0">
                                        <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">State Engineer Degree</h4>
                                        <p className="text-primary font-medium">Information Systems Engineering (ISI)</p>
                                        <p className="text-gray-400 mt-2">École Supérieure en Informatique 08 Mai 1945</p>
                                        <p className="text-gray-500 text-sm">Sidi Bel Abbes, Algeria • 2020 - 2025</p>
                                    </div>
                                </div>
                            </div>

                            {/* Languages */}
                            <div className="bg-card-dark rounded-2xl p-6 border border-white/10">
                                <h3 className="text-slate-500 text-sm font-mono font-bold mb-6 flex items-center gap-2">
                                    <span className="text-primary">//</span> Languages
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">Arabic</span>
                                        <span className="text-slate-400 text-sm">Native</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">French</span>
                                        <span className="text-primary text-sm font-medium">TCF B2</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium">English</span>
                                        <span className="text-slate-400 text-sm">Intermediate (Technical)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-mono">© 2025 Mohammed H. Kebbas</p>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-slate-400 text-sm hover:text-primary transition-colors">Home</Link>
                        <Link to="/projects" className="text-slate-400 text-sm hover:text-primary transition-colors">Projects</Link>
                        <Link to="/contact" className="text-slate-400 text-sm hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
