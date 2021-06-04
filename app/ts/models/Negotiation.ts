import { MyObject } from "./MyObject";

export class Negotiation implements MyObject<Negotiation>{

  constructor(
    readonly date: Date, 
    readonly quantity: number, 
    readonly value: number
  ) {}

  get volume() {
    return this.quantity * this.value;
  }

  toString(): void {
    console.log(
      `Data: ${this.date}
      Quantidade: ${this.quantity}
      Valor: ${this.value}
      Volume: ${this.volume}`
    )
  }

  isEqual(negotiation: Negotiation): boolean {
    return this.date.getDate() == negotiation.date.getDate()
      && this.date.getMonth() == negotiation.date.getMonth()
      && this.date.getFullYear() == negotiation.date.getFullYear()
  }
}
