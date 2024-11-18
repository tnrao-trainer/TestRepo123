import { useState } from "react";
import DeptDetails from "./DeptDetails";
import DeptModel from "../models/DeptModel";

function  DeptList()
{
      // Array of Objects
  let data:DeptModel[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"}
  ];

  const [deptsArray, setDeptsArray] = useState<DeptModel[]>(data);


  const removeDept_parent = (dno:number) =>{
           //  alert("hello from parent component.  Deptno : " + dno);

            let tempArray = [...deptsArray];
            let index:number = tempArray.findIndex(item => item.deptno == dno);
            tempArray.splice(index, 1);

            setDeptsArray(tempArray);
  };
 

  let result =   deptsArray.map( (item, index) => {
    return (
                <DeptDetails deptObj={item}  onDeptRemove={removeDept_parent}   />
    );
  });
  
    return (
        <>
			<h3>Parent and Child Components in React</h3>

            {result}

        </>
    );
}

export default DeptList;

