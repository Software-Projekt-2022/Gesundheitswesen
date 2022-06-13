import * as types from '../actions/auth.js'
import { useHistory } from 'react-router'


const history = useHistory();

const initialState = {
    userName: "",
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {

}