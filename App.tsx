import { Dispatch, SetStateAction, useState } from 'react';
import {Inicial} from './src/screens/Inicial'
import { Dois } from './src/screens/Dois';
import { Tres } from './src/screens/Tres';
import { Quatro } from './src/screens/Quatro';

export interface Ipagina{
setpageI: Dispatch<SetStateAction<number>>

}

export default function app(){
  const[page, setPage] = useState(1)
if (page == 1) {
  return <Inicial setpageI={setPage} />
}else if (page == 2) {
  return <Dois setpageI={setPage} />
}else if (page == 3) {
  return <Tres setpageI={setPage} />
}else if (page == 4) {
  return <Quatro setpageI={setPage} />
}
}