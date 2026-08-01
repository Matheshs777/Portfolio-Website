export const myProjects = [
  {
    id: 1,
    title: "4-Cylinder Engine Assembly",
    description:
      "3D parametric modeling, component mating, and dynamic motion analysis of an internal combustion engine.",
    subDescription: [
      "Built in SolidWorks with strict engineering tolerances and interference checks.",
      "Performed detailed kinematic motion analysis and simulation.",
      "Designed with a focus on structural dynamic evaluation and performance.",
      "Exported for web visualization using interactive 3D embeds."
    ],
    href: "https://sketchfab.com/models/fbd95c7cf51b488db89ce65d18d4b11f/embed",
    logo: "/assets/logos/soildworks.png",
    image: "/assets/projects/engine.png",
    tags: [
      {
        id: 1,
        name: "SolidWorks",
        path: "/assets/logos/soildworks.png",
      }
    ],
  },
  {
    id: 2,
    title: "Car Suspension & Steering System",
    description:
      "Complete 3D structural model and geometric constraint design for an automotive suspension assembly.",
    subDescription: [
      "Designed using Solid Edge for precision automotive modeling.",
      "Focused on load distribution, joint articulation, and chassis mounting.",
      "Evaluated spring compression and linkage limits.",
    ],
    href: "https://sketchfab.com/models/3b4bcb5e7e614bda942c944bae1a2b85/embed",
    logo: "/assets/logos/soildedge.webp",
    image: "/assets/projects/car_suspenstion.png",
    tags: [
      {
        id: 1,
        name: "Solid Edge",
        path: "/assets/logos/soildedge.webp",
      }
    ],
  },
  {
    id: 3,
    title: "Automotive Car Wheel Assembly",
    description:
      "Precision parametric rim and tire CAD design optimized for structural integrity and aerodynamics.",
    subDescription: [
      "Created in Fusion 360 utilizing advanced surface modeling.",
      "Built with parametric feature trees for rapid dimension adjustments.",
      "Optimized geometry for weight reduction without sacrificing strength.",
    ],
    href: "https://sketchfab.com/models/4c905dfb7214429f9512014448c3e1b0/embed",
    logo: "/assets/logos/fusion.png",
    image: "/assets/projects/wheel.png",
    tags: [
      {
        id: 1,
        name: "Fusion 360",
        path: "/assets/logos/fusion.png",
      }
    ],
  },
  {
    id: 4,
    title: "Converging Pipe CFD Simulation",
    description:
      "Computational Fluid Dynamics (CFD) simulation examining velocity contours and pressure distribution.",
    subDescription: [
      "Analyzed using ANSYS Fluent to study turbulent boundary layers.",
      "Evaluated pressure drops across varying cross-sections of the pipe.",
      "Generated detailed fluid flow velocity pathlines and data reports.",
    ],
    href: "https://mathesh-mech.vercel.app",
    logo: "/assets/logos/anys.png",
    image: "/assets/projects/converging pipe poster.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Fluent",
        path: "/assets/logos/ansys.png",
      }
    ],
    
  },
  {
    id: 5,
    title: "Laminar Pipe Flow Analysis",
    description:
      "Conducted a computational analysis of laminar flow through a constant-diameter pipe in ANSYS 2026 R1 (Student). The simulation effectively captures the development of a parabolic velocity profile, characterized by maximum velocity at the centerline and near-zero velocity at the walls due to the no-slip condition.",
    subDescription: [
      "Analysis Type: Laminar Pipe Flow",
      "Key Findings: Fully developed parabolic velocity profile observed",
      "Visualizations: Velocity contour plot and laminar streamline tracking",
    ],
    href: "https://mathesh-mech.vercel.app",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/laminar pipe poster.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Fluent",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 6,
    title: "Cantilever Beam FEA",
    description:
      "Performed a Static Structural analysis of a cantilever beam in ANSYS 2026 R1 (Student). Applied a point load at the free end with a fixed support at the base. Results show a maximum total deformation of 0.1925 mm at the free end, with zero deformation at the fixed support.",
    subDescription: [
      "Total Deformation: 0.1925 mm max",
      "Fixed Support + Point Force",
      "Equivalent Stress solved",
    ],
    href: "https://mathesh-mech.vercel.app",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/beam screenshot.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Structural",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 7,
    title: "Turbulent Flow Over a Backward-Facing Step",
    description:
      "Conducted a NASA-validated CFD simulation of turbulent flow over a backward-facing step. Validated wall shear stress and reattachment points against empirical NASA data to ensure computational accuracy.",
    subDescription: [
      "Validation: Compared against NASA experimental data",
      "Flow Type: Turbulent Flow",
      "Visualizations: Wall Shear X plots and velocity contours",
    ],
    href: "https://mathesh-mech.vercel.app",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/turbulent velocity.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Fluent",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 8,
    title: "Laminar Boundary Layer Over a Flat Plate",
    description:
      "Simulated the development of a laminar boundary layer over a flat plate. Successfully captured velocity contours and analyzed the boundary layer thickness growth along the length of the plate.",
    subDescription: [
      "Analysis: Laminar Boundary Layer development",
      "Key Physics: Viscous effects and no-slip boundary condition",
      "Visualizations: Velocity contours and vector plots",
    ],
    href: "https://mathesh-mech.vercel.app",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/v.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Fluent",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 9,
    title: "Tribute Page",
    description:
      "This tribute page highlights the career achievements and legacy of CR7. Built with HTML & CSS, fully responsive, and hosted live on Vercel.",
    subDescription: [
      "Tech Stack: HTML5 & CSS3",
      "Fully Responsive Design",
      "Live Deployment via Vercel",
    ],
    href: "https://cr7-tribute-page.vercel.app/",
    logo: "/assets/logos/github.png", 
    image: "/assets/projects/tribute.png",
    tags: [
      {
        id: 1,
        name: "Web Development",
        path: "/assets/logos/github.png",
      },
    ],
  }
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Matheshs777",
    icon: "/assets/logos/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mathesh-s-598ab7367",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:matheshs777@gmail.com",
    icon: "/assets/socials/email.jpg",
  },
];

export const experiences = [
  {
    title: "Student Engineer — B.E. Mechanical",
    job: "Sri Krishna College of Engineering and Technology (SKCET)",
    date: "Aug 2025 - Present",
    contents: [
      "Studying core mechanical engineering concepts including Thermodynamics, Fluid Mechanics, and Kinematics.",
      "Building hands-on projects combining SolidWorks 3D modeling, ANSYS simulations, and practical lab work.",
      "Developing technical solutions leveraging industry-standard CAD software like Fusion 360 and Solid Edge.",
      "Exploring the integration of mechanical design with modern web technologies for 3D visualization.",
    ],
  },
  {
    title: "Mechanical CAD / CFD Designer",
    job: "Independent Projects",
    date: "2026 - Present",
    contents: [
      "Modeled complex automotive assemblies, including a 4-cylinder engine and suspension systems.",
      "Utilized Finite Element Analysis (FEA) to calculate safety factors and stress distributions.",
      "Deployed a live interactive web portfolio to showcase 3D mechanical models and technical capabilities.",
    ],
  },
];
export const reviews = [
  {
    name: "Academic Peer",
    username: "@skcet_colleague",
    body: "Mathesh demonstrates a deep understanding of mechanical design principles. His 3D modeling skills in SolidWorks are exceptionally precise.",
    img: "https://robohash.org/skcet1",
  },
  {
    name: "Project Advisor",
    username: "@advisor",
    body: "Excellent work on the CFD analysis. The attention to detail in the fluid flow simulations was thorough and highly accurate.",
    img: "https://robohash.org/advisor1",
  },
  {
    name: "Design Lead",
    username: "@cad_expert",
    body: "The engine assembly model shows great proficiency with parametric constraints and interference checks. Brilliant execution.",
    img: "https://robohash.org/cad_expert",
  },
];

export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

export const clientReviews = reviews; 
export const workExperiences = experiences;