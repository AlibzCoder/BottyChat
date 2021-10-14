import React from "react";

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
