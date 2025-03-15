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
    switch (this.reference) {
      case 'landingForm':
        divFormLanding.appendChild(notification);
        break;
      case 'productsForm':
        divProductsForm.appendChild(notification);
        break;
      default:
        this.reference.appendChild(notification);
        break;
    }
    setTimeout(() => notification.remove(), 3000);
  }
}