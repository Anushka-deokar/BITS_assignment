
abstract class Payment {
    constructor(
        public total: number,
        public transactionDate: string
    ) { }

    abstract processPayment(): void;
}

// Subclass: CreditCardPayment
class CreditCardPayment extends Payment {
    private cardNumber: number;

    constructor(total: number, transactionDate: string, cardNumber: number) {
        super(total, transactionDate);
        this.cardNumber = cardNumber;
    }

    processPayment(): void {
        console.log(`Processing Credit Card Payment of $${this.total} on ${this.transactionDate}`);
    }

    getCardNumber(): number {
        return this.cardNumber;
    }
}

// Subclass: PayPalPayment
class PayPalPayment extends Payment {
    constructor(total: number, transactionDate: string, public userEmail: string) {
        super(total, transactionDate);
    }

    processPayment(): void {
        console.log(`Processing PayPal Payment of $${this.total} for ${this.userEmail}`);
    }
}

// Subclass: CryptoPayment
class CryptoPayment extends Payment {
    constructor(total: number, transactionDate: string, public walletID: string) {
        super(total, transactionDate);
    }

    processPayment(): void {
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
console.log(`Credit Card Number: ${creditPayment.getCardNumber()}`);
console.log(`PayPal Total: $${paypalPayment.total}`);