import React from 'react';
import {useParams} from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';

const RoomPage= () => {
    const {roomId} = useParams();

    const myMeeting=async (element) => {
        const appID= 1570096975;
        const serverSecret="389a3474c5e7dddfdf397d97d782c389";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Enter Your Name Here");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://talkingminds-meeting.vercel.app/room/${roomId}`
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
