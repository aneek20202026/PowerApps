import React,{useState} from "react";
import '../design/page1.css';
import Image from '../design/down-filled-triangular-arrow.png';

function Page1(){

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const[text,setText]=useState('');
    const[remark,setRemark]=useState('');
    const [radio, setRadio] = useState('');
    const[type,setType]=useState(1);
    const[length,setLength]=useState(1);
    const options = ['Option1','Option2','Option3','Option4','Option5'];

    const toggleDropdown=()=>{setIsOpen(!isOpen);};
    const Radio=(e)=>{setRadio(e.target.value);};
    const handleOptionClick=(option)=>{
        setSelectedOption(option);
        setIsOpen(false);
    };
    const clear=()=>{
        setText('');
        setRemark('');
        setRadio('');
        setSelectedOption(null);
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
    const submit=(e)=>{
        if(text==='' || remark===''|| radio==='' || selectedOption===null){
            window.alert("All fields are mandatory!!");
        }
        else{
            const arr=[{
                option: selectedOption,
                text: text,
                radio: radio,
                type: type,
                length: length,
                remark: remark
            }];
            e.preventDefault()
            const jsonData = JSON.stringify(arr);
            window.location.href =`/display?data=${encodeURIComponent(jsonData)}`;
        }
    }
    return(
        <div className="header">
            <h1>Habibi</h1>
            <div className="textHead">
                <div className="left">
                    <p>Enter your text </p>
                    <div className="dropdown-container">
                        <div className="up">
                            <text className="dropdown-text" >
                                {selectedOption || 'Select an option'}
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
                                    onClick={() => handleOptionClick(option)}
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
                     onChange={(e) => setText(e.target.value)} 
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
                    <input type="radio" value="Get synopsis"  checked={radio === 'Get synopsis'} onChange={Radio}/><text className="questions">Get Synopsis</text>
                    <input type="radio" value="Correct Grammar" checked={radio === 'Correct Grammar'} onChange={Radio}/><text className="questions">Correct Grammar</text>
                    <input type="radio" value="Simplify Text" checked={radio === 'Simplify Text'} onChange={Radio}/><text className="questions">Simplify Text</text>
                    <input type="radio" value="Get Keywords" checked={radio === 'Get Keywords'} onChange={Radio}/><text className="questions">Get Keywords</text>
                    <input type="radio" value="Notes to Summary" checked={radio === 'Notes to Summary'} onChange={Radio}/><text className="questions">Notes to Summary</text>
                    <input type="radio" value="Answer the Question" checked={radio === 'Answer the Question'} onChange={Radio}/><text className="questions">Answer the Question</text>
                </div>
                <div className="submit">
                    <form onSubmit={submit}>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="remarks">
                <textarea 
                    name="remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)} 
                    cols="150"
                    rows="6"/>
            </div>
        </div>
    );
}

export default Page1;