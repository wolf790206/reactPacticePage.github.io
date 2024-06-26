import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBpQ5Xq3f26kx8hjFQjaWj5MdjQDBRkAO4',
	authDomain: 'crwn-db-ecb4c.firebaseapp.com',
	projectId: 'crwn-db-ecb4c',
	storageBucket: 'crwn-db-ecb4c.appspot.com',
	messagingSenderId: '175332349957',
	appId: '1:175332349957:web:ebb7efbdd344905628e46c',
	measurementId: 'G-H2M47B3H06',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
