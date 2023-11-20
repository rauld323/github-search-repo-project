export function setBackgroundColor(languageName: string) {
  switch (languageName) {
    case "CSS":
      return "yellow";
    case "HTML":
      return "red";
    case "JAVASCRIPT":
      return "purple";
    case "TYPESCRIPT":
      return "blue";
    default:
      return "none";
  }
}

export function setTextColor(languageName: string) {
  switch (languageName) {
    case "CSS":
      return "black";
    case "HTML":
      return "white";
    case "JAVASCRIPT":
      return "white";
    case "TYPESCRIPT":
      return "white";
    default:
      return "none";
  }
}
