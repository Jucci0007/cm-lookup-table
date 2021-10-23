import React, { Component } from 'react'
import './App.css';
import './table.css';

class GetEternal extends Component{

    state = {
        eternalPrice: 0,
        updateTimer: 0,
        planets: ["Odrocury","Thabbiter","Pulmeron","Ecryria","Searus","Gemia","Malphus","Neuter","Grarvis 022","Sorth 33A5","Dutrabos","Lustronides","Zullosie","Yimagua","Haostea","Kongebro","Vuruturn","Droxuyama","Miuq I11","Zapus 5M0","Begelia","Gochimars","Konvides","Donvillon","Ania","Aenerth","Tachiron","Cichurilia","Gagua 07","Sector G"],
        oracle_adjustment: [1,2,3,4.125,5.25,6.5,7.75,9,10.25,11.625,14.375,16.125,18,19.875,22.375,24.125,26.5,28.875,31.375,34,44.5,48.5,52.75,57.25,62,67.125,72.5,78.25,84.25,90.75],
        worker_count: [2,2,3,4,4,6,7,8,9,10,11,12,12,13,13,14,14,15,15,16,17,18,19,20,21,22,23,24,25,26],
        success_chance: [0.88,0.86,0.84,0.82,0.80,0.78,0.76,0.74,0.72,0.70,0.68,0.66,0.64,0.62,0.60,0.58,0.56,0.54,0.52,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50]
    };

    async loadData(){
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptomines-eternal&vs_currencies=usd"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({eternalPrice: data["cryptomines-eternal"]["usd"]})
        console.log(data);
    }

    async componentDidMount() {
        this.loadData()
        this.updateTimer = setInterval(() => this.loadData(), 2000);
    }

    async componentWillUnmount() {
        clearInterval(this.updateTimer);
    }

    getMineETL(i){
        return parseFloat(this.getMineUSD(i)/this.state.eternalPrice).toFixed(3)
    }

    getMineUSD(i){
        return parseFloat(5.0 * this.state.oracle_adjustment[i]).toFixed(2)
    }

    getSuccessChance(i){
        return parseFloat(this.state.success_chance[i] * 100).toFixed(2)
    }

    getRewardsVersusSuccess(i){
        return parseFloat(this.getMineUSD(i)*7 * this.state.success_chance[i]).toFixed(2)
    }

    getContractCost(i){
        return parseFloat(((7*this.state.worker_count[i])/this.state.eternalPrice)).toFixed(3)
    }

    getNetProfit(i){
        return parseFloat(this.getRewardsVersusSuccess(i) - (this.state.worker_count[i]*7)).toFixed(2)
    }
    

    render(){
        return(
            <div class="container-fixed mx-5">
                <div class="container-fluid mx-2">
                    <div class="container-fluid">
                        <div class="row align-items-start border border-2 border-dark"> 
                            <p class="col-4 getEternalHeader mt-3"> <b>USD/ETL</b> -{'>'} <span class="text-primary">{this.state.eternalPrice}</span></p>
                            <p class="col-4 getEternalHeader mt-3"> <b>Contract (7 Days) / Worker</b> -{'>'} <span class="text-primary">{parseFloat(7/this.state.eternalPrice).toFixed(3)} ETL</span> </p>
                            <p class="col-4 getEternalHeader mt-3"> <b>Minting</b> -{'>'} <span class="text-primary">{parseFloat(20/this.state.eternalPrice).toFixed(3)} ETL</span> </p>
                        </div>
                    </div>
                    <table>
                        <tr class="border border-dark">
                            <th class="border border-2 border-dark">#</th>
                            <th class="border border-2 border-dark">Planet</th>
                            <th class="border border-2 border-dark">MP</th>
                            <th class="border border-2 border-dark">Oracle Reward Multiplier</th>
                            <th class="border border-2 border-dark">Mine Reward (ETL)</th>
                            <th class="border border-2 border-dark">Mine Reward (USD)</th>
                            <th class="border border-2 border-dark">Success Rate (SR)</th>
                            <th class="border border-2 border-dark">7d Mine Reward (USD) vs SR</th>
                            <th class="border border-2 border-dark">Est. Workers</th>
                            <th class="border border-2 border-dark">Worker Contract Upkeep / 7d </th>
                            <th class="border border-2 border-dark">Net Profit / 7d</th>
                        </tr>
                        {(() => {
                            const print = [];
                            for (let i=0; i<30; i++){
                                print.push(
                                    <tr id="w1">
                                        <td class="border border-secondary">{i+1}</td>
                                        <td class="border border-secondary">{this.state.planets[i]}</td>
                                        <td class="border border-secondary purp">{100*(i+1)}</td>
                                        <td class="border border-secondary gray">{parseFloat(this.state.oracle_adjustment[i]).toFixed(3)}</td>
                                        <td class="border border-secondary text-primary">{this.getMineETL(i)} ETL</td>
                                        <td class="border border-secondary">$ {this.getMineUSD(i)}</td>
                                        <td class="border border-secondary text-secondary">{this.getSuccessChance(i)} %</td>
                                        <td class="border border-secondary">${this.getRewardsVersusSuccess(i)}</td>
                                        <td class="border border-secondary">{this.state.worker_count[i]}</td>
                                        <td class="border border-secondary text-primary">{this.getContractCost(i)} ETL</td>
                                        <td class="border border-secondary">${this.getNetProfit(i)}</td>
                                    </tr>
                                )
                            }
                            return print
                        })()}
                            
                        

                        </table>


                        <div class="row align-items-start mt-2">
                            <div class="col-6">
                                <p class="disclaimer">
                                Disclaimer: ORM Matrix is based on observation and not actual value (unless the devs gives us the Data).
                                <br/>
                                All values are approximation and should only be used as a template. ETL/USD updates are every 10 seconds.
                                <br/>
                                Mobile View is currently non-existent. You have been warned. I'll get back to it if I'm not busy.
                                </p>
                                
                            </div>
                            <div class="col-6">
                                <p class="credits text-info">
                                Original Sheet and ORM Matrix by: @starl3xx#2691
                                <br/>
                                Made by: @Jucci#0007
                                </p>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}

export default GetEternal
