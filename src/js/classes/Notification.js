import { divForm } from '../landing/constants.js';

export class Notification {
  constructor(message, type) {
    this.message = message;
    this.type = type;
    this.createNotification();
  }

  createNotification() {
    const notification = document.createElement('p');
    notification.classList.add('notification');

    const existNotification = document.querySelector('.notification');
    existNotification ? existNotification.remove() : null;

    this.type === 'error' ? notification.classList.add('error') : notification.classList.add('success');
    notification.textContent = this.message;

    divForm.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
  }
}