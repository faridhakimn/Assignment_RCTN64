import React  from "react";
import axios from "axios";
import '../css/Exchange.css'

export default class Exchange extends React.Component{
    
    constructor () {
        super()
        this.state = {
          people: "",
          CAD: "",
          EUR: "",
          IDR: "",
          JPY: "",
          CHF: "",
          GBP: ""
          
        }
    }

    async componentDidMount(){
        const res = await axios.get('https://api.currencyfreaks.com/latest?apikey=53164fe27bd84b13a7aecaf80e398f2f&format=json')

        

        const cadRate = res.data.rates.CAD.slice(0,7)
        const eurRate = res.data.rates.EUR.slice(0,7)
        const idrRate = res.data.rates.IDR.slice(0,7)
        const jpyRate = res.data.rates.JPY.slice(0,7)
        const chfRate = res.data.rates.CHF.slice(0,7)
        const gbpRate = res.data.rates.GBP.slice(0,7)

        this.setState({
          CAD: cadRate,
          EUR: eurRate,
          IDR: idrRate,
          JPY: jpyRate,
          CHF: chfRate,
          GBP: gbpRate
        })
        console.log(this.state.GBP);

    }

    getSellPrice(rate){
        let sellPrice = (parseFloat(rate)+(rate*5/100)).toString().slice(0,7)
        return( sellPrice )
    }
    getBuyPrice(rate){
        let buyPrice = (parseFloat(rate)-(rate*5/100)).toString().slice(0,7)
        return( buyPrice )
    }
    
    render(){
        return (
            <div className="App">
                <table >
                    <tbody>
                        <tr>
                            <th>Currency</th>
                            <th>We Buy</th>
                            <th>Exchange Rate</th>
                            <th>We Sell</th>
                        </tr>
                        <tr>
                            <td>CAD</td>
                            <td>{this.getBuyPrice(this.state.CAD)}</td>
                            <td>{this.state.CAD}</td>
                            <td>{this.getSellPrice(this.state.CAD)}</td>
                        </tr>
                        <tr>
                            <td>EUR</td>
                            <td>{this.getBuyPrice(this.state.EUR)}</td>
                            <td>{this.state.EUR}</td>
                            <td>{this.getSellPrice(this.state.EUR)}</td>
                        </tr>
                        <tr>
                            <td>IDR</td>
                            <td>{this.getBuyPrice(this.state.IDR)}</td>
                            <td>{this.state.IDR}</td>
                            <td>{this.getSellPrice(this.state.IDR)}</td>
                        </tr>
                        <tr>
                            <td>JPY</td>
                            <td>{this.getBuyPrice(this.state.JPY)}</td>
                            <td>{this.state.JPY}</td>
                            <td>{this.getSellPrice(this.state.JPY)}</td>
                        </tr>
                        <tr>
                            <td>CHF</td>
                            <td>{this.getBuyPrice(this.state.CHF)}</td>
                            <td>{this.state.CHF}</td>
                            <td>{this.getSellPrice(this.state.CHF)}</td>
                        </tr>
                        <tr>
                            <td>GBP</td>
                            <td>{this.getBuyPrice(this.state.GBP)}</td>
                            <td>{this.state.GBP}</td>
                            <td>{this.getSellPrice(this.state.GBP)}</td>
                        </tr>
                    </tbody>
                    
                </table>
                <br></br>
                Rates are based from 1 USD
            </div>
        )
    }
}
