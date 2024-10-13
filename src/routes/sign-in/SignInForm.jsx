import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

function SignInForm() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(user);
    }

    // async function logGoogleUser() {
    //     const { user } = await signInWithGooglePopup();
    //     createUserDocumentFromAuth(user)
    // }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    );
}

export default SignInForm;