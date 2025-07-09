import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  params.roomId;
  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return <div>Room Details {JSON.stringify(params)}</div>;
}
