import React from 'react';
import './Sidebar.css';
import { FaHome, FaGem, FaHotjar, FaChartLine } from 'react-icons/fa';


class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <div className="side-nav" onClick={() => {
                    window.location.href = '/';
                }}>
                <FaHome className="nav-icon"/>
                    <p className="side-nav-links">Home</p>
                </div>
                <div className="side-nav" onClick={() => {
                    window.location.href = '/new';
                }}>
                    <FaGem className="nav-icon"/>
                    <p className="side-nav-links">New</p>
                </div>
                <div className="side-nav" onClick={() => {
                    window.location.href = '/hot';
                }}>
                    <FaHotjar className="nav-icon"/>
                    <p className="side-nav-links">Hot</p>
                </div>
                <div className="side-nav" onClick={() => {
                    window.location.href = '/top';
                }}>
                    <FaChartLine className="nav-icon"/>
                    <p className="side-nav-links">Top</p>
                </div>
            </div>
            );
        }
    }

export default Sidebar;