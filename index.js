function createColorDisplayFunction(numbers) {
    let currentIndex = -1;
  
    function displayNextColor() {
      currentIndex = (currentIndex + 1) % numbers.length;
      const currentNumber = numbers[currentIndex];
  
      let hexColor = currentNumber.toString(16);
      while (hexColor.length < 6) {
        hexColor = '0' + hexColor;
      }
      hexColor = '#' + hexColor;
  
      const red = (currentNumber >> 16) & 255;
      const green = (currentNumber >> 8) & 255;
      const blue = currentNumber & 255;
      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  
      document.getElementById('color-display').innerHTML = `
        Hex: ${hexColor}<br>
        RGB: ${rgbColor}
      `;
    }
  
    return displayNextColor;
  }
  
  const myArray = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF];
  const displayNextColor = createColorDisplayFunction(myArray);
  
  const displayButton = document.getElementById('display-button');
  displayButton.addEventListener('click', displayNextColor);