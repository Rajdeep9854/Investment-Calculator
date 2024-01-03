import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

  })
  const initialDuration = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue  // like this we can change a specific key value pair from the old object 
      }
    });
  }
  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        onInputChange={handleChange}
      />
      {!initialDuration && <p className="center"> Please enter a duration greater than 0</p>}
      {initialDuration && < Results input={userInput} />}
    </>
  )
}

export default App
