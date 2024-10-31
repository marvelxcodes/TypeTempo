import words from "@/content/words";

export default function getRandomWords(count: number): string[] {
  const randomWords: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }

  return randomWords;
}
