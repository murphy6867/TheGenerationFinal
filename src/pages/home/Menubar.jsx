import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Menubar.css';

const Menubar = () => {

    return (
        <section className=''>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} 
            responsive={[{ breakpoint: 800, settings: { slidesToShow: 3,slidesToScroll: 3 }}, { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 2 }}]}>
                <div>
                    First Slide
                </div>
                <div>
                    First Slide
                </div>
                <div>
                    First Slide
                </div>
                <div>
                    First Slide
                </div>
            </Slide>
        </section>
  )
}

export default Menubar