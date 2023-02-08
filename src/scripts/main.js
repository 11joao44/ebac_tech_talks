AOS.init();

const dataEvent = new Date("Feb 10, 2023 03:00:00");
const timeStampEvent = dataEvent.getTime();

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