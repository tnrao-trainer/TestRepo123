import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

interface User{
  id:number ;
  name:string;
  email:string;
}

const Demo: React.FC = () => {
  
 
 
  const data:User[]|null  = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
 
  console.log(data);

  let resultsArray:any[] = [];

  if(data)
  {
    resultsArray =  data.map((item: any) =>
      <tr key={item.id}>
        <td>  {item.id} </td>
        <td>  {item.name} </td>
        <td>  {item.email} </td>
      </tr>); 
  }
 


  return (
    <>
      <h3>Working with React Hooks (useEffect)</h3>
      <hr />

    

      <table border={2} width="500">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User E-mail</th>
          </tr>
        </thead>

        <tbody>
           {resultsArray}
        </tbody>
     
      </table>



    </>);
};

export default Demo;