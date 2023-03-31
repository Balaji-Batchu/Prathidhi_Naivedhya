import React,{useState,useEffect} from "react";
import { collection, getDocs,addDoc,doc, deleteDoc,updateDoc } from 'firebase/firestore'
import { db } from "../config/firebase";

const Table = () => {

    const [userList,setUserList] = useState([]);

    const VolunteerCollection = collection(db,"contactus")

    const getmovies = async() => {
        try{
            const data = await getDocs(VolunteerCollection);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }))
            setUserList(filteredData);
            //console.log(filteredData)
        }
        catch(error){
            console.error(error);
        }
      };

      useEffect(() => {
        return () => {
          getmovies();
        
      };
    }, []);

      console.log(userList)

    const [data,setData]= useState(
        [
            { id: 1, name: "John Doe", phone: "123-456-7890" },
            { id: 2, name: "Jane Smith", phone: "555-555-5555" },
            { id: 3, name: "Bob Johnson", phone: "987-654-3210" },
            { id: 4, name: "Bob Johnson1", phone: "987-654-3210" },
            { id: 5, name: "Bob Johnson2", phone: "987-654-3210" },
            { id: 6, name: "Bob Johnson3", phone: "987-654-3210" },
            { id: 7, name: "Bob Johnson4", phone: "987-654-3210" },
          ]
    );

    // const add = () => setData((prev)=>{
    //     console.log(prev);
    //     return [...prev,{id:8,name:"balaji",phone: "8919329357"}]
    // })
  return (
    <div>
        <p className="text-orange-400 text-3xl font-bold my-8 mx-16">Our Recent Donors</p>
        <div className="w-4/6 mx-56 rounded-lg my-10">
            <table className="table-auto w-full">
                <thead className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg">
                <tr>
                    <th className="px-4 py-2">S.no</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {data.slice(0,5).map((item, index) => (                    
                    <tr
                    key={item.id}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                    >
                    <td className="border px-4 py-2 text-center">{item.id}</td>
                    <td className="border px-4 py-2 hover:text-blue-500 text-center">{item.name}</td>
                    <td className="border px-4 py-2 hover:text-blue-500 text-center">{item.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* <button onClick={add}>add</button> */}
        </div>
    </div>
  );
};

export default Table;
