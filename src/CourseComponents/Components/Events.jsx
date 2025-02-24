import { useEffect, useState } from 'react';
import list from '../../../events.json';
import Event from './Event';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Events() {
    const [showMesaage, setShowMessage] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
    return (
        <div>
                  
        {showMesaage && <Alert variant="success">
          Hey welcome to esprit events
        </Alert>}
            {list.map((e,i) => <Event key={i} event={e} />)}
            

        </div>
    )
}