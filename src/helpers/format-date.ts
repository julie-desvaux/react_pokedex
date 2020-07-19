const formatDate = (date: Date = new Date()): String => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

export default formatDate;