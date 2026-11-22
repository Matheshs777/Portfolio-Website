export const myProjects = [
  {
    id: 1,
    title: "AYASK: Intelligent Conveyor Health Monitoring",
    description:
      "An AI predictive maintenance solution for mining conveyors, combining machine vision, IoT telemetry, and a digital twin to detect anomalies before failure.",
    subDescription: [
      "Visual Anomaly Detection: PatchCore (ResNet-18) identifies belt tears and surface wear.",
      "Edge Monitoring: Continuous tracking via vibration, acoustic, and thermal sensors.",
      "Digital Twin: Real-time 3D dashboard for defect localization and alerts.",
    ],
    href: "https://ayask.vercel.app",
    cadHref: "https://sketchfab.com/models/004bd9d5be5a435bb2eb2afaba4d8cc6/embed",
    logo: "/assets/logos/python.png",
    image: "/assets/projects/ayask.png",
    tags: [
      {
        id: 1,
        name: "Python / Jetson",
        path: "/assets/logos/Python-logo.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Omni-Node: AI-Driven Retrofit Ecosystem",
    description:
      "An edge-AI hardware solution designed to retrofit legacy CNC machinery, bringing HMLV (High-Mix Low-Volume) manufacturing flexibility to existing infrastructure.",
    subDescription: [
      "Designed hardware architecture integrating an NVIDIA Jetson Orin Nano, ESP32 microcontrollers, and MPU6050 sensors.",
      "Developed comprehensive system block diagrams, unit economics, and hardware BOM documentation.",
      "Formulated a Master Jury Dossier and Business Proposal for the MSME Idea Hackathon 6.0.",
    ],
    href: "https://omni-node-dashboard.vercel.app",
    logo: "/assets/logos/Nvdia.png",
    image: "/assets/projects/omninode.png",
    tags: [
      {
        id: 1,
        name: "Edge AI / IoT",
        path: "/assets/logos/Nvdia.png",
      },
    ],
  },
  {
    id: 3,
    title: "Vyuha: AI-Driven Robot for VR Digitization",
    description:
      "An autonomous bipedal robot with an end-to-end spatial virtualization pipeline that digitizes physical spaces into immersive VR digital twins without human entry.",
    subDescription: [
      "Proximal Actuation: Torso-concentrated pancake motors cut distal inertia by >40% for agile stair climbing.",
      "Bimodal Locomotion: 0.5 Hz stable scanning and 1.3 Hz obstacle clearing reduce power draw by 18–22%.",
      "Volumetric Twin: ROS 2 LiDAR-IMU SLAM generates collision-ready GLB/USDZ meshes with 75% decimation.",
    ],
    href: "https://vyuha-dashboard.vercel.app",
    cadHref: "https://sketchfab.com/models/dc63ef80d56d4c2aa71d8be993a6884c/embed",
    logo: "/assets/logos/logo.png",
    image: "/assets/projects/Bipedal.jpeg",
    previewFit: "contain",
    tags: [
      {
        id: 1,
        name: "Robotics / ROS 2",
        path: "/assets/logos/logo.png",
      },
    ],
  },
  {
    id: 4,
    title: "Tarang: Autonomous Ocean Observation Platform",
    description:
      "A low-cost, autonomous ocean observation buoy designed for continuous monitoring of remote marine environments using renewable energy and intelligent sensor fusion.",
    subDescription: [
      "Hybrid Power Management: Harvests solar and wave energy with smart distribution to modules.",
      "Self-Righting Mechanism: Active pump and ballast system for automated capsize recovery.",
      "Sensor Fusion: Integrates GNSS, 10-DOF IMU, and sensors for temperature and salinity tracking.",
    ],
    href: "https://sketchfab.com/models/3a9abf7f04e049a8aa149a503ad97ece/embed",
    logo: "/assets/logos/esp32.png",
    image: "/assets/projects/tarang.png",
    tags: [
      {
        id: 1,
        name: "ESP32 / C++",
        path: "/assets/logos/esp32.png",
      },
    ],
  },
  {
    id: 5,
    title: "Helicopter Rotor Mechanism Assembly",
    description:
      "A helicopter rotor mechanism designed and assembled in SOLIDWORKS, comprising the rotor head, swashplate, pitch links and servos. All parts were modeled from scratch except the standard nuts and bolts.",
    subDescription: [
      "Assembly Scale: 255 components (237 part instances and 18 sub-assemblies) with 573 solid bodies.",
      "Unique Files: 49 unique part files and 6 unique sub-assembly files, 3 levels deep.",
      "Mates: 404 mates evaluated on rebuild, 47 of them at the top level.",
    ],
    href: "https://sketchfab.com/models/ae2fba3dcabb4d818dce0946dafb9274/embed",
    logo: "/assets/logos/soildworks.png",
    image: "/assets/projects/helicopter-rotor.png",
    tags: [
      {
        id: 1,
        name: "SolidWorks",
        path: "/assets/logos/soildworks.png",
      },
    ],
  },
  {
    id: 6,
    title: "Jet Engine (Turbofan) Assembly",
    description:
      "A turbofan jet engine modeled from scratch in SOLIDWORKS, built from the internal compressor and turbine core outward to the nacelle.",
    subDescription: [
      "31 custom parts, 72 mates, and 41 solid bodies built with zero templates.",
      "Core-outward architecture with aligned multi-stage compressor and turbine rotors.",
      "Standardized origin and naming workflow across a 5-member team.",
    ],
    href: "https://sketchfab.com/models/5283cbda1ea2491fb7c8aa04a54ff65e/embed",
    logo: "/assets/logos/soildworks.png",
    image: "/assets/projects/jet-engine.png",
    tags: [
      {
        id: 1,
        name: "SolidWorks",
        path: "/assets/logos/soildworks.png",
      },
    ],
  },
  {
    id: 7,
    title: "Universal Joint (Hooke's Coupling) Assembly",
    description:
      "A mechanical universal joint assembly modeled and constrained in SOLIDWORKS for rotational torque transmission between inclined shafts.",
    subDescription: [
      "Assembly Scale: 19 resolved part components and 19 solid bodies built from 6 unique parts (Bolt, Bush, Fork, Nut, Pin, Shaft).",
      "Mates & Constraints: 22 top-level mates evaluated on rebuild for smooth multi-axis angular articulation.",
      "Motion Study: Verified smooth 360° shaft rotation in SOLIDWORKS and published as an interactive 3D web model.",
    ],
    href: "https://sketchfab.com/models/53268d4b2c7c4603a463788f45f81caf/embed",
    logo: "/assets/logos/soildworks.png",
    image: "/assets/projects/Universal Joint isometric view.png",
    tags: [
      {
        id: 1,
        name: "SolidWorks",
        path: "/assets/logos/soildworks.png",
      },
    ],
  },
  {
    id: 8,
    title: "4-Cylinder Engine Assembly",
    description:
      "3D parametric modeling, component mating, and dynamic motion analysis of an internal combustion engine.",
    subDescription: [
      "Built in SolidWorks with strict engineering tolerances and interference checks.",
      "Performed detailed kinematic motion analysis and simulation.",
      "Designed with a focus on structural dynamic evaluation and performance.",
      "Exported for web visualization using interactive 3D embeds.",
    ],
    href: "https://sketchfab.com/models/fbd95c7cf51b488db89ce65d18d4b11f/embed",
    logo: "/assets/logos/soildworks.png",
    image: "/assets/projects/engine.png",
    tags: [
      {
        id: 1,
        name: "SolidWorks",
        path: "/assets/logos/soildworks.png",
      },
    ],
  },
  {
    id: 9,
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
      },
    ],
  },
  {
    id: 10,
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
      },
    ],
  },
  {
    id: 11,
    title: "Converging Pipe CFD Simulation",
    description:
      "Computational Fluid Dynamics (CFD) simulation examining velocity contours and pressure distribution.",
    subDescription: [
      "Analyzed using ANSYS Fluent to study turbulent boundary layers.",
      "Evaluated pressure drops across varying cross-sections of the pipe.",
      "Generated detailed fluid flow velocity pathlines and data reports.",
    ],
    href: "/assets/projects/converging-pipe-report.pdf",
    logo: "/assets/logos/anys.png",
    image: "/assets/projects/converging pipe poster.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Fluent",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 12,
    title: "Laminar Pipe Flow Analysis",
    description:
      "Conducted a computational analysis of laminar flow through a constant-diameter pipe in ANSYS 2026 R1 (Student). The simulation effectively captures the development of a parabolic velocity profile, characterized by maximum velocity at the centerline and near-zero velocity at the walls due to the no-slip condition.",
    subDescription: [
      "Analysis Type: Laminar Pipe Flow",
      "Key Findings: Fully developed parabolic velocity profile observed",
      "Visualizations: Velocity contour plot and laminar streamline tracking",
    ],
    href: "/assets/projects/laminar-pipe-flow-report.pdf",
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
    id: 13,
    title: "Cantilever Beam FEA",
    description:
      "Performed a Static Structural analysis of a cantilever beam in ANSYS 2026 R1 (Student). Applied a point load at the free end with a fixed support at the base. Results show a maximum total deformation of 0.1925 mm at the free end, with zero deformation at the fixed support.",
    subDescription: [
      "Total Deformation: 0.1925 mm max",
      "Fixed Support + Point Force",
      "Equivalent Stress solved",
    ],
    href: "/assets/projects/cantilever-beam-fea-report.pdf",
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
    id: 14,
    title: "Turbulent Flow Over a Backward-Facing Step",
    description:
      "Conducted a NASA-validated CFD simulation of turbulent flow over a backward-facing step. Validated wall shear stress and reattachment points against empirical NASA data to ensure computational accuracy.",
    subDescription: [
      "Validation: Compared against NASA experimental data",
      "Flow Type: Turbulent Flow",
      "Visualizations: Wall Shear X plots and velocity contours",
    ],
    href: "/assets/projects/turbulent-flow-over-a-backward-facing-step-report.pdf",
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
    id: 15,
    title: "Laminar Boundary Layer Over a Flat Plate",
    description:
      "Simulated the development of a laminar boundary layer over a flat plate. Successfully captured velocity contours and analyzed the boundary layer thickness growth along the length of the plate.",
    subDescription: [
      "Analysis: Laminar Boundary Layer development",
      "Key Physics: Viscous effects and no-slip boundary condition",
      "Visualizations: Velocity contours and vector plots",
    ],
    href: "/assets/projects/laminar-boundary-layer-over-a-flat-plate-report.pdf",
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
    id: 16,
    title: "Shaft Torsion FEA",
    description:
      "Performed a Static Structural torsion analysis on a 500 mm × 40 mm Structural Steel circular shaft in ANSYS 2026 R1 (Student). Applied a 5 × 10⁵ N·mm torsional moment at the free end with a fixed support at the opposite face to evaluate shear stress, von-Mises stress, and angular deformation.",
    subDescription: [
      "Maximum Shear Stress: 40.604 MPa (Equivalent von-Mises Stress: 70.328 MPa)",
      "Total Deformation: 0.25866 mm max at the loaded end",
      "Mesh & Setup: 3,600 sweep elements (6.0 mm body sizing) with 5 × 10⁵ N·mm moment reaction",
    ],
    href: "/assets/projects/Shaft Torsion report.pdf",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/shaft-torsion.png",
    tags: [
      {
        id: 1,
        name: "ANSYS Structural",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 17,
    title: "Pin Fin Steady-State Thermal Analysis",
    description:
      "Conducted a Steady-State Thermal simulation of a 100 mm × 10 mm Aluminium K205 circular pin fin in ANSYS 2026 R1 (Student). Evaluated conductive-convective heat dissipation with a 100 °C base temperature and 30 °C ambient convection.",
    subDescription: [
      "Temperature Distribution: Dropped from 100 °C at the base to 85.233 °C at the tip",
      "Heat Transfer: 4.835 W total reaction heat flow and 0.0633 W/mm² max heat flux",
      "Path Profiling: Evaluated axial thermal gradient across 47 sampling points",
    ],
    href: "/assets/projects/Fin_Steady_State_Thermal_Report.pdf",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/fin-thermal.png",
    tags: [
      {
        id: 1,
        name: "ANSYS Thermal",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 18,
    title: "Rotating Disc Axisymmetric FEA",
    description:
      "Executed a 2D axisymmetric Static Structural analysis of a rotating Structural Steel disc (125 mm × 10 mm) at 628.32 rad/s in ANSYS 2026 R1 (Student) to determine centrifugal hoop/radial stresses and radial expansion.",
    subDescription: [
      "Stress Results: 57.715 MPa max Equivalent (von-Mises) stress and 57.76 MPa hoop stress",
      "Radial Deformation: 0.010511 mm max outward displacement at 628.32 rad/s",
      "2D Axisymmetric Mesh: 200 quad-dominant elements (2.5 mm face sizing)",
    ],
    href: "/assets/projects/Roatating Disc Report.pdf",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/rotating-disc.png",
    tags: [
      {
        id: 1,
        name: "ANSYS Structural",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 19,
    title: "Rotating Shaft Modal Vibration Analysis",
    description:
      "Conducted a free-vibration Modal analysis of a 600 mm Structural Steel shaft carrying a 9 kg central point mass in ANSYS 2026 R1 (Student), extracting the first 8 natural frequencies and bending/torsional mode shapes.",
    subDescription: [
      "Natural Frequencies: Extracted 8 modes ranging from 64.675 Hz (1st bending) to 1304.3 Hz",
      "Mode Shapes: Identified fundamental (64.68 Hz), second (652.28 Hz), and third (1046.5 Hz) bending modes",
      "Beam & Mass Modeling: 1D circular beam (R = 15 mm) with 9 kg lumped mass at mid-span",
    ],
    href: "/assets/projects/Rotating_Shaft_Vibration_Report.pdf",
    logo: "/assets/logos/ansys.png",
    image: "/assets/projects/shaft-vibration.jpeg",
    tags: [
      {
        id: 1,
        name: "ANSYS Modal",
        path: "/assets/logos/ansys.png",
      },
    ],
  },
  {
    id: 20,
    title: "CR7 Interactive Tribute Experience",
    description:
      "An immersive web experience celebrating Cristiano Ronaldo's legacy, featuring a dynamic 1,000-goal tracker, 3D elements, and cinematic animations.",
    subDescription: [
      "Core Architecture: Built with React 19, TypeScript 5.9, Vite 7, and Tailwind CSS.",
      "Motion & 3D: Powered by Three.js (React Three Fiber), GSAP ScrollTrigger, and Motion for React.",
      "Cinematic UX: Fluid scrolling via Lenis, asset optimization with Sharp, and self-hosted fonts.",
    ],
    href: "https://cr7-tribute-page.vercel.app/",
    logo: "/assets/logos/react.png",
    image: "/assets/projects/tribute.png",
    tags: [
      {
        id: 1,
        name: "React 19 / TS",
        path: "/assets/logos/React.png",
      },
      {
        id: 2,
        name: "Three.js / GSAP",
        path: "/assets/logos/threejs.png",
      },
    ],
  },
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
    name: "SOLIDWORKS",
    username: "@solidworks",
    body: "Incredible attention to detail here! Thanks for showing us!",
    img: "/assets/logos/soildworks.png",
    href: "https://lnkd.in/p/gU_VFdWA",
  },
  {
    name: "Sleem Mohammad",
    username: "Co-Founder, SSKY Aerospace Industries",
    body: "I came across your profile today and was impressed by the projects you've designed.",
    initials: "SM",
    avatarColor: "bg-blue-700",
  },
  {
    name: "Cherry Huang",
    username: "Senior Project Manager",
    body: "Assembly is truly where the design comes alive! Moving from complex 3D suspension mating to physical, tight-tolerance CNC and rapid prototype parts is where precision matters most. Great CAD journey!",
    initials: "CH",
    avatarColor: "bg-pink-700",
    href: "https://lnkd.in/p/gArf6WGB",
  },
  {
    name: "Dhiyaneswaran Jaganathan",
    username: "Assistant Professor @ SKCET",
    body: "Excellent work, Vishesh and Mathesh! Keep learning, innovating, and building more amazing projects.",
    initials: "DJ",
    avatarColor: "bg-teal-700",
    href: "https://lnkd.in/p/gXBpFYdc",
  },
  {
    name: "Youssef Agnaou",
    username: "Fail-Safe Valves & Actuation Specialist",
    body: "The same goes for drawings: a sheet can look complete and still miss the tolerance that matters at assembly. Mates are a good check for the model, but the drawing needs its own.",
    initials: "YA",
    avatarColor: "bg-orange-700",
    href: "https://lnkd.in/p/grYgdmTY",
  },
  {
    name: "Nobpawan WunderView.",
    username: "Automotive CGI Specialist",
    body: "Great work on the assembly!",
    initials: "NW",
    avatarColor: "bg-violet-700",
    href: "https://lnkd.in/p/gZrAdNt7",
  },
  {
    name: "Zeinab Tayyar",
    username: "Ph.D in Nuclear Physics | Tabriz University",
    body: "I've worked with it too. I know how much effort it takes. Especially if the geometry dimensions don't match up properly. For example, my geometry dimensions were a few meters by a few tenths of a millimeter, which made meshing very difficult.",
    initials: "ZT",
    avatarColor: "bg-sky-700",
    href: "https://lnkd.in/p/gHw8WQDY",
  },
];

export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Work", href: "#work" },
  { id: 4, name: "Contact", href: "#contact" },
];

export const clientReviews = reviews;
export const workExperiences = experiences;