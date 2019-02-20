export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const isEmpty = (obj) => {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
};
