import Header from '../headerandbottom/header';
import Footer_nav from '../headerandbottom/footer_nav';
import '../css/pages.css';

export default function officalpage(){
    return (
        <>  
            <Header/>
            <div>
                <h1 className='label'>Aout Petie</h1>
                    <div className='container'>
                        <p>function  area</p>
                    </div>
                
            </div >
            <Footer_nav/>

        </>
    );
}
