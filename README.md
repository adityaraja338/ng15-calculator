
# Angular Calculator App

Welcome to the Angular Calculator App! This web application provides a versatile calculator and a length converter, all built with Angular, without the use of external libraries. You can easily switch between light mode and dark mode, customize the color effect of the calculator, and choose between a normal calculator and a length converter. This app is also hosted on Firebase for easy access.

## Features

- **Calculator**: Perform basic arithmetic operations such as addition, subtraction, multiplication, division, and calculate remainders.

- **Length Converter**: Quickly convert between various length units, including meters, feet, and centimeters.

- **Color Customization**: Customize the calculator's appearance by changing the color scheme to suit your preferences.

- **Dark and Light Modes**: Switch between dark mode and light mode for a comfortable viewing experience, day or night.

## Usage

1. **Select Calculator Type**: Choose between the "Calculator" and "Length Converter" modes by clicking the corresponding tabs.

2. **Perform Calculations**:
   - For the Calculator:
     - Click the number and operator buttons to build your expression.
     - Click the "=" button to compute the result.
     - Use the "C" button to clear the current input, and "AC" to clear all inputs.
   - For the Length Converter:
     - Enter a value in the input field.
     - Select the source and target units from the options.
     - The converted value will be displayed instantly.

3. **Color Customization**:
   - Use the color picker to choose a color scheme for the calculator.

4. **Toggle Dark/Light Mode**:
   - Click the toggle switch icon to switch between light mode and dark mode.

5. **Hosted Version**:
   - Access the hosted version of this app on Firebase: [Angular Calculator App](https://ng15-calculator.web.app)
  
## Development

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository:

   ```shell
   git clone https://github.com/adityaraja338/ng15-calculator.git
   ```

2. Navigate to the project directory:

   ```shell
   cd ng15-calculator
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

### Development Server

Run the app locally:

```shell
ng serve
```

Open your browser and navigate to `http://localhost:4200/` to see the app in action.

## Deployment

Deploy your app to Firebase hosting:

1. Install Firebase CLI (if not already installed):

   ```shell
   npm install -g firebase-tools
   ```

2. Log in to your Firebase account:

   ```shell
   firebase login
   ```

3. Initialize Firebase for your project (follow the prompts):

   ```shell
   firebase init
   ```

4. Deploy the app:

   ```shell
   firebase deploy
   ```

## Contribution

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/your-feature-name`.

3. Make your changes and commit them: `git commit -m 'Add some feature'`.

4. Push to the branch: `git push origin feature/your-feature-name`.

5. Create a pull request with a detailed description of your changes.

## License

Feel free to modify this content according to your project's specifics. This README provides an overview of the project, instructions for usage and development, and information on how to contribute and license the project.
