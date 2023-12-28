export const generateRandomId = (): string => (Math.round(Math.random() * 10) + Date.now()).toString()
