function getZodiadSigns() {
    var month = document.querySelector('#month').value;
    var day = document.querySelector('#day').value;

    if ((day >= 21 && month === 'March') || (day <= 20 && month === 'April')) {
        location.href = 'aries';

    }
    if ((day >= 23 && month === 'July') || (day <= 22 && month === 'August')) {
        location.href = 'leo';
    }

    if ((day >= 23 && month === 'November') && (day <= 30 && month === 'November') || (day <= 21 && month === 'December')) {
        location.href = 'sagittarius';
    }

    if ((day >= 21 && month === 'April') && (day <= 30 && month === 'April') || (day <= 21 && month === 'May')) {
        location.href = 'taurus';
    }

    if ((day >= 23 && month === 'August') || (day <= 23 && month === 'September')) {
        location.href = 'virgo';
    }

    if ((day >= 22 && month === 'December') || (day <= 20 && month === 'January')) {
        location.href = 'capricorn'
    }

    if ((day >= 22 && month === 'May') || (day <= 21 && month === 'June')) {
        location.href = 'gemini';
    }

    if ((day >= 24 && month === 'September') && (day <= 30 && month === 'September') || (day <= 23 && month === 'October')) {
        location.href = 'libra';
    }

    if ((day >= 20 && month === 'January') || (day <= 18 && month === 'Febraury')) {
        location.href = 'aquarius';
    }

    if ((day >= 22 && month === 'June') && (day <= 30 && month === 'June') || (day <= 22 && month === 'July')) {
        location.href = 'cancer';
    }

    if ((day >= 24 && month === 'October') || (day <= 22 && month === 'November')) {
        location.href = 'scorpio';
    }

    if ((day >= 20 && month === 'Febraury') && (day < 30 && month === 'Febraury') || (day <= 20 && month === 'March')) {
        location.href = 'pisces';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = getZodiadSigns;
});