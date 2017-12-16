import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../services/instagram-api";
import EMO_API from "../services/emotions-api";

const EMO_TO_EMOJI_MAPPER = {
    anger: "😡",
    happiness: "🤣",
    contempt: "🙂",
    disgust: "🤮",
    fear: "🙀",
    neutral: "😐",
    sadness: "☹️",
    surprise: "😲"
};

const EPhoto = ({ url, onEmojify, emotions = [] }) => {
    const faces = emotions.map(singleFace => {
        const { faceRectangle: { height, top, left }, scores } = singleFace;
        const topEmotionScore = Math.max(...Object.values(scores));
        const topEmotion = Object.entries(scores).find(
            ([key, value]) => value === topEmotionScore
        )[0];
        return {
            emoji: EMO_TO_EMOJI_MAPPER[topEmotion],
            left,
            top,
            fontSize: height
        };
    });
    return (
        <p style={{ position: "relative" }}>
            {faces.map((props, i) => {
                const { left, top, fontSize } = props;
                return (
                    <span
                        key={i}
                        className="ephoto"
                        style={{ left, top, fontSize }}
                    >
                        {props.emoji}
                    </span>
                );
            })}
            <img src={url} alt="insta" />
            <button onClick={() => onEmojify(url)}>Emojify</button>
        </p>
    );
};

class Home extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            error: null,
            data: []
        };
    }
    emojify(imageUrl) {
        EMO_API.emotions(imageUrl).then(data => {
            console.log(data);
            this.setState();
        });
    }

    renderHome() {
        const { isLoading, error, data } = this.state;
        if (this.state.isLoading) {
            return <span>Loading...</span>;
        }
        return error ? (
            <span>Sorry, error: {error} </span>
        ) : (
            data.map(photoObjs => {
                const id = photoObjs.id;
                return photoObjs.urls.map((url, index) => {
                    return;
                    <li key={`${id}-${index}`}>
                        <EPhoto
                            emotions={this.state.emotionsUrl}
                            onEmojify={this.emojify}
                            url={url}
                        />
                    </li>;
                });
            })
        );
    }

    componentWillMount() {
        API.getPhotos().then(
            data => this.setState({ data, error: null, isLoading: false }),
            error => this.setState({ data: [], error, isLoading: false })
        );
    }

    render() {
        return this.state.hasAuth() ? this.renderHome() : <Redirect to="/" />;
    }
}

export default Home;
