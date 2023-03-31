import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {FcGoogle} from 'react-icons/fc'
import { auth,provider } from '../config/firebase'
import { createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/firebase'
import userStore from '../store/UserStore'
import { addDoc, collection,doc } from 'firebase/firestore'
//import { useNavigate } from 'react-router-dom';


const Register_login = () => {

    const navigate_donate = useNavigate();

    let addingUser = userStore((state)=>state.addUser)
    let user_details = userStore((state)=>state.users)
    //console.log(user_details)

    var details;

    const { register, handleSubmit } = useForm();
    const [mail,setMail] =  useState('')
    const [password,setPassword] = useState('')

    const usersCollection = collection(db,"Users");

    const addUsers = async() =>{
        try{
            await addDoc(usersCollection,
                {
                    name:details.displayName,
                    email:details.email,
                    phoneNumber:details.phoneNumber,
                    photoURL:details.photoURL,
                    uid:details.uid,
                }
            );
        }
        catch(error){
            console.log(error)
        }
    }

    const navigate = useNavigate();
    function redirect(){
        let path='/';
        navigate(path)
    }

    const onSubmit =async (data,e) =>{
        try{
              const user = {
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                  password: data.password,
                };
                await createUserWithEmailAndPassword(auth,user.email,user.password)
                .then(console.log("user added successfully (normal-way)"))
                localStorage.setItem("user_details",JSON.stringify(user));
                console.log(localStorage.getItem("user_details"))
          }
          catch(error){
            console.log(error)
          }
        //   add(user);
           e.target.reset();
    }

    const signInWithEmail = async() =>{
        try{
            await signInWithEmailAndPassword(auth,mail,password)
            .then(console.log("LogIn with Email"))
            
        }
        catch(error){
            console.log(error);
        }
    }

    //const docRef = collection(db,'Users').doc(uid);
    //console.log("doc ref",docRef)

    // const add_firestore = async() => {
    //     try {
    //         const doc = await docRef.get();
    //         if (doc.exists) {
    //           console.log('User already exists in the database');
    //         } else {
    //             // If the document does not exist, add a new document with the given data
    //             await addDoc(usersCollection,
    //               {
    //                 name:details.displayName,
    //                 email:details.email,
    //                 phoneNumber:details.phoneNumber,
    //                 photoURL:details.photoURL,
    //                 uid:details.uid,
    //               }
    //             );
    //             console.log('User added to database successfully');
    //         }
    //     } catch(error) {
    //         console.error('Error adding user to database: ', error);
    //     };
    // };
    

    const signInWithGoogle = async() =>{
        try{
            await signInWithPopup(auth,provider)
            .then((userCredentials)=>{
                const user= userCredentials.user
                let user_array = user.providerData
                // console.log(user_array[0].uid,user_array)
                const uid = user_array[0].uid;
                localStorage.setItem("user_details",JSON.stringify(user_array));
                details = user;
            })
            await addUsers();
            navigate('/donate')
            window.location.reload();
            }
        catch(error){
            console.log(error);
        }
    }

    //console.log("from local storage", JSON.parse(localStorage.getItem("user_details")));
    //console.log("details",user_details)
    //console.log("from auth",auth.currentUser.providerData[0])
    //addingUser({})
    

    const [signup,setSignUp] = useState(true);
    function toggle(){
        setSignUp((prev)=>{return !prev})
    }

  return (
    <div>
        {signup ? <div
        className="flex flex-col justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <p className='text-yellow-500 bg-gray-600 rounded-lg p-2 font-bold text-2xl text-center mb-2'>Register as an Volunteer</p>
            <motion.form onSubmit={handleSubmit(onSubmit)}
            key="signup"
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent backdrop-filter backdrop-blur-lg shadow-2xl w-1/3 rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input {...register("name")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                </label>
                <input {...register("phone_number")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number"/>
                </div>
                <div className="mb-4">
                <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input {...register("password")} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"/>
                </div>
                <div className="flex items-center justify-between">
                <input className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="submit"
                />
                <button className="bg-white hover:bg-purple-700 text-gray-700 gap-2 justify-center items-center hover:text-white font-bold py-2 px-4 flex rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
                onClick={signInWithGoogle}
                >Continue with <FcGoogle size={20} className="pt-1"/></button>
                </div>
                <p className='pt-1 px-1 text-yellow-200'>Already registered? <span className='text-blue-600 hover:underline hover:cursor-pointer' onClick={toggle}>Login</span></p>
            </motion.form>  
        </div>
        
        :
        
        <div
        className="flex flex-col justify-center items-center h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <p className='text-yellow-500 bg-gray-600 rounded-lg p-2 font-bold text-2xl text-center mb-2'>Login as an Volunteer</p>
        <motion.form
        key="login"
        initial={{ opacity: 0, rotateY: 180 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 180 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent backdrop-filter backdrop-opacity-70 backdrop-blur-xl shadow-2xl w-96 rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" 
            value={mail} onChange={(e)=>{setMail(e.target.value)}}
            />
            </div>
            <div className="mb-4">
            <label className="block text-yellow-200 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" 
            value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
            onClick={signInWithEmail}
            >
                Login
            </button>
            {/* <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Login
            </button> */}
            </div>
            <p className='py-2 px-1 text-yellow-200'>Not Signed Yet? <span className='text-blue-600 hover:underline hover:cursor-pointer' onClick={toggle}>Sign Up</span></p>
        </motion.form>
        </div>}
    </div>

  )
}

export default Register_login;