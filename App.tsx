import { Dispatch, SetStateAction, useState } from 'react'
import {Inicial} from './src/screens/Inicial'
export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)

  return (
    <Inicial setPage={setPage} />
  );
}