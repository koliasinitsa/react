import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor (props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            age: 1,
            isHappy: false
        }
    }
    render () {
      return (
        <form ref={(el) =>  this.myForm = el}>
            <input placeholder="name" onChange={(e) => this.setState({first_name: e.target.value})}/>
            <input placeholder="lastname" onChange={(e) => this.setState({last_name: e.target.value})}/>
            <textarea placeholder="email" onChange={(e) => this.setState({email: e.target.value})}></textarea>
            <input placeholder="age" onChange={(e) => this.setState({age: e.target.value})}/>
            <label htmlFor="isHappy">happy???</label>
            <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
            <button type="button" onClick={() => {
                this.myForm.reset()
                this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                }
                if(this.props.user) 
                    this.userAdd.id = this.props.user.id
                this.props.onAdd(this.userAdd)
            }
            }>Add</button>
        </form>
      )
    }

}

export default AddUser;