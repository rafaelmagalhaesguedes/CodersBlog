import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Button, Section } from './Style';

function ButtonBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Section>
      {isVisible && (
        <Button onClick={ scrollToTop }>
          <FaArrowUp size={ 20 } />
        </Button>
      )}
    </Section>
  );
}

export default ButtonBackToTop;
