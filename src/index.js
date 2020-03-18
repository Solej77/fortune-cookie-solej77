const messages = [
  "Nunca pares de aprender.",
  "No te rindas.",
  "Just do it.",
  "Da un paso atás y mira que tan lejos has llegado, puede que hoy no estés donde quieres estar, pero ya no estás donde estabas.",
  "Pronto todo tendrá sentido, mientras tanto, mantén tus vibras bien altas.",
  "Eres tú quien decide cómo te afectará todo aquello que sucede fuera de ti.",
  "Siempre, siempre, hay algo por lo que estar agradecidos."
];

const getFortuneCookie = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { getFortuneCookie };
