import st from './list.module.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/searchItem';

export default function List(){

    const location  = useLocation()
    
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className={st.listContainer}>
                <div className={st.listWrapper}>
                    <div className={st.listSearch}>
                        <h1 className={st.lsSearch}>Search</h1>
                        <div className={st.lsItem}>
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className={st.lsItem}>
                            <label>Check-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{format(date[0].startDate, 'dd/MM/yyyy')} to {format(date[0].endDate, 'dd/MM/yyyy')}</span>
                            {openDate && <DateRange
                                onChange={item=>setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                
                            />}
                        </div>
                        <div className={st.lsItem}>
                            <label>Options</label>
                            <div className={st.lsOptions}>
                                <div className={st.lsOptionItem}>
                                    <span className={st.lsOptionText}>
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className={st.lsOptionInput} />
                                </div>
                                <div className={st.lsOptionItem}>
                                    <span className={st.lsOptionText}>
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className={st.lsOptionInput} />
                                </div>
                                <div className={st.lsOptionItem}>
                                    <span className={st.lsOptionText}>
                                        Adult
                                    </span>
                                    <input placeholder={options.adult} min={1} type="number" className={st.lsOptionInput} />
                                </div>
                                <div className={st.lsOptionItem}>
                                    <span className={st.lsOptionText}>
                                        Children
                                    </span>
                                    <input placeholder={options.children} min={0} type="number" className={st.lsOptionInput} />
                                </div>
                                <div className={st.lsOptionItem}>
                                    <span className={st.lsOptionText}>
                                        Room
                                    </span>
                                    <input placeholder={options.room} min={1} type="number" className={st.lsOptionInput} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className={st.listResult}>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}