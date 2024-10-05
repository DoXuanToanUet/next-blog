import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return (
    <div className='mx-auto text-center py-5'> Copyright &copy; {currentYear} </div>
  )
}

export default Footer