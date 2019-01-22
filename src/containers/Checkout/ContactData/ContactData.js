import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import styles from './ContactData.module.scss';
import axios from '../../../axios-orders'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'John Smith',
                address: {
                    street: 'Smithstreet 21',
                    zipCode: '78532',
                    country: 'England'
                },
                email: 'john-smith@example.com'
            },
            deliveryMethod: 'fastest'
        };

        console.log(order);

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render() {
        let form = (
            <Aux>
                <h4>Enter your contact data:</h4>
                <form>
                    <input type="text" name='name' placeholder='Your Name'/>
                    <input type="email" name='email' placeholder='Your Email'/>
                    <input type="text" name='street' placeholder='Street'/>
                    <input type="text" name='postal' placeholder='Postal Code'/>
                    <Button btnType='success' clicked={this.orderHandler}>ORDER</Button>
                </form>
            </Aux>);
        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className={styles["contact-data"]}>
                {form}
            </div>
        );
    }
}

export default ContactData;