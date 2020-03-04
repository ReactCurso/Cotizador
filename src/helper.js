export const difYear = year => (new Date().getFullYear() - year)

export const calcularMarca = marca => {
    switch (marca) {
        case 'europeo':
            return 1.30;
        case 'americano':
            return 1.15;
        case 'asiatico':
            return 1.05;
    }
    return 0;
}

export const getPlan = plan => (plan === 'basico' ? 1.20 : 1.50)
