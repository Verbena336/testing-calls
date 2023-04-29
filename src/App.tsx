import React, { useEffect, useState } from 'react';

import CallList from 'components/CallList';
import Aside from 'components/Aside';
import Header from 'components/Header';
import Filters from 'components/Filters';
import DatePicker from 'components/DatePicker';
import Balance from 'components/Balance';

import './App.scss';

import { fetchData } from 'data/fetchData';
import { DATE_RANGE } from 'data/dateRange';

import { ICallItem } from 'components/CallItem/types/callItem';

function App(): JSX.Element {
  const [callList, setCallList] = useState<ICallItem[]>([]);
  const [filteredCallList, setFilteredCallList] = useState<ICallItem[]>([]);

  const [datePick, setDatePick] = useState({
    from: DATE_RANGE.THREE_DAYS_AGO.toLocaleDateString(),
    to: DATE_RANGE.TODAY.toLocaleDateString(),
  });

  useEffect(() => {
    const getCallList = async () => {
      const result = await fetchData({
        name: 'getList',
        date_start: datePick.from,
        date_end: datePick.to,
      });

      setCallList(result.results);
      setFilteredCallList(result.results);
    };

    getCallList();
  }, [datePick.from, datePick.to]);

  return (
    <>
      <Aside />
      <div className="wrapper">
        <Header />
        <main className="main">
          <section className="balance">
            <Balance />
            <DatePicker setDatePick={setDatePick} />
          </section>
          <Filters setCallList={setFilteredCallList} callList={callList} />
          <CallList elements={filteredCallList} />
        </main>
      </div>
    </>
  );
}

export default App;
