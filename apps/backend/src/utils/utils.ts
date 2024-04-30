export const getRandomCredits = (maxCredits: number): number => {
    const minCredits = Math.floor(maxCredits * 0.8);
    const randomCredits = Math.floor(Math.random() * (maxCredits - minCredits + 1)) + minCredits;
    return randomCredits;
  };