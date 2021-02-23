import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="full-screen">
                <h1 className="aero-font md:text-7xl sm:text-3xl">
                    <span className="aero-red">Aero</span>Bot
                </h1>
                <span className="text-xl">
                    <h2 className="header">
                        A truly multi-purpose discord bot that can handle all
                        your needs!
                    </h2>
                </span>
                <div className="flex flex-row place-items-center">
                    <a
                        className="btn focus:ring"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: "#7289DA", color: "white" }}
                        href="https://top.gg/bot/787460489427812363/invite"
                    >
                        <i className="fab fa-discord" /> Add to Discord
                    </a>
                    <a className="btn" role="button" href="/commands">
                        See Commands
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
