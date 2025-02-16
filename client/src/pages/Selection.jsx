export default function Selection(){
    return(
        <div className="container">
            <h1>
                Selection
            </h1>
            <div className="selection"> {/* parent / flex */}
                <button id="left-selection">Left Icon</button> {/* add Icon here, will decrease the selection value by one when pressed */}
                <div id="selection-image">Stage Images <br /> <span id="selection-value">1</span></div> {/* Image of the stage, will change when player clicked left icon or right icon */}
                <button id="right-selection">Right Icon</button> {/* add Icon here, will increas the selection value by one when pressed */}
            </div>
            <a href="./game">Confirm</a> {/* confirms selection and goes to the game page */}
        </div>
    );
}