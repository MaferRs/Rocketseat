import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['gwt-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      {isLoading && <p>Carregando ...</p>}
      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link to={`/room/${room.id}`} key={room.id}>
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
