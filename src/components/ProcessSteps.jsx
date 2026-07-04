const STEPS = [
  { num: '01', title: 'Requirement Analysis', desc: 'Understanding your goals, target audience, and business requirements to build a solid project foundation.' },
  { num: '02', title: 'Planning', desc: 'Creating a detailed project roadmap, system architecture plan, and milestones.' },
  { num: '03', title: 'UI Review', desc: 'Designing user interfaces and user experiences to ensure a premium look and feel.' },
  { num: '04', title: 'Database Design', desc: 'Designing secure, optimized, and scalable database schemas and relationships.' },
  { num: '05', title: 'Backend Development', desc: 'Writing clean, robust APIs and business logic using modern backend technologies.' },
  { num: '06', title: 'Frontend Integration', desc: 'Connecting the user interface with the backend APIs for a seamless user experience.' },
  { num: '07', title: 'Testing', desc: 'Performing rigorous manual and automated testing to ensure a bug-free production product.' },
  { num: '08', title: 'Deployment', desc: 'Configuring servers, domain names, SSL, and deploying the application to production.' },
  { num: '09', title: 'Maintenance', desc: 'Providing ongoing support, server monitoring, updates, and optimization packages.' },
];

export default function ProcessSteps() {
  return (
    <div className="process-steps reveal">
      {STEPS.map((step) => (
        <div className="step" key={step.num}>
          <div className="step-num">{step.num}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
