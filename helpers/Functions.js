import moment from 'moment';
moment.locale('es');

const pathImg = 'https://img.kwhentais.com';

export const imageOva = (image) => {
    const size = '/ovashentais/medium/';
    return pathImg+size+image;
}

export const imageHentaiSearch = (image) => {
    const size = '/hentais/mini/';
    return pathImg+size+image;
}

export const imgHentai = (image) => {
    const size = '/hentais/full/';
    return pathImg+size+image;
}

export const imgOvaHentai = (image) => {
    const size = '/ovashentais/full/';
    return pathImg+size+image;
}

export const slugHentai = (slug) => {
    return `/${slug}`;
}

export const slugOva = (slug, number) => {
    return `/${slug}/ova-${number}`;
}

export const slugGenre = (slug) => {
    return `/hentais?genre=${slug}`;
}

export const simulCast = (object) => {
    let formats = {
        lastDay : '[Ayer]',
        sameDay : '[Hoy]',
        nextDay : '[Mañana]',
        lastWeek : 'dddd',
        nextWeek : 'dddd',
        sameElse : 'L'
    }
    let data = [];
    const diasEntreFechas = (desde, hasta) =>  {
        var dia_actual = desde;
        var fechas = [];
        while (moment(dia_actual).isSameOrBefore(hasta)) {
            fechas.push(dia_actual.format('YYYY-MM-DD'));
            dia_actual.add(1, 'days');
        }
        return fechas;
    };
    let days = diasEntreFechas(moment(),moment().add('6','day'));
    for (let index = 0; index < days.length; index++) {
        let dayName = moment(days[index]).calendar(formats);
        let dayNumber = moment(days[index]).isoWeekday();
        let item = {
            dayName: dayName,
            dayNumber: dayNumber,
            data: object[dayNumber]
        }
        data.push(item);
    }
    return data;
}

export const isNowOva = (date_now) => {
    let now = new Date();
    now.setHours(0,0,0,0);
    if(moment(date_now).isBetween(moment(now), moment())){
        return true;
    }else{
        return false;
    }
}

export const nFormatter = (num, digits) => {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (Math.abs(num) >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export const menuItems = () => {
    const items = [
        {
            link: '/hentais',
            name: 'Hentais',
            icon: '<path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"></path>'
        },
        {
            link: '/hentais/mas-vistos',
            name: 'Más vistos',
            icon: '<g data-name="Layer 2"><path d="M12 5C5 5 2 11 2 12s3 7 10 7 10-6 10-7-3-7-10-7zm0 12c-4 0-7-4-8-5 1-1 4-5 8-5s7 4 8 5c-1 1-4 5-8 5z"/><path d="M12 8a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"/></g>'
        }
    ]
    return items;
}

export const filterHentai = () => {
    return {
        years:[
            {year:2021},
            {year:2020},
            {year:2019},
            {year:2018},
            {year:2017},
            {year:2016},
            {year:2015},
            {year:2014},
            {year:2013},
            {year:2012},
			{year:2011},
			{year:2010},
            {year:2009},
            {year:2008},
            {year:2007},
            {year:2006},
			{year:2005},
            {year:2004},
			{year:2003},
			{year:2002},
			{year:2001},
            {year:2000},
            {year:1999},
            {year:1996},
            {year:1989},
            {year:1986}
        ],
        genres:[
			{title:"Ahegao",slug:"ahegao"},
			{title:"Ashikoki",slug:"ashikoki"},
			{title:"Anal",slug:"anal"},
			{title:"Bakunyuu",slug:"bakunyuu"},
			{title:"Bondage",slug:"bondage"},
			{title:"Bukkake",slug:"bukkake"},
			{title:"Bestiality",slug:"bestiality"},
			{title:"Chikan",slug:"chikan"},
			{title:"Degeneracion Mental",slug:"degeneracion-mental"},
			{title:"Dildos",slug:"dildos"},
			{title:"Doble Penetración",slug:"doble-penetracion"},
			{title:"Drama",slug:"drama"},
			{title:"Escolares",slug:"escolares"},
			{title:"Fantasia",slug:"fantasia"},
			{title:"Futanari",slug:"futanari"},
			{title:"Gangbang",slug:"gangbang"},
			{title:"Gore",slug:"gore"},
			{title:"Harem",slug:"harem"},
			{title:"Hipnosis",slug:"hipnosis"},
			{title:"Incesto",slug:"incesto"},
			{title:"Lolicon",slug:"lolicon"},
			{title:"Maids",slug:"maids"},
			{title:"Milf",slug:"milf"},
			{title:"Netorare",slug:"netorare"},
			{title:"Netorase",slug:"netorase"},
			{title:"Netori",slug:"netori"},
			{title:"Paizuri",slug:"paizuri"},
			{title:"Pettanko",slug:"pettanko"},
			{title:"Romance",slug:"romance"},
			{title:"Shota",slug:"shota"},
			{title:"Sucubos",slug:"sucubos"},
			{title:"Sumisas",slug:"sumisas"},
			{title:"Trap",slug:"trap"},
			{title:"Tentaculos",slug:"tentaculos"},
			{title:"Tetonas",slug:"tetonas"},
			{title:"Vanilla",slug:"vanilla"},
			{title:"Venganza",slug:"venganza"},
			{title:"Violación",slug:"violación"},
			{title:"Virgenes",slug:"virgenes"},
			{title:"Yaoi",slug:"yaoi"},
			{title:"Yuri",slug:"yuri"}
        ],
        censored:[
            {censored:0},
            {censored:1}
        ],
        status:[
            {status:0},
            {status:1}
        ]
    };
}