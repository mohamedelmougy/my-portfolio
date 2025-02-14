import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "nginx",
  "vercel",
  "linux",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
];

function IconCloud3D() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex w-[350px] h-[350px] items-center justify-end overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
export default IconCloud3D;
