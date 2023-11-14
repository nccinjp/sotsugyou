import Header from '../headerandbottom/header.jsx';
import Footer_nav from '../headerandbottom/footer_nav.jsx';
import '../css/pages.css';

export default function temperature(){
    return (
        <>  
            <Header/>
            <div >
            <h1 className='label'>体温表示</h1>
                <div className='container'>
                    <p>function  area</p>
                </div>

            </div>
            <Footer_nav/>
        </>
    
    
    )
}