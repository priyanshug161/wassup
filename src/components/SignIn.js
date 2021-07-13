import React from 'react'
import {Button} from '@material-ui/core'
import {auth} from '../firebase.js'
import firebase from 'firebase'

function SignIn() {
    function SignInwithGoogle(){
        const provider= new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <Button onClick={SignInwithGoogle}>Sign In with Google</Button>
        </div>
    )
}

export default SignIn
