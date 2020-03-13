import React, { Component } from 'react'
import Consulting from '../components/consulting'
import Lesson from '../components/consulting'
import Style from '../scss/services.module.scss'

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
            <button className={Style.button} type="button" onClick={this.showConsulting}>Consulting</button>
            <button className={Style.button} type="button" onClick={this.showLessons}>Lessons</button>
            <div className={Style.break} />
            {this.state.consulting && <Consulting time="1hr" cost="$100" heading ="Personal Nutrition Counselling"/>}
            {this.state.consulting && <Consulting time="1hr 30m" cost="$100" heading ="Family Nutrition Counselling"/>}
            {this.state.consulting && <Consulting time="1hr" cost="$70" heading ="Sustainable Weight Management"/>}
            <div className={Style.break}/>
            {this.state.consulting && <Consulting time="1hr" cost="$80" heading ="Food Sensitivities"/>}
            {this.state.consulting && <Consulting time="1hr" cost="$200" heading ="Initial Nutrition Asesment"/>}
            {this.state.consulting && <Consulting time="1hr" cost="$50" heading ="Improving Lifestyle Workshop"/>}
            {this.state.lessons && <Lesson time="1hr" cost="$90" heading ="Healthy Cooking Classes"/>}
            {this.state.lessons && <Lesson time="1hr" cost="$90" heading ="Changing Habits"/>}
            {this.state.lessons && <Lesson time="1hr" cost="$100" heading ="Grocery Tours"/>}
        </div>
        )
    }
}