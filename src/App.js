import React from 'react';
import { getUsers } from './api';
import './App.css';
import { UserCards } from './components/UserCards/UserCards';
import { NewUser } from './components/NewUser/NewUser';
import { FilteredUsers } from './components/FilteredUsers/FilteredUsers';

export class App extends React.Component {
  state = {
    users: [],
    search: '',
    count: '',
  }

  async componentDidMount() {
    const users = await getUsers(10);
    this.setState({ users: users.results });
  }

  handleClick = async (count) => {
    const newUser = await getUsers(count);

    this.setState(prevState => ({
      users: [...prevState.users, ...newUser.results],
    }));
  }

  handleChange = (event) => {
    // const { search, count } = this.state;
    // console.log(count, search);

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { users, search, count } = this.state;

    return (
      <div className="App">
        <div>
          <NewUser
            handleClick={this.handleClick}
            onChange={this.onChange}
            count={count}
          />
          <FilteredUsers
            value={search}
            handleChange={this.handleChange}
          />
        </div>
        <UserCards users={users} />
      </div>
    );
  }
}
