AOS.init();

const dataEvent = new Date("Jul 3, 2023 00:00:00");
const dataPromo = new Date("Mar 3, 2023 00:00:00");

const timeStampEvent = dataEvent.getTime();
const timeStampPromo = dataPromo.getTime();

const promo = setInterval(function() {
    const now = new Date()
    const timeStampCurrent = now.getTime()

    const timerPromo = timeStampPromo - timeStampCurrent;

    const dayInMs = 1000 * 60 * 60 *24;
    const hourInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;
    const secondIsMs = 1000;

    const dayDistaceEvent = Math.floor(timerPromo / dayInMs);
    const hourstimerPromo = Math.floor((timerPromo % dayInMs) / hourInMs);
    const minutestimerPromo = Math.floor((timerPromo % hourInMs) / minutesInMs);
    const secondtimerPromo = Math.floor((timerPromo % minutesInMs) / secondIsMs)

    document.getElementById('promo').innerHTML = `${dayDistaceEvent}d ${hourstimerPromo}h ${minutestimerPromo}m ${secondtimerPromo}s`

    if (distaceEvent < 0) {
        clearInterval(timer);

        document.getElementById('promo').innerHTML = `Promoção expirou`
    }

}, 1000)



const timer = setInterval(function() {
    const now = new Date()
    const timeStampCurrent = now.getTime()

    const distaceEvent = timeStampEvent - timeStampCurrent;

    const dayInMs = 1000 * 60 * 60 *24;
    const hourInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;
    const secondIsMs = 1000;

    const dayDistaceEvent = Math.floor(distaceEvent / dayInMs);
    const hoursDistaceEvent = Math.floor((distaceEvent % dayInMs) / hourInMs);
    const minutesDistaceEvent = Math.floor((distaceEvent % hourInMs) / minutesInMs);
    const secondDistaceEvent = Math.floor((distaceEvent % minutesInMs) / secondIsMs);

    document.getElementById('contador').innerHTML = `${dayDistaceEvent}d ${hoursDistaceEvent}h ${minutesDistaceEvent}m ${secondDistaceEvent}s`

    if (distaceEvent < 0) {
        clearInterval(timer);

        document.getElementById('contador').innerHTML = `Evento Já teve inicio há ${dayDistaceEvent}d atrás`
    }
}, 1000)