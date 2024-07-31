function sendAlert(machineName) {
    alert(`Maintenance notification sent for ${machineName}`);
    // You can add more advanced notification handling here
}

document.addEventListener("DOMContentLoaded", function() {
    displayNotifications();
});


function sendAlert(machineName) {
    const notification = `Maintenance notification sent for ${machineName} at ${new Date().toLocaleString()}`;
    saveNotification(notification);
    displayNotificationBanner(notification);
}
 
function saveNotification(notification) {
    let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.push(notification);
    localStorage.setItem("notifications", JSON.stringify(notifications));
}

function displayNotifications() {
    let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.forEach(notification => {
        displayNotificationBanner(notification);
    });
}

function displayNotificationBanner(notification) {
    const banner = document.createElement("div");
    banner.className = "notification-banner";
    banner.innerText = notification;
    document.body.appendChild(banner);
    setTimeout(() => {
        banner.remove();
    }, 5000); // Remove banner after 5 seconds
}

function displayDashboard() {
    let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = '';

    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item';
        notificationItem.innerText = notification;
        notificationList.appendChild(notificationItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayNotifications();
    displayDashboard();
});

function scheduleMaintenance(machineName, dateTime) {
    const reminderTime = new Date(dateTime).getTime() - new Date().getTime();
    if (reminderTime > 0) {
        setTimeout(() => {
            sendAlert(machineName, 'medium');
            alert(`Scheduled maintenance for ${machineName} is due now.`);
        }, reminderTime);
        alert(`Reminder set for ${machineName} on ${formatDate(new Date(dateTime))}`);
    } else {
        alert('Please choose a future date and time.');
    }
}

// Function to fetch and display upcoming reminders
function displayReminders() {
    const reminderList = document.getElementById('reminder-list');
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminderList.innerHTML = '';

    reminders.forEach(reminder => {
        const reminderItem = document.createElement('div');
        reminderItem.className = 'reminder-item';
        reminderItem.innerHTML = `
            <p>${reminder.machineName} - Scheduled for ${formatDate(new Date(reminder.dateTime))}</p>
            <button onclick="cancelReminder('${reminder.id}')">Cancel</button>
        `;
        reminderList.appendChild(reminderItem);
    });
}

// Function to set up a scheduled maintenance reminder
function scheduleMaintenance(machineName, dateTime) {
    const reminderId = Date.now().toString(); // Unique ID for each reminder
    const reminder = {
        id: reminderId,
        machineName: machineName,
        dateTime: dateTime
    };

    let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));

    const reminderTime = new Date(dateTime).getTime() - new Date().getTime();
    if (reminderTime > 0) {
        setTimeout(() => {
            sendAlert(machineName, 'medium');
            alert(`Reminder for ${machineName} is due now.`);
            // Remove the reminder after notifying
            reminders = reminders.filter(r => r.id !== reminderId);
            localStorage.setItem('reminders', JSON.stringify(reminders));
            displayReminders();
        }, reminderTime);
    } else {
        alert('Please choose a future date and time.');
    }

    displayReminders();
}

// Function to cancel a reminder
function cancelReminder(reminderId) {
    let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders = reminders.filter(reminder => reminder.id !== reminderId);
    localStorage.setItem('reminders', JSON.stringify(reminders));
    displayReminders();
}

// Format date for display
function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// Initialize display of reminders when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayReminders();
});
