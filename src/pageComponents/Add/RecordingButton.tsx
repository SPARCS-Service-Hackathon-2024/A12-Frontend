import { useRef, useState } from "react";
import axios from "axios";
import { IconButton } from "@chakra-ui/react";
import { FaRecordVinyl, FaStop } from "react-icons/fa";

export interface RecordingButtonProps {}

function RecordingButton({}: RecordingButtonProps) {
  const [isRecording, setIsRecording] = useState(false);

  const streamRef = useRef<MediaStream>();
  const recorderRef = useRef<MediaRecorder>();
  const chunkRef = useRef<Blob[]>([]);

  const handleRecordClick = async () => {
    setIsRecording(true);

    streamRef.current =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    recorderRef.current = new MediaRecorder(
      streamRef.current
    );

    recorderRef.current?.addEventListener(
      "dataavailable",
      async (event) => {
        console.log(event.data);
        chunkRef.current.push(event.data);

        const blob = new Blob(chunkRef.current, {
          type: "audio/wav",
        });
        chunkRef.current = [];

        const audioURL = URL.createObjectURL(blob);
        console.log(audioURL);
      }
    );

    recorderRef.current?.start();
  };

  const handleStopClick = () => {
    setIsRecording(false);

    recorderRef.current?.stop();

    streamRef.current
      ?.getTracks()
      .forEach((track) => track.stop());
  };

  return isRecording ? (
    <IconButton
      aria-label={"stop"}
      icon={<FaStop />}
      onClick={handleStopClick}
    />
  ) : (
    <IconButton
      aria-label={"record"}
      icon={<FaRecordVinyl />}
      onClick={handleRecordClick}
    />
  );
}

export default RecordingButton;
