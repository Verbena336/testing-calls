export interface ICallItem {
  abuse: TAbuse[];
  contact_company: string;
  contact_name: string;
  date: string;
  date_notime: string;
  disconnect_reason: string;
  errors: TError[];
  from_extension: string;
  from_number: string;
  from_site: number;
  id: number;
  in_out: number;
  is_skilla: number;
  line_number: string;
  partner_data: TPartnerData;
  partnership_id: string;
  person_avatar: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  record: string;
  results: TResult[];
  source: string;
  stages: TStage[];
  status: string;
  time: number;
  to_extension: string;
  to_number: string;
}

type TPartnerData = { id: string; name: string; phone: string };

type TError = {
  title: string;
};

type TResult = {
  type: string;
  title: string;
  tooltip: string;
};

type TStage = {
  person_name: string;
  person_surname: string;
  person_mango_phone: string;
  duration: string;
  disconnect_reason: string;
};

type TAbuse = {
  date: string;
  person_name: string;
  message: string;
  support_read_status: number;
  support_answer_status: number;
  answers: TAnswer[];
};

type TAnswer = {
  message: string;
  from_support: number;
  support_read_status: number;
  person_read_status: number;
};
