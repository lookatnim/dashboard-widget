import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tharindu Nimesh</h1>
        <p className="text-gray-600">
          A proactive software engineer with over 1 year of experience specializing in full-stack development using
          React.js, Node.js, and MySQL. Skilled in cloud technologies (AWS) and delivering scalable solutions.
        </p>
      </header>

      {/* Contact Section */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <ul className="text-gray-600">
          <li>📞 Phone: <a href="tel:+94716801816" className="text-blue-500">+94 71-680-1816</a></li>
          <li>📧 Email: <a href="mailto:tharindu.nimesh.se@gmail.com" className="text-blue-500">tharindu.nimesh.se@gmail.com</a></li>
          <li>🌍 Address: 12/3, Umagiliya, Polhena, Kelaniya</li>
          <li>🔗 LinkedIn: <a href="https://linkedin.com/in/tharindu-nimesh" target="_blank" className="text-blue-500">linkedin.com/in/tharindu-nimesh</a></li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
        <p className="text-gray-600">
          Bachelor of Information and Communication Technology, Specializing in Software Technologies <br />
          <strong>South Eastern University of Sri Lanka</strong>
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-600">
          <li>JavaScript, TypeScript, Python, C#, Java</li>
          <li>ReactJS, Angular, MUI (Material-UI)</li>
          <li>NodeJS, .NET Core</li>
          <li>SQL, MongoDB, Firebase</li>
          <li>AWS, GitHub, Bitbucket</li>
          <li>Bootstrap, Tailwind CSS</li>
          <li>WordPress</li>
          <li>Prompt Engineering, ChatGPT</li>
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Associate Software Engineer</strong> - Zfrozen (Aug 2023 - Mar 2024)
            <p className="text-gray-600">Developed POS and ERP systems, leveraging AI for performance optimization.</p>
          </li>
          <li>
            <strong>Intern Software Engineer</strong> - Sampath Information Technology Solutions (Sep 2022 - Mar 2023)
            <p className="text-gray-600">
              Delivered a robust POS system and contributed to the development of an ERP solution.
            </p>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Attendance System Development (Freelance)</strong>
            <p className="text-gray-600">
              Designed a barcode-scanning attendance system, reducing check-in time by 40%. Deployed on AWS EC2.
            </p>
          </li>
          <li>
            <strong>POS System Development</strong>
            <p className="text-gray-600">
              Built a full-stack POS system with real-time transaction processing and inventory tracking.
            </p>
          </li>
          <li>
            <strong>ERP System Development</strong>
            <p className="text-gray-600">
              Contributed to modular ERP development, increasing workflow automation by 25%.
            </p>
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-600 mt-6">
        <p>References available upon request.</p>
      </footer>
    </div>
  );
};

export default About;
