import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)

    const filters = ['All', 'Deep Learning', 'Computer Vision', 'Full Stack', 'IoT']

    const projects = [
        {
            id: 1,
            title: "Hybrid Ransomware Detection",
            shortDescription: "PSO-Optimized CNN-LSTM + XGBoost for I/O behavioral analysis",
            fullDescription: `A novel hybrid architecture for ransomware detection based on behavioral analysis of Input/Output (I/O) traces. The system employs a two-stage approach:

Stage 1 - Deep Feature Extraction: CNN-LSTM-Attention network processes 50 time windows (5s each) with 13 features, using 3 parallel LSTM blocks with attention mechanisms to extract complex temporal patterns.

Stage 2 - Hybrid Classification: Semantic features from the deep model are fused with raw statistical features to feed a PSO-optimized XGBoost classifier.

The PSO optimization uses a custom fitness function: S = (0.7 × F2-score) + (0.3 × Precision) to balance threat detection with false alarm minimization.`,
            results: [
                { metric: "Accuracy", value: "84.83%" },
                { metric: "Recall", value: "93.49%" },
                { metric: "F2-Score", value: "90.50%" },
                { metric: "AUC", value: "94.60%" }
            ],
            tags: ["Deep Learning", "Computer Vision"],
            techStack: ["Python", "CNN-LSTM", "XGBoost", "PSO", "TensorFlow", "Keras"],
            icon: "security",
            gradient: "from-red-900 to-slate-900",
            period: "May 2025 – Sept 2025",
            featured: true,
            hasArticle: true,
            articleUrl: "/article.pdf",
            architectureImage: "/ransomware-architecture.png",
            supervisors: "M. Bendella Mohammed Salih (Supervisor), M. Bensenane Hamdane (Co-supervisor)",
            institution: "Higher School of Computer Science, 8 Mai 1945 - Sidi Bel Abbes"
        },
        {
            id: 2,
            title: "Real-Time Face Recognition System",
            shortDescription: "YOLOv10 + face_recognition for embedded environments",
            fullDescription: "Implemented a face detection and recognition system using YOLOv10 for face identification and face_recognition library for matching. Extracts face encodings to compare against a reference database. Optimized for embedded environments requiring fast and efficient analysis.",
            tags: ["Deep Learning", "Computer Vision"],
            techStack: ["Python", "YOLOv10", "OpenCV", "face_recognition"],
            icon: "face",
            gradient: "from-blue-900 to-slate-900",
            period: "Dec 2024",
            featured: true
        },
        {
            id: 3,
            title: "Weapon Detection on Jetson Nano",
            shortDescription: "Edge AI with YOLOv8 + TensorRT optimization",
            fullDescription: "Edge AI object detection system with YOLOv8 for real-time weapon identification. Trained a custom neural network on a specialized dataset and deployed on NVIDIA Jetson Nano with OpenCV-based image processing for security applications.",
            tags: ["Deep Learning", "Computer Vision", "IoT"],
            techStack: ["Python", "YOLOv8", "Jetson Nano", "OpenCV", "TensorRT"],
            icon: "memory",
            gradient: "from-green-900 to-slate-900",
            period: "Apr 2024 – Jun 2024",
            featured: true
        },
        {
            id: 4,
            title: "Cloud Attendance System with RFID",
            shortDescription: "Full-stack with React, Express, AWS deployment",
            fullDescription: "Full-stack attendance management system with real-time data visualization dashboard. Integrated RFID technology for automated check-ins. Deployed on AWS EC2 with Amazon RDS database for scalable cloud infrastructure.",
            tags: ["Full Stack", "IoT"],
            techStack: ["React", "Express.js", "AWS EC2", "Amazon RDS", "RFID"],
            icon: "badge",
            gradient: "from-purple-900 to-slate-900",
            period: "Jan 2024",
            featured: false
        }
    ]

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(activeFilter))

    return (
        <div className="relative min-h-screen w-full bg-background-dark">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full"></div>
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
                        <Link to="/projects" className="text-white font-medium hover:text-primary transition-colors">Projects</Link>
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
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-primary font-mono">~/</span>projects
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            A collection of my work in AI, Computer Vision, and Full Stack development.
                            Each project represents a journey of learning and problem-solving.
                        </p>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeFilter === filter
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className={`group bg-card-dark rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all ${project.featured ? 'md:col-span-1' : ''
                                    }`}
                            >
                                {/* Project Header with Gradient */}
                                <div className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-end justify-between`}>
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-white/70 text-sm font-mono">{project.period}</span>
                                    </div>
                                    <div className="size-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-[28px]">{project.icon}</span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {project.shortDescription}
                                    </p>

                                    {/* Results for ransomware project */}
                                    {project.results && (
                                        <div className="grid grid-cols-4 gap-2 mb-4">
                                            {project.results.map((r) => (
                                                <div key={r.metric} className="text-center p-2 bg-white/5 rounded-lg">
                                                    <p className="text-primary font-bold text-sm">{r.value}</p>
                                                    <p className="text-slate-500 text-[10px]">{r.metric}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-3 py-1 rounded-md bg-white/5 text-slate-400 text-xs font-mono border border-white/10">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '12px' }}>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            <span>View Details</span>
                                        </button>
                                        {project.hasArticle && (
                                            <a
                                                href={project.articleUrl}
                                                download="Hybrid_Ransomware_Detection_Article.pdf"
                                                className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-slate-300 hover:text-primary transition-all"
                                                style={{ width: '42px', height: '42px', flexShrink: 0 }}
                                                title="Download Article"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">article</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More Coming Soon */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                            <span className="material-symbols-outlined text-primary">rocket_launch</span>
                            <p className="text-slate-400">More projects coming soon...</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-card-dark rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className={`h-40 bg-gradient-to-br ${selectedProject.gradient} p-6 flex items-end justify-between relative`}>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 size-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                                <p className="text-white/70 text-sm font-mono mt-1">{selectedProject.period}</p>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 space-y-6">
                            {/* Institution & Supervisors */}
                            {selectedProject.institution && (
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <p className="text-primary font-medium text-sm">{selectedProject.institution}</p>
                                    <p className="text-slate-400 text-sm mt-1">{selectedProject.supervisors}</p>
                                </div>
                            )}

                            {/* Description */}
                            <div>
                                <h3 className="text-slate-400 text-sm font-mono mb-3">// Overview</h3>
                                <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                                    {selectedProject.fullDescription}
                                </div>
                            </div>

                            {/* Architecture Image */}
                            {selectedProject.architectureImage && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// System Architecture</h3>
                                    <div className="rounded-xl overflow-hidden">
                                        <img
                                            src={selectedProject.architectureImage}
                                            alt="System Architecture"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Results */}
                            {selectedProject.results && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// Performance Results</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {selectedProject.results.map((r) => (
                                            <div key={r.metric} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                                <p className="text-primary font-bold text-2xl">{r.value}</p>
                                                <p className="text-slate-400 text-sm mt-1">{r.metric}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-slate-400 text-sm font-mono mb-3">// Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span key={tech} className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Download Article Button */}
                            {selectedProject.hasArticle && (
                                <div className="pt-4 border-t border-white/10">
                                    <a
                                        href={selectedProject.articleUrl}
                                        download="Hybrid_Ransomware_Detection_Article.pdf"
                                        className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
                                    >
                                        <span className="material-symbols-outlined">download</span>
                                        Download Full Article (PDF)
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-mono">© 2025 Mohammed H. Kebbas</p>
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-slate-400 text-sm hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-slate-400 text-sm hover:text-primary transition-colors">About</Link>
                        <Link to="/contact" className="text-slate-400 text-sm hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
