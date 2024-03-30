export const formatDate = (originDate, noTime) => {
    const date = new Date(originDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    let minutes = date.getMinutes();

    day = day < 10 ? '0' + day : day
    month = month < 10 ? '0' + month : month
    minutes = minutes < 10 ? '0' + minutes : minutes

    let formatedDate = ''

    noTime
    ? formatedDate = `${day}/${month}/${year}`
    : formatedDate = `${day}/${month}/${year} a las ${hour}:${minutes}h`

    return formatedDate
}