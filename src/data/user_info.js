const info = {
    main: {
        name: "PRIYANKA H S",
        description: "Passionate Cybersecurity Analyst skilled in Computer Networking, Cloud Computing, Linux, Java, and Python. Focused on securing systems, analyzing vulnerabilities, and implementing effective protection strategies. Dedicated to continuous learning and applying innovative solutions to strengthen digital security and reliability.",
        role: "ASPIRING CYBERSECURITY ANALYST",
        photo: "../image.jpg",
        email: "priyankah.suresh@gmail.com",
        tracking_id: "G-BNTTBGHXSC"
    },

    resume: {
        link: "../Priyanka_resume.pdf" // Replace with your actual resume URL
    },

    socials: {
        // twitter: "https://x.com/srinivaspavan73",
        github: "https://github.com/priyankasuresh-dot",
        linkedin: "https://www.linkedin.com/in/priyanka-h-s-35bbb6255",
        instagram: "https://instagram.com/priyanka__0417",
        // facebook: "https://www.facebook.com/bitra.pavan.351",
        // telegram: "https://telegram.me/srinivaspavan73"
    },

    experience: [
        {
            company: "TATA (Forage)",
            role: "Cybersecurity Analyst Job Simulation",
            description: "Participated in a cybersecurity job simulation involving threat analysis, incident response, and vulnerability assessment using practical tools and techniques.",
            period: "September 2025 - Present"
        },
        {
            company: "Commonwealth Bank (Forage)",
            role: "Cybersecurity Job Simulation",
            description: "Gained hands-on experience in cybersecurity operations, threat analysis, and risk management within a simulated banking environment.",
            period: "September 2025"
        },
        // {
        //     company: "Entersoft",
        //     role: "Smart Contracts Auditor",
        //     description: "Contributed to the security and reliability of blockchain projects by auditing smart contracts and developing comprehensive test cases. Enhanced the security posture of multiple projects by identifying vulnerabilities and ensuring compliance with best practices.",
        //     period: "November 2023 - December 2023"
        // },
        // // More experiences...
    ],

    skills: {
        // added top-level description to prevent undefined access
        description: "Proficient in Cybersecurity, Cloud Computing, Linux, Web technologies (HTML/CSS), Programming (Python, Java, JavaScript) and Computer Networking.",

        // Homepage.jsx expects .languages — kept and filled with your actual languages
        languages: {
            description: "Proficient in core programming languages including Python, Java, and JavaScript.",
            image: "https://skillicons.dev/icons?i=python,java,js&perline=6&theme="
        },

        // Homepage.jsx expects .frameworks — we keep the key but use it for your web/HTML/CSS skills
        frameworks: {
            description: "Skilled in web technologies, building responsive pages using HTML and CSS.",
            image: "https://skillicons.dev/icons?i=html,css&perline=6&theme="
        },

        // Homepage.jsx expects .tools — we keep the key and include Linux, Cloud, Cybersecurity, Networking
        tools: {
            description: "Hands-on with Linux environments, Cloud Computing fundamentals, Cybersecurity practices, and Computer Networking concepts.",
            image: "https://skillicons.dev/icons?i=linux,aws,security,network&perline=6&theme="
        }
    },

    projects: [
        {
            title: "Port Scanning, Packet Analysis, and Network Monitoring using Nmap, Wireshark, and Wazuh",
            description: "Captured and analyzed network traffic in real time using Wireshark to understand scan behavior. Monitored and detected suspicious activities using Wazuh, including alerts for promiscuous mode, port changes, and host-based anomalies.",
            //technologies: "https://skillicons.dev/icons?i=react,opencv,flask,tensorflow&perline=5&theme=",
            github: "https://github.com/priyankasuresh-dot/Port-Scanning-Packet-Analysis-and-Network-Monitoring-using-Nmap-Wireshark-and-Wazuh-"
            // link: "https://letterdigitshape-classification.netlify.app/"
        },
        {
            title: "SSH Brute Force Attack using Hydra with Monitoring via Wazuh and Wireshark",
            description: "Demonstrated an SSH brute-force attack using Hydra and showed how to detect and monitor the attack with Wazuh and Wireshark. Highlighted both offensive and defensive aspects of cybersecurity.",
            //technologies: "https://skillicons.dev/icons?i=react,firebase,0,0,0&perline=10&theme=",
            github: "https://github.com/priyankasuresh-dot/SSH-Brute-Force-Attack-using-Hydra-with-Monitoring-via-Wazuh-and-Wireshark"
            // link: "https://thechatroom.netlify.app/"
        },
        {
            title: "SSH Brute Force Attack using Metasploit with Threat Detection via Wazuh",
            description: "Executed an SSH brute-force attack using Metasploit’s ssh_login module, monitored it with Wireshark and Wazuh, and applied real-time mitigation using iptables. Aimed at understanding attack mechanics and detection.",
            //technologies: "https://skillicons.dev/icons?i=react,tailwindcss,ts,0,0&perline=5&theme=",
            github: "https://github.com/priyankasuresh-dot/SSH-Brute-Force-Attack-using-Metasploit-with-Threat-Detection-via-Wazuh"
            // link: "https://sudoku-solver-sa.netlify.app/"
        },
        {
            title: "Endpoint Security Monitoring with Xcitium EDR on Linux",
            description: "Deployed Xcitium OpenEDR on a Linux endpoint to monitor, detect, and respond to threats in real time. Demonstrated continuous endpoint telemetry and automated response actions for enhanced protection.",
            //technologies: "https://skillicons.dev/icons?i=react,firebase,0,0,0&perline=5&theme=",
            github: "https://github.com/priyankasuresh-dot/Endpoint-Security-Monitoring-with-Xcitium-EDR-on-Linux"
            //link: "https://weavers-loom.netlify.app/"
        }
    ],

    education: [
        {
            school: "Kalpataru Institute of Technology, Tiptur",
            degree: "B.E in Electronics and Communication Engineering",
            // year: "2021 - Present",
            image: "../kitclg.jpg"
        },
        {
            school: "Government PU collage for Boys,Tiptur ",
             degree: "KSPUC",
             year: "2020 - 2022",
            image: "../puclg.jpg"
        },
         {
            school: "N S M Girls High School,Tiptur ",
             degree: "High School",
             year: "2017 - 2020",
            image: "../svpph.jpg"
        },
        {
            school: "Sri Basaveshwara Primary School,Halkurke ",
             degree: "Primary School",
             year: "2010 - 2016",
            image: "../svpph.jpg"
        },
    ],

    contact: {
        title: "Reach Out and Connect",
        description: "Thank you for your interest in connecting with me. For collaboration, opportunities, or queries, feel free to email me directly at priyankah.suresh@gmail.com. I aim to respond within 24 hours. You can also connect with me on my social media profiles listed above."
    },

    footer: "© 2025 Priyanka H S. All Rights Reserved"
};

export default info;
