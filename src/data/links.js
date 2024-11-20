const LINKS = {
  facebook: "https://fb.com/oliniyoj",
  instagram: "https://instagram.com/oliniyoj",
  x: "https://x.com/oliniyoj",
  linkedin: "https://linkedin.com/in/niyoj",
  github: "https://github.com/niyoj",
  email: "niyoj.dev@gmail.com",
  calendly: "https://calendly.com/niyoj",
};

export function getLink(name) {
  return LINKS[name] ?? "https://niyoj.github.io";
}
