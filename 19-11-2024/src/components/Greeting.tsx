interface GreetingProps{
    uname : string,
    textColor : string 
}

function  Greeting({uname, textColor}:GreetingProps)
{	
    uname = "Mr./Mrs. " + uname;

    return (
    <>
            <h3  style={{"color":textColor}}>Hi {uname}, Good morning...!	</h3>
    </>);
}

export default Greeting;