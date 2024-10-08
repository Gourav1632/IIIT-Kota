import React,{useRef,useEffect} from 'react'
import "./eventPopUp.css"
import CloseIcon from '@mui/icons-material/Close';
import {motion, transform} from 'framer-motion'

function EventPopUp({event,onClose}) {
    const popupRef = useRef(null);
    const popupVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1,scale:1 },    
      exit: { opacity: 0 , scale:0.9}    
  };
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [onClose]);
    if (!event) return null;

    return (
      <motion.div             
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={popupVariants}
      transition={{
        type: "spring", 
        stiffness: 300, 
        damping: 20    
    }}
>
        
      <div ref={popupRef} className="popup-container">
        <button onClick={onClose}  className='close-button'><CloseIcon sx={{ color: "white" }}/></button>
        <h4 className="title">{event.title}</h4>
        <div className="description-container">
            <div className="img"><img  src={event.imageurl} alt="" /></div>
            <div className="description">{event.description}</div>
        </div>
      </div>
      </motion.div>
    );
  };

export default EventPopUp
