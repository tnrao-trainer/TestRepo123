import React from "react";

 
  // React component using the defined state interface
  class Counter2 extends React.Component<{initialCount?:number}, {count:number, message : string}> {
    constructor(props: {initialCount?:number}) {
      super(props);
      this.state = {
        count:  this.props.initialCount!=undefined?this.props.initialCount:0,
        message: "Hello, TypeScript!",
      };
    }


    increment = (n:number) => {
        this.setState((state) => ({
          count :  state.count + n
        }));
    };

    decrement = (n:number) => {
      this.setState((state) => ({
        count :  state.count - n
      }));
  };
  
    render() {
      return (
        <div>
          <p>{this.state.message}</p>
          <div>Count:   &nbsp;
                 <button  onClick={() => this.decrement(1)}>-</button> 
                  &nbsp;  {this.state.count}  &nbsp;
                 <button  onClick={() => this.increment(1)}>+</button> 
          </div> 
          
        </div>
      );
    }
  }

  export default Counter2;