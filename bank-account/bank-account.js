
export class BankAccount {
  constructor() {
  }

  open() {
    if(this._open === true) {
      throw new ValueError()
    }
    this._open = true;
    this._balance = 0;
  }

  close() {
    if(!this._open) {
      throw new ValueError()
    }
    this._open = false;
  }

  deposit(value) {
    if(this._open === false || value < 0) {
      throw new ValueError()
    }
    this._balance = this._balance + value
  }

  withdraw(value) {
    if(this._open === false) {
      throw new ValueError()
    }
    if(this._balance < value || value < 0) {
      throw new ValueError()
    }
    this._balance = this._balance - value
  }

  get balance() {
    if(this._open === false) {
      throw new ValueError()
    }
    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
