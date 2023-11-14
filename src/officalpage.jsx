import Header from './header';
import Footer_nav from './footer_nav';
import './css/pages.css';

export default function officalpage(){
    return (
        <>  
            <Header/>
            <div className='container'>
                <h1>Aout Petie</h1>
                <div className='content'>
                <p>function  area</p>
                </div>
                
            </div >
            <Footer_nav/>

        </>
    );
}
