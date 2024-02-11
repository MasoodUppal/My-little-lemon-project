import React, { useState } from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("")
    const [times, setTimes] = useState("")
    const [guests, setGuests] = useState(1)
    const [occation, setOccation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='bood-date' value={date} onChange={(e) => {
                                handleChange(e.target.value)
                            }} type='date' required />
                        </div>
                        {/* for time selection*/}
                        <div>
                            <label htmlFor='book-time'>Choose Time</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>
                        {/* for number of guests*/}
                        <div>
                            <label htmlFor='book-guests'>Number of guests</label>
                            <input id='book-guests' type='number' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                        </div>
                        {/*For occation field*/}
                        <div>
                            <label htmlFor='book-occation'>Occation</label>
                            <select id='book-occation' key={occation} value={occation} onChange={e => setOccation(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>others</option>
                            </select>
                        </div>
                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='OnClick' type='submit' value={"Make your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm