

const UserInput = ({ userInput, onInputChange }) => {

  
    
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center',height:'20vh' }}>
          <section id='user-input' style={{ margin: '20px' }}>
              <div className='input-group' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, marginRight: '20px' }}>
                      <label htmlFor="initialInvestment" style={{ fontSize: '16px' }}>Initial Investment</label>
                      <input
                          type="number"
                          id="initialInvestment"
                          required
                          onChange={(event) => onInputChange('initialInvestment', event.target.value)}
                          value={userInput.initialInvestment}
                          style={{ width: '100%', padding: '12px', fontSize: '16px' }}
                      />
                  </div>
                  <div style={{ flex: 1, marginLeft: '20px' }}>
                      <label htmlFor="annualInvestment" style={{ fontSize: '16px' }}>Annual Investment</label>
                      <input
                          type="number"
                          id="annualInvestment"
                          required
                          onChange={(event) => onInputChange('annualInvestment', event.target.value)}
                          value={userInput.annualInvestment}
                          style={{ width: '100%', padding: '12px', fontSize: '16px' }}
                      />
                  </div>
              </div>

              <div className='input-group' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, marginRight: '20px' }}>
                      <label htmlFor="expectedReturn" style={{ fontSize: '16px' }}>Expected Return</label>
                      <input
                          type="number"
                          id="expectedReturn"
                          required
                          onChange={(event) => onInputChange('expectedReturn', event.target.value)}
                          value={userInput.expectedReturn}
                          style={{ width: '100%', padding: '12px', fontSize: '16px' }}
                      />
                  </div>
                  <div style={{ flex: 1, marginLeft: '20px' }}>
                      <label htmlFor="duration" style={{ fontSize: '16px' }}>Duration</label>
                      <input
                          type="number"
                          id="duration"
                          required
                          onChange={(event) => onInputChange('duration', event.target.value)}
                          value={userInput.duration}
                          style={{ width: '100%', padding: '12px', fontSize: '16px' }}
                      />
                  </div>
              </div>
          </section>
    </div>
      


  )
}

export default UserInput