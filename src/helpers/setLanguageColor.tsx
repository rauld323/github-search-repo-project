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
    case "Ruby":
      return "#7F3F35";
    case "Shell":
      return "#FBB0DE";
    case "Go":
      return "#42D610";
    case null:
      return "#4AC996";
    default:
      return "orange";
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
    case "Ruby":
      return "white";
    case "Shell":
      return "FBB0DE";
    case "Go":
      return "black";
    case null:
      return "black";
    default:
      return "black";
  }
}
