import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import styles from './Orders.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
        empty: false
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                if (response.data === null) {
                    this.setState({loading: false, empty: true});
                } else {
                    const fetchedOrders = [];
                    for (let key in response.data) {
                        fetchedOrders.push({...response.data[key], id: key});
                    }
                    this.setState({loading: false, orders: fetchedOrders});
                }
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let orders = this.state.orders.map(order => (
            <Order
                ingredients={order.ingredients}
                price={order.price}
                key={order.id}/>
        ));

        if (this.state.loading) {
            orders = <Spinner/>;
        }

        if (this.state.empty) {
            orders = <p className={styles["orders-error"]}>The database is empty!</p>;
        }

        return (
            <Aux>
                {orders}
            </Aux>
        );
    }
}

export default withErrorHandler(Orders, axios);