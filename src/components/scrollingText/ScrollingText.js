import React, { useState,useEffect } from "react";
import Marquee from "react-fast-marquee";
import Text from "../../dataForScrollingText/Text";


import styled from "styled-components";

const MarqueeText = styled.div`
position: fixed;
top: 3rem;
padding-left: 1rem;
`
const ScrollingText = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const handleCycleComplete = () => {
        setIsPaused(true);
    };

    useEffect(() => {
        if (isPaused) {
            const timer = setTimeout(() => {
                setIsPaused(false);
                setIndex((prevIndex) => (prevIndex + 1) % Text.length);
            }, 0); 

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isPaused]);

    return (
        <MarqueeText>
            {!isPaused && (
                <Marquee
                    direction="right"
                    speed={20}
                    gradient={false}
                    onCycleComplete={handleCycleComplete}
                >
                    {Text[index]}
                </Marquee>
            )}
        </MarqueeText>
    )
}
export default ScrollingText;