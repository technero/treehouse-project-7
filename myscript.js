const alertBanner = document.getElementById("alert");

function displayAlert(message) {
    const alertMessageEl = document.getElementsByClassName("alert-banner-message-content")[0];
    alertMessageEl.textContent = message;
}

displayAlert("You have unread messages.");

alertBanner.getElementsByClassName("alert-banner-close")[0].addEventListener('click', e => {
    alertBanner.style.display = "none"
})

let traffiCanvas = document.getElementById("traffic-chart");







let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};