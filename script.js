const currentDate = document.querySelector(".currentDate"),
daysTag = document.querySelector(".days");

//getting new date, current year and month
let date = new Date()
currYear = date.getFullYear()
currMonth = date.getMonth();

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth +1,0).getDate(); //getting last date of month
    let tdTag = "";

    for (let i = 1; i <= lastDateofMonth; i++) (
        tdTag = <td>${1}</td>
    )

    currentDate = $;{month[currMonth]} {currYear};
    daysTag = tdTag
}
renderCalendar();