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
        this.updateTimer = setInterval(() => this.loadData(), 30000);
    }

    async componentWillUnmount() {
        clearInterval(this.updateTimer);
    }

    render(){
        return(
            <div>


                <p id="getEternalHeader">USD/ETL {this.state.eternalPrice} | Contract Cost (7 Days) {parseFloat(7/this.state.eternalPrice).toFixed(3)} | Minting {parseFloat(20/this.state.eternalPrice).toFixed(3)} </p>

                <table>
                    <tr>
                        <th>#</th>
                        <th>Planet</th>
                        <th>MP</th>
                        <th>Oracle Reward Multiplier</th>
                        <th>Mine Reward (ETL)</th>
                        <th>Mine Reward (USD)</th>
                        <th>Success $</th>
                        <th>Mine Return / 7 Days (USD)</th>
                        <th>Est. Workers Needed / 7 Days</th>
                        <th>Worker Contract Upkeep / 7 Days </th>
                        <th>Net Profit / 7 Days USD</th>
                    </tr>
                    <tr id="w1">
                        <td>1</td>
                        <td>Odrocury</td>
                        <td>100</td>
                        <td>1.000</td>
                        <td>{parseFloat(5/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$5.00</td>
                        <td>88%</td>
                        <td>${parseFloat((5/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>2</td>
                        <td>{parseFloat(((7*2)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((5/this.state.eternalPrice * 7)*this.state.eternalPrice)-14).toFixed(2)}</td>
                    </tr>
                    <tr id="w2">
                        <td>2</td>
                        <td>Thabbiter</td>
                        <td>200</td>
                        <td>2.000</td>
                        <td>{parseFloat(10/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$10.00</td>
                        <td>86%</td>
                        <td>${parseFloat((10/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>2</td>
                        <td>{parseFloat(((7*2)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((10/this.state.eternalPrice * 7)*this.state.eternalPrice)-14).toFixed(2)}</td>
                    </tr>
                    <tr id="w3">
                        <td>3</td>
                        <td>Pulmeron</td>
                        <td>300</td>
                        <td>3.000</td>
                        <td>{parseFloat(15/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$15.00</td>
                        <td>84%</td>
                        <td>${parseFloat((15/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>3</td>
                        <td>{parseFloat(((7*3)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((15/this.state.eternalPrice * 7)*this.state.eternalPrice)-21).toFixed(2)}</td>
                    </tr>
                    <tr id="w4">
                        <td>4</td>
                        <td>Ecryria</td>
                        <td>400</td>
                        <td>4.125</td>
                        <td>{parseFloat(20.63/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$20.63</td>
                        <td>82%</td>
                        <td>${parseFloat((20.63/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>4</td>
                        <td>{parseFloat(((7*4)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((20.63/this.state.eternalPrice * 7)*this.state.eternalPrice)-28).toFixed(2)}</td>
                    </tr>
                    <tr id="w5">
                        <td>5</td>
                        <td>Searus</td>
                        <td>500</td>
                        <td>5.250</td>
                        <td>{parseFloat(26.25/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$26.25</td>
                        <td>80%</td>
                        <td>${parseFloat((26.25/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>4</td>
                        <td>{parseFloat(((7*4)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((26.25/this.state.eternalPrice * 7)*this.state.eternalPrice)-28).toFixed(2)}</td>
                    </tr>
                    <tr id="w6">
                        <td>6</td>
                        <td>Gemia</td>
                        <td>600</td>
                        <td>6.500</td>
                        <td>{parseFloat(32.5/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$32.5</td>
                        <td>78%</td>
                        <td>${parseFloat((32.5/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>6</td>
                        <td>{parseFloat(((7*6)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((32.5/this.state.eternalPrice * 7)*this.state.eternalPrice)-42).toFixed(2)}</td>
                    </tr>
                    <tr id="w7">
                        <td>7</td>
                        <td>Malphus</td>
                        <td>700</td>
                        <td>7.750</td>
                        <td>{parseFloat(38.75/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$38.75</td>
                        <td>76%</td>
                        <td>${parseFloat((38.75/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>7</td>
                        <td>{parseFloat(((7*7)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((38.75/this.state.eternalPrice * 7)*this.state.eternalPrice)-49).toFixed(2)}</td>
                    </tr>
                    <tr id="w8">
                        <td>8</td>
                        <td>Neuter</td>
                        <td>800</td>
                        <td>9.000</td>
                        <td>{parseFloat(45.00/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$45.00</td>
                        <td>74%</td>
                        <td>${parseFloat((45.00/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>8</td>
                        <td>{parseFloat(((7*8)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((45.00/this.state.eternalPrice * 7)*this.state.eternalPrice)-56).toFixed(2)}</td>
                    </tr>
                    <tr id="w9">
                        <td>9</td>
                        <td>Grarvis 022</td>
                        <td>900</td>
                        <td>10.250</td>
                        <td>{parseFloat(51.25/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$51.25</td>
                        <td>72%</td>
                        <td>${parseFloat((51.25/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>9</td>
                        <td>{parseFloat(((7*9)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((51.25/this.state.eternalPrice * 7)*this.state.eternalPrice)-63).toFixed(2)}</td>
                    </tr>
                    <tr id="w10">
                        <td>10</td>
                        <td>Sorth 33A5</td>
                        <td>1000</td>
                        <td>11.625</td>
                        <td>{parseFloat(58.13/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$58.13</td>
                        <td>70%</td>
                        <td>${parseFloat((58.13/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>10</td>
                        <td>{parseFloat(((7*10)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((58.13/this.state.eternalPrice * 7)*this.state.eternalPrice)-70).toFixed(2)}</td>
                    </tr>
                    <tr id="w11">
                        <td>11</td>
                        <td>Dutrabos</td>
                        <td>1100</td>
                        <td>14.375</td>
                        <td>{parseFloat(71.88/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$71.88</td>
                        <td>68%</td>
                        <td>${parseFloat((71.88/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>11</td>
                        <td>{parseFloat(((7*11)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((71.88/this.state.eternalPrice * 7)*this.state.eternalPrice)-77).toFixed(2)}</td>
                    </tr>
                    <tr id="w12">
                        <td>12</td>
                        <td>Lustronides</td>
                        <td>1200</td>
                        <td>16.125</td>
                        <td>{parseFloat(80.63/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$80.63</td>
                        <td>66%</td>
                        <td>${parseFloat((80.63/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>12</td>
                        <td>{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((80.63/this.state.eternalPrice * 7)*this.state.eternalPrice)-84).toFixed(2)}</td>
                    </tr>
                    <tr id="w13">
                        <td>13</td>
                        <td>Zullosie</td>
                        <td>1300</td>
                        <td>18.000</td>
                        <td>{parseFloat(90.00/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$90.00</td>
                        <td>64%</td>
                        <td>${parseFloat((90.00/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>12</td>
                        <td>{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((90.00/this.state.eternalPrice * 7)*this.state.eternalPrice)-84).toFixed(2)}</td>
                    </tr>
                    <tr id="w14">
                        <td>14</td>
                        <td>Yimagua</td>
                        <td>1400</td>
                        <td>19.875</td>
                        <td>{parseFloat(99.38/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$99.38</td>
                        <td>62%</td>
                        <td>${parseFloat((99.38/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>13</td>
                        <td>{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((99.38/this.state.eternalPrice * 7)*this.state.eternalPrice)-91).toFixed(2)}</td>
                    </tr>
                    <tr id="w15">
                        <td>15</td>
                        <td>Haostea</td>
                        <td>1500</td>
                        <td>22.375</td>
                        <td>{parseFloat(111.88/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$111.88</td>
                        <td>60%</td>
                        <td>${parseFloat((111.88/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>13</td>
                        <td>{parseFloat(((7*12)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((111.88/this.state.eternalPrice * 7)*this.state.eternalPrice)-91).toFixed(2)}</td>
                    </tr>
                    <tr id="w16">
                        <td>16</td>
                        <td>Kongebro</td>
                        <td>1600</td>
                        <td>24.125</td>
                        <td>{parseFloat(120.63/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$120.63</td>
                        <td>58%</td>
                        <td>${parseFloat((120.63/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>14</td>
                        <td>{parseFloat(((7*14)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((120.63/this.state.eternalPrice * 7)*this.state.eternalPrice)-98).toFixed(2)}</td>
                    </tr>
                    <tr id="w17">
                        <td>17</td>
                        <td>Vuruturn</td>
                        <td>1700</td>
                        <td>26.500</td>
                        <td>{parseFloat(132.50/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$132.50</td>
                        <td>56%</td>
                        <td>${parseFloat((132.50/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>14</td>
                        <td>{parseFloat(((7*14)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((132.50/this.state.eternalPrice * 7)*this.state.eternalPrice)-98).toFixed(2)}</td>
                    </tr>
                    <tr id="w18">
                        <td>18</td>
                        <td>Droxuyama</td>
                        <td>1800</td>
                        <td>28.875</td>
                        <td>{parseFloat(144.38/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$144.38</td>
                        <td>54%</td>
                        <td>${parseFloat((144.38/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>15</td>
                        <td>{parseFloat(((7*15)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((144.38/this.state.eternalPrice * 7)*this.state.eternalPrice)-105).toFixed(2)}</td>
                    </tr>
                    <tr id="w19">
                        <td>19</td>
                        <td>Miuq I11</td>
                        <td>1900</td>
                        <td>31.375</td>
                        <td>{parseFloat(156.88/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$156.88</td>
                        <td>52%</td>
                        <td>${parseFloat((156.88/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>15</td>
                        <td>{parseFloat(((7*15)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((156.88/this.state.eternalPrice * 7)*this.state.eternalPrice)-105).toFixed(2)}</td>
                    </tr>
                    <tr id="w20">
                        <td>20</td>
                        <td>Zapus 5M0</td>
                        <td>2000</td>
                        <td>34.000</td>
                        <td>{parseFloat(170.00/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$170.00</td>
                        <td>50%</td>
                        <td>${parseFloat((170.00/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>16</td>
                        <td>{parseFloat(((7*16)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((170.00/this.state.eternalPrice * 7)*this.state.eternalPrice)-112).toFixed(2)}</td>
                    </tr>
                    <tr id="w21">
                        <td>21</td>
                        <td>Begelia</td>
                        <td>2100</td>
                        <td>44.500</td>
                        <td>{parseFloat(222.50/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$222.50</td>
                        <td>50%</td>
                        <td>${parseFloat((222.50/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>17</td>
                        <td>{parseFloat(((7*17)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((222.50/this.state.eternalPrice * 7)*this.state.eternalPrice)-119).toFixed(2)}</td>
                    </tr>
                    <tr id="w22">
                        <td>22</td>
                        <td>Gochimars</td>
                        <td>2200</td>
                        <td>48.500</td>
                        <td>{parseFloat(242.50/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$242.50</td>
                        <td>50%</td>
                        <td>${parseFloat((242.50/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>18</td>
                        <td>{parseFloat(((7*18)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((242.50/this.state.eternalPrice * 7)*this.state.eternalPrice)-126).toFixed(2)}</td>
                    </tr>
                    <tr id="w23">
                        <td>23</td>
                        <td>Konvides</td>
                        <td>2300</td>
                        <td>52.750</td>
                        <td>{parseFloat(263.75/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$263.75</td>
                        <td>50%</td>
                        <td>${parseFloat((263.75/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>19</td>
                        <td>{parseFloat(((7*19)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((263.75/this.state.eternalPrice * 7)*this.state.eternalPrice)-133).toFixed(2)}</td>
                    </tr>
                    <tr id="w24">
                        <td>24</td>
                        <td>Donvillon</td>
                        <td>2400</td>
                        <td>57.250</td>
                        <td>{parseFloat(286.25/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$286.25</td>
                        <td>50%</td>
                        <td>${parseFloat((286.25/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>20</td>
                        <td>{parseFloat(((7*20)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((286.25/this.state.eternalPrice * 7)*this.state.eternalPrice)-140).toFixed(2)}</td>
                    </tr>
                    <tr id="w25">
                        <td>25</td>
                        <td>Ania</td>
                        <td>2500</td>
                        <td>62.000</td>
                        <td>{parseFloat(310.00/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$310.00</td>
                        <td>50%</td>
                        <td>${parseFloat((310.00/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>21</td>
                        <td>{parseFloat(((7*21)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((310.00/this.state.eternalPrice * 7)*this.state.eternalPrice)-147).toFixed(2)}</td>
                    </tr>
                    <tr id="w26">
                        <td>26</td>
                        <td>Aenerth</td>
                        <td>2600</td>
                        <td>67.125</td>
                        <td>{parseFloat(335.63/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$335.63</td>
                        <td>50%</td>
                        <td>${parseFloat((335.63/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>22</td>
                        <td>{parseFloat(((7*22)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((335.63/this.state.eternalPrice * 7)*this.state.eternalPrice)-154).toFixed(2)}</td>
                    </tr>
                    <tr id="w27">
                        <td>27</td>
                        <td>Tachiron</td>
                        <td>2700</td>
                        <td>72.500</td>
                        <td>{parseFloat(362.50/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$362.50</td>
                        <td>50%</td>
                        <td>${parseFloat((362.50/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>23</td>
                        <td>{parseFloat(((7*23)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((362.50/this.state.eternalPrice * 7)*this.state.eternalPrice)-161).toFixed(2)}</td>
                    </tr>
                    <tr id="w28">
                        <td>28</td>
                        <td>Cichurilia</td>
                        <td>2800</td>
                        <td>78.250</td>
                        <td>{parseFloat(391.25/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$391.25</td>
                        <td>50%</td>
                        <td>${parseFloat((391.25/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>24</td>
                        <td>{parseFloat(((7*24)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((391.25/this.state.eternalPrice * 7)*this.state.eternalPrice)-168).toFixed(2)}</td>
                    </tr>
                    <tr id="w29">
                        <td>29</td>
                        <td>Gagua 07</td>
                        <td>2900</td>
                        <td>84.250</td>
                        <td>{parseFloat(421.25/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$421.25</td>
                        <td>50%</td>
                        <td>${parseFloat((421.25/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>25</td>
                        <td>{parseFloat(((7*25)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((421.25/this.state.eternalPrice * 7)*this.state.eternalPrice)-175).toFixed(2)}</td>
                    </tr>
                    <tr id="w30">
                        <td>30</td>
                        <td>Sector G</td>
                        <td>3000</td>
                        <td>90.750</td>
                        <td>{parseFloat(453.75/this.state.eternalPrice).toFixed(3)} ETL</td>
                        <td>$453.75</td>
                        <td>50%</td>
                        <td>${parseFloat((453.75/this.state.eternalPrice * 7)*this.state.eternalPrice).toFixed(2)}</td>
                        <td>26</td>
                        <td>{parseFloat(((7*26)/this.state.eternalPrice)).toFixed(3)} ETL</td>
                        <td>${parseFloat(((453.75/this.state.eternalPrice * 7)*this.state.eternalPrice)-182).toFixed(2)}</td>
                    </tr>

                    </table>

            </div>
        )
    }
}

export default GetEternal
