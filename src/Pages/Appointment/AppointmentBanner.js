import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {

    

    // let footer = <p>Please select a day.</p>;
    // if (date) {
    //   footer = <p>Your selected date is {format(date, 'PP')}.</p>;
    // }

    return (
        <div
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
            className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
                <img src={chair} alt='Dentist Chair' className="max-w-md rounded-lg shadow-2xl" />
                <div className=''>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    //  footer={footer}
                    />
                    {/* <p>You have selected: {format(date, 'PP')}.</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;