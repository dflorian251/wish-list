export class WishItem {
  wishText: string;
  isComplete: boolean;

  constructor(wishText: string, isComplete: boolean = false) {
    this.wishText = wishText;
    this.isComplete = isComplete;
  }
}
