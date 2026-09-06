# 🔧 Machine Maintenance Notification System

A frontend web application for managing **machine maintenance notifications and scheduled maintenance reminders**. The application allows users to notify maintenance requirements for machines, view notification history, and schedule reminders for upcoming maintenance.

## 📌 Features

### 🏭 Machine Maintenance

* Displays machine images in a simple interface.
* Provides a **"Notify Maintenance"** button for each machine.
* Generates a maintenance notification with the machine name and current date/time.

### 🔔 Maintenance Notifications

When the **"Notify Maintenance"** button is clicked:

* A maintenance notification is created.
* The notification is saved in the browser's **Local Storage**.
* A notification banner is displayed at the bottom of the page.
* The notification banner automatically disappears after 5 seconds.

### 📊 Maintenance Dashboard

The **Maintenance Dashboard** displays previously generated maintenance notifications.

Notifications are retrieved from Local Storage and displayed when the page is loaded.

Each notification contains:

* Machine name
* Notification message
* Date and time of the notification

### ⏰ Scheduled Maintenance

Users can schedule maintenance for a machine by selecting a future date and time.

The application:

* Allows users to select a maintenance date and time.
* Stores scheduled reminders in Local Storage.
* Displays upcoming reminders.
* Shows an alert when the scheduled maintenance time is reached.
* Automatically removes the reminder after the scheduled notification is triggered.

### ❌ Cancel Reminders

Users can cancel an upcoming maintenance reminder using the **Cancel** button.

When a reminder is cancelled, it is removed from Local Storage and from the upcoming reminders list.

---

## 💾 Local Storage

The application uses the browser's **Local Storage** to persist:

* Maintenance notifications
* Scheduled maintenance reminders

This allows the stored notifications and reminders to remain available after refreshing the webpage.

---

## 🎨 User Interface

The application includes:

* Gradient background
* Machine image cards
* Maintenance notification buttons
* Maintenance dashboard
* Scheduled maintenance section
* Upcoming reminders section
* Notification banners
* Slide-in notification animation
* Responsive layout for different screen sizes

---

## 💻 Technologies Used

* **HTML5** – Creates the structure of the application.
* **CSS3** – Handles styling, layout, responsive design, and animations.
* **JavaScript** – Implements notifications, dashboard updates, scheduling, and reminder management.
* **Local Storage** – Stores notifications and scheduled reminders in the browser.

---

## ⚙️ JavaScript Functions

### `sendAlert(machineName)`

Creates a maintenance notification for the selected machine, saves it to Local Storage, and displays it as a notification banner.

### `saveNotification(notification)`

Stores maintenance notifications in Local Storage.

### `displayNotifications()`

Retrieves saved notifications from Local Storage and displays them when the page loads.

### `displayNotificationBanner(notification)`

Creates a notification banner and removes it automatically after 5 seconds.

### `displayDashboard()`

Retrieves stored maintenance notifications and displays them in the Maintenance Dashboard.

### `scheduleMaintenance(machineName, dateTime)`

Creates and stores a maintenance reminder for the selected machine and schedules an alert for the specified date and time.

### `displayReminders()`

Displays all currently stored upcoming maintenance reminders.

### `cancelReminder(reminderId)`

Removes a selected reminder from Local Storage and updates the reminders list.

### `formatDate(date)`

Formats the selected date and time for displaying maintenance reminders.


## 🚀 How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Select **Notify Maintenance** to generate an alert.
5. Select a future date and time to schedule maintenance.
6. View notifications in the **Maintenance Dashboard**.
7. View or cancel scheduled maintenance under **Upcoming Reminders**.

---

## 🎯 Project Objective

The objective of this project is to provide a simple frontend solution for **machine maintenance notification and reminder management**, helping users keep track of maintenance alerts and upcoming scheduled maintenance.
