import Search from "./searchbox";
import './TabCharacters.css';


function TabCharacters()
{
  return(
    <div>
      <div>
        <Search/>
      </div>
      <div style={{display: "flex", height: "650px",width:"1080px"}}>
          <div style={{width:"25%",padding: "20px", border: "1px solid #002328"}}>
            ORDER BY
            <br></br><br></br><br></br>
            <div style={{padding:"5px"}}>Modified</div>
            <div style={{padding:"5px"}} >Name</div>
            
              
          </div>
          <div  style={{width:"75%",padding: "20px" , border: "1px solid #002328"}}>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#002328",borderRadius:"20px"}}>Star Lord</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#002328",borderRadius:"20px"}}>Drax the Destroyer</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#002328",borderRadius:"20px"}}>Scarlet Witch</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#002328",borderRadius:"20px"}}>Spider-Man</div>
            <br></br>
            <div style={{width:"99%",height:"100px",padding: "3px",background:"#002328",borderRadius:"20px"}}>Vision</div>

            
          </div>
      </div> 

    </div>
  )
}

export default TabCharacters;