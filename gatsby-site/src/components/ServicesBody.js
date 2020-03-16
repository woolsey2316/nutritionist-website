import React, { Component } from 'react'
import Consulting from '../components/consulting'
import Lesson from '../components/consulting'
import Style from '../scss/services.module.scss'
import Alison from '../components/ImageComponents/Alison'
import Breakfast from '../components/ImageComponents/Breakfast'
import Juice from '../components/ImageComponents/Juice'
import GlutenFree from '../components/ImageComponents/GlutenFree'
import Kids from '../components/ImageComponents/Kids'
import Tomato from '../components/ImageComponents/Tomato'
import Cooking from '../components/ImageComponents/Cooking'
import Juices from '../components/ImageComponents/Juices'
import FruitCollection from '../components/ImageComponents/FruitCollection'

export default class ServicesBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consulting: true,
            lessons: false
        }
        this.showConsulting = this.showConsulting.bind(this)
        this.showLessons = this.showLessons.bind(this)
    }
    showConsulting() {
        this.setState({consulting: true, lessons: false});
        
    }
    showLessons() {
        this.setState({consulting: false, lessons: true});
        
    }
    render() {
        return (
        <div className={Style.mainContainer}>
            <button autoFocus className={Style.button} type="button" onClick={this.showConsulting}>Consulting</button>
            <button className={Style.button} type="button" onClick={this.showLessons}>Lessons</button>
            <div className={Style.break} />
            {this.state.consulting && <Consulting img={<Juice/>} time="1hr" cost="$100" heading ="Personal Nutrition Counselling"/>}
            {this.state.consulting && <Consulting img={<Kids/>} time="1hr 30m" cost="$100" heading ="Family Nutrition Counselling"/>}
            {this.state.consulting && <Consulting img={<Tomato/>} time="1hr" cost="$70" heading ="Sustainable Weight Management"/>}
            <div className={Style.break}/>
            {this.state.consulting && <Consulting img={<GlutenFree/>} time="1hr" cost="$80" heading ="Food Sensitivities"/>}
            {this.state.consulting && <Consulting img={<Alison/>} time="1hr" cost="$200" heading ="Initial Nutrition Assesment"/>}
            {this.state.consulting && <Consulting img={<Breakfast/>} time="1hr" cost="$50" heading ="Improving Lifestyle Workshop"/>}
            {this.state.lessons && <Lesson img={<Cooking/>} time="1hr" cost="$90" heading ="Healthy Cooking Classes"/>}
            {this.state.lessons && <Lesson img={<Juices/>} time="1hr" cost="$90" heading ="Changing Habits"/>}
            {this.state.lessons && <Lesson img={<FruitCollection/>} time="1hr" cost="$100" heading ="Grocery Tours"/>}
        </div>
        )
    }
}