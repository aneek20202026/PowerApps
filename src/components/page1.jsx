import React,{useState} from "react";
import '../design/page1.css';
import Image from '../images/arrow-down-sign-to-navigate.png';
import { ReactComponent as Icon } from '../images/icon.svg';

function Page1(){

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('--Select--');
    const [text,setText]=useState('');
    const [radio, setRadio] = useState('');
    const [type,setType]=useState(1);
    const [length,setLength]=useState(1);
    const options = ['--Select--','Option1','Option2','Option3','Option4','Option5'];
    const [remark,setRemark]=useState('');
    const arrText=['','opt1','opt2','opt3','opt4','opt5'];

    const toggleDropdown=()=>{setIsOpen(!isOpen);};
    const Radio=(e)=>{setRadio(e.target.value);};
    const handleOptionClick=(option,index)=>{
        setSelectedOption(option);
        setText(arrText[index])
        setIsOpen(false);
    };
    const clear=()=>{
        setText('');
        setRemark('');
        setRadio('');
        setSelectedOption('--Select--');
        setLength(1);
        setType(1);
    };
    const handleType=(event)=>{
        const newValue = event.target.value;
        setType(newValue);
    };
    const handleLength=(event)=>{
        const newValue = event.target.value;
        setLength(newValue);
    };
    const submit=()=>{
        if(text.trim()==='' || radio==='' || selectedOption==='--Select--'){
            window.alert("All fields are mandatory!!");
            return;
        }
        postData();
        // const jsonData = JSON.stringify(arr);
        // window.location.href =`/display?data=${encodeURIComponent(jsonData)}`;
        // e.preventDefault();
    }
    const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/hello');
          const jsonData = await response.json();
          setRemark(jsonData);
        } catch (e) {
          setRemark('Error fetching data:', e);
        }
    }

    const postData = () => {
        const arr=[{
            text: radio+" "+text.trim(),
            type: type,
            length: length
        }];
        fetch('http://127.0.0.1:5000/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(arr),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server here
            setRemark(data[0].text);
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            setRemark(error);
          });
      };

    return(
        <div className="header">
            <Icon className="icon" onClick={()=>{window.open("https://www.pge.com/")}}/>
            <div className="textHead">
                <div className="left">
                    <p>Enter your text </p>
                    <div className="dropdown-container">
                        <div className="up">
                            <text className="dropdown-text" >
                                {selectedOption}
                            </text>
                            <button className="drop" onClick={toggleDropdown}><img src={Image} alt="Button" /></button>
                        </div>
                        <div className="down">
                            {isOpen && (
                                <ul className="dropdown-options">
                                {options.map((option, index) => (
                                    <li
                                    key={index}
                                    className="dropdown-option"
                                    onClick={() => handleOptionClick(option,index)}
                                    >
                                    {option}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <textarea
                     className="Query" 
                     value={text} 
                     onChange={(e)=>{setText(e.target.value)}} 
                     cols="110" rows="9"/>
                </div>
            </div>
            <div className="answer">
                <div className="left">
                    <p>Answer Type :</p>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        value={type}
                        onChange={handleType}
                        className="type"
                    />
                </div>
                <div className="center">
                    <p>Answer Length :</p>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={length}
                        onChange={handleLength}
                        className="length"
                    />
                </div>
                <div className="end">
                    <button onClick={clear}>Clear</button>
                </div>
            </div>
            <div className="choice">
                <div className="choose">
                    <div>
                        <input type="radio" value="Get synopsis"  checked={radio === 'Get synopsis'} onChange={Radio}/><text className="questions">Get Synopsis</text>
                        <input type="radio" value="Correct Grammar" checked={radio === 'Correct Grammar'} onChange={Radio}/><text className="questions">Correct Grammar</text>
                        <input type="radio" value="Simplify Text" checked={radio === 'Simplify Text'} onChange={Radio}/><text className="questions">Simplify Text</text>
                    </div>
                    <div>
                        <input type="radio" value="Get Keywords" checked={radio === 'Get Keywords'} onChange={Radio}/><text className="questions">Get Keywords</text>
                        <input type="radio" value="Notes to Summary" checked={radio === 'Notes to Summary'} onChange={Radio}/><text className="questions">Notes to Summary</text>
                        <input type="radio" value="Answer the Question" checked={radio === 'Answer the Question'} onChange={Radio}/><text className="questions">Answer the Question</text>
                    </div>
                </div>
                <div className="submit">
                    <div onClick={submit}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div className="remarks">
                <textarea 
                    name="remark"
                    disabled
                    value={remark}
                    cols="150"
                    rows="6"/>
            </div>
        </div>
    );
}

export default Page1;