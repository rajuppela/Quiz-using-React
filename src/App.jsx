import { useEffect, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "2008 olympic games held in which city?",
      answers: [
        {
          text: "Johnnesburg",
          correct: false,
        },
        {
          text: "London",
          correct: false,
        },
        {
          text: "Beijing",
          correct: true,
        },
        {
          text: "Paris",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the director of the indian movie 'RRR'?",
      answers: [
        {
          text: "Sukumar",
          correct: false,
        },
        {
          text: "Maniratnam",
          correct: false,
        },
        {
          text: "Shankar",
          correct: false,
        },
        {
          text: "Rajamouli",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which countrry holds the record for winning most cricket world cups?",
      answers: [
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "England",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The famous traditional dance form 'kuchipudi' is originated from which indian state?",
      answers: [
        {
          text: "Arunachal Pradesh",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: true,
        },
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who played the character of 'Thor' in Marvel's Avengers End Game movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Chris Hemsworth",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which indian city is popularly called as the garden city?",
      answers: [
        {
          text: "Agra",
          correct: false,
        },
        {
          text: "Bengaluru",
          correct: true,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Dehradun",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who invented the number 'zero' in mathematics?",
      answers: [
        {
          text: "Aryabhatta",
          correct: true,
        },
        {
          text: "Pascal",
          correct: false,
        },
        {
          text: "Benjamin",
          correct: false,
        },
        {
          text: "Heisenburg",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "ATM stands for?",
      answers: [
        {
          text: "Any Time Money",
          correct: false,
        },
        {
          text: "Automated Transfer Machine",
          correct: false,
        },
        {
          text: "Automatic Teller Machine",
          correct: true,
        },
        {
          text: "Anywhere Transfer Money",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "The Word 'Paav' in Paav Baaji refers to?",
      answers: [
        {
          text: "Butter",
          correct: false,
        },
        {
          text: "Batter",
          correct: false,
        },
        {
          text: "Bread",
          correct: true,
        },
        {
          text: "Baked",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which televison series by HBO is based on the book 'The Song of Ice and Fire'?",
      answers: [
        {
          text: "Vikings",
          correct: false,
        },
        {
          text: "West World",
          correct: false,
        },
        {
          text: "Breaking Bad",
          correct: false,
        },
        {
          text: "Game of Thrones",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the founder of the tech gadgets company 'Nothing'?",
      answers: [
        {
          text: "Elon Musk",
          correct: false,
        },
        {
          text: "Carl Pei",
          correct: true,
        },
        {
          text: "Jack",
          correct: false,
        },
        {
          text: "Sean Paul",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the fullform of NATO?",
      answers: [
        {
          text: "North American Treasure Organization",
          correct: false,
        },
        {
          text: "Nations Allied Transformed Organization",
          correct: false,
        },
        {
          text: "National Aerospace Technologies Operators",
          correct: false,
        },
        {
          text: "North Atlantic Treaty Organization",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    }
  ];
  const moneyPyramid =[
    { id: 1, amount: "₹ 1000" },
    { id: 2, amount: "₹ 2000" },
    { id: 3, amount: "₹ 3000" },
    { id: 4, amount: "₹ 5000" },
    { id: 5, amount: "₹ 10000" },
    { id: 6, amount: "₹ 20000" },
    { id: 7, amount: "₹ 40000" },
    { id: 8, amount: "₹ 80000" },
    { id: 9, amount: "₹ 160000" },
    { id: 10, amount: "₹ 320000" },
    { id: 11, amount: "₹ 640000" },
    { id: 12, amount: "₹ 1250000" },
    { id: 13, amount: "₹ 2500000" },
    { id: 14, amount: "₹ 5000000" },
    { id: 15, amount: "₹ 10000000" }
].reverse();

        useEffect(()=>{
          questionNumber > 1 && setEarned(moneyPyramid.find((m)=>m.id === questionNumber - 1).amount);
        },[moneyPyramid, questionNumber])

  return (
    <div className="app">
     {userName ? (<>
      <div className="main">
        {stop ? <h1 className="gameover">{userName}, You Earned: {earned}</h1> : <>
          <div className="top">
          <div className="timer">
            <Timer 
            setStop={setStop}
            questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
          <Trivia data={data}
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber} />
        </div>
        </>}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
            <li className={ questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
     </>) : <Start setUserName={setUserName} />}
    </div>
  );
}

export default App;
