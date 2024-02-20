import './App.css';
import HeaderCopy from "./HeaderCopy";
import BannerCopy from "./BannerCopy";
import Content1Copy from './Content1Copy';
import Content2Copy from './Content2Copy';
import StoriesCopy from './StoriesCopy';
import FooterCopy from './FooterCopy';


function App2() {
  return (
    <div>
      
        <body>
          <div>
            <HeaderCopy />
          </div>
            <div className='mainCopy'>
              
                <BannerCopy />
             <div className='container-center'>
               <Content1Copy />

             </div>
             <div className='content2-container'>
              <Content2Copy />
              
             </div>
             <div>
              <StoriesCopy />
             </div>
               
             
              
             
                
              
             <FooterCopy />
            </div>

         
            
        </body>
   
      
   
    </div>
  );
}

export default App2 ;
