import React, {useState} from "react";

const FormsHooks = () => {
    //this
    const [textValue, setTextValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [selectValue, setSelectValue] = useState('');

    console.log(textValue);
    console.log(isValid);
    console.log(selectValue);

    const handleForm = (e) => {
        e.preventDefault();
        console.log(`form submitted`);
    }
    
  return (
    <>
      <h1 className="text-center mt-5">Forms with Hooks</h1>

      <div className="row mt-5">
        <div className="col-6 offset-3 formColor p-5 formFont">
          <form onSubmit={handleForm}>
            <input name="textValue" type="text" value={textValue}
                onChange={(e)=>setTextValue(e.target.value)}
               />

              <br/>

              <input name="isValid" type="checkbox" checked={isValid}
                onChange={(e)=>setIsValid(e.target.checked)}
              />

              <br />

                <select name="selectValue" onChange={(e)=>setSelectValue(e.target.value)}>
                  <option value="NewYork">New York</option>
                  <option value="Houston">Houston</option>
                  <option value="Atlanta">Atlanta</option>
                  <option value="Seattle">Seattle</option>
                  <option value="SantaBarbara">Santa Barbara</option>
                </select>
              <br />
              
              <input type="submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormsHooks;
