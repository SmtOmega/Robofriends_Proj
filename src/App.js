import React from "react"
import CardList from "./component/CardList"
import {Search} from "./component/SearchField"

class App extends React.Component {
  constructor(props){
  super(props)
  this.state= {
      robofriends: [],
      searchField: ''
  }
}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => 
        {return res.json()})
    .then(
      user => {
        this.setState(
            { robofriends: user }
          )
      }
    )
  }
onSearchChange = (event) =>{
    this.setState(
      { searchField: event.target.value }
    )
}
  render(){
      const {robofriends, searchField} = this.state
      const filteredRobot = robofriends.filter(robot =>{
          return robot.name.toLowerCase().includes(searchField.toLowerCase())})
    if(robofriends.length === 0){
        return (
            <div className="App">
                <h1>Loading Data....</h1>
            </div>
        )
    }
    else{
        return(
            <div className="App">
                <div className="nav">
                <   h1>Robo Friends</h1>
                    <Search searchChange={this.onSearchChange}/>
                </div>
                <CardList robots={filteredRobot}/>

            </div>
        )
    }

  }
}
export default App