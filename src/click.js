function MyComponent() {
    const click = (event) => {
        console.log('Clicked');
        console.log('Name : ',event.target);
        console.log('Password : ',event.target);
    };

    return (
        <div>
        <p><input type="text" onDragEnd={click} placeholder="Enter the name" /><br></br></p>
        <p><input type="password"  onDragEnd={click} placeholder="Enter the password" /><br></br></p>
        <button onClick={click}>Enter</button>
        </div>
    );
}

export default MyComponent;
