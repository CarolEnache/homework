import React, { useEffect, useState } from 'react';

/**
 * It is preferable to keep the CSS separate into a stylesheet
 * In this case it would be great if we create a stylesheet for this component
 */
const css = {
  fontSize: '12px',
};

/**
 * This component can be moved into his own directory
 * You have a typo in the name, it should be CarsFuel instead
 * */
function CarsFuuel(props) {
  /**
   * Rather than injecting your style inline onto this element, it would be preferable to add a CSS class.
   * Also, the use of the props.children is not necessary in this case. You are only sending data down to this component
   * so just create a fuel argument and assign the fuel value to it.
   * The creation of the fuel argument needs to be done where this component is being used, in this case the App component.
   * Just like:  <Alert fuel={fuel} />  
   * */
  return <h1 style={css}>Car's fuel consumed: {props.children}</h1>;
}

/**
 * This component can also be moved in his own directory and have it's own stylesheet
*/
function Alert(props) {
  const fuel = props.fuel;
  /**
   * You are using the state as a boolean, please make that clear by replacing the initial state 0 with the boolean false 
   * */
  const [state, setState] = useState(0);

  useEffect(() => {
    if (fuel > 1200) {
      /**
       * Same here, 1 needs to be replaced with true 
      */
      setState(1);
    }
  }, [fuel]);

  /**
   * Instead of swapping these elements, you can simply return only one element and conditionally change his class and text
   * Your return would look something like:
   * const text = state ? 'Alert' : All is fine;
   * const class = state ? 'alert-css-class' : '';
   * 
   * return <h2 className={class}>{text}</h2>;
   */
  if (state) {
    return <h2 style={{ color: 'red' }}>Alert</h2>;
  } else {
    return <h2>All is fine</h2>;
  }
}

class App extends React.Component {
  /**
   * As we are not using any props to set an initial state for this component,
   * we can use a short hand declaration of the state and get rid of the constructor.
   * That declaration will simply look like:
   * state = {
   *  x: 1,
   *  f: 0,
   * };
   *  
  */
  constructor(props) {
    super(props); // We declare the state
    /**
     * For better clarity, the declaration of the state properties needs to be more explicit.
     * Therefor 'x' should become 'position', and 'f' should be 'fuel'.
     * The state will look something like:
     * state = {
     *  position: 1,
     *  fuel: 0
     * }
    */
    this.state = {
      x: 1,
      f: 0,
    };
  }

  updateCoordinates() {
    setInterval(() => {
      this.setState((prevState) => ({
        x: prevState.x + 1,
        f: 1 + prevState.f + prevState.x * 10,
      }));
    }, 1000);
  }

  componentDidMount() {
    this.updateCoordinates();
  }

  render() {
    /**
     * Instead of assigning this.state.x to x1 in a var. We can now destructure the refactored state
     * Accessing the state will now look like:
     * const { position, fuel } = this.state;
    */
    var x1 = this.state.x;
    var fuel = this.state.f;

    return (
      <div>
        <h1>Position - {x1}</h1>
        {/**
         * Please address the typo, and also, create an argument fuel={fuel}.
         * Take <Alert fuel={fuel} /> as an example. 
        */}
        <CarsFuuel>{fuel}</CarsFuuel>
        <Alert fuel={fuel} /> 
      </div>
    );
  }
}

export default App;
