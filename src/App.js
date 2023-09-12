import "./App.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import NewsCmp from "./Components/NewsCmp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_APIKEY;
    const [progress, setProgress] = useState(0);

    return (
        <Router>
            <div>
                <Navbar />
                <LoadingBar height={3} color="#f11946" progress={progress} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="General"
                                pageSize={pageSize}
                                country="in"
                                category="General"
                            />
                        }
                    />
                    <Route
                        path="/Business"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Business"
                                pageSize={pageSize}
                                country="in"
                                category="Business"
                            />
                        }
                    />
                    <Route
                        path="/Entertainment"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Entertainment"
                                pageSize={pageSize}
                                country="in"
                                category="Entertainment"
                            />
                        }
                    />
                    <Route
                        path="/Health"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Health"
                                pageSize={pageSize}
                                country="in"
                                category="Health"
                            />
                        }
                    />
                    <Route
                        path="/Science"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Science"
                                pageSize={pageSize}
                                country="in"
                                category="Science"
                            />
                        }
                    />
                    <Route
                        path="/Sports"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Sports"
                                pageSize={pageSize}
                                country="in"
                                category="Sports"
                            />
                        }
                    />
                    <Route
                        path="/Technology"
                        element={
                            <NewsCmp
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="Technology"
                                pageSize={pageSize}
                                country="in"
                                category="Technology"
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
