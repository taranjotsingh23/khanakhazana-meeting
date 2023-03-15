import React from 'react';
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const RoomPage= () => {
    const {roomId} = useParams();

    const myMeeting=async (element) => {
        const appID= 472478217;
        const serverSecret="061cc6fb9da4bf2f6aa7493f1ad5e1d6";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Enter Your Name Here");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
    <div>
        <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }}/>
    </div>
    );
};

export default RoomPage;