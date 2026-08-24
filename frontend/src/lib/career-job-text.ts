export function splitCareerParagraphs(text: string) {
  return text
    .split(/\n+/u)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function splitCareerList(text: string) {
  return text
    .split(/\n+/u)
    .map((item) => item.replace(/^[-*]\s*/u, "").trim())
    .filter(Boolean);
}
