# Machine-Maintenance
Frontened development of web application for Machine Maintenance

## Adding Machine Images:
Place the images of your machines (e.g., machine1.jpg, machine2.jpg) in the same directory as your HTML file or specify the correct path in the src attribute of the <img> tags.

# Additional Features:
**Backend Integration:** You can integrate with a backend service to store and manage notifications.
**Database:** Use a database to track maintenance history.

### JavaScript:

**sendAlert:** Called when the "Notify Maintenance" button is clicked. It creates a notification message, saves it to local storage, and displays it in a banner.
**saveNotification:** Saves the notification to local storage.
**displayNotifications:** Displays all saved notifications from local storage when the page loads.
**displayNotificationBanner:** Creates and displays a notification banner at the bottom of the page.

### CSS:
Added styles for the .notification-banner class to style the notification banner and added a slide-in animation.
# Dashboard for Viewing Alerts
Create a dashboard that displays all past and current maintenance alerts with filtering options.
# Scheduled Maintenance Reminders
Set up scheduled reminders for regular maintenance tasks.To set up scheduled maintenance reminders, you can use JavaScript to set reminders based on user input. For simplicity, we'll use the setTimeout function to simulate reminders.
To enhance the scheduled maintenance reminders feature, we can add the following functionalities:

# Display Upcoming Reminders: Show a list of upcoming reminders to the user.

**Notification for Reminders:** Notify users when a reminder is due.
**Edit or Cancel Reminders:** Allow users to modify or cancel previously set reminders.Save Reminders in Local Storage: Persist reminders even after a page reload.

