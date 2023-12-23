export function getHumanReadableDate(date: Date) {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    const years = Math.floor(seconds / 31536000);
    const months = Math.floor(seconds / 2592000);
    const days = Math.floor(seconds / 86400);

    if (years > 1) {
        return `Hace ${years} años`;
    }
    if ((days >= 320 && days <= 547) || years === 1) {
        return 'Hace un año';
    }
    if (days >= 45 && days <= 319) {
        return `Hace ${months} meses`;
    }
    if (days >= 26 && days <= 45) {
        return 'Hace un mes';
    }

    const hours = Math.floor(seconds / 3600);

    if (hours >= 36 && days <= 25) {
        return `Hace ${days} días`;
    }
    if (hours >= 22 && hours <= 35) {
        return 'Hace un día';
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes >= 90 && hours <= 21) {
        return `Hace ${hours} horas`;
    }
    if (minutes >= 45 && minutes <= 89) {
        return 'Hace una hora';
    }
    if (seconds >= 90 && minutes <= 44) {
        return `Hace ${minutes} minutos`;
    }
    if (seconds >= 45 && seconds <= 89) {
        return 'Hace un minuto';
    }
    if (seconds >= 0 && seconds <= 45) {
        return 'Hace unos segundos';
    }

    if (seconds < 0 && seconds >= -45) {
        return 'dentro de unos segundos';
    }
    if (seconds < -45 && seconds >= -89) {
        return 'dentro de unos minutos';
    }
    if (seconds < -89 && minutes >= -44) {
        return `En ${-minutes} minutos`;
    }
    if (minutes < -44 && minutes >= -89) {
        return 'En una hora';
    }

    if (minutes < -89 && hours >= -21) {
        return `En ${-hours} horas`;
    }
    if (hours < -21 && hours >= -35) {
        return 'En un día';
    }
    if (hours < -35 && days >= -25) {
        return `En ${-days} días`;
    }
    if (days < -25 && days >= -45) {
        return 'En 1 mes';
    }
    if (days < -45 && days >= -319) {
        return `En ${-months} meses`;
    }
    if (days < -319 && days >= -547) {
        return 'En 1 año';
    }
    if (days < -547) {
        return `En ${-years} años`;
    }
}
