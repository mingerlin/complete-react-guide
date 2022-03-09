import { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class UserFinder extends Component {
  // this is another way to use context
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    // Send http requests
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProp, prevState) {
    // only rerender the component when prev state is different than the curr state
    // this is to prevent infinity loop
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  // this is one way to useContext
  // render() {
  //   return (
  //     <Fragment>
  //       <UsersContext.Consumer>
  //         <div className={classes.finder}>
  //           <input
  //             type="search"
  //             onChange={this.searchChangeHandler.bind(this)}
  //           />
  //         </div>
  //         <Users users={this.state.filteredUsers} />
  //       </UsersContext.Consumer>
  //     </Fragment>
  //   );
  // }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
