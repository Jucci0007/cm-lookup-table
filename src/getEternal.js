import React, { Component } from 'react'
import './App.css';
import './table.css';

class GetEternal extends Component{

    state = {
        eternalPrice: 0,
        updateTimer: 0
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
        this.updateTimer = setInterval(() => this.loadData(), 10000);
    }

    async componentWillUnmount() {
        clearInterval(this.updateTimer);
    }

    render(){
        return(
            <div class="container-fixed mx-5">
                <div class="container-fluid mx-2">
                    <div class="container-fluid">
                        <div class="row align-items-start border border-2 border-dark"> 
                            <p class="col-4 getEternalHeader mt-3"> <b>USD/ETL</b> -> <span class="text-primary">{this.state.eternalPrice}</span></p>
                            <p class="col-4 getEternalHeader mt-3"> <b>Contract (7 Days) / Worker</b> -> <span class="text-primary">{parseFloat(7/this.state.eternalPrice).toFixed(3)} ETL</span> </p>
                            <p class="col-4 getEternalHeader mt-3"> <b>Minting</b> -> <span class="text-primary">{parseFloat(20/this.state.eternalPrice).toFixed(3)} ETL</span> </p>
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
                        <th class="border border-2 border-dark">Success %</th>
                        <th class="border border-2 border-dark">7 Days Mine Reward (USD) vs Success Rate</th>
                        <th class="border border-2 border-dark">Est. Workers</th>
                        <th class="border border-2 border-dark">Worker Contract Upkeep / 7 Days </th>
                        <th class="border border-2 border-dark">Net Profit / 7 Days USD</th>
                    </tr>
                    <tr id="w1">
                        <td class="border border-secondary">1</td>
                        <td class="border border-secondary">Odrocury</td>
                        <td class="border border-secondary purp">100</td>
                        <td class="border border-secondary gray">1.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(5/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$5.00</td>
                        <td class="border border-secondary easy-green">88%</td>
                        <td class="border border-secondary">${parseFloat(((5/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.88).toFixed(2)}</td>
                        <td class="border border-secondary">2</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*2)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((5/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.88)-14).toFixed(2)}</td>
                    </tr>
                    <tr id="w2">
                        <td class="border border-secondary">2</td>
                        <td class="border border-secondary">Thabbiter</td>
                        <td class="border border-secondary purp">200</td>
                        <td class="border border-secondary gray">2.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(10/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$10.00</td>
                        <td class="border border-secondary easy-green">86%</td>
                        <td class="border border-secondary">${parseFloat(((10/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.86).toFixed(2)}</td>
                        <td class="border border-secondary">2</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*2)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((10/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.86)-14).toFixed(2)}</td>
                    </tr>
                    <tr id="w3">
                        <td class="border border-secondary">3</td>
                        <td class="border border-secondary">Pulmeron</td>
                        <td class="border border-secondary purp">300</td>
                        <td class="border border-secondary gray">3.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(15/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$15.00</td>
                        <td class="border border-secondary easy-green">84%</td>
                        <td class="border border-secondary">${parseFloat(((15/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.84).toFixed(2)}</td>
                        <td class="border border-secondary">3</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*3)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((15/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.84)-21).toFixed(2)}</td>
                    </tr>
                    <tr id="w4">
                        <td class="border border-secondary">4</td>
                        <td class="border border-secondary">Ecryria</td>
                        <td class="border border-secondary purp">400</td>
                        <td class="border border-secondary gray">4.125</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(20.63/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$20.63</td>
                        <td class="border border-secondary easy-green">82%</td>
                        <td class="border border-secondary">${parseFloat(((20.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.82).toFixed(2)}</td>
                        <td class="border border-secondary">4</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*4)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((20.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.82)-28).toFixed(2)}</td>
                    </tr>
                    <tr id="w5">
                        <td class="border border-secondary">5</td>
                        <td class="border border-secondary">Searus</td>
                        <td class="border border-secondary purp">500</td>
                        <td class="border border-secondary gray">5.250</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(26.25/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$26.25</td>
                        <td class="border border-secondary easy-green">80%</td>
                        <td class="border border-secondary">${parseFloat(((26.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.8).toFixed(2)}</td>
                        <td class="border border-secondary">4</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*4)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((26.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.8)-28).toFixed(2)}</td>
                    </tr>
                    <tr id="w6">
                        <td class="border border-secondary">6</td>
                        <td class="border border-secondary">Gemia</td>
                        <td class="border border-secondary purp">600</td>
                        <td class="border border-secondary gray">6.500</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(32.5/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$32.5</td>
                        <td class="border border-secondary medium-yellow">78%</td>
                        <td class="border border-secondary">${parseFloat(((32.5/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.78).toFixed(2)}</td>
                        <td class="border border-secondary">6</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*6)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((32.5/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.78)-42).toFixed(2)}</td>
                    </tr>
                    <tr id="w7">
                        <td class="border border-secondary">7</td>
                        <td class="border border-secondary">Malphus</td>
                        <td class="border border-secondary purp">700</td>
                        <td class="border border-secondary gray">7.750</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(38.75/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$38.75</td>
                        <td class="border border-secondary medium-yellow">76%</td>
                        <td class="border border-secondary">${parseFloat(((38.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.76).toFixed(2)}</td>
                        <td class="border border-secondary">7</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*7)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((38.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.76)-49).toFixed(2)}</td>
                    </tr>
                    <tr id="w8">
                        <td class="border border-secondary">8</td>
                        <td class="border border-secondary">Neuter</td>
                        <td class="border border-secondary purp">800</td>
                        <td class="border border-secondary gray">9.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(45.00/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$45.00</td>
                        <td class="border border-secondary medium-yellow">74%</td>
                        <td class="border border-secondary">${parseFloat(((45.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.74).toFixed(2)}</td>
                        <td class="border border-secondary">8</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*8)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((45.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.74)-56).toFixed(2)}</td>
                    </tr>
                    <tr id="w9">
                        <td class="border border-secondary">9</td>
                        <td class="border border-secondary">Grarvis 022</td>
                        <td class="border border-secondary purp">900</td>
                        <td class="border border-secondary gray">10.250</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(51.25/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$51.25</td>
                        <td class="border border-secondary medium-yellow">72%</td>
                        <td class="border border-secondary">${parseFloat(((51.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.72).toFixed(2)}</td>
                        <td class="border border-secondary">9</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*9)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((51.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.72)-63).toFixed(2)}</td>
                    </tr>
                    <tr id="w10">
                        <td class="border border-secondary">10</td>
                        <td class="border border-secondary">Sorth 33A5</td>
                        <td class="border border-secondary purp">1000</td>
                        <td class="border border-secondary gray">11.625</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(58.13/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$58.13</td>
                        <td class="border border-secondary medium-yellow">70%</td>
                        <td class="border border-secondary">${parseFloat(((58.13/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.7).toFixed(2)}</td>
                        <td class="border border-secondary">10</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*10)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((58.13/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.7)-70).toFixed(2)}</td>
                    </tr>
                    <tr id="w11">
                        <td class="border border-secondary">11</td>
                        <td class="border border-secondary">Dutrabos</td>
                        <td class="border border-secondary purp">1100</td>
                        <td class="border border-secondary gray">14.375</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(71.88/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$71.88</td>
                        <td class="border border-secondary moderate-orange">68%</td>
                        <td class="border border-secondary">${parseFloat(((71.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.68).toFixed(2)}</td>
                        <td class="border border-secondary">11</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*11)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((71.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.68)-77).toFixed(2)}</td>
                    </tr>
                    <tr id="w12">
                        <td class="border border-secondary">12</td>
                        <td class="border border-secondary">Lustronides</td>
                        <td class="border border-secondary purp">1200</td>
                        <td class="border border-secondary gray">16.125</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(80.63/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$80.63</td>
                        <td class="border border-secondary moderate-orange">66%</td>
                        <td class="border border-secondary">${parseFloat(((80.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.66).toFixed(2)}</td>
                        <td class="border border-secondary">12</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((80.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.66)-84).toFixed(2)}</td>
                    </tr>
                    <tr id="w13">
                        <td class="border border-secondary">13</td>
                        <td class="border border-secondary">Zullosie</td>
                        <td class="border border-secondary purp">1300</td>
                        <td class="border border-secondary gray">18.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(90.00/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$90.00</td>
                        <td class="border border-secondary moderate-orange">64%</td>
                        <td class="border border-secondary">${parseFloat(((90.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.64).toFixed(2)}</td>
                        <td class="border border-secondary">12</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((90.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.64)-84).toFixed(2)}</td>
                    </tr>
                    <tr id="w14">
                        <td class="border border-secondary">14</td>
                        <td class="border border-secondary">Yimagua</td>
                        <td class="border border-secondary purp">1400</td>
                        <td class="border border-secondary gray">19.875</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(99.38/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$99.38</td>
                        <td class="border border-secondary moderate-orange">62%</td>
                        <td class="border border-secondary">${parseFloat(((99.38/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.62).toFixed(2)}</td>
                        <td class="border border-secondary">13</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((99.38/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.62)-91).toFixed(2)}</td>
                    </tr>
                    <tr id="w15">
                        <td class="border border-secondary">15</td>
                        <td class="border border-secondary">Haostea</td>
                        <td class="border border-secondary purp">1500</td>
                        <td class="border border-secondary gray">22.375</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(111.88/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$111.88</td>
                        <td class="border border-secondary moderate-orange">60%</td>
                        <td class="border border-secondary">${parseFloat(((111.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.6).toFixed(2)}</td>
                        <td class="border border-secondary">13</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((111.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*0.6)-91).toFixed(2)}</td>
                    </tr>
                    <tr id="w16">
                        <td class="border border-secondary">16</td>
                        <td class="border border-secondary">Kongebro</td>
                        <td class="border border-secondary purp">1600</td>
                        <td class="border border-secondary gray">24.125</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(120.63/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$120.63</td>
                        <td class="border border-secondary hard-red">58%</td>
                        <td class="border border-secondary">${parseFloat(((120.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*.58).toFixed(2)}</td>
                        <td class="border border-secondary">14</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*14)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((120.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*.58)-98).toFixed(2)}</td>
                    </tr>
                    <tr id="w17">
                        <td class="border border-secondary">17</td>
                        <td class="border border-secondary">Vuruturn</td>
                        <td class="border border-secondary purp">1700</td>
                        <td class="border border-secondary gray">26.500</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(132.50/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$132.50</td>
                        <td class="border border-secondary hard-red">56%</td>
                        <td class="border border-secondary">${parseFloat(((132.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.56).toFixed(2)}</td>
                        <td class="border border-secondary">14</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*14)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((132.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.56)-98).toFixed(2)}</td>
                    </tr>
                    <tr id="w18">
                        <td class="border border-secondary">18</td>
                        <td class="border border-secondary">Droxuyama</td>
                        <td class="border border-secondary purp">1800</td>
                        <td class="border border-secondary gray">28.875</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(144.38/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$144.38</td>
                        <td class="border border-secondary hard-red">54%</td>
                        <td class="border border-secondary">${parseFloat(((144.38/this.state.eternalPrice * 7)*this.state.eternalPrice)*.54).toFixed(2)}</td>
                        <td class="border border-secondary">15</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*15)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((144.38/this.state.eternalPrice * 7)*this.state.eternalPrice)*.54)-105).toFixed(2)}</td>
                    </tr>
                    <tr id="w19">
                        <td class="border border-secondary">19</td>
                        <td class="border border-secondary">Miuq I11</td>
                        <td class="border border-secondary purp">1900</td>
                        <td class="border border-secondary gray">31.375</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(156.88/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$156.88</td>
                        <td class="border border-secondary hard-red">52%</td>
                        <td class="border border-secondary">${parseFloat(((156.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*.52).toFixed(2)}</td>
                        <td class="border border-secondary">15</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*15)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((156.88/this.state.eternalPrice * 7)*this.state.eternalPrice)*.52)-105).toFixed(2)}</td>
                    </tr>
                    <tr id="w20">
                        <td class="border border-secondary">20</td>
                        <td class="border border-secondary">Zapus 5M0</td>
                        <td class="border border-secondary purp">2000</td>
                        <td class="border border-secondary gray">34.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(170.00/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$170.00</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((170.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">16</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*16)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((170.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-112).toFixed(2)}</td>
                    </tr>
                    <tr id="w21">
                        <td class="border border-secondary">21</td>
                        <td class="border border-secondary">Begelia</td>
                        <td class="border border-secondary purp">2100</td>
                        <td class="border border-secondary gray">44.500</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(222.50/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$222.50</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((222.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">17</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*17)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((222.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-119).toFixed(2)}</td>
                    </tr>
                    <tr id="w22">
                        <td class="border border-secondary">22</td>
                        <td class="border border-secondary">Gochimars</td>
                        <td class="border border-secondary purp">2200</td>
                        <td class="border border-secondary gray">48.500</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(242.50/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$242.50</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((242.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">18</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*18)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((242.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-126).toFixed(2)}</td>
                    </tr>
                    <tr id="w23">
                        <td class="border border-secondary">23</td>
                        <td class="border border-secondary">Konvides</td>
                        <td class="border border-secondary purp">2300</td>
                        <td class="border border-secondary gray">52.750</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(263.75/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$263.75</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((263.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">19</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*19)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((263.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-133).toFixed(2)}</td>
                    </tr>
                    <tr id="w24">
                        <td class="border border-secondary">24</td>
                        <td class="border border-secondary">Donvillon</td>
                        <td class="border border-secondary purp">2400</td>
                        <td class="border border-secondary gray">57.250</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(286.25/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$286.25</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((286.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">20</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*20)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((286.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-140).toFixed(2)}</td>
                    </tr>
                    <tr id="w25">
                        <td class="border border-secondary">25</td>
                        <td class="border border-secondary">Ania</td>
                        <td class="border border-secondary purp">2500</td>
                        <td class="border border-secondary gray">62.000</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(310.00/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$310.00</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((310.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">21</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*21)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((310.00/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-147).toFixed(2)}</td>
                    </tr>
                    <tr id="w26">
                        <td class="border border-secondary">26</td>
                        <td class="border border-secondary">Aenerth</td>
                        <td class="border border-secondary purp">2600</td>
                        <td class="border border-secondary gray">67.125</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(335.63/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$335.63</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((335.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">22</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*22)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((335.63/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-154).toFixed(2)}</td>
                    </tr>
                    <tr id="w27">
                        <td class="border border-secondary">27</td>
                        <td class="border border-secondary">Tachiron</td>
                        <td class="border border-secondary purp">2700</td>
                        <td class="border border-secondary gray">72.500</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(362.50/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$362.50</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((362.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">23</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*23)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((362.50/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-161).toFixed(2)}</td>
                    </tr>
                    <tr id="w28">
                        <td class="border border-secondary">28</td>
                        <td class="border border-secondary">Cichurilia</td>
                        <td class="border border-secondary purp">2800</td>
                        <td class="border border-secondary gray">78.250</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(391.25/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$391.25</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((391.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">24</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*24)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((391.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-168).toFixed(2)}</td>
                    </tr>
                    <tr id="w29">
                        <td class="border border-secondary">29</td>
                        <td class="border border-secondary">Gagua 07</td>
                        <td class="border border-secondary purp">2900</td>
                        <td class="border border-secondary gray">84.250</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(421.25/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$421.25</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((421.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">25</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*25)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((421.25/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-175).toFixed(2)}</td>
                    </tr>
                    <tr id="w30">
                        <td class="border border-secondary">30</td>
                        <td class="border border-secondary">Sector G</td>
                        <td class="border border-secondary purp">3000</td>
                        <td class="border border-secondary gray">90.750</td>
                        <td class="border border-secondary"><span class="text-primary">{parseFloat(453.75/this.state.eternalPrice).toFixed(3)} ETL</span></td>
                        <td class="border border-secondary">$453.75</td>
                        <td class="border border-secondary rough-black">50%</td>
                        <td class="border border-secondary">${parseFloat(((453.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5).toFixed(2)}</td>
                        <td class="border border-secondary">26</td>
                        <td class="border border-secondary text-primary">{parseFloat(((7*26)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td class="border border-secondary">${parseFloat((((453.75/this.state.eternalPrice * 7)*this.state.eternalPrice)*.5)-182).toFixed(2)}</td>
                    </tr>

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
