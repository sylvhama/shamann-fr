export function trimLastSlash(value: string) {
  if (value.endsWith("/") && value.length > 1) {
    return value.slice(0, -1);
  } else {
    return value;
  }
}

export function getEnglishUrl(astroPathname: string) {
  const base = "https://shamann.dev";
  let pathname = "";
  switch (trimLastSlash(astroPathname)) {
    case "/parcours":
      pathname = "/relevant-experience";
      break;
    case "/vitrine":
      pathname = "/showcase";
      break;
    case "/articles-presentations":
      pathname = "/articles-talks";
      break;
    default:
      break;
  }
  return base + pathname;
}
