import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import st from './header.module.css'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import {format} from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ModalCounter from '../modalCounter/ModalCounter';
import { useNavigate } from 'react-router-dom';


export default function Header({type}){
    const [destination, setDestination] = useState('')
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const [openDate, setOpenDate] = useState(false)

    const navigate = useNavigate()

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const handleSearch = () =>{
        navigate('/hotels', {state:{destination,date,options}})
      }

    return (
        <div className={st.header}>
            <div className={type === 'list' ? `${st.headerContainer} ${st.listMode}`:`${st.headerContainer}`}>
                <div className={st.headerList}>
                    <div className={st.headerListItem}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className={st.headerListItem}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className={st.headerListItem}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className={st.headerListItem}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className={st.headerListItem}>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
               {type !== 'list' &&
                <>
               <h1 className={st.headerTitle}>A place to call home
                on your next adventure</h1>
                <p className={st.headerDescription}>Experience the joy of an entire place to yourself</p>
                <button className={st.headerBtn}>Register / Sign in</button>
                <div className={st.headerSearch}>
                    <div className={st.headerSearchItem}>
                        <FontAwesomeIcon icon={faBed} className={st.headerIcon}/>
                        <input 
                            type="text" 
                            placeholder='Where are you going' 
                            className={st.headerSearchInput} 
                            onChange={e=>setDestination(e.target.value)}  
                        />
                    </div>
                    <div className={st.headerSearchItem}>
                        <FontAwesomeIcon icon={faCalendarDays} className={st.headerIcon}/>
                        <span onClick={(e)=>setOpenDate(!openDate)} className={st.headerSearchText}>{format(date[0].startDate, 'dd/MM/yyyy')} to {format(date[0].endDate, 'dd/MM/yyyy')}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={st.headerDate}
                            minDate={new Date()}
                        />}
                    </div>
                    <div className={st.headerSearchItem}>
                        <FontAwesomeIcon icon={faPerson} className={st.headerIcon}/>
                        <span onClick={(e)=>setOpenOptions(!openOptions)} className={st.headerSearchText}>{options.adult} adults {options.children} children {options.room} room</span>
                        <div className={openOptions ? `${st.options}`: `${st.hideOptions}`}>
                           <ModalCounter options={options} keyName={'adult'} setOptions={setOptions}/>
                           <ModalCounter options={options} keyName={'children'} setOptions={setOptions}/>
                           <ModalCounter options={options} keyName={'room'} setOptions={setOptions}/>
                            
                        </div>
                    </div>
                    <div className={st.headerSearchItem}>
                       <button className={st.headerBtn } onClick={handleSearch}>Search</button>
                    </div>
                    
                </div></>}
            </div>
        </div>
    )
}