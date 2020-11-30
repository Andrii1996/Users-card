import React from 'react';
import { getUsers } from './api';
import './App.css';
import { UserCards } from './components/UserCards/UserCards';
import { NewUser } from './components/NewUser/NewUser';
import { FilteredUsers } from './components/FilteredUsers/FilteredUsers';
import 'semantic-ui-css/semantic.min.css';

export class App extends React.Component {
  state = {
    users: [],
    value: '',
    count: 1,
  }

  async componentDidMount() {
    const users = await getUsers(10);
    this.setState({ users: users.results });
  }

  handleClick = async () => {
    const { count } = this.state;

    if (count < 1) {
      this.setState({
        count: 1,
      });
    
      return;
    }
    const newUser = await getUsers(count);

    this.setState(prevState => ({
      users: [...prevState.users, ...newUser.results],
      count: 1,
    }));
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { users, value, count } = this.state;

    return (
      <div className="App">
        <div className="title">
          Users count:{' ' + users.length}
        </div>
        <div>
          <NewUser
            handleClick={this.handleClick}
            handleChange={this.handleChange}
            count={count}
          />
          <FilteredUsers
            value={value}
            handleChange={this.handleChange}
          />
        </div>
        <UserCards
          users={users}
          value={value}  
        />
      </div>
    );
  }
}
