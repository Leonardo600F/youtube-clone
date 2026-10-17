
export function getTimeDifference(publishedAt: string): string {
    const diff = Date.now() - Date.parse(publishedAt);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 12 * month;

    if (diff < minute * 5) {
        return "Agora";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
    } else if (diff < week) {
        const days = Math.floor(diff / day);
        return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
    } else if (diff < month) {
        const weeks = Math.floor(diff / week);
        return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
    } else {
        const years = Math.floor(diff / year);
        return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
    }
}