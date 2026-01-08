import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
    return (
        <div className="relative min-h-screen w-full bg-background-dark">
            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] animate-drift"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Desktop Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background-dark/80 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <span className="material-symbols-outlined text-[24px]">terminal</span>
                        </div>
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">MH.Kebbas</h2>
                    </div>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-white font-medium hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-slate-400 font-medium hover:text-primary transition-colors">About</Link>
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

                    {/* Mobile menu button */}
                    <Link to="/contact" className="md:hidden text-primary text-sm font-bold">CONTACT</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-24 pb-16">
                {/* Hero Section - Full Width Desktop */}
                <section className="min-h-[calc(100vh-6rem)] flex items-center">
                    <div className="max-w-6xl mx-auto px-6 w-full">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left: Text Content */}
                            <div className="order-2 md:order-1 animate-fade-in-up">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                        <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                        <span className="text-primary text-sm font-medium">Available for opportunities</span>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        Hi, I'm <span className="text-primary">Houssam</span>
                                        <br />
                                        <span className="text-slate-400">AI & Full Stack Developer</span>
                                    </h1>

                                    <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                        Passionate about Computer Vision, Edge AI, and IoT. Specialized in building intelligent solutions from ML model training to production-ready applications.
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">Python</span>
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">Deep Learning</span>
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">Flutter</span>
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">React</span>
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300">TensorFlow</span>
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <Link
                                            to="/projects"
                                            className="group flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/25"
                                        >
                                            Browse Projects
                                            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                        <a
                                            href="/cv.pdf"
                                            download="KEBBAS_Houssam_CV.pdf"
                                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold border border-white/10 transition-all"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">download</span>
                                            Download CV
                                        </a>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-4 pt-6">
                                        <a
                                            href="https://github.com/kebbas-Houssam"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center size-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                                        >
                                            <FaGithub className="text-2xl" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/kebbas-mohammed-houssameddine-031061320"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center size-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#0A66C2] transition-all"
                                        >
                                            <FaLinkedinIn className="text-xl" />
                                        </a>
                                        <a
                                            href="mailto:mh.kebbas@esi-sba.dz"
                                            className="flex items-center justify-center size-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-primary transition-all"
                                        >
                                            <HiOutlineMail className="text-2xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Profile Image */}
                            <div className="order-1 md:order-2 flex justify-center animate-fade-in-up animate-delay-150">
                                <div className="relative">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-75"></div>

                                    {/* Profile Image */}
                                    <div className="relative">
                                        <div
                                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-cover bg-center ring-4 ring-white/10"
                                            style={{ backgroundImage: 'url("/myPhoto.jpg")' }}
                                        ></div>

                                        {/* Status Badge */}
                                        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-background-dark/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                            <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-white font-medium">Online</span>
                                        </div>
                                    </div>

                                    {/* Floating Cards */}
                                    <div className="hidden lg:block absolute -left-12 top-1/4 bg-card-dark/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 shadow-xl animate-fade-in-up animate-delay-300">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">ESI Sidi Bel Abbes</p>
                                                <p className="text-slate-400 text-xs">Computer Science Engineer</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block absolute -right-8 bottom-1/4 bg-card-dark/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 shadow-xl animate-fade-in-up animate-delay-300">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                                <span className="material-symbols-outlined text-emerald-500 text-[20px]">memory</span>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">AI Specialist</p>
                                                <p className="text-slate-400 text-xs">Computer Vision & Edge AI</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats Section */}
                <section className="py-16 border-t border-white/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                <p className="text-3xl md:text-4xl font-bold text-primary">4+</p>
                                <p className="text-slate-400 text-sm mt-1">Projects</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
                                <p className="text-slate-400 text-sm mt-1">Years Learning</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
                                <p className="text-slate-400 text-sm mt-1">Technologies</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                <p className="text-3xl md:text-4xl font-bold text-primary">AI</p>
                                <p className="text-slate-400 text-sm mt-1">Specialized</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-mono">v1.0.0 // © 2025 Mohammed H. Kebbas</p>
                    <div className="flex items-center gap-6">
                        <Link to="/about" className="text-slate-400 text-sm hover:text-primary transition-colors">About</Link>
                        <Link to="/projects" className="text-slate-400 text-sm hover:text-primary transition-colors">Projects</Link>
                        <Link to="/contact" className="text-slate-400 text-sm hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
