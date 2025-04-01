import Age from "./Age";
import { render, screen, fireEvent,waitFor } from "@testing-library/react";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

test("testing for age calculation", async () => { 
       render(<Age/>) // ✅ Component को render करना जरूरी है

    // चेक करें कि "Age Calculator" हेडिंग मौजूद है
    //or
    expect(screen.getByText(/Age Calculator/i)).toBeInTheDocument();
    // चेक करें कि दो इनपुट फ़ील्ड और एक बटन मौजूद हैं
    const input1 = screen.getAllByPlaceholderText(/Enter bill/i)[0];
    const input2 = screen.getAllByPlaceholderText(/Enter bill/i)[1];
    const button = screen.getByText(/Calculate/i);
    const result = screen.getByText("0");  // `0` इनिशियल वैल्यू है
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(result).toBeInTheDocument()


// इनपुट फ़ील्ड में वैल्यू डालें
fireEvent.change(input1, { target: { value: "100" } });
fireEvent.change(input2, { target: { value: "10" } });
// बटन पर क्लिक करें
fireEvent.click(button);
// चेक करें कि सही रिजल्ट दिख रहा है (100 + 10% of 100 = 110)
await waitFor(() => {
    expect(result).toHaveTextContent("110");
});
});

