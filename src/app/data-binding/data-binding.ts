import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // INTERPOLATION EXAMPLE -> ONE-WAY
  title = "Data Binding";
  courseName = "Angular 21 Course";
  studentCount = 3500;

  // PROPERTY BINDING EXAMPLE -> ONE-WAY
  buttonText = "submit form";
  isButtonDisabled = false;
  inputPlaceholder = "John Doe";

  // PROPERTY BINDING for images
  imagePath = "./assets/butterfly.jpeg";
  imageUrl = "https://picsum.photos/400/300";
  imageAlt = "a photograph";

  // EVENT BINDING EXAMPLE: 
  clickStatus = "Not Clicked yet.";
  handleClick(){
    this.clickStatus = `Button Clicked at ${new Date().toLocaleTimeString()}`;
  }

  // TWO-WAY DATA BINDING EXAMPLE:
  // changes taken place in data of template (tracked) are [stored in component]
  // modified component's data could be {{accessed}} by template easily
  userName = '';
  userEmail = '';


  // SIMPLE COUNTER PROJECT:
  counter = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  resetCounter(){
    this.counter = 0;
  }
}
