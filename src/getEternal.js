import React, { Component } from 'react'
import './App.css';
import './table.css';


class GetEternal extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            mp: 0,
            workers: 0,
            eternalPrice: 0,
            updateTimer: 0,
            minepower: [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000],
            planets: ["Odrocury","Thabbiter","Pulmeron","Ecryria","Searus","Gemia","Malphus","Neuter","Grarvis 022","Sorth 33A5","Dutrabos","Lustronides","Zullosie","Yimagua","Haostea","Kongebro","Vuruturn","Droxuyama","Miuq I11","Zapus 5M0","Begelia","Gochimars","Konvides","Donvillon","Ania","Aenerth","Tachiron","Cichurilia","Gagua 07","Sector G"],
            //oracle_adjustment: [1,2,3,4.125,5.25,6.5,7.75,9,10.25,11.625,14.375,16.125,18,19.875,22.375,24.125,26.5,28.875,31.375,34,44.5,48.5,52.75,57.25,62,67.125,72.5,78.25,84.25,90.75],
            oracle_adjustment: [1.000,2.019,3.078,4.176,5.315,6.516,7.754,9.033,10.372,11.751,14.429,16.208,18.085,20.083,22.163,24.341,26.659,29.076,31.614,34.292,45.863,49.939,54.016,59.112,64.149,69.304,74.400,80.336,86.529,93.765],
            worker_count: [2,2,3,4,4,6,7,8,9,10,11,12,12,13,13,14,14,15,15,16,17,18,19,20,21,22,23,24,25,26],
            success_chance: [0.88,0.86,0.84,0.82,0.80,0.78,0.76,0.74,0.72,0.70,0.68,0.66,0.64,0.62,0.60,0.58,0.56,0.54,0.52,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50,0.50],
            visibilityNormal: "",
            visibilityFleet:"d-none",
            inputVisFleet: "d-none",

            d_success_chance: [0.85,0.83,0.81,0.79,0.77,0.75,0.73,0.71,0.69,0.67,0.6,0.58,0.56,0.54,0.52,0.50,0.48,0.46,0.44,0.42,0.41,0.41,0.41,0.41,0.41,0.39,0.39,0.39,0.39,0.39],
            c_success_chance: [0.88,0.86,0.84,0.82,0.8,0.78,0.76,0.74,0.72,0.70,0.65,0.63,0.61,0.59,0.57,0.55,0.53,0.51,0.49,0.47,0.43,0.43,0.43,0.43,0.43,0.40,0.40,0.40,0.40,0.40],
            b_success_chance: [0.91,0.89,0.87,0.85,0.83,0.81,0.79,0.77,0.75,0.73,0.67,0.65,0.63,0.61,0.59,0.57,0.55,0.53,0.51,0.49,0.47,0.47,0.47,0.47,0.47,0.45,0.45,0.45,0.45,0.45],
            a_success_chance: [0.93,0.91,0.89,0.87,0.85,0.83,0.81,0.79,0.77,0.75,0.71,0.69,0.67,0.65,0.63,0.61,0.59,0.57,0.55,0.53,0.52,0.52,0.52,0.52,0.52,0.50,0.50,0.50,0.50,0.50],
            s_success_chance: [0.97,0.95,0.93,0.91,0.89,0.87,0.85,0.83,0.81,0.79,0.74,0.72,0.70,0.68,0.66,0.64,0.62,0.60,0.58,0.56,0.55,0.55,0.55,0.55,0.55,0.53,0.53,0.53,0.53,0.53],
            fleet_rank: "",
            fleet_level: 0,
            rank_reward: [1,1.01,1.02,1.03,1.04,1.05,1.1,1.12,1.14,1.16,1.20,1.205,1.21,1.215,1.22,1.225,1.25,1.255,1.26,1.265,1.27,1.3,1.305,1.31,1.315,1.35],
            sheetInfo: "d-none",
            visInfo: "",
            visFleetRank: "d-none",
            visFleetLevel: "d-none",
            btnHighlightInfo: "btn btn-custom mobile-margin",
            btnHighlightFleet: "btn stretch mobile-margin",
            btnHighlightCMInfo: "btn btn-custom text-size-14",
            btnHighlightFleetRank: "btn stretch text-size-14",
            btnHighlightFleetLevel: "btn stretch text-size-14",
            fuel: [21,43,66,90,114,140,167,195,224,254,311,350,390,434,479,526,576,628,683,741,950,1000,1050,1100,1400,1500,1600,1750,1900,2100],
        }
        
        this.setMP = this.setMP.bind(this);
        this.setWorkers = this.setWorkers.bind(this);
        this.setFleetLevel = this.setFleetLevel.bind(this);
        this.setFleetRank = this.setFleetRank.bind(this);
    }

    async loadData(){
        const url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptomines-eternal&vs_currencies=usd"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({eternalPrice: data["cryptomines-eternal"]["usd"]})
    }

    async componentDidMount() {
        this.loadData()
        this.updateTimer = setInterval(() => this.loadData(), 2000);
    }

    async componentWillUnmount() {
        clearInterval(this.updateTimer);
    }


    // Normal

    getMinePower(i){
        return this.state.minepower[i]
    }
    getMineUSD(i){
        return parseFloat(4.0 * this.state.oracle_adjustment[i]).toFixed(2)
    }
    
    setMP(event){
        this.setState({mp : event.target.value})
    }

    setWorkers(event){
        this.setState({workers: event.target.value})
    }

    setFleetRank(event){
        this.setState({fleet_rank: event.target.value})
    }
    
    setFleetLevel(event){
        this.setState({fleet_level: event.target.value})
    }
    btnVisNrm = () => {
        this.setState({sheetInfo: "d-none" ,visibilityNormal: "mb-4", visibilityFleet: "d-none", inputVisFleet: "d-none", btnHighlightInfo: "btn btn-custom mobile-margin", btnHighlightFleet: "btn stretch mobile-margin"})
    }
    btnFleets = () => {
        this.setState({sheetInfo: "mt-2 text-right-special" ,visibilityNormal: "d-none", visibilityFleet: "overflow", inputVisFleet: "row mt-2", btnHighlightInfo: "btn stretch mobile-margin", btnHighlightFleet: "btn btn-custom mobile-margin"})
        alert("Disclaimer: \r\nThis is a Community Project coded solely by me Jucci#0007, so any help from the community to solve equations would be really appreciated\r\n\r\nAll calculator values are approximation. Do not take them literally.\r\n\r\nSpecial Thanks to: deejaygeekout#1720 and especially to: frifster#1185 (Master Papink) for agreeing to my experiment on clarifying the white paper.\r\n\r\nI made this to help everyone.\r\n\r\nBefore any update to the site happens, I verify it first with a Mod. Goodluck!");
    }

    btnFleetInfo = () => {
        this.setState({visInfo: "mb-4", visFleetLevel: "d-none", visFleetRank: "d-none", btnHighlightCMInfo: "btn btn-custom text-size-14", btnHighlightFleetRank:"btn stretch text-size-14", btnHighlightFleetLevel:"btn stretch text-size-14"})
    }
    btnFleetRanks = () => {
        this.setState({visInfo: "d-none", visFleetLevel: "d-none", visFleetRank: "mb-4", btnHighlightCMInfo: "btn stretch text-size-14", btnHighlightFleetRank:"btn btn-custom text-size-14", btnHighlightFleetLevel:"btn stretch text-size-14"})
    }
    btnFleetLevels = () => {
        this.setState({visInfo: "d-none", visFleetLevel: "mb-4", visFleetRank: "d-none", btnHighlightCMInfo: "btn stretch text-size-14", btnHighlightFleetRank:"btn stretch text-size-14", btnHighlightFleetLevel:"btn btn-custom text-size-14"})
    }


    //(Who called in the) Fleet

    getFleetMineETL(i){
        return parseFloat((this.getFleetMineUSD(i)/this.state.eternalPrice)).toFixed(4)
    }

    getFleetMineUSD(i){
        return parseFloat( (this.getMineUSD(i) * (this.state.rank_reward[this.state.fleet_level]))).toFixed(2)
    }

    getFleetSRvsUSD(i){
        if (this.state.fleet_rank === ""){
            return 'Enter Fleet Rank'
        } 
        else if (isNaN(parseFloat(this.getFleetMineUSD(i)*7 * this.getFleetSuccessChance(i) / 100).toFixed(2))) {
            return 'Not Enough MP'
        }
        else {
            return '$ '+parseFloat(this.getFleetMineUSD(i)*7 * this.getFleetSuccessChance(i) / 100).toFixed(2)
        }
        
    }

    getFleetContractCost(){
        return parseFloat(((7*this.state.workers)/this.state.eternalPrice)).toFixed(4)
    }

    getFleetNet(i){
        if (this.state.fleet_rank === ""){
            return 'Enter Fleet Rank'
        }
        else if (isNaN(parseFloat(((this.getFleetMineUSD(i)*7) * (this.getFleetSuccessChance(i)/100)) - (this.state.workers*7) ).toFixed(2))){
            return 'Not Enough MP'
        } else {
            return '$ '+parseFloat(((this.getFleetMineUSD(i)*7) * (this.getFleetSuccessChance(i)/100)) - (this.state.workers*7) ).toFixed(2)
        }
    }
    getFleetNetFuel(i){
        if (this.state.fleet_rank === ""){
            return 'Enter Fleet Rank'
        }
        else if (isNaN(parseFloat(((this.getFleetMineUSD(i)*7) * (this.getFleetSuccessChance(i)/100)) - (this.state.workers*7) - (this.getFuel(i)*7) ).toFixed(2))){
            return 'Not Enough MP'
        }
        else {
            return '$ '+parseFloat(((this.getFleetMineUSD(i)*7) * (this.getFleetSuccessChance(i)/100)) - (this.state.workers*7) - (this.getFuel(i)*7) ).toFixed(2)
        }
        
    }
    getFuel(i){
        return parseFloat((this.state.fuel[i]/100)).toFixed(2)
    }
    // getFuel(i){
    //     return parseFloat(this.getMineUSD(i) * this.state.rank_reward[7] * 0.05).toFixed(2)
    // }

    getFleetSuccessChance(i){
        if (this.state.fleet_rank === "D" || this.state.fleet_rank === "d" ) {
            return this.getFleetDSR(i)
        } else if (this.state.fleet_rank === "C" || this.state.fleet_rank === "c" ) {
            return this.getFleetCSR(i)
        } else if (this.state.fleet_rank === "B" || this.state.fleet_rank === "b" ) {
            return this.getFleetBSR(i)
        } else if (this.state.fleet_rank === "A" || this.state.fleet_rank === "a" ){
            return this.getFleetASR(i)
        } else if (this.state.fleet_rank === "S" || this.state.fleet_rank === "s" ){
            return this.getFleetSSR(i)
        }   
    }
    getFleetSuccessChanceM(i){
        if (this.state.fleet_rank === ""){
            return 'Enter Fleet Rank'
        }
        else if (this.state.fleet_rank === "D" || this.state.fleet_rank === "d") {
            return this.getFleetDSRM(i)
        } else if (this.state.fleet_rank === "C" || this.state.fleet_rank === "c" ) {
            return this.getFleetCSRM(i)
        } else if (this.state.fleet_rank === "B" || this.state.fleet_rank === "b" ) {
            return this.getFleetBSRM(i)
        } else if (this.state.fleet_rank === "A" || this.state.fleet_rank === "a" ){
            return this.getFleetASRM(i)
        } else if (this.state.fleet_rank === "S" || this.state.fleet_rank === "s" ){
            return this.getFleetSSRM(i)
        }   
    }

    getFleetDSR(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.d_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97
                } else {
                    return answer
                }
            }
            else if (answer > 88){
                return 88
            } else if ( answer < 39 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.d_success_chance[i] * 100).toFixed(0)
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.d_success_chance[i] * 100).toFixed(0)
            }
        }
    }
    getFleetDSRM(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.d_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97+'%'
                } else {
                    return answer+'%'
                }
            }
            else if (answer > 88){
                return 88+'%'
            } else if ( answer < 39 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer+'%'
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.d_success_chance[i] * 100).toFixed(0)+'%'
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.d_success_chance[i] * 100).toFixed(0)+'%'
            }
        }
    }

    getFleetCSR(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.c_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97
                } else {
                    return answer
                }
            }
            else if (answer >= 88){
                return 88
            } else if ( answer < 40 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.c_success_chance[i] * 100).toFixed(0)
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.c_success_chance[i] * 100).toFixed(0)
            }
        }
    }
    getFleetCSRM(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.c_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97+'%'
                } else {
                    return answer+'%'
                }
            }
            else if (answer >= 88){
                return 88+'%'
            } else if ( answer < 40 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer+'%'
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.c_success_chance[i] * 100).toFixed(0)+'%'
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.c_success_chance[i] * 100).toFixed(0)+'%'
            }
        }
    }

    getFleetBSR(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.b_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97
                } else {
                    return answer
                }
            }
            else if (answer > 88){
                return 88
            } else if ( answer < 45 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer
            }

        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.b_success_chance[i] * 100).toFixed(0)
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.b_success_chance[i] * 100).toFixed(0)
            }
        }
    }
    getFleetBSRM(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.b_success_chance[i] * 100 + divi).toFixed(0);
            if (i < 10){
                if (answer >= 97){
                return 97+'%'
                } else {
                    return answer+'%'
                }
            }
            else if (answer > 88){
                return 88+'%'
            } else if ( answer < 45 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer+'%'
            }

        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.b_success_chance[i] * 100).toFixed(0)+'%'
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.b_success_chance[i] * 100).toFixed(0)+'%'
            }
        }
    }

    getFleetASR(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.a_success_chance[i] * 100 + divi).toFixed(0);
            if (answer >= 97 && i < 17){
                return 97
            }  else if (answer >= 90 && i > 15 && i < 25){
                if (i===17) {
                    return 95
                } else if (i===18){
                    return 93
                } else if (i===19){
                    return 91
                } else {
                    return 90
                }
            } else if (answer >= 88 && i > 24 && i < 30){
                return 88
            } else if ( answer < 50 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer
            }
        } 
            else if (this.state.mp < 1500) {
                if (this.state.mp < 100){
                    return parseFloat(this.state.a_success_chance[i] * 100).toFixed(0)
                } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                    return 'Not Enough MP'
                }
                else {
                    return parseFloat(this.state.a_success_chance[i] * 100).toFixed(0)
                }
            }
    }
    getFleetASRM(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.a_success_chance[i] * 100 + divi).toFixed(0);
            if (answer >= 97 && i < 17){
                return 97+'%'
            }  else if (answer >= 90 && i > 15 && i < 25){
                if (i===17) {
                    return 95+'%'
                } else if (i===18){
                    return 93+'%'
                } else if (i===19){
                    return 91+'%'
                } else {
                    return 90+'%'
                }
            } else if (answer >= 88 && i > 24 && i < 30){
                return 88+'%'
            } else if ( answer < 50 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer+'%'
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.a_success_chance[i] * 100).toFixed(0)+'%'
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.a_success_chance[i] * 100).toFixed(0)+'%'
            }
        }
    }
    getFleetSSR(i){
        if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.s_success_chance[i] * 100 + divi).toFixed(0);
            if (answer >= 91 && i < 20){
                return 97
            }  else if (answer >= 93 && i > 19 && i < 25){
                return 93
            } else if (answer >= 91 && i > 24 && i < 30){
                return 91
            } else if ( answer < 53 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.s_success_chance[i] * 100).toFixed(0)
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.s_success_chance[i] * 100).toFixed(0)
            }
        }
    }
    getFleetSSRM(i){
    if (this.state.mp > 1499) {
            const diff = this.state.mp - this.getMinePower(i);
            const divi = Math.floor(diff/50);
            const answer = parseFloat(this.state.s_success_chance[i] * 100 + divi).toFixed(0);
            if (answer >= 91 && i < 20){
                return 97+'%'
            }  else if (answer >= 93 && i > 19 && i < 25){
                return 93+'%'
            } else if (answer >= 91 && i > 24 && i < 30){
                return 91+'%'
            } else if ( answer < 53 || (Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            } else {
                return answer+'%'
            }
        } else if (this.state.mp < 1500) {
            if (this.state.mp < 100){
                return parseFloat(this.state.s_success_chance[i] * 100).toFixed(0)+'%'
            } else if ((Math.floor(this.state.mp/100)*100) < this.state.minepower[i]){
                return 'Not Enough MP'
            }
            else {
                return parseFloat(this.state.s_success_chance[i] * 100).toFixed(0)+'%'
            }
        }
    }

    render(){
        return(
            <div class="container-fixed px-3">
                <p class="text-size-25">Site has been permanently moved to: <a class="text-size-25" href="https://cmsheet.info/" rel="noreferrer" target="_blank">cmsheet.info</a></p>
            </div>
        )
    }
}
export default GetEternal
