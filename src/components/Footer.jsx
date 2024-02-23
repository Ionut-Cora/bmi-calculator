import React, { useEffect, useState } from 'react';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer>
        <p>Copyright &copy; made by Ionut Cora | {newDate}</p>
    </footer>
  )
}

export default Footer;