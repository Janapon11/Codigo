export default function Game(){
    return(
        <div className="container">
            <div className="game-section"> {/* display:flex, felx-direction:row */}
                <div className="game-visual">{/* left side, also where battle descriptions and and cards are */}
                    <div className="game-descriptions">{/*  */}
                        <div className="boss-section">
                            <div className="boss-description">{/* boss-name difficulty boss-hp current-hp timer */}
                                <div>
                                    <p>Boss: <span id="boss-name"></span></p>
                                    <p>Difiiculty: <span id="difficulty">easy</span></p>
                                    <p>HP: <span id="current-hp">50</span> / <span id="max-hp">50</span></p>
                                    <p><span id="timer">60s</span></p>
                                </div>                              
                            </div>
                            <div className="boss-img">
                                <img id="boss-img" src="" alt="Boss" />
                            </div>
                        </div>
                        <div className="player-section">
                            <div className="player-img">
                                <img src="" alt="Player" />
                            </div>
                            <div className="player-description">
                              <p>Player: <span className="player-name">Codi</span></p> 
                            </div>
                        </div>
                    </div>
                    <div className="skill-section">
                        <div className="game-options">{/* where quit, tips, run buttons are located */}
                            <div className="game-options-left">
                                <button className="game-btn" id="game-exit-btn">Exit</button>
                            </div>
                            <div className="game-options-right">
                                <button className="game-btn" id="game-tips-btn">Tips</button>
                                <button className="game-btn" id="game-run-btn">Run</button>
                            </div>
                            
                        </div>
                        <div className="skill-selection">
                            <div className="skill-card" id="skill-card-1">
                                <img src="" alt="Skill 1" />
                                <p><span id="skill-name-1"></span></p>
                            </div>
                            <div className="skill-card" id="skill-card-2">
                                <img src="" alt="Skill 2" />
                                <p><span id="skill-name-2"></span></p>
                            </div>
                            <div className="skill-card" id="skill-card-3">
                                <img src="" alt="Skill 3" />
                                <p><span id="skill-name-3"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="code-section">{/* right side, also where selected code was shown and the input of the player */}
                    <div className="selected-code-description">
                        <p>Selected code: <span id="selected-code-name"></span></p>
                        <br />
                        <p>code:</p>
                        <p><span id="selected-code-code"></span></p>
                        <br /><br />
                        <p>Description: <span id="selected-code-description"></span></p>
                    </div>
                    <div className="player-input-section">
                        <input type="text" name="player-input" id="player-input" />
                    </div>
                </div>
            </div>
        </div>
    );
}