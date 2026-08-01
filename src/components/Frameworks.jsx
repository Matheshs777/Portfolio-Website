import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "ansys.svg",
    "autocad.svg",
    "creo.svg",
    "FreeCAD.svg",
    "fusion.svg",
    "onshape.svg",
    "Python-logo.svg",
    "Siemens-NX.svg",
    "soildedge.svg",
     "Matlab.svg",
    "soildworkslogo.svg",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer Ring */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>

      {/* Inner Ring (Reversed) */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img 
    src={src} 
    className="duration-200 rounded-sm hover:scale-110 object-contain" 
    onError={(e) => (e.target.style.display = "none")}
  />
);