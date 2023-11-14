import Header from '../headerandbottom/header.jsx';
import Footer_nav from '../headerandbottom/footer_nav.jsx';
import '../css/pages.css';

export default function petinfo(){
    return (
        <>  
            <Header/>
            <div >
                <h1 className='label'>Pet Information</h1>
                <div>
                    <p className='container'> content</p>
                </div>
            </div>
            <Footer_nav/>
        </>
    
    
    )
}