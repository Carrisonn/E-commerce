import { divFormLanding } from '../landing/constants.js';
import { divProductsForm } from '../products/constants.js';

export class Notification {
  constructor(message, typeMsg, reference) {
    this.message = message;
    this.typeMsg = typeMsg;
    this.reference = reference;
    this.createNotification();
  }

  createNotification() {
    const notification = document.createElement('p');
    notification.classList.add('notification');

    const existNotification = document.querySelector('.notification');
    existNotification?.remove();

    notification.textContent = this.message;
    this.typeMsg === 'error' ? notification.classList.add('error') : notification.classList.add('success');
    this.reference === 'landingForm' ? divFormLanding.appendChild(notification) : divProductsForm.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
  }
};