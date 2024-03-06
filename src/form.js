import './form.css';

function Form() {
return (
   <body>
       <form className='d'>
	       <h1>Login</h1>
           <p>
             <input type="text" placeholder="Enter your email"></input>
           </p>
           <p>
             <input id="roll" type="password" placeholder="Enter your password"></input>
           </p>
           <button>Login</button>
           <a href="./register.html" id="register">register</a>
</form>
</body>
);
}

export default Form;
