import React, {useState} from 'react';

function Slides({slides}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSLide > slides.length -1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleRestart = () => {
        setCurrentSlide(0);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                data-testid="button-restart"
                className="small outlined"
                >
                    Restart
                </button>
                <button
                data-testid="button-prev"
                className="small"
                >
                    Prev
                </button>
                <button
                data-testid="button-next"
                className="small"
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
