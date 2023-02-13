const alertBanner = document.getElementById("alert");

function displayAlert(message) {
    const alertMessageEl = document.getElementsByClassName("alert-banner-message-content")[0];
    alertMessageEl.textContent = message;
}

displayAlert("You have unread messages.");

alertBanner.getElementsByClassName("alert-banner-close")[0].addEventListener('click', e => {
    alertBanner.style.display = "none"
})


const notificationIcon = document.getElementById("bell");
notificationIcon.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
});

notificationIcon.addEventListener("blur", () => {
    console.log("Here");
    document.getElementById("myDropdown").classList.remove("show");
})

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};

const trafficCanvas = document.getElementById("traffic-chart").getContext("2d");
const trafficOptions = {
    backgroundColor: 'rgb(112, 104, 201)',
    fill: true,
    aspectRatio: 2.5,
    Animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const trafficData = [
    {
        labels: ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
            "07:00", "08:00", "09:00", "10:00"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    },
    {
        labels: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7",
            "1/8", "1/9", "1/10", "1/11"],
        datasets: [{
            data: [7500, 500, 8000, 11000, 3000, 17500, 9500, 9500, 22500, 30000,
                25000],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    },
    {
        labels: ["1/1", "1/8", "1/15", "1/22", "1/29", "2/5", "2/12",
            "2/19", "2/26", "3/5", "3/12"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    },
    {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov"],
        datasets: [{
            data: [7500, 500, 8000, 11000, 3000, 17500, 9500, 9500, 22500, 30000,
                25000],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    },
];

const trafficIntervals = document.getElementsByClassName("traffic-nav-link");
console.log(trafficIntervals);
for (let i = 0; i < 4; i++) {
    trafficIntervals[i].addEventListener("click", () => {
        new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData[i],
            options: trafficOptions
        });
    });
};

new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData[0],
    options: trafficOptions
});

const dailyCanvas = document.getElementById("daily-chart").getContext("2d");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileCanvas = document.getElementById("mobile-chart").getContext("2d");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8']
    }]
};


const mobileOptions = {
    aspectRatio: 2,
    plugins: {
        legend: {
            display: true,
            Position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {

    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//messageing section//

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});
const saveBtn = document.getElementById("save");
const cancelBtn = document.getElementById("cancel");
const sendEmail = document.getElementById("emailNotification");
const sendEmailSlider = document.querySelector("#emailNotification+.slider");
const publicProfile = document.getElementById("setPublicProfile");
const timeZone = document.getElementById("timezone");
sendEmail.checked = false;
publicProfile.checked = false;

saveBtn.addEventListener("click", () => {
    localStorage.setItem("sendEmail", JSON.stringify(sendEmail.checked));
    localStorage.setItem("publicProfile", JSON.stringify(publicProfile.checked));
    localStorage.setItem("timeZone", timeZone.value ?? "");
});

sendEmail.checked = JSON.parse(localStorage.getItem("sendEmail"));
publicProfile.checked = JSON.parse(localStorage.getItem("publicProfile"));
timeZone.value = localStorage.getItem("timeZone");

cancelBtn.addEventListener("click", function () {
    sendEmail.checked = false;
    publicProfile.checked = false;
    timeZone.value = "";
});