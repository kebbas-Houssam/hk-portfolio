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
            shortDescription: "YOLOv10 + face_recognition for ESI-SBA professor identification",
            fullDescription: `A real-time face detection and recognition system developed for identifying professors at the Higher School of Computer Science (ESI-SBA).

Detection Pipeline: YOLOv10 performs high-speed face detection, extracting face regions from video frames with exceptional accuracy even in challenging lighting conditions.

Recognition Engine: The face_recognition library (based on dlib) generates 128-dimensional face encodings for each detected face, comparing them against a pre-built database of ESI-SBA professors.

Real-Time Output: Professor names are displayed above bounding boxes in real-time, enabling instant identification during video playback or live camera feeds.

Optimized for embedded systems requiring fast and efficient facial analysis.`,
            tags: ["Deep Learning", "Computer Vision"],
            techStack: ["Python", "YOLOv10", "OpenCV", "face_recognition", "dlib"],
            icon: "face",
            gradient: "from-blue-900 to-slate-900",
            period: "Dec 2024",
            featured: true,
            demoVideo: "/facerec-demo-web.mp4"
        },
        {
            id: 3,
            title: "Weapon Detection on Jetson Nano",
            shortDescription: "Real-time AI security system with YOLOv8 detecting weapons in surveillance feeds",
            fullDescription: `A real-time object detection system for security surveillance using advanced deep learning techniques deployed on edge hardware.

Objective: Develop a high-precision weapon detection model capable of identifying pistols, knives, and other objects (smartphones, wallets, banknotes, cards) in real-time video streams from security cameras.

Model Architecture: YOLOv8 (You Only Look Once v8) trained on 5,859 labeled images - 5,002 for training, 450 for validation, and 407 for testing. The model leverages advanced attention layers and optimized small object detection.

Edge Deployment: Optimized for NVIDIA Jetson Nano using TensorRT quantization and model compression techniques, enabling real-time inference with minimal latency and power consumption.

Key Features: Multi-class detection (pistol, knife, smartphone, wallet, banknote, card), GPU-accelerated inference via 128 CUDA cores, and seamless integration with existing CCTV infrastructure.`,
            tags: ["Deep Learning", "Computer Vision", "IoT"],
            techStack: ["Python", "YOLOv8", "Jetson Nano", "OpenCV", "TensorRT", "PyTorch", "CUDA"],
            icon: "memory",
            gradient: "from-green-900 to-slate-900",
            period: "Apr 2024 – Jun 2024",
            featured: true,
            trainingImages: [
                { src: "/weapon-training-1.jpg", title: "Training Results (1)" },
                { src: "/weapon-training-2.jpg", title: "Training Results (2)" },
                { src: "/weapon-training-3.jpg", title: "Training Results (3)" }
            ],
            datasetDiagram: "/weapon-dataset-diagram.png"
        },
        {
            id: 4,
            title: "Cloud Attendance System with RFID",
            shortDescription: "IoT-based attendance system with real-time dashboard & AWS cloud",
            fullDescription: `A comprehensive full-stack attendance management system combining IoT hardware with modern web technologies for seamless automated check-ins.

Hardware Layer: WeMos D1 Mini (ESP8266) microcontroller programmed in C++ reads RFID cards and sends data via WiFi to the cloud backend.

Backend: Node.js with Express.js REST API handling authentication, attendance records, and real-time WebSocket updates. Connected to Amazon RDS (MySQL) for persistent data storage.

Frontend: React.js dashboard with real-time data visualization, attendance analytics, employee management, and export functionality.

Cloud Infrastructure: Deployed on AWS EC2 for high availability, with Amazon RDS for database management and automatic backups.`,
            tags: ["Full Stack", "IoT"],
            techStack: ["C++", "Arduino", "ESP8266", "Node.js", "React", "AWS EC2", "Amazon RDS", "RFID"],
            icon: "badge",
            gradient: "from-purple-900 to-slate-900",
            period: "Jan 2024",
            featured: true,
            architectureImage: "/rfid-architecture.png",
            dashboardImage: "/rfid-dashboard.png"
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

                            {/* Dashboard Image */}
                            {selectedProject.dashboardImage && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// Hardware & IoT Integration</h3>
                                    <div className="rounded-xl overflow-hidden border border-white/10">
                                        <img
                                            src={selectedProject.dashboardImage}
                                            alt="Dashboard Preview"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Training Images */}
                            {selectedProject.trainingImages && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// Training Results</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {selectedProject.trainingImages.map((img, idx) => (
                                            <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
                                                <img
                                                    src={img.src}
                                                    alt={img.title}
                                                    className="w-full h-auto"
                                                />
                                                <p className="text-slate-400 text-xs text-center py-2 bg-white/5">{img.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Dataset Diagram */}
                            {selectedProject.datasetDiagram && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// Dataset Analysis</h3>
                                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
                                        <img
                                            src={selectedProject.datasetDiagram}
                                            alt="Dataset Diagram"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Demo Video */}
                            {selectedProject.demoVideo && (
                                <div>
                                    <h3 className="text-slate-400 text-sm font-mono mb-3">// Live Demo</h3>
                                    <div className="rounded-xl overflow-hidden border border-white/10">
                                        <video
                                            src={selectedProject.demoVideo}
                                            controls
                                            className="w-full h-auto"
                                            poster=""
                                        >
                                            Your browser does not support the video tag.
                                        </video>
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
