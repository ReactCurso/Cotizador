export const difYear = year => new Date().getFullYear() - year;

export const calcularMarca = marca => {
  switch (marca) {
    case "europeo":
      return 1.3;
    case "americano":
      return 1.15;
    case "asiatico":
      return 1.05;
    default:
      return 0;
  }
};

export const getPlan = plan => (plan === "basico" ? 1.2 : 1.5);

export const normalizar = texto => texto[0].toUpperCase() + texto.slice(1);
