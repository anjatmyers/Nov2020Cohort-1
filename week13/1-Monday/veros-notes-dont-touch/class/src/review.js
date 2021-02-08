


class Button{

    constructor(color, text) {
        // this.color = color;
        // this.text = text;
        // this.count = 0;

        this.state = {
            color: color, 
            text: text,
            count: 0
        }
    }

    print() {

        console.log(this.state.color);
    }

    count(){
        this.count+=1 //&1234
    }
    
    render(){
        //code 
        const {color, text, count}= this.state;

        this.print();
        this.count();
        let someVar = 9;

        return (<div>

            {someVar}
        </div>)
    }
    
}


let navButton = new Button('red', 'Submit');  //&1234
navButton.count();


let navButton1 = new Button('green', 'Post'); //&6789
navButton1.count()  //&6789



// let myObj = {
//   fName: "Veronica",
//   lName: "Lino",
// };


// const {fName, lName} = myObj;
// let fName = myObj.fName;
// let lName = myObj.lName;


