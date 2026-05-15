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
        'Designed a SIEM-style log analysis workflow to simulate SOC triage, alert correlation, and threat detection pipelines used in enterprise security operations.',
      github: 'https://github.com/Nitindasapalli/siem-log-analysis',
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop',
      metrics: ['SOC Simulation', 'Log Correlation', 'Threat Detection'],
    },
    {
      title: 'Phishing Simulation Demo',
      tech: 'Python · Security Awareness',
      description:
        'Built a phishing simulation platform for cybersecurity awareness training, demonstrating credential capture flows and user security education techniques.',
      github: 'https://github.com/Nitindasapalli/phish_demo',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Awareness Training', 'Email Simulation', 'Credential Flow'],
    },
    {
      title: 'Password Cracker',
      tech: 'Python · Authentication Security',
      description:
        'Developed a password auditing tool to demonstrate brute-force and dictionary attack risks in weak authentication systems.',
      github: 'https://github.com/Nitindasapalli/password-cracker',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Hash Testing', 'Brute Force', 'Auth Security'],
    },
    {
      title: 'Vulnerability Scanner',
      tech: 'Shell · Linux · Nmap',
      description:
        'Automated vulnerability scanner using Nmap and enumeration tools to identify open ports, misconfigurations, and exposed services.',
      github: 'https://github.com/Nitindasapalli/vulnscan',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Port Scanning', 'Enumeration', 'Risk Detection'],
    },
    {
      title: 'Ethical Hacking Projects',
      tech: 'Penetration Testing · Linux',
      description:
        'Collection of ethical hacking exercises focused on reconnaissance, exploitation techniques, and system security testing.',
      github: 'https://github.com/Nitindasapalli/Ethical-Hacking-Projects',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      metrics: ['Recon', 'Exploitation', 'Security Testing'],
    },
    {
      title: 'VPN Configuration Using Raspberry Pi',
      tech: 'Networking · Security Engineering',
      description:
        'Configured a secure VPN server using Raspberry Pi with encrypted remote access and secure tunneling.',
      github: 'https://github.com/Nitindasapalli',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      metrics: ['VPN Setup', 'Encryption', 'Remote Access'],
    },
  ];

  const certifications = [
    'TryHackMe – Advent of Cyber 2024',
    'TryHackMe – Pre Security',
    'Cisco – Introduction to Cybersecurity',
    'Cisco – Networking Basics',
    'Google – Foundations of Cybersecurity',
    'Udemy – Ethical Hacking Complete',
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">

      {/* HEADER */}
      <header className="relative overflow-hidden border-b border-green-500/20">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#22c55e_0,_transparent_70%)]" />

        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between relative z-10">
          <h1 className="text-2xl font-bold tracking-widest text-green-300">
            NITIN<span className="text-white">.SEC</span>
          </h1>
        </nav>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Security Engineer & Network Engineer
            </div>

            <h2 className="text-5xl font-black text-white">
              Building <span className="text-green-400">Secure Systems</span>
            </h2>

            <p className="mt-6 text-green-200/80 max-w-xl">
              MSc Cyber Security graduate specializing in SOC operations, network defense,
              and secure infrastructure engineering.
            </p>

            {/* TERMINAL BLOCK */}
            <div className="mt-8 font-mono text-green-400 bg-black p-4 rounded-xl border border-green-500/20">
              $ initializing security profile...<br />
              $ loading SOC modules...<br />
              $ network defense systems: ACTIVE<br />
              $ status: READY FOR DEPLOYMENT
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-green-500 text-black rounded-xl font-bold">
                View Projects
              </a>

              <a href="/resume.pdf" download className="px-6 py-3 border border-green-500/40 rounded-xl">
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-green-500/20 bg-[#051107] p-6 rounded-3xl">
            <p className="text-green-400">root@surrey:~$ whoami</p>
            <p className="text-white mb-4">Security Engineer</p>

            <p className="text-green-400">status</p>
            <p className="text-white mb-4">SOC | Network | Linux</p>

            <p className="text-green-400">location</p>
            <p className="text-white">Guildford, UK</p>
          </div>

        </section>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* ABOUT */}
        <section>
          <h3 className="text-3xl text-white font-bold">About Me</h3>
          <p className="text-green-200/80 mt-4">
            Cybersecurity graduate focused on SOC operations, network engineering,
            penetration testing, and secure system design.
          </p>
        </section>

        {/* JOB SECTION */}
        <section className="text-center">
          <div className="inline-block p-4 border border-green-500/30 rounded-xl bg-green-500/5">
            <h2 className="text-green-400 font-bold">Actively Seeking Roles</h2>
            <p className="text-green-200/80 mt-2">
              Security Engineer • Network Engineer • SOC Analyst
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h3 className="text-3xl text-white font-bold mb-6">Skills</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {skills.map(skill => (
              <div key={skill} className="border border-green-500/20 p-4 rounded-xl">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h3 className="text-3xl text-white font-bold mb-6">Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => (
              <div key={p.title} className="border border-green-500/20 rounded-xl p-5">
                <h4 className="text-white text-xl">{p.title}</h4>
                <p className="text-green-200/80 mt-2">{p.description}</p>

                <a className="text-green-400 mt-3 inline-block" href={p.github} target="_blank">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SOC DASHBOARD */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-green-500/20 rounded-xl text-center">
            Threat Detection ACTIVE
          </div>
          <div className="p-6 border border-green-500/20 rounded-xl text-center">
            Network Monitoring ONLINE
          </div>
          <div className="p-6 border border-green-500/20 rounded-xl text-center">
            Incident Response READY
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h3 className="text-3xl text-white font-bold mb-6">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map(c => (
              <div key={c} className="border border-green-500/20 p-4 rounded-xl">
                {c}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h3 className="text-3xl text-white font-bold mb-6">Contact</h3>
          <p>Email: ngdasapalli@outlook.com</p>
        </section>

      </main>

      <footer className="text-center py-8 border-t border-green-500/20">
        © 2026 Security Portfolio
      </footer>
    </div>
  );
}
