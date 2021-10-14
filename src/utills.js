import React, { useEffect, useState } from "react";

export const ShortenName = name => {
    let n = name.split(' ');
    let shortName = n[0][0].toUpperCase();
    if (n.length > 1) shortName += n[n.length - 1][0].toUpperCase()
    return shortName;
}

export const ChatsContext = React.createContext({
    currentChat: null,
    setCurrentChat: () => { }
});


export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}