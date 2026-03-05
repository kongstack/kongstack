import React from 'react'
import TypoContext from './TypoContext'

const useTypo = () => {
    return React.useContext(TypoContext);
}

export default useTypo;