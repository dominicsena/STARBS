import './App.css';
import Header from "./Header";
import Banner from "./Banner";
import Content1 from './Content1';
import Content2 from './Content2';
import Stories from './Stories';
import Footer from './Footer';


function App() {
  return (
    <div>
      
        <body>
          <div>
            <Header />
          </div>
            <div className='main'>
              
                <Banner />
             <div className='container-center'>
               <Content1 />

             </div>
             <div className='content2-container'>
              <Content2 />
              
             </div>
             <div>
              <Stories />
             </div>
               
             
              
             
                
              
             <Footer />
            </div>

         
            
        </body>
   
      
   
    </div>
  );
}

export default App;
