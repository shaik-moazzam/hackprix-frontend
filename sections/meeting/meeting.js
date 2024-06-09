"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  ControlBar,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import { LocalParticipant, Track } from "livekit-client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Page() {
  const [fullscreen, setfullscreen] = useState(false);
  // TODO: get user input for room and name
  const params = useSearchParams();
  const token = params.get("token");
  const freeTrial = params.get("freeTrial");
  const route = useRouter();
  if (token == "") {
    return <div>Getting token...</div>;
  }
  const ref = useRef();
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setfullscreen(true);
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(
          "Error attempting to enable full-screen mode:",
          err.message
        );
      });
    } else {
      if (document.exitFullscreen) {
        setfullscreen(false);
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      className={clsx(
        " ",
        fullscreen
          ? " w-[100vw] h-[100vh] fixed left-0 top-0"
          : " h-full w-full relative"
      )}
    >
      <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        onDisconnected={(e) => {
          if(freeTrial){
            route.push("/dashboard?freeTrial=true");
          }
          else{
            route.push("/dashboard");
          }
        }}
        serverUrl={"https://conference.zainii.com"}
        // Use the default LiveKit theme for nice styles.
        data-lk-theme="default"
        // onConnected={()=>}
        // onDisconnected={()=>route.push("/dashboard")}

        style={{ height: "100%", width: "100%" }}
      >
        {/* Your custom component with basic video conferencing functionality. */}
        <MyVideoConference/>
        {/* <VideoConference  /> */}
        {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
        <RoomAudioRenderer />
        {/* Controls for the user to start/stop audio, video, and screen
      share tracks and to leave the room. */}
        <div className=" absolute bottom-0 w-full">
          <ControlBar style={{ backgroundColor: "black" }}/>
        </div>
      </LiveKitRoom>
    </div>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}
