import React from "react";
import "./Key.css";
import { NOTE_TO_KEY } from "../global/constantes";

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        };
        this.audio = new Audio(`/notes/${this.props.note}.mp3`);
    }

    noteIsFlat = () => {
        return this.props.note.includes('2');
    }

    handleMouseDown = () => {
        this.setState({ isPressed: true });
        this.props.onMouseDown(this.props.note);
        this.playNote();
    }

    handleMouseUp = () => {
        this.setState({ isPressed: false });
        this.props.onMouseUp(this.props.note);
    }

    handleMouseLeave = () => {
        if (this.state.isPressed) {
            this.setState({ isPressed: false });
            this.props.onMouseUp(this.props.note);
        }
    }

    handleKeyDown = (event) => {
        const { note } = this.props;
        if (event.key === NOTE_TO_KEY[note] && !this.state.isPressed) {
            this.setState({ isPressed: true });
            this.props.onMouseDown(note);
            this.playNote();
        }
    }

    handleKeyUp = (event) => {
        const { note } = this.props;
        if (event.key === NOTE_TO_KEY[note]) {
            this.setState({ isPressed: false });
            this.props.onMouseUp(note);
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    playNote = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }

    render() {
      
        const { note } = this.props;
        const { isPressed } = this.state;
        const keyClassName = `key${this.noteIsFlat() ? ' flat' : ''}${isPressed ? ' pressed' : ''}`;

        return (
            <div
                className={keyClassName}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseLeave={this.handleMouseLeave}
            >
                {!this.noteIsFlat() && (
                    <div className="key-text">
                        {note.toUpperCase()}
                    </div>
                )}
            </div>
        );
    }
}

export { Key };