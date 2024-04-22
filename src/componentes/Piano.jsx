import React from "react";
import { Key } from "./Key";
import "./Piano.css";
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from "../global/constantes";
import _ from "lodash";
import {ToggleImage} from "./ToggleImage";


class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }
    

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(`../../notes/${note}.mp3`);
            noteAudio.play();
        }
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.filter(key => key !== event.key)
            }));
        }
    }

    handleMouseDown = (note) => {
        const updatedPressedKeys = [...this.state.pressedKeys, note];
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[note]);
    }
    
    handleMouseUp = (note) => {
        const index = this.state.pressedKeys.indexOf(note);
        if (index !== -1) {
            const updatedPressedKeys = [...this.state.pressedKeys];
            updatedPressedKeys.splice(index, 1);
            this.setState({
                pressedKeys: updatedPressedKeys,
            });
        }
    }
    
    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys.includes(note)}
                    onMouseDown={() => this.handleMouseDown(note)}
                    onMouseUp={() => this.handleMouseUp(note)}
                />
            );
        });

        return (
          <div className="container">
            <div className="piano-container">
              <div className="piano-frame">
                <div className="piano">
                  {keys}
                </div>
              </div>
            </div>
            <div className="teclado">          
              <ToggleImage/>
            </div>
          </div>
        );
    }
}

export { Piano };