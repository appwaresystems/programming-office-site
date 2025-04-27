// app/careers/page.js
import { FaJava, FaReact, FaServer, FaCodeBranch, FaUserTie } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiTypescript, SiAmazon } from 'react-icons/si';

export default function CareersPage() {
    const positions = [
        {
            title: "Senior Java Backend Engineer",
            type: "Full-time",
            location: "Remote",
            department: "Engineering",
            icon: <FaJava className="text-cyan-500 text-4xl" />,
            description: "Design and implement high-performance backend services using Java and Spring Boot.",
            responsibilities: [
                "Develop scalable microservices architecture",
                "Optimize database performance and queries",
                "Implement RESTful APIs and integration patterns",
                "Ensure code quality through testing and code reviews",
                "Collaborate with frontend teams on system design"
            ],
            requirements: [
                "5+ years Java development experience",
                "Strong Spring/Spring Boot framework knowledge",
                "Experience with relational and NoSQL databases",
                "Understanding of cloud platforms (AWS/Azure/GCP)",
                "CI/CD and containerization experience"
            ],
            techStack: [
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
                { icon: <FaServer className="text-blue-500" />, name: "Microservices" },
                { icon: <SiAmazon className="text-orange-500" />, name: "AWS" }
            ]
        },
        {
            title: "React Frontend Developer",
            type: "Full-time",
            location: "Hybrid",
            department: "Engineering",
            icon: <FaReact className="text-cyan-500 text-4xl" />,
            description: "Build responsive and performant user interfaces with React and TypeScript.",
            responsibilities: [
                "Develop new user-facing features",
                "Translate designs into high-quality code",
                "Optimize components for maximum performance",
                "Maintain and improve existing codebase",
                "Collaborate with UX designers and backend engineers"
            ],
            requirements: [
                "3+ years React development experience",
                "Proficient in JavaScript/TypeScript",
                "Experience with state management (Redux/Context)",
                "Knowledge of modern CSS frameworks",
                "Familiarity with RESTful APIs"
            ],
            techStack: [
                { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
                { icon: <FaCodeBranch className="text-purple-500" />, name: "Redux" }
            ]
        },
        {
            title: "Full Stack Developer (Java/React)",
            type: "Full-time",
            location: "Remote",
            department: "Engineering",
            icon: <FaCodeBranch className="text-cyan-500 text-4xl" />,
            description: "End-to-end development of web applications using Java and React.",
            responsibilities: [
                "Develop both client-side and server-side components",
                "Design and implement APIs",
                "Create reusable frontend components",
                "Ensure application performance and quality",
                "Participate in architecture decisions"
            ],
            requirements: [
                "2+ years full stack development",
                "Experience with Java and React",
                "Knowledge of relational databases",
                "Understanding of cloud services",
                "Problem-solving skills"
            ],
            techStack: [
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
                { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" }
            ]
        }
    ];

    const benefits = [
        {
            title: "Competitive Compensation",
            description: "Attractive salary and bonus structure",
            icon: "💰"
        },
        {
            title: "Flexible Work",
            description: "Remote and hybrid work options",
            icon: "🏠"
        },
        {
            title: "Learning Budget",
            description: "Annual allowance for courses and conferences",
            icon: "📚"
        },
        {
            title: "Health Coverage",
            description: "Comprehensive medical insurance",
            icon: "🏥"
        },
        {
            title: "Team Events",
            description: "Regular team building activities",
            icon: "🎉"
        },
        {
            title: "Career Growth",
            description: "Clear promotion paths and mentorship",
            icon: "📈"
        }
    ];

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                <div className="container mx-auto px-6 text-center relative">
                    <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4 shadow-sm">
                        Join Our Team
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Career</span> With Us
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Work with cutting-edge technologies and solve challenging problems with talented colleagues.
                    </p>
                </div>
            </section>

            {/* Open Positions */}
            <section className="relative py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Openings</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore our available positions and find your perfect fit.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {positions.map((position, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl group-hover:from-cyan-100 group-hover:to-blue-100 transition-all">
                                        {position.icon}
                                    </div>
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                                        {position.type}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {position.title}
                                </h3>
                                <div className="flex gap-4 mb-4">
                                    <span className="text-slate-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {position.location}
                                    </span>
                                    <span className="text-slate-600 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {position.department}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    {position.description}
                                </p>

                                <h4 className="font-bold text-slate-800 mb-2">Responsibilities:</h4>
                                <ul className="space-y-2 mb-6">
                                    {position.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="flex-shrink-0 mr-2 mt-1">
                                                <div className="w-4 h-4 bg-cyan-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="font-bold text-slate-800 mb-2">Requirements:</h4>
                                <ul className="space-y-2 mb-6">
                                    {position.requirements.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="flex-shrink-0 mr-2 mt-1">
                                                <div className="w-4 h-4 bg-cyan-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 border-t border-slate-200">
                                    <h4 className="font-bold text-slate-800 mb-3">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {position.techStack.map((tech, i) => (
                                            <div key={i} className="flex items-center px-3 py-1 bg-slate-100 rounded-full">
                                                <span className="mr-2">{tech.icon}</span>
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Benefits</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            We take care of our team with comprehensive benefits and perks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
                            >
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Culture</span>
                            </h2>
                            <p className="text-xl text-slate-300 mb-8">
                                We foster an environment of collaboration, innovation, and continuous learning.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Open and transparent communication",
                                    "Ownership and accountability",
                                    "Continuous learning mindset",
                                    "Work-life balance",
                                    "Diversity and inclusion",
                                    "Customer-focused approach"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1">
                                            <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-slate-100 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <div className="p-8 text-slate-900">
                                <h3 className="text-3xl font-bold mb-6">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Hiring</span> Process
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        {
                                            step: "1",
                                            title: "Initial Screening",
                                            description: "30-minute call with HR"
                                        },
                                        {
                                            step: "2",
                                            title: "Technical Assessment",
                                            description: "Practical coding challenge"
                                        },
                                        {
                                            step: "3",
                                            title: "Technical Interview",
                                            description: "In-depth discussion with team"
                                        },
                                        {
                                            step: "4",
                                            title: "Cultural Fit",
                                            description: "Meeting with leadership"
                                        },
                                        {
                                            step: "5",
                                            title: "Offer",
                                            description: "Welcome to the team!"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mr-6">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 text-white font-bold shadow-md">
                                                    {item.step}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        We're always looking for talented individuals to join our growing team.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            View All Positions
                        </button>
                        <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors shadow-lg">
                            Contact Recruiter
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}