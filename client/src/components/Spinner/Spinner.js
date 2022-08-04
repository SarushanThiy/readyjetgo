import React from "react";
import './styles.css'

class App extends React.Component {
    state = {
        name: "circle"
    }

    startRotation = () => {
        this.setState({
            name: "circle start-rotate"
        })
        setTimeout(() => {
            this.setState({
                name: "circle start-rotate stop-rotate"
            });
        }, Math.floor(Math.random() * 10000) + 1)
    }

    render() {
        return(
            <div className="spinner">  
            <h1 className="spinnerTitle">Wheel of Travel</h1>  
                
            <div className="arrow" data-testid='arrow'></div>
            <div id="tester">Have too many travel options? Let us take care of that for you, look to the right for more info...</div>
            <div id="tester1">Here's what to do: <br></br><br></br>1. Double click on the number and replace with text of your chosen destination<br></br><br></br>  2. Press spin and let the wheel of travel do it's job!<br></br><br></br> 3. Book your flight and get travelling!</div>
                <ul className={this.state.name}>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">1</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">2</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">3</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">4</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">5</div>
                    </li> 
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">6</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">7</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">8</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">9</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">10</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">11</div>
                    </li>
                    <li>
                        <div className="text"
                        contenteditable="true"
                        spellcheck="false">12</div>
                    </li> 
                </ul>
                
                <button className="spin-button"
                onClick={this.startRotation}>SPIN</button>
               
                
            </div>
        )
    }

}

export default App;
