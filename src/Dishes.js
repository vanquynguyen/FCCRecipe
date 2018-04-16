import React from 'react';
import Dish from './Dish';

class Dishes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: {}
        }
    }

    componentDidMount() {
        var dishes = this.props.dishes
        this.setState({
            dishes: dishes
        })
    }

    deleteDish(dishName){
        let dishes = this.state.dishes.slice();
        dishes.forEach((dish, index) => {
            if (dish.dishName === dishName) {
                dishes.splice(index, 1);
            }
        });
        this.setState({
            dishes: dishes
        });
    }

    render() {
        var data = this.state.dishes
        let dishes
        if(data.length > 0) {
            dishes = data.map((dish, index)=> {
               return <Dish key={index} dishName={dish.dishName} ingredients={dish.ingredients} deleteDish={this.deleteDish.bind(this)} />
            })
        }

        return(
            <div className="row">{dishes}</div>
        );
    }
}

export default Dishes;
