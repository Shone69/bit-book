export const checkPostDate = (inputDate) => {
    const todayDate = new Date();
    const postDate = new Date(inputDate);
    const fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const todayDD = todayDate.getDate();
    const todayMM = todayDate.getMonth();
    const todayYY = todayDate.getFullYear();

    const postDD = postDate.getDate();
    const postMM = postDate.getMonth();
    const postFullMM = fullMonth[postMM];
    const postYY = postDate.getFullYear();
    const postHour = postDate.getHours();
    const postMinutes = postDate.getMinutes();


    if (inputDate === null) {
        return "N/A"
    } else if (postDD == todayDD && postMM == todayMM && postYY == todayYY) {
        return `today at:  ${postHour}: ${postMinutes} h`
    } else {
        return postDD + "-" + postFullMM + "-" + postYY
    }
    // return `${postHour}-${postMinutes}`
}

// console.log(checkPostDate("2018-03-31T23:45:07.5433333"))