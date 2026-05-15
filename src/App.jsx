export default function CyberSecurityPortfolio() {
  const skills = [
    'Security Engineering', 'Network Engineering', 'Python', 'Linux Administration',
    'SIEM Analysis', 'Threat Hunting', 'TCP/IP Networking', 'Network Security',
    'Nmap', 'Burp Suite', 'Metasploit', 'Shell Scripting',
    'Cloud Security', 'VPN Configuration', 'Digital Forensics', 'Ethical Hacking'
  ];

  const projects = [
    {
      title: 'SIEM Log Analysis',
      tech: 'Linux · Shell · SOC Workflow',
      description:
        'Performed log collection, anomaly detection, and incident correlation while replicating real SOC triage and alerting workflows.',
      github: 'https://github.com/Nitindasapalli/siem-log-analysis',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop',
      metrics: ['24/7 Monitoring', 'Log Correlation', 'Threat Detection'],
    },
    {
      title: 'Phishing Simulation Demo',
      tech: 'Python · Security Awareness',
      description:
        'Developed a phishing simulation platform with credential logging, landing pages, and awareness-focused reporting for cybersecurity training.',
      github: 'https://github.com/Nitindasapalli/phish_demo',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Awareness Training', 'Credential Logging', 'Email Simulation'],
    },
    {
      title: 'Password Cracker',
      tech: 'Python · Authentication Security',
      description:
        'Built a password auditing tool supporting brute-force and dictionary-based testing to demonstrate weak credential risks and mitigation strategies.',
      github: 'https://github.com/Nitindasapalli/password-cracker',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Hash Testing', 'Dictionary Attack', 'Authentication Security'],
    },
    {
      title: 'Vulnerability Scanner',
      tech: 'Shell Scripting · Linux · Nmap',
      description:
        'Built an automated Linux vulnerability scanner using Nmap and enumeration tools to identify misconfigurations, outdated services, and exposed ports.',
      github: 'https://github.com/Nitindasapalli/vulnscan',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Port Enumeration', 'Nmap Scanning', 'Security Reporting'],
    },
    {
      title: 'Ethical Hacking Projects',
      tech: 'Penetration Testing · Networking · Linux',
      description:
        'Collection of ethical hacking and cybersecurity projects focused on penetration testing, networking, reconnaissance, and security engineering practices.',
      github: 'https://github.com/Nitindasapalli/Ethical-Hacking-Projects',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Reconnaissance', 'Privilege Escalation', 'Exploit Research'],
    },
    {
      title: 'VPN Configuration Using Raspberry Pi',
      tech: 'Raspberry Pi · Network Security',
      description:
        'Configured a secure VPN server with encryption, authentication, routing, and remote access testing.',
      github: 'https://github.com/Nitindasapalli',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Secure Remote Access', 'Encryption', 'Network Routing'],
    },
  ];

  const certifications = [
    'TryHackMe – Advent of Cyber 2024',
    'TryHackMe – Pre Security',
    'Cisco – Introduction to Cybersecurity',
    'Cisco – Networking Basics',
    'Google – Foundations of Cybersecurity',
    'Udemy – Complete Ethical Hacking',
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <header className="relative overflow-hidden border-b border-green-500/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#22c55e_0,_transparent_70%)]" />

        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-10">
          <h1 className="text-2xl font-bold tracking-widest text-green-300">
            NITIN<span className="text-white">.SEC</span>
          </h1>

          <div className="hidden md:flex gap-6 text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certifications" className="hover:text-white transition">Certifications</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>

        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Security Engineer & Network Engineer
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Building
              <span className="block text-green-400">Secure Networks & Systems</span>
            </h2>

            <p className="mt-8 text-lg text-green-200/80 leading-relaxed max-w-2xl">
              Cybersecurity postgraduate with an MSc in Cyber Security from the University of Surrey. Focused on network security, SOC operations, detection engineering, infrastructure protection, and secure enterprise systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-green-500 text-black font-bold hover:scale-105 transition-transform"
              >
                View Projects
              </a>

              <a
                href="mailto:ngdasapalli@outlook.com"
                className="px-6 py-3 rounded-xl border border-green-500/40 hover:bg-green-500/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-green-500/20 bg-[#051107] shadow-2xl p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <div className="space-y-4 text-sm md:text-base">
                <p>
                  <span className="text-green-500">root@surrey</span>:~$ whoami
                </p>
                <p className="text-white">Nitin Gurunath Dasapalli</p>

                <p>
                  <span className="text-green-500">root@surrey</span>:~$ status
                </p>
                <p className="text-white">Security Engineering • Network Security • Linux</p>

                <p>
                  <span className="text-green-500">root@surrey</span>:~$ current_focus
                </p>
                <p className="text-white">
                  Security Engineering | Network Engineering | SOC Operations
                </p>

                <p>
                  <span className="text-green-500">root@surrey</span>:~$ location
                </p>
                <p className="text-white">Guildford, United Kingdom</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        <section id="about" className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-green-500 tracking-[0.3em] text-sm mb-4">About Me</p>
            <h3 className="text-4xl font-bold text-white mb-6">
              Security Engineer & Network Engineer
            </h3>
          </div>

          <div className="text-green-200/80 leading-relaxed space-y-5 text-lg">
            <p>
              I completed my MSc in Cyber Security at the University of Surrey, where I specialised in network security, cloud security, penetration testing, secure infrastructure, and systems engineering.
            </p>

            <p>
              My hands-on experience includes SIEM log analysis, VPN deployments, Linux hardening, TCP/IP networking, network scanning, SOC workflows, and infrastructure security analysis aligned with MITRE ATT&CK methodologies.
            </p>

            <p>
              I am particularly interested in Security Engineering and Network Engineering roles where I can contribute to secure infrastructure design, threat detection, incident response, and enterprise network protection.
            </p>
          </div>
        </section>

        <section id="skills">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="uppercase text-green-500 tracking-[0.3em] text-sm mb-3">Core Skills</p>
              <h3 className="text-4xl font-bold text-white">Security & Network Engineering Skills</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-green-500/20 bg-green-500/5 rounded-2xl p-5 hover:border-green-400 hover:-translate-y-1 transition-all"
              >
                <div className="text-green-400 text-lg">&gt; {skill}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="mb-12">
            <p className="uppercase text-green-500 tracking-[0.3em] text-sm mb-3">Projects</p>
            <h3 className="text-4xl font-bold text-white">Security Engineering & Networking Projects</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden border border-green-500/20 rounded-3xl bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-400 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <h4 className="text-2xl font-bold text-white group-hover:text-green-300 transition max-w-[70%]">
                      {project.title}
                    </h4>

                    <span className="text-xs border border-green-500/30 px-3 py-1 rounded-full text-green-300 backdrop-blur bg-black/30">
                      Security
                    </span>
                  </div>
                </div>

                <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div></div>
                </div>

                <p className="text-green-400 text-sm mb-4">{project.tech}</p>

                <p className="text-green-100/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 transition"
                >
                  <span>View Project</span>
                  <span>↗</span>
                </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications">
          <div className="mb-10">
            <p className="uppercase text-green-500 tracking-[0.3em] text-sm mb-3">Achievements</p>
            <h3 className="text-4xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="border border-green-500/20 rounded-2xl p-6 bg-black/40 hover:bg-green-500/10 transition"
              >
                <div className="text-green-300 text-lg font-semibold">{cert}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-transparent p-10">
          <div className="max-w-3xl">
            <p className="uppercase text-green-500 tracking-[0.3em] text-sm mb-3">Contact</p>
            <h3 className="text-4xl font-bold text-white mb-6">
              Let’s Build Secure Systems Together
            </h3>

            <p className="text-green-100/80 text-lg leading-relaxed mb-8">
              Actively seeking full-time Security Engineer, SOC Analyst, and Network Engineer roles focused on infrastructure security, enterprise networking, threat detection, and secure systems engineering.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <a
                href="mailto:ngdasapalli@outlook.com"
                className="border border-green-500/20 rounded-2xl p-5 hover:border-green-400 transition"
              >
                <div className="text-sm text-green-500 mb-2">Email</div>
                <div className="text-white break-all">ngdasapalli@outlook.com</div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="border border-green-500/20 rounded-2xl p-5 hover:border-green-400 transition"
              >
                <div className="text-sm text-green-500 mb-2">GitHub</div>
                <div className="text-white">github.com/NitinDasapalli</div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="border border-green-500/20 rounded-2xl p-5 hover:border-green-400 transition"
              >
                <div className="text-sm text-green-500 mb-2">LinkedIn</div>
                <div className="text-white">linkedin.com/in/NitinDasapalli</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-500/20 py-8 text-center text-green-500 text-sm">
        © 2026 Nitin Gurunath Dasapalli · Security Engineer Portfolio
      </footer>
    </div>
  );
}
