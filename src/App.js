import './App.css';
import {useEffect, useState} from "react";
import styled from 'styled-components'
import {AnimatePresence, motion} from "framer-motion";
const initialBrands = ["jcb", "visa", "mastercard", "discover", "amex"];

const assetsPath = 'img/'
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  height: 26px;


`;
function App() {
  const [search, setSearch] = useState('')
  const [availableCardBrands ,setAvailableCardBrands] = useState(initialBrands)
  useEffect(() => {
    if(!search){
      setAvailableCardBrands(initialBrands)
      return
    }
    const userCardBrand = initialBrands.filter(
      (brand) => brand.includes(search)
    );

    setAvailableCardBrands(userCardBrand);
  }, [search]);

  return (
    <div className="App">
      <input className="aba" onChange={(e) => setSearch(e.target.value)}/>
      <CardWrapper as={motion.div} >
        <AnimatePresence>
          {availableCardBrands.map(brand => (
            <motion.img
              key={brand}
              layout
              src={`${assetsPath}icon-payment-${brand}.svg`}
              alt={`${brand} card icon`}
              animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{ease: "easeOut"}}
            />
          ))}
        </AnimatePresence>
      </CardWrapper>
    </div>
  );
}

export default App;
