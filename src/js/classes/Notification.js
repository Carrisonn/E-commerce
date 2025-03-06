import { divFormLanding } from '../landing/constants.js';
import { divProductsForm } from '../products/constants.js';

export class Notification {
  constructor(message, typeMsg, srcForm) {
    this.message = message;
    this.typeMsg = typeMsg;
    this.srcForm = srcForm;
    this.createNotification();
  }

  createNotification() {
    const notification = document.createElement('p');
    notification.classList.add('notification');

    const existNotification = document.querySelector('.notification');
    existNotification ? existNotification.remove() : null;

    this.typeMsg === 'error' ? notification.classList.add('error') : notification.classList.add('success');
    notification.textContent = this.message;

    this.srcForm === 'landingForm' ? divFormLanding.appendChild(notification) : divProductsForm.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
  }
}