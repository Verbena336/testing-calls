import { BACKEND_URL } from './backendURL';
import { IFetchRequest } from './types/fetchRequest';

export const fetchData = async (props: IFetchRequest) => {
  try {
    if (props.name === 'getList') {
      const result = await fetch(
        `${BACKEND_URL}${props.name}?date_start=${props.date_start}&date_end=${props.date_end}&in_out=`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer testtoken',
          },
        }
      );
      return await result.json();
    } else if (props.name === 'getRecord') {
      const result = await fetch(
        `${BACKEND_URL}${props.name}?record=${props.id_record}&partnership_id=${props.partnership_id}`,
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer testtoken',
            'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
            'Content-Transfer-Encoding': 'binary',
            'Content-Disposition': 'filename="record.mp3"',
          },
        }
      );
      const reader = result.body!.getReader();
      return reader.read().then((result) => {
        return result.value;
      });
    }
  } catch (error) {
    throw new Error();
  }
};
