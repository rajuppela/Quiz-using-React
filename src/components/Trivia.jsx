import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
import play from "../assets/play.mp3";

export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber}) {
        const [question, setQuestion] = useState(null);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [className, setClassName] = useState("answer");
        const [correctAnswer] = useSound(correct);
        const [wrongAnswer] = useSound(wrong);
        const [letsPlay] = useSound(play);

        const delay = (duration, callback)=>{
            setTimeout(() => {
               callback(); 
            }, duration);
        }
        
        useEffect(()=>{
            letsPlay();
        },[letsPlay]);

        useEffect(()=>{
            setQuestion(data[questionNumber - 1])
        },[data, questionNumber])

        const handleClick = (a)=>{
            setSelectedAnswer(a);
            setClassName("answer active");
            delay(1000,()=>{
                setClassName(a.correct ? "answer correct" : "answer wrong")
            });
            delay(2500,()=>{
                if (a.correct){
                    correctAnswer();
                    delay(2000,()=>{
                        setQuestionNumber(prev=>prev + 1);
                        setSelectedAnswer(null)
                    });
                    if (question?.id===15)
                        {
                            setStop(true);
                        }
                }
                else {
                    wrongAnswer();
                    delay(2000,()=>{
                        setStop(true);
                    });
                }
            });
        };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a)=>(
            <div className={ selectedAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  )
}
