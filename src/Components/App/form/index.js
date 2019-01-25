import React from "react";

class Form extends React.Component {
 
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onAliasChange = this.onAliasChange.bind(this)
        this.onTeamChange = this.onTeamChange.bind(this)

        this.state = {
            name : props.name,
            alias : props.alias,
            team : props.team,
        }
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.formSubmitCallback(
            this.state.name,
            this.state.alias,
            this.state.team
        )
        this.props.history.push('/list')
    }

    onNameChange(event) {
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    onAliasChange(event) {
        console.log(event.target.value)
        this.setState({alias: event.target.value})
    }

    onTeamChange(event) {
        console.log(event.target.value)
        this.setState({team: event.target.value})
    }

    render() {
        return (
                <form onSubmit= {this.onFormSubmit}> 
                    <h3> Details </h3>
                    <label>
                        Name:
                        <input type="text"  onChange = {this.onNameChange} />
                    </label> <br></br>
                    <label>              
                        Alias
                        <input type="text" name="alias" onChange = {this.onAliasChange} /> 
                    </label><br></br>
                    <label>
                        Team
                        <input type="text" name="team" onChange = {this.onTeamChange}/><br></br>
                    </label>
                    <button>Submit</button>
                </form> 
                
            

        )
    }
}

export default Form;