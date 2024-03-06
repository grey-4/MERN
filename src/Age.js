import './Age.css';

function Age() {
    function solve(){
    const ag = document.getElementById("age").value;
        const dob = new Date(ag); 
        const curdate = new Date();
        const age = curdate.getFullYear() - dob.getFullYear();
        document.getElementById("ans").value = age;
    }
    return (
        <body>
        <div id="d">
        <p><label>Enter your age : </label>
        <input type="date" id="age"/><br></br></p>
        <p><button onClick={solve}>Calculate</button><br></br></p>
        <label>Age : <input type='text' id="ans"/></label>
        </div>
        </body>
    );
}

export default Age;
