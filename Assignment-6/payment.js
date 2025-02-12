"use strict";
// Abstract Class: Payment
class Payment {
    constructor(total, transactionDate) {
        this.total = total;
        this.transactionDate = transactionDate;
    }
}
// Subclass: CreditCardPayment
class CreditCardPayment extends Payment {
    constructor(total, transactionDate, cardNumber) {
        super(total, transactionDate);
        this.cardNumber = cardNumber;
    }
    processPayment() {
        console.log(`Processing Credit Card Payment of $${this.total} on ${this.transactionDate}`);
    }
    getCardNumber() {
        return this.cardNumber;
    }
}
// Subclass: PayPalPayment
class PayPalPayment extends Payment {
    constructor(total, transactionDate, userEmail) {
        super(total, transactionDate);
        this.userEmail = userEmail;
    }
    processPayment() {
        console.log(`Processing PayPal Payment of $${this.total} for ${this.userEmail}`);
    }
}
// Subclass: CryptoPayment
class CryptoPayment extends Payment {
    constructor(total, transactionDate, walletID) {
        super(total, transactionDate);
        this.walletID = walletID;
    }
    processPayment() {
        console.log(`Processing Crypto Payment of $${this.total} to wallet ${this.walletID}`);
    }
}
// Creating Instances
const creditPayment = new CreditCardPayment(4000, '2025-02-05', 1284281);
const paypalPayment = new PayPalPayment(4000, '2025-02-05', 'bsr@gmail.com');
const cryptoPayment = new CryptoPayment(4000, '2025-02-05', 'cryp@crypto');
// Calling Methods
creditPayment.processPayment();
paypalPayment.processPayment();
cryptoPayment.processPayment();
// Accessing Private Card Number via Getter
console.log(`Credit Card Number: ${creditPayment.getCardNumber()}`)