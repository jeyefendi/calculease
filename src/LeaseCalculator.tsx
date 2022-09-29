 import React from 'react'

export default function LeaseCalculator() {
  return (
    <div className='leasing-calculator-container'>
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
        <form>
            <div className="form-item">
                <label htmlFor="lease-amount">Стоимость автомобиля</label>
                <div className="form-input">
                    <input 
                      type="number"
                      name="lease-amount"
                      placeholder="0"
                      />
                </div>
            </div>

            <div className="form-item">
                <label>Первоначальный взнос</label>
                <div className="form-input">
                    <input 
                      type="number"
                      name="initial-payment"
                      placeholder="0"
                      />
                </div>
            </div>

            <div className="form-item">
                <label>Срок лизинга</label>
                <div className="form-input">
                    <input 
                      type="number"
                      name="lease-term"
                      placeholder="0"
                      />
                </div>
            </div>

        </form>
    </div>
  )
}
