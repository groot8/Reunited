import moment from 'moment';

export const formatDate = (date) => moment(date).format('DD/MM/YYYY');
export const setLocalStorage = (key, value) => localStorage.setItem(key, value);
export const getLocalStorage = (key) => localStorage.getItem(key);
export const formatPercentage = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value / 100);
export const handleResponse = (message, type) => {
    if (type === 'error' && !message) {
        window.flash('something went wrong', type);
    } else if (type === 'success' && !message) {
        window.flash('done', type);
    } else {
        message && window.flash(message, type);
    }
};

export const handleRoute = (section, id, history) => {
    if (history.location.pathname.substr(-1) === '/') {
        history.location.pathname = history.location.pathname.slice(0, -1);
        history.push(`${section}/${id}`);
    } else {
        history.push(`${section}/${id}`);
    }
};
export const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
        .filter((a) => a)
        .join(':');
};

export const formatTimeUTC = (str) => {
    let date = new Date(str);
    return `${date.getHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
};
export const formatDateUTC = (str) => {
    let date = new Date(str);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};

export const imageExists = (url, callback) => {
    let img = new Image();
    img.onload = function () {
        callback(true);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src = url;
};
export const mapRole = (id) => {
    switch (id) {
        case 10:
            return 'Super admin';
        case 11:
            return 'Company admin';
        case 12:
            return 'Segment admin';
        case 13:
            return 'Team admin';
        default:
            return 'No role assigned';
    }
};

export const checker = (arr) => {
    let flage = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].status === false) {
            flage = false;
        }
    }
    return flage;
};

export const checkAll = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].status = true;
    }
};
export const uncheckAll = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].status = false;
    }
};

export const switchTopic = (arr, id, val) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === id) {
            arr[i].status = val;
        }
    }
    return [...arr];
};
export const switchPodio = (arr, id, val) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === id) {
            arr[i].blocked = val;
        }
    }
    return [...arr];
};
export const topicsWithStatus = (topics) =>
    topics &&
    topics.rows.map((topic) => ({
        id: topic.id,
        name: topic.name,
        thumbnail: topic.thumbnail,
        status: false,
    }));
export const switchTag = (arr, id, val) => {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].tags.length; j += 1) {
            if (arr[i].tags[j].tag_id === id) {
                arr[i].tags[j].status = val;
                if (val === false) arr[i].status = false;
            }
        }
        if (checker(arr[i].tags)) {
            arr[i].status = true;
        }
    }
    return [...arr];
};
export const arrayTags = (defaultTag, tags) => {
    let arrTags = [{ name: defaultTag?.name, id: defaultTag?.id }];
    if (tags?.length > 0) {
        for (let i = 0; i < tags.length; i++) {
            arrTags.push({ name: tags[i]?.name, id: tags[i]?.id });
        }
    }
    return arrTags;
};

export const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const generateMonth = () => {
    let arr = [];
    for (let index = 1; index <= 30; index++) {
        arr.push({ id: index, name: index });
    }
    return arr;
};
export const mapIdToUser = (id, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (id === arr[i].id) {
            return { id: id, name: arr[i].name };
        }
    }
};
export const mapUserToId = (arr) => {
    let ids = [];
    for (let i = 0; i < arr.length; i++) {
        ids = [...ids, arr[i].id];
    }
    return ids;
};

export const addUserToArray = (arr) => {
    let res = [];
    for (let i = 0; i < arr?.length; i++) {
        if (arr[i].is_assigned_to_entity) {
            res = [...res, arr[i].id];
        }
    }
    return res;
};
export const switchUser = (arr, val, id) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === id) {
            arr[i].is_assigned_to_entity = val;
        }
    }
    return [...arr];
};
export const timeFormat = (time) => {
    return moment(time, ['HH:mm:ss']).format('hh:mm A');
};
export const appendArrToStr = (arr) => {
    let str = '';
    for (let i = 0; i < arr?.length; i++) {
        if (arr[i].status) str += `${arr[i].name}, `;
    }
    return str.slice(0, -2);
};
export const mapToWeekDay = (day) => {
    switch (day) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return '';
    }
};
export const mapWeekDayToNum = (day) => {
    switch (day) {
        case 'Sunday':
            return 1;
        case 'Monday':
            return 2;
        case 'Tuesday':
            return 3;
        case 'Wednesday':
            return 4;
        case 'Thursday':
            return 5;
        case 'Friday':
            return 6;
        case 'Saturday':
            return 7;
        default:
            return '';
    }
};
export const mapToOrdinalDay = (day) => {
    switch (day) {
        case 1:
            return '1st';
        case 2:
            return '2nd';
        case 3:
            return '3rd';
        case 4:
            return '4th';
        default:
            return ``;
    }
};
export const removeItemFromList = (arr, id) => {

    return arr.filter((el) => el.id !== id);
};
export const getInitials = (name) => {
    let initials = name?.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
};
export const getFirstName = (name) => {
    let fullName = name.split(' ');
    return fullName[0];
};
export const getRandomColor = () => {
    const colors = ['#f85359', '#00c48c', '#e7bb30', '#13bbf0', '#0267c1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
};
export const getPartOfTheDay = () => {
    let hour = moment().hours();
    if (hour >= 5 && hour < 12) return 'morning';
    else if (hour >= 12 && hour < 17) return 'afternoon';
    // else if (hour >= 17 && hour < 21) return 'evening';
    else return 'evening';
};

export const CheckedTopics = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]?.status) {
            count = count + 1;
        }
    }
    return count;
};
export const asyncLocalStorage = {
    setItem: async function (key, value) {
        await null;
        return localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await null;
        return localStorage.getItem(key);
    },
};

export const collapseSegments = (array) => {
    let segment = array[0]?.segment_name
    let count = array?.length - 1
    if (count > 0)
        return `${segment} and ${count} more `
    else return segment
}