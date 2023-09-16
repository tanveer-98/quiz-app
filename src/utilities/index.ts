import { IEntities } from "../types";

export function replaceHtmlEntities(inputString: string) {
  // Define a dictionary of HTML entities and their corresponding characters
  const htmlEntities: IEntities = {
    "&quot;": '"',
    "&amp;": "&",
    "&#039;": "'",
  };

  // Use a regular expression to search for HTML entities and replace them
  const regex = /&quot;|&amp;|&#039;/g; // Add more entities as needed
  return inputString.replace(
    regex,
    (match: string) => htmlEntities[match] || match
  );
}
