"use client"
import React from "react";

export default function useStickyState(defaultValue, key) {

    const [value, setValue] = React.useState(() => {
        const stickyValue = typeof window === "undefined" ? null : window.sessionStorage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
    });

    React.useEffect(() => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}