import React , { useState } from 'react'
import InputBox from '../components/InputBox.jsx'
import useCurrencyInfo from '../hooks/usecurrinfo.js'
import './App.css'

function App() {

  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
 return (
        <div
            className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat p-4"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1892797470/photo/big-data-chart-on-city-backdrop-trade-technology-and-investment-analysis-business-development.jpg?s=612x612&w=0&k=20&c=6XweeZ_TPOWXl_DPCP3tienWY-pR_i95CmDZ5SVDY7w=')`,
            }}
        >
                <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200">
                    <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Currency Converter
                    </h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            convert()
                        }}
                        className="space-y-4"
                        >
                       
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(value) => setAmount(value)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                            />
                        
                      
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                onClick={swap}
                            >
                                swap
                            </button>
                       
                        
                            <InputBox
                                label="to"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisabled={true}
                            />
                        
                        <button type="submit" 
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
                        >
                        Convert {from} to {to}  
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default App
