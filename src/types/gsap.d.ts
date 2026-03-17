declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: any, config?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}
