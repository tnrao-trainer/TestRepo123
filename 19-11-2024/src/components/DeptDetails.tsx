import  DeptModel  from "../models/DeptModel";
import './DeptDetails.css';


interface DeptDetailsProperties
{
    deptObj:DeptModel,
    onDeptRemove:Function;
    // onDeptRemove:(n:number) => {};
}

const DeptDetails:React.FC<DeptDetailsProperties> = ({deptObj, onDeptRemove}) =>
{	

    const removeDept_child = () =>{
        // alert("hello from child component");
        if(window.confirm("Do you want to delete?") == true)
        {
            onDeptRemove(deptObj.deptno); // it calls parent function
        }       
    };

    return (<>
                 <div className="card">
                <h3 style={{ margin: "2px", color: "Red" }}>
                    {deptObj.dname} </h3>
                <u> Deptno : {deptObj.deptno} </u>  <br />
                Location : <span style={{ color: "Green" }}> {deptObj.loc} </span>   <br />
                <a href="javascript:void(0);" onClick={removeDept_child}>Remove</a>
            </div>
    </>);
};

export default DeptDetails;