export const projects = [
    {
        id: "medicore",
        title: "Medicore",
        category: "Healthcare Technology",
        description: "A sophisticated medical website featuring a hybrid appointment system for seamless patient-doctor interactions. Designed to minimize wait times and maximize clinical efficiency.",
        longDescription: "Medicore was born from a need to bridge the gap between digital convenience and traditional healthcare. The system integrates real-time scheduling with a robust patient record management system, allowing clinics to handle both in-person and tele-health appointments in a single unified dashboard.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        tags: ["Next.js", "Prisma", "Socket.io", "Tailwind"],
        year: "2024",
        role: "Lead Developer",
        challenge: "Integrating real-time slot booking with legacy hospital management software.",
        outcome: "Reduced booking errors by 40% and improved patient satisfaction scores across 5 pilot clinics."
    },
    {
        id: "referralbridge",
        title: "ReferralBridge",
        category: "Social Network",
        description: "A professional alumni network platform designed to bridge the gap between graduates and their alma mater through active referrals.",
        longDescription: "ReferralBridge leverages the power of existing professional circles to help new graduates find high-quality opportunities. Unlike generic job boards, it focuses on vetted referrals from alumni who understand the company culture and requirements.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
        tags: ["React", "Firebase", "Tailwind", "Cloud Functions"],
        year: "2024",
        role: "Full Stack Engineer",
        challenge: "Developing a trust-based algorithm for referral verification.",
        outcome: "Successfully launched with 500+ active alumni from top-tier universities."
    },
    {
        id: "edutech",
        title: "EduTech",
        category: "Education Platform",
        description: "A comprehensive education app empowering students with interactive learning modules and progress tracking.",
        longDescription: "EduTech is a mobile-first platform that makes learning addictive. By gamifying the curriculum and providing instant feedback through AI-driven quizzes, it helps students retain complex concepts longer.",
        img: "https://images.unsplash.com/photo-1501504905252-473c4730449a?w=1200&q=80",
        tags: ["Android", "Flutter", "Node.js", "Dart"],
        year: "2023",
        role: "Mobile Architect",
        challenge: "Optimizing offline-first synchronization for students in low-connectivity areas.",
        outcome: "Grew to 50k+ active users within the first 6 months of launch."
    },
    {
        id: "ms",
        title: "MS Companion",
        category: "Artificial Intelligence",
        description: "A system companion AI integrated system that provides intelligent automation and insights for desktop environments.",
        longDescription: "MS Companion is a desktop utility that learns your workflow and automates repetitive tasks. From managing file structures to summarizing long meetings, it acts as a digital twin for your productivity.",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        tags: ["Python", "TensorFlow", "React", "Electron"],
        year: "2023",
        role: "AI Developer",
        challenge: "Training light-weight LLMs to run efficiently on local hardware.",
        outcome: "Achieved 2x productivity boost for early beta testers."
    },
    // Adding 21 more illustrative projects to reach 25
    ...Array.from({ length: 21 }).map((_, i) => ({
        id: `exp-${i}`,
        title: `Experimental-0${i + 5}`,
        category: i % 2 === 0 ? "Web Experiment" : "UI/UX Study",
        description: "A deep dive into advanced digital interaction patterns and visual storytelling.",
        longDescription: "Detailed case study coming soon. This project focuses on pushing the boundaries of web animation and performant rendering.",
        img: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&q=80`,
        tags: ["Framer", "Three.js", "Motion"],
        year: "2023",
        role: "Designer & Developer",
        challenge: "TBD",
        outcome: "TBD"
    }))
];
