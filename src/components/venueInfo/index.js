import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calender from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import color from '@material-ui/core/colors/purple';
const Venue = () => {
    return (
        <div>
            <div className="bck_black"
            style={{
                background: 'linear-gradient(rgb(6, 22, 46),rgb(3, 46, 110))',
                
            }}
            
            >
                <div className="center_wrapper">
                    <div className="vn_wrapper">
                    <Zoom duraiton={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                 <div className="vn_inner"
                                 >
                                    <div className="vn_icon_square bck_red"
                                    style={{
                                        background: "linear-gradient(135deg, #766dff, #88f3ff)"
                                      }}
                                    ></div>
                                    <div className="vn_icon"
                                    style={{
                                        background:`url(${icon_calender})`
                                    }}
                                    
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                     </div>
                                     <div className="vn_desc">
                                     21st december @ 09.00 am
                                     </div>
                                </div>
                                
                            
                            </div>
                        </div>
                        </Zoom>
                        <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                 <div className="vn_inner"
                                 >
                                    <div className="vn_icon_square bck_red"
                                    style={{
                                        background: "linear-gradient(135deg, #766dff, #88f3ff)"
                                      }}
                                    ></div>
                                    <div className="vn_icon"
                                    style={{
                                        background:`url(${icon_location})`
                                    }}
                                    
                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                     </div>
                                     <div className="vn_desc">
                                        Star Cineplex, Bashundhara city
                                     </div>
                                </div>
                                
                            
                            </div>
                        </div>
                        </Zoom>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Venue;


