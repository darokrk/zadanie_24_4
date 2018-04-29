const formatDate = (timeInSeconds) => {

    const hours = Math.floor(timeInSeconds/ 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor((timeInSeconds % 3600) % 60);

    if (typeof timeInSeconds !== "undefined") {
        if (timeInSeconds < 60) {
            return `${seconds}s`;
        }

        if (timeInSeconds >= 60 && timeInSeconds < 3600) {
            if (seconds != 0) {
                return `${minutes}m ${seconds}s`;
            } else {
                return `${minutes}m`;
            }
        }

        if (timeInSeconds >= 3600) {
            if  (minutes === 0 && seconds === 0) {
                return `${hours}h`;
            } else if (seconds === 0) {
                return `${hours}h ${minutes}m`;
            } else if (minutes === 0) {
                return `${hours}h ${seconds}s`;
            } else {
                return `${hours}h ${minutes}m ${seconds}s`;
            }
        }
    } else return '0s';
}

module.exports = formatDate;