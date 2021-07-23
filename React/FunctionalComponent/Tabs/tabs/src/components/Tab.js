import React, {useState} from 'react';



const Tab = (props) => {
  const {tabsArr} = props;
  
  const [content, setContent] = useState("which tab would you like to click?")

  const handleClick = (index) => {
    
    console.log("clicked tab: ", index)
    alert("clicked" + index)

    setContent(tabsArr[index].content);
    console.log("Which tab did we click?", tabsArr[index].content);
    alert("Which tab did we click?"+ tabsArr[index].content)
  }

  return(
    <div>
      {tabsArr.map((tab, index) => (
        <div className="tabs">
          <button name="button" key="index" onClick={ () => handleClick(index)}> { tab.label } </button>
        </div>
      ))}
      <div className="content-box">
       <h3><p className="content"> {content} </p></h3> 
      </div>
    </div>

);
};
 export default Tab;