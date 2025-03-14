import './App.css';
import horizontal_line from './assets/title_line.png';
import vertical_bar from './assets/Line_2.png';
import combo1 from './assets/combo_1.png';
import combo2 from './assets/combo_2.png';
import CustomSlider from './components/CustomSlider';

function App() {
    return (
        <div className="App">

            <img src={combo1} alt='combo1' className='combo1' />
            <img src={combo2} alt='combo2' className='combo2' />

            <div className='title_area'>
                <div className='name'>
                    <p>Yiyang</p>
                    <p>(Christine) He</p>
                </div>
                <div className='right_part'>
                    <img src={vertical_bar} alt='vertical_bar' className='vertical_bar'/>
                    <div className='job_titles'>
                        <p>Full-stack Software Engineer</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
                
            <img src={horizontal_line} alt='horizontal_line' className='horizontal_line'/>
            <p className='contacts'>
                Email: cchristine0012@gmail.com  ·  Mobile: (+1)540-998-5759
            </p>

            <div className='portfolio-showplace'>   
                <div className='introduction'>
                    <p>
                        Hi, nice to meet you.
                    </p>
                    <br/ >
                    <p>
                        I’m a computer science major student who graduated from Virginia Tech and working on my master’s degree at Northeastern University, and will graduate in May 2025.
                    </p>
                </div>
                <div className='slider-container'>
                    <CustomSlider/>
                </div>
            </div>
        </div>
    );
}

export default App;
