import React from 'react'

export const SearchBox = () => {
    return (
        <div className='searchBox-container'>
            <form className='searchBox-form'>
                <label htmlFor='from'>
                    Направление
                    <input type='text' id='from' className='destinationInput-From' placeholder='Откуда'/>
                    <input type='text' className='destinationInput-To' placeholder='Куда'/>
                </label>
                <label htmlFor='departureDate'>
                    Дата
                    <input type='date' id='departureDate' className='destinationInput-date' placeholder='ДД/ММ/ГГ'/>
                    <input type='date' className='destinationInput-date' placeholder='ДД/ММ/ГГ'/>
                </label>
            </form>
        </div>
    )
}
