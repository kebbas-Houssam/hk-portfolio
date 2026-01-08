import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Collaboration',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:mh.kebbas@esi-sba.dz?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
        window.location.href = mailtoLink
    }

    return (
        <div className="relative min-h-screen w-full bg-background-dark">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] bg-primary/15 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full"></div>
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
                        <Link to="/about" className="text-slate-400 font-medium hover:text-primary transition-colors">About</Link>
                        <Link to="/projects" className="text-slate-400 font-medium hover:text-primary transition-colors">Projects</Link>
                        <Link to="/contact" className="text-white font-medium hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    <div className="hidden md:block w-32"></div>

                    <Link to="/" className="md:hidden text-white">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-28 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left: Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    <span className="text-primary font-light mr-2">&gt;</span>Let's Connect_
                                </h1>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    <span className="text-primary/70 font-mono mr-2">//</span>
                                    Have a project in mind, want to discuss AI solutions, or just want to say hello? I'd love to hear from you.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <a
                                    href="mailto:mh.kebbas@esi-sba.dz"
                                    className="group flex items-center gap-4 p-5 bg-card-dark rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                                >
                                    <div className="size-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-[28px]">alternate_email</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Email</p>
                                        <p className="text-white font-medium group-hover:text-primary transition-colors">mh.kebbas@esi-sba.dz</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:+213562225969"
                                    className="group flex items-center gap-4 p-5 bg-card-dark rounded-2xl border border-white/10 hover:border-primary/50 transition-all"
                                >
                                    <div className="size-14 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                                        <span className="material-symbols-outlined text-emerald-500 text-[28px]">phone</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Phone</p>
                                        <p className="text-white font-medium group-hover:text-emerald-500 transition-colors">+213 562 225 969</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-5 bg-card-dark rounded-2xl border border-white/10">
                                    <div className="size-14 bg-orange-500/20 rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-orange-500 text-[28px]">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Location</p>
                                        <p className="text-white font-medium">Maghnia, Tlemcen, Algeria</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-slate-500 font-mono text-sm mb-4">/* Find me on the web */</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/kebbas-Houssam"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-5 py-3 bg-card-dark rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                                    >
                                        <FaGithub className="text-xl text-slate-300 group-hover:text-white transition-colors" />
                                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/kebbas-mohammed-houssameddine-031061320"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-5 py-3 bg-card-dark rounded-xl border border-white/10 hover:border-primary/50 transition-all"
                                    >
                                        <FaLinkedinIn className="text-xl text-slate-300 group-hover:text-[#0A66C2] transition-colors" />
                                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-card-dark rounded-2xl p-8 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-primary font-mono">{"{"}</span>
                                Send a Message
                                <span className="text-primary font-mono">{"}"}</span>
                            </h2>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">var name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-14 px-4 bg-background-dark border border-border-dark rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">var email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-14 px-4 bg-background-dark border border-border-dark rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">let subject =</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full h-14 px-4 pr-12 appearance-none bg-background-dark border border-border-dark rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        >
                                            <option>Collaboration</option>
                                            <option>Freelance Inquiry</option>
                                            <option>Job Opportunity</option>
                                            <option>AI/ML Project</option>
                                            <option>Just Saying Hi</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2 font-mono">const message =</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full min-h-[180px] p-4 bg-background-dark border border-border-dark rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none leading-relaxed"
                                        placeholder='"Hello, I would like to discuss..."'
                                        required
                                    ></textarea>
                                    <div className="flex justify-between mt-2 px-1">
                                        <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                            System ready
                                        </span>
                                        <span className="text-xs text-slate-500 font-mono">{formData.message.length}/500 chars</span>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                                >
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                    <span className="font-mono tracking-wide">sendMessage()</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-mono">© 2025 Mohammed H. Kebbas</p>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-slate-400 text-sm hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-slate-400 text-sm hover:text-primary transition-colors">About</Link>
                        <Link to="/projects" className="text-slate-400 text-sm hover:text-primary transition-colors">Projects</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
