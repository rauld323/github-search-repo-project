export function setBackgroundColor(languageName: string) {
  switch (languageName) {
    case "Python":
      return "#cadec3";
    case "C":
      return "#971e1a";
    case "C++":
      return "#3cccfb";
    case "Java":
      return "#808579";
    case "PHP":
      return "#27c6ba";
    case "Scala":
      return "#2d5f61";
    case "Swift":
      return "#e0e699";
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
    case "Python":
      return "white";
    case "C":
      return "white";
    case "C++":
      return "white";
    case "Java":
      return "white";
    case "PHP":
      return "white";
    case "Scala":
      return "white";
    case "Swift":
      return "white";
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
