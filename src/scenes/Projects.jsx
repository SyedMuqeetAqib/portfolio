import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Tabula Notes",
      image: "light-demo-ss",
      liveLink: "https://tabula-notes-website.vercel.app/",
      githubLink: "",
      description:
        "TabulaNote is a Chrome extension that turns your new tab into a note-taking space. It provides a minimal editor with rich text formatting, block-based editing, and checklists. Notes sync to Google Drive with daily reminders, and the interface supports dark mode and keyboard shortcuts. Features include a floating toolbar, multiple notes, and direct image pasting. It's designed to be distraction-free, fast, and always synced across devices.",
      longDescription:
        "TabulaNote is a Chrome extension that transforms your browser's new tab into a powerful note-taking workspace. Built with a focus on productivity and minimalism, it offers a rich text editor with block-based editing, allowing users to format their thoughts with headings, checklists, and more. The extension seamlessly syncs notes to Google Drive with daily reminders, ensuring your work is always backed up and accessible across devices. With dark mode support, keyboard shortcuts, and a floating toolbar, TabulaNote provides a distraction-free environment for capturing and organizing ideas instantly.",
      technologies: [
        "Chrome Extension",
        "JavaScript",
        "Google Drive API",
        "Rich Text Editor",
        "Block-based Editing",
      ],
      features: [
        "Rich text formatting with block-based editor",
        "Google Drive sync with daily reminders",
        "Dark mode support",
        "Keyboard shortcuts for efficient editing",
        "Floating toolbar and multiple notes",
        "Direct image pasting",
        "Distraction-free interface",
      ],
      tags: ["Chrome Extension", "Productivity", "Note-taking", "Google Drive"],
      status: "Live",
      year: "2024",
      role: "Creator & Developer",
      isOwnProduct: true,
    },
    {
      title: "Spaace Arena",
      image: "spaaceArena",
      video: "spaace-demo.mov",
      liveLink: "https://arena.spaace.io/",
      githubLink: "https://github.com/smuqeetaqib/spaace-arena",
      description:
        "Spaace Arena is a competitive gaming platform that rewards players with stars and XP based on their progress. Players earn tokens through gameplay that can be used within the broader Spaace ecosystem.",
      longDescription:
        "A comprehensive gaming ecosystem built on blockchain technology, featuring competitive gameplay mechanics, token rewards, and seamless Web3 integration. The platform includes user authentication, game statistics tracking, and a marketplace for token trading.",
      technologies: ["React", "TypeScript", "Nest JS", "PostgreSQL", "GraphQL"],
      features: [
        "Competitive gaming mechanics with XP and star rewards",
        "Token-based economy with real utility",
        "User profile and statistics tracking",
        "Seamless Web3 wallet integration",
        "Real-time leaderboards and rankings",
      ],
      tags: ["React", "Web3", "Gaming", "Blockchain", "DeFi"],
      status: "Live",
      year: "2024",
      role: "Full-Stack Developer",
    },
    {
      title: "Web Chatbot",
      image: "webchatbot",
      video: "AI chatbot.mov",
      liveLink: "http://52.52.189.57:8000/auth",
      githubLink: "",
      description:
        "An AI chatbot built with Python that allows users to chat with an AI assistant that fetches data from the third party API's.",
      longDescription:
        "An AI chatbot built with Python that allows users to chat with an AI assistant that fetches data from the third party API's.",
      technologies: [
        "Python",
        "FastAPI",
        "Typesense",
        "Docker",
        "Fine tuned Bart Model",
      ],
      features: [
        "AI chatbot with third party API integration",
        "Real-time data fetching from third party API's",
        "User authentication and authorization",
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      status: "Live",
      year: "2025",
      role: "Full-Stack Developer",
    },
    {
      title: "Stashed Account Abstracted Wallet",
      image: "stashed",
      liveLink: "https://dev-wallet.joinstashed.com/",
      githubLink: "https://github.com/smuqeetaqib/stashed-wallet",
      description:
        "Stashed is an innovative wallet solution using Account Abstraction to eliminate private key management and gas fee complexities, allowing users to transact with non-native tokens seamlessly.",
      longDescription:
        "A next-generation wallet that leverages Account Abstraction (ERC-4337) to provide a Web2-like user experience in Web3. Users can perform transactions without managing private keys or seed phrases, and pay gas fees using any ERC-20 token.",
      technologies: [
        "React",
        "TypeScript",
        "Account Abstraction",
        "Ethers.js",
        "Smart Contracts",
        "IPFS",
      ],
      features: [
        "Account Abstraction implementation (ERC-4337)",
        "Gasless transactions using ERC-20 tokens",
        "Social recovery and multi-sig capabilities",
        "Cross-chain compatibility",
        "Intuitive user interface for Web3 newcomers",
      ],
      tags: [
        "React",
        "Web3",
        "Account Abstraction",
        "Ethereum",
        "Smart Contracts",
      ],
      status: "Live",
      year: "2024",
      role: "Frontend Developer",
    },
    {
      title: "Volufy Telegram Bot",
      image: "volufy-image",
      liveLink: "https://volufy.io/",
      githubLink: "",
      description:
        "A Telegram bot to increase the volume of any pool supporting Solana Raydium, Meteora and Pump.fun pools and EVM Uniswap pools",
      technologies: ["Nest JS", "BullMQ", "Telegram Bot API", "Docker", "AWS"],
    },
    {
      title: "Bullion FX",
      image: "bullionFX",
      liveLink: "https://bullionfx.com/",
      githubLink: "https://github.com/smuqeetaqib/bullionfx",
      description:
        "A decentralized financial ecosystem built on auditable physical gold, providing users with a bridge between traditional precious metals and digital assets.",
      longDescription:
        "Bullion FX creates a transparent and auditable connection between physical gold and digital tokens. The platform ensures that each digital token is backed by verified physical gold stored in secure vaults, providing users with the benefits of both traditional and digital assets.",
      technologies: ["Nest JS", "MongoDB"],
      features: [
        "Physical gold tokenization with audit trails",
        "Real-time gold price integration via Chainlink",
        "Secure vault management system",
        "Transparent redemption process",
        "Multi-signature security protocols",
      ],
      tags: ["DeFi", "Blockchain", "Finance", "Web3", "Tokenization"],
      status: "Live",
      year: "2023",
      role: "Full-Stack Developer",
    },
    {
      title: "Aramid Near Bridge",
      image: "aramid",
      liveLink: "https://main.k8s.aramid.finance/",
      githubLink: "https://github.com/smuqeetaqib/aramid-bridge",
      description:
        "Aramid Bridge is one of the first bridges to support NEAR to EVM and Algorand chain transfers, enabling seamless cross-chain asset movement with multi-wallet support.",
      longDescription:
        "A pioneering cross-chain bridge solution that connects NEAR Protocol with EVM-compatible chains and Algorand. The bridge supports multiple wallet types and provides a unified interface for users to move assets across different blockchain ecosystems.",
      technologies: [
        "React",
        "NEAR Protocol",
        "Ethers.js",
        "Algorand SDK",
        "Web3.js",
        "Rust",
      ],
      features: [
        "NEAR to EVM chain bridging",
        "NEAR to Algorand cross-chain transfers",
        "Multi-wallet integration support",
        "Real-time transaction monitoring",
        "Secure smart contract architecture",
      ],
      tags: ["Bridge", "NEAR", "EVM", "Multi-chain", "Cross-chain"],
      status: "Live",
      year: "2023",
      role: "Blockchain Developer",
    },
    {
      title: "Kolnet Presale Marketplace",
      image: "kolnet",
      liveLink: "https://testnet.kolnet.io/",
      githubLink: "https://github.com/smuqeetaqib/kolnet-marketplace",
      description:
        "Kolnet is a token presale marketplace that integrates marketing mechanisms to ensure only authentic and promising tokens receive recognition and funding from users.",
      longDescription:
        "An innovative presale platform that combines token launches with marketing validation. Projects must demonstrate authentic marketing efforts and community engagement before being approved for presale, ensuring higher quality and reduced scam potential.",
      technologies: [
        "React",
        "Next.js",
        "Solidity",
        "The Graph",
        "IPFS",
        "MongoDB",
      ],
      features: [
        "Marketing-validated token presales",
        "Community engagement scoring system",
        "Automated scam detection algorithms",
        "Integrated social media verification",
        "Transparent funding and distribution",
      ],
      tags: ["Marketplace", "Presale", "Marketing", "Web3", "DeFi"],
      status: "Testnet",
      year: "2023",
      role: "Full-Stack Developer",
    },
    {
      title: "Events Dapp",
      image: "eventsdapp",
      liveLink: "https://eventsdapp-45b48.web.app/",
      githubLink: "https://github.com/smuqeetaqib/events-dapp",
      description:
        "Events Dapp is an event management platform by Phoenix DAO that provides NFT-based ticketing functionality, allowing users to buy, sell, and trade event tickets as digital assets.",
      longDescription:
        "A comprehensive event management system that tokenizes event tickets as NFTs. Users can purchase tickets, transfer them to others, or resell them on secondary markets. The platform includes event creation, ticket management, and integrated payment processing.",
      technologies: [
        "React",
        "Solidity",
        "IPFS",
        "Web3.js",
        "Firebase",
        "OpenZeppelin",
      ],
      features: [
        "NFT-based event ticketing system",
        "Secondary market for ticket trading",
        "Event creation and management tools",
        "Integrated payment processing",
        "Anti-fraud and verification systems",
      ],
      tags: ["Events", "NFTs", "Ticketing", "DAO", "Marketplace"],
      status: "Live",
      year: "2022",
      role: "Smart Contract Developer",
    },
    {
      title: "MContent Bridge",
      image: "mcontent",
      liveLink: "https://bridge.mcontent.net/",
      githubLink: "https://github.com/smuqeetaqib/mcontent-bridge",
      description:
        "MContent Bridge facilitates the transfer of MContent reflect tokens between Ethereum and Binance Smart Chain networks, enabling users to access the token on multiple chains.",
      longDescription:
        "A specialized bridge solution for MContent tokens that enables seamless transfers between Ethereum and BSC networks. The bridge maintains token economics and provides users with flexibility in choosing their preferred blockchain network.",
      technologies: ["React", "Web3.js", "BSC", "Ethereum", "Node.js"],
      features: [
        "Ethereum to BSC token bridging",
        "Reflect token mechanics preservation",
        "Real-time bridge status monitoring",
        "Secure multi-signature validation",
        "Gas optimization for cross-chain transfers",
      ],
      tags: ["Bridge", "Ethereum", "BSC", "Tokens", "Cross-chain"],
      status: "Live",
      year: "2022",
      role: "Blockchain Developer",
    },
  ];

  // Determine how many projects to show based on screen size
  const getMaxProjects = () => {
    if (showAll) return projects.length;

    // Check if we're on mobile (assuming mobile is < 768px)
    const isMobile = windowWidth < 768;
    return isMobile ? 4 : 6; // 4 projects on mobile, 6 on desktop (2 rows of 3)
  };

  const visibleProjects = projects.slice(0, getMaxProjects());
  const hasMoreProjects = projects.length > getMaxProjects();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, solutions, and full-stack development
            projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                liveLink={project.liveLink}
                technologies={project.technologies}
                delay={index * 0.1}
                isOwnProduct={project.isOwnProduct}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {hasMoreProjects && (
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-block glass-button px-8 py-3 text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
