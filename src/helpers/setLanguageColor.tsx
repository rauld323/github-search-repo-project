export function setBackgroundColor(languageName: string) {
  switch (languageName) {
    case "CSS":
      return "yellow";
    case "HTML":
      return "red";
    case "JavaScript":
      return "purple";
    case "TypeScript":
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
    case "JavaScript":
      return "white";
    case "TypeScript":
      return "white";
    default:
      return "none";
  }
}
