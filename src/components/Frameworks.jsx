import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "PostgresSQL",
    "DS",
    "postman",
    "nginx",
    "css3",
    "redux",
    "AWS",
    "git",
    "html5",
    "javascript",
    "Node.js",
    "react",
    "Figma",
    "tailwindcss",
    "vitejs",
    "MongoDB",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} label={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} label={skill}  />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, label }) => (
  <img
    src={src}
    title={label}
    className="duration-200 rounded-sm hover:scale-110"
    alt={label}
  />
);
