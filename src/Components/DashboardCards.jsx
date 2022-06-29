import React from 'react'

function DashboardCards() {
    let cardData = [
        {
            heading: 'EARNINGS (MONTHLY)',
            price: '$40,000',
            icon: 'calendar',
            color: 'primary',
        },
        {
            heading: 'EARNINGS (ANNUAL)',
            price: '$215,000',
            icon: 'dollar-sign',
            color: 'success',
        },
        {
            heading: 'TASKS',
            price: '50%',
            icon: 'clipboard-list',
            color: 'info',
        },
        {
            heading: 'PENDING REQUESTS',
            price: '12',
            icon: 'comments',
            color: 'warning',
        },
    ]
    return (
        <>
            {
                cardData.map((data) => {
                    return (
                        <div className='col-xl-3 col-md-6 mb-4'>
                            <div className={`card border-left-${data.color} shadow h-100 py-2`}>
                                <div className='card-body'>
                                    <div className='row no-gutters align-items-center'>
                                        <div className='col mr-2'>
                                            <div className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>
                                                {data.heading}
                                            </div>
                                            <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                {data.price}
                                            </div>
                                        </div>
                                        <div className='col-auto'>
                                            <i className={`fas fa-${data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DashboardCards