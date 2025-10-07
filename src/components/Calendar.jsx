import '../style/Calendar.css'
import getCalendarGrid from '../utils/getCalendarGrid';

const Calendar = ({month, year}) => {

    const weekdays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    const calendar = getCalendarGrid(month, year);
 
    return (
    <>       
        <table>
            <thead>
                <tr>
                    {weekdays.map((weekday) => <th>{weekday}</th>)}
                </tr>
            </thead>
            <tbody>
                {calendar.map((week) =>
                    <tr>{week.map((day) => <td>{day.day}</td>)}</tr>)
                }
            </tbody>
        </table>   
    </>);
}

export default Calendar;