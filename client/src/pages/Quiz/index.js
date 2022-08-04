import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './quiz.css';
import NavBar from '../../layout/NavBar';


function TravelSurvey() {
    const dispatch =  useDispatch()
    const navigate = useNavigate()
    const [cityBeach, setCityBeach ] = useState();
    const [continent, setContinent ] = useState();
    
    const updateAns1 = (e) => {
        const inputAns1 = e.target.value;
        setCityBeach(inputAns1);
    };
    const updateAns2 = (e) => {
        const inputAns2 = e.target.value;
        setContinent(inputAns2);
    };
    const answers= {
        ans1: cityBeach,
        ans2: continent,
        // ans3:'',
        // ans4:'',
        // ans5:''
    }
    const addAnswers = (obj => async(dispatch)=>{
        dispatch({
            type: "ADD_ANSWERS",
            value: obj
        })
    })
    const surveySubmit = async(e) =>{
        e.preventDefault()
        console.log(answers)
        dispatch(addAnswers(answers))
        navigate('/destination')
    }

    return(
            <div>
                <NavBar />

                <h1 className='quizTitle'>Discover Holidays</h1>
                <div id="qustionBox">
            
                <form onSubmit={(e)=>surveySubmit(e)}>
                    <div className='quizContainer'>
                    <div className="cardQuiz" role='quiz'>
                        
                        <label  htmlFor='ans1' className="questionOne">What type of holiday are you looking for?</label><br/>
                        <input className="optionChoices" type="checkbox" name="ans1" value="City" onChange={updateAns1}/> City
                        <input className="optionChoices" type="checkbox" name="ans1" value="Beach" onChange={updateAns1}/> Beach
                    
                    </div>


                    <div className="cardQuiz">
                        <label className="questionOne"htmlFor='ans2'>Which continent would you like to visit?</label><br/>
                        <input 
                        className="optionChoices" type="checkbox" name="ans2" value="Europe" onChange={updateAns2}/> Europe
                        <input className="optionChoices" type="checkbox" name="ans2" value="Asia" onChange={updateAns2}/> Asia
                        <input 
                        className="optionChoices" type="checkbox" name="ans2" value="Africa" onChange={updateAns2}/> Africa
                        <input 
                        className="optionChoices" type="checkbox" name="ans2" value="South America" onChange={updateAns2}/>South America
                        <input 
                        className="optionChoices" type="checkbox" name="ans2" value="North America" onChange={updateAns2}/>North America
                    </div>
                    </div>

                    {/* <div className="card">
                        <label>Question3?</label><br/>
                        <input type="radio" name="ans3" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans3" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans3" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans3" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div> */}

                    {/* <div className="card">
                        <label>Question4</label><br/>
                        <input type="radio" name="ans4" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans4" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans4" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans4" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div>

                    <div className="card">
                        <label>Question5</label><br/>
                        <input type="radio" name="ans5" value="Option1" onChange={this.answerSelected}/> Option 1
                        <input type="radio" name="ans5" value="Option2" onChange={this.answerSelected}/> Option 2
                        <input type="radio" name="ans5" value="Option3" onChange={this.answerSelected}/> Option 3
                        <input type="radio" name="ans5" value="Option4" onChange={this.answerSelected}/> Option 4
                    </div> */}
                    <input className="feedback-button" type="submit" value="submit"/>
                </form>
                </div>
            </div>
            
            
        )
}

export default TravelSurvey
