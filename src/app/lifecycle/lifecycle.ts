import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-lifecycle',
  imports: [CommonModule],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  counter: number = 0;
  logMessage: string[] = [];

  // called during the component creation
  constructor() {
    this.logMessage.unshift('constructor() - phase called')
  }

  // called during the component initialization
  ngOnInit(): void {
    this.logMessage.unshift(`ngOnInit() - phase called and current counter is: ${this.counter}`)
  }

  // called when the @Input property is called
  ngOnChanges(changes: SimpleChanges): void {
    this.logMessage.unshift('ngOnChanges() - phase called')
  }

  // called before the component destruction
  ngOnDestroy(): void {
    this.logMessage.unshift('ngOnDestroy() - phase called')
  }

  incrementCounter() {
    this.counter++;
    this.logMessage.unshift(`Current Counter: ${this.counter}`)
  }

  decrementCounter() {
    this.counter--;
    this.logMessage.unshift(`Current Counter: ${this.counter}`)
  }

  clearLogs() {
    this.logMessage = [];
    this.logMessage.unshift('Logs Cleared');  
  }
}
