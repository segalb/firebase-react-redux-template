import React from 'react'
import {connect} from 'react-redux'
import api from './api'

class App extends React.Component {
    //be able to render list with delete button next to items
    //have a button to create new lists
    addItem(){

    }
    updateItem(itemKey){

    }
    deleteItem(itemKey){

    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state
    }
}

export default connect(mapStateToProps)(App)