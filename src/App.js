import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";


const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({users: res.data.data})
      console.log(res.data.data)
    })

    this.state = {
        users : [],
    }
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
}
  render () {
    return (<div>
        <Header title="list user" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
      </div>)
  }

  deleteUser (id) {
    this.setState({
      // добавляем все id , кроме того , который совпадает из параметров
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser (user) {
    // получили всех пользв, нашли нужного пользв и заменили
    console.log(user)
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    // очистили весь наш списокб после вызвали функ установили новый список
    this.setState({users: []}, ()=> {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) {
    //console.log(user)
    const id = this.state.users.length + 1;
    // меняем список юзер , к текущему списку добавляем новый обьект из параметров
    this.setState({users: [...this.state.users, {id, ...user}] })
  }
}

export default App;

