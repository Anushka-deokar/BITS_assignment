class Payment {
    constructor(total, transactionDate) {
        if (this.constructor === 'Payment') {
            throw new Error("This Class is supposed to be abstract");
        }
        this.total = total;
        this.transactionDate = transactionDate;
    }
}

class CreditCardPayment extends Payment {
    #cardNumber;

    constructor(total, transactionDate, cardNum) {
        super(total, transactionDate);
        this.#cardNumber = cardNum;
    }
}

class PayPalPayment extends Payment {
    constructor(total, transactionDate, userEmail) {
        super(total, transactionDate);
        this.userEmail = userEmail;
    }
}

class CryptoPayment extends Payment {
    constructor(total, transactionDate, walletID) {
        super(total, transactionDate);
        this.walletID = walletID;
    }
}

const creditCardPayment = new CreditCardPayment(4000, '2025-02-05', 1284281);
const payPalPayment = new PayPalPayment(4000, '2025-02-05', 'bsr@gmail.com');
const cryptoPayment = new CryptoPayment(4000, '2025-02-05', 'cryp@crypto');

console.log(creditCardPayment.cardNumber);
console.log(payPalPayment.total);
