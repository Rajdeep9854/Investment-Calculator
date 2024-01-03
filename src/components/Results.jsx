import React from 'react'
import { calculateInvestmentResults,formatter } from '../util/investment'

const Results = ({input}) => {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    //console.log(resultData);
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment Year</th>
          <th>Total Investment</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData)=>{
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year - initialInvestment;
          const totalAmmountInvested = yearData.valueEndOfYear - totalInterest
          return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmmountInvested)}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default Results