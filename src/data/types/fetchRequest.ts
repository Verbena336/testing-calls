export interface IFetchRequest {
  name: 'getList' | 'getRecord';
  date_start?: string;
  date_end?: string;
  in_out?: number | undefined;
  id_record?: string;
  partnership_id?: string;
}
