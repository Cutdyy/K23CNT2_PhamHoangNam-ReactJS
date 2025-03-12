import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

// Tạo Context
const PhnThemeContext = createContext();

// Component Provider
export function PhnThemeProvider({ children }) {
    // Lấy giá trị theme từ localStorage, nếu không có thì mặc định là "light"
    const [phnTheme, setPhnTheme] = useState(() => localStorage.getItem("phnTheme") || "light");

    // Cập nhật localStorage mỗi khi theme thay đổi
    useEffect(() => {
        localStorage.setItem("phnTheme", phnTheme);
        document.body.className = phnTheme; // Thay đổi class của <body> để hỗ trợ CSS
    }, [phnTheme]);

    // Hàm chuyển đổi theme
    const togglePhnTheme = () => {
        setPhnTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Tối ưu giá trị context với useMemo
    const value = useMemo(() => ({ phnTheme, togglePhnTheme }), [phnTheme]);

    return (
        <PhnThemeContext.Provider value={value}>
            <div className={`phn-theme-${phnTheme}`}>{children}</div>
        </PhnThemeContext.Provider>
    );
}

// Hook tùy chỉnh để sử dụng ThemeContext
export function usePhnTheme() {
    return useContext(PhnThemeContext);
}
